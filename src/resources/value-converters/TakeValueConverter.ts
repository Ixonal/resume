
export class TakeValueConverter {
  toView(value: any[], numToTake: number) {
    return value.slice(0, numToTake);
  }
}
