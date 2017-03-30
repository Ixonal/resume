import * as moment from "moment";

import { DataWrapper } from "./DataWrapper";

export class WorkHistory extends DataWrapper {
  constructor(props: any) {
    super(props);

    if(this.start) this.start = moment(this.start);
    if(this.end) this.end = moment(this.end);
  }

  business: string;
  description: string;
  start: string | moment.Moment;
  end: string | moment.Moment;
  title: string;
  type: string;
  isActive: boolean;
}
