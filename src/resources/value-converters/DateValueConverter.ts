import * as moment from "moment";

export class DateValueConverter {
  toView(value: moment.Moment | Date, format: string) {
    if(!value) return "Present";

    if(value instanceof Date) value = moment(value);

    return value.format(format);
  }
}
