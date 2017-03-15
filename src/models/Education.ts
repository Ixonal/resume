import * as moment from "moment";

import { DataWrapper } from "./DataWrapper";

export class Education extends DataWrapper {
  constructor(props: any) {
    super(props);

    if(typeof this.graduationDate === "string") this.graduationDate = moment(this.graduationDate);
  }

  institutionName: string;
  city: string;
  state: string;
  degreeType: string;
  degreeFocus: string;
  graduationDate: moment.Moment;
}
