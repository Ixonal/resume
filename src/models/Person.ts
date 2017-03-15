import { computedFrom } from "aurelia-framework";

import { DataWrapper } from "./DataWrapper";

export class Person extends DataWrapper {
  constructor(props: any) {
    super(props);
  }

  firstName: string;
  lastName: string;
  email: string;
  phone: number | string;
  city: string;
  state: string;

  @computedFrom("firstName", "lastName")
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

}
