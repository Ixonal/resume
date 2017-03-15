import { inject, bindable } from "aurelia-framework";
import { Router } from "aurelia-router";

import { DataRepository } from "../../services/DataRepository";
import { Subject } from "../../models/Subject";

@inject(Router)
export class CommonHeader {
  @bindable subject: Subject;

  constructor(
    private _router: Router
  ) {
    
  }

  redirectToResume() {
    this._router.navigate("/resume");
  }

  redirectToCv() {
    this._router.navigate("/cv");
  }
}
