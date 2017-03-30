import { bindable, customElement } from "aurelia-framework";

import { Proficiency } from "../../models/Proficiency";

@customElement("proficiency")
export class ProficiencyVm {
  @bindable proficiency: Proficiency;
  @bindable align: string = "left";
  @bindable condensed: boolean = true;

  attached() {
    if(typeof(this.condensed) === "string") this.condensed = (<string>this.condensed).toLowerCase() === "true";
  }
}
