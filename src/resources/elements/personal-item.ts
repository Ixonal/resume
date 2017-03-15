import { customElement, bindable } from "aurelia-framework";

import { PersonalItem } from "../../models/PersonalItem";

@customElement("personal-item")
export class PersonalItemVm {
  @bindable personalItem: PersonalItem;
}
