import { Person } from "./Person";

export class Subject extends Person {
  constructor(props: any) {
    super(props);
  }

  address: string;
  description: string;
}
