import { bindable } from "aurelia-framework";

import { Reference as Ref, Business } from "../../models/index";

export class Reference {
  @bindable reference: Ref;

  @bindable business: Business;


}