import { bindable } from "aurelia-framework";

import { WorkHistory as History, Business } from "../../models/index";

export class WorkHistory {
  @bindable workHistory: History;
  @bindable business: Business;

}
