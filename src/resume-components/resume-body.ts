import { inject, bindable } from "aurelia-framework";

import { Business, Education, PersonalItem, Proficiency, Reference, WorkHistory } from "../models/index";

export class ResumeBody {
  @bindable businesses: Business[];
  @bindable education: Education[];
  @bindable personalItems: PersonalItem[];
  @bindable proficiencies: Proficiency[];
  @bindable references: Reference[];
  @bindable workHistory: WorkHistory[];

}
