import { inject } from "aurelia-framework";

import { DataRepository } from "../services/DataRepository";
import { Business, Education, PersonalItem, Proficiency, Reference, Subject, WorkHistory } from "../models/index";

@inject(DataRepository)
export class Resume {
  businesses: Business[];
  education: Education[];
  personalItems: PersonalItem[];
  proficiencies: Proficiency[];
  subject: Subject;
  workHistory: WorkHistory[];
  references: Reference[];

  constructor(
    private _dataRepository: DataRepository
  ) {

  }

  activate() {
    let data = this._dataRepository.getDataStream();

    data.subscribe(m => {
      this.businesses = m.businesses;
      this.education = m.education;
      this.personalItems = m.personalItems;
      this.proficiencies = m.proficiencies;
      this.references = m.references;
      this.subject = m.subject;
      this.workHistory = m.workHistory.filter(m => m.type === "work");
    });

    //returning this stream will cause this component to wait until 
    //there is at least some data in the stream before showing
    return data;
  }
}
