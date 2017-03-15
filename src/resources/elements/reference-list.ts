import { bindable } from "aurelia-framework";

import { Business, Reference } from "../../models/index";

export class ReferenceList {
  @bindable businesses: Business[];
  @bindable references: Reference[];

  businessFor(reference: Reference) {
    return this.businesses.find(business => reference.business === business.id);
  }
}
