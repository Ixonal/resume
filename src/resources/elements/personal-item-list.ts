import { bindable } from "aurelia-framework";

import { PersonalItem } from "../../models/PersonalItem";

export class PersonalItemList {
  @bindable personalItems: PersonalItem[];
}
