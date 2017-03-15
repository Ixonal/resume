import { bindable } from "aurelia-framework";

import { Education } from "../../models/index";

export class EducationList {
  @bindable education: Education[];
}
