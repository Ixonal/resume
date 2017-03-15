import { bindable, computedFrom } from "aurelia-framework";

import { sortBy } from "../../utility/index";
import { WorkHistory, Business } from "../../models/index";

export class WorkHistoryList {
  @bindable workHistory: WorkHistory[];
  @bindable businesses: Business[];

  businessFor(work: WorkHistory) {
    return this.businesses.find(business => work.business === business.id);
  }

  @computedFrom("workHistory")
  get sortedWorkHistory() {
    return sortBy(this.workHistory, wh => wh.start);
  }
}
