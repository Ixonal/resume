import { sortBy } from "../../utility/index";

export class SortByValueConverter {
  toView(value: any[], sortProp: string, direction: string) {
    return sortBy(value, sortProp, direction === "asc");
  }
}
