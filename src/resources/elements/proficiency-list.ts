import { bindable } from "aurelia-framework";

import { Proficiency } from "../../models/Proficiency";

export class ProficiencyList {
  @bindable proficiencies: Proficiency[];
  @bindable condensed: boolean = true;

  attached() {
    if(typeof(this.condensed) === "string") this.condensed = (<string>this.condensed).toLowerCase() === "true";
  }

  alignmentFor(index: number) {
    console.log(index);
    switch(index % 3) {
      case 0: //first column
        return "left";
      case 1: //second column
        return "center";
      case 2: //third column
        return "right";
    }
  }
}
