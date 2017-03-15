import { Person } from "./Person";

export class Reference extends Person {
  constructor(props: any) {
    super(props);
  }

  position: string;
  business: string;
}
