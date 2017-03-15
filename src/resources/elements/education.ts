import { bindable, customElement } from "aurelia-framework";

import { Education } from "../../models/index";

@customElement("education")
export class EducationViewModel {
  @bindable education: Education;
}
