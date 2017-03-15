import { app, database } from "firebase";
import { Observable, BehaviorSubject } from "rxjs";

import { Business, Education, PersonalItem, Proficiency, Reference, Subject, WorkHistory } from "../models/index";

interface Type<T> {
  new(...props: any[]): T;
}

export interface IData {
  businesses: Business[];
  education: Education[];
  personalItems: PersonalItem[];
  proficiencies: Proficiency[];
  references: Reference[];
  subject: Subject;
  workHistory: WorkHistory[];
}

export class DataRepository {

  private _database: database.Database = database();

  private snapshot(path: string): Promise<any> {
    if(!path) throw new Error("path is required");
    if(path.charAt(0) !== "/") path = "/" + path;
    return <Promise<any>>this._database.ref(path).once("value").then(snapshot => snapshot.val());
  }

  private _streamCache = {};

  private stream<T>(path: string, type: Type<T>): Observable<any> {
    if(!path) throw new Error("path is required");
    if(path.charAt(0) !== "/") path = "/" + path;
    if(this._streamCache[path]) return this._streamCache[path];

    let subject = new BehaviorSubject<any>(null);
    this._streamCache[path] = subject;
    this._database.ref(path).on("value", snapshot => {
      let val = snapshot.val();
      if(Array.isArray(val)) {
        subject.next((<any[]>val).map(item => new type(item)));
      } else {
        subject.next(new type(val))
      }
      //subject.next(snapshot.val());
    });
    return subject.asObservable();
  }

  public async getBusinesses(): Promise<Business[]> {
    return this.snapshot("businesses").then((businesses: any[]) => businesses.map(business => new Business(business)));
  }

  public async getEducation(): Promise<Education[]> {
    return this.snapshot("education").then((education: any[]) => education.map(edu => new Education(edu)));
  }

  public async getPersonalItems(): Promise<PersonalItem[]> {
    return this.snapshot("personalItems").then((personalItems: any[]) => personalItems.map(personalItem => new PersonalItem(personalItem)));
  }

  public async getProficiencies(): Promise<Proficiency[]> {
    return this.snapshot("proficiencies").then((proficiencies: any[]) => proficiencies.map(proficiency => new Proficiency(proficiency)));
  }

  public async getReferences(): Promise<Reference[]> {
    return this.snapshot("references").then((references: any[]) => references.map(reference => new Reference(reference)));
  }

  public async getSubject(): Promise<Subject> {
    return this.snapshot("subject").then(snapshot => new Subject(snapshot));
  }

  public async getWorkHistory(): Promise<WorkHistory[]> {
    return this.snapshot("workHistory").then((workHistory: any[]) => workHistory.map(h => new WorkHistory(h)));
  }

  public getBusinessStream(): Observable<Business[]> {
    return this.stream("businesses", Business);
  }

  public getEducationStream(): Observable<Education[]> {
    return this.stream("education", Education);
  }

  public getPersonalItemsStream(): Observable<PersonalItem[]> {
    return this.stream("personalItems", PersonalItem);
  }

  public getProficienciesStream(): Observable<Proficiency[]> {
    return this.stream("proficiencies", Proficiency);
  }

  public getReferencesStream(): Observable<Reference[]> {
    return this.stream("references", Reference);
  }

  public getSubjectStream(): Observable<Subject> {
    return this.stream("subject", Subject);
  }

  public getWorkHistoryStream(): Observable<WorkHistory> {
    return this.stream("workHistory", WorkHistory);
  }

  public getDataStream(): Observable<IData> {
    //using combineLatest to merge all the separate streams into one
    return Observable.combineLatest(
      this.getBusinessStream(),
      this.getEducationStream(),
      this.getPersonalItemsStream(),
      this.getProficienciesStream(),
      this.getReferencesStream(),
      this.getSubjectStream(),
      this.getWorkHistoryStream(),
      (businesses, education, personalItems, proficiencies, references, subject, workHistory) => {
        return {
          businesses,
          education,
          personalItems,
          proficiencies,
          references,
          subject,
          workHistory
        } as IData;
      }
    //we only want to be notified if everything is there
    ).filter(data => 
      !!data.businesses && 
      !!data.education && 
      !!data.personalItems && 
      !!data.proficiencies && 
      !!data.references && 
      !!data.subject && 
      !!data.workHistory
    );
  }
}
