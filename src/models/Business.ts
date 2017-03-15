import { DataWrapper } from "./DataWrapper";

export class Business extends DataWrapper {
  constructor(props: any) {
    super(props);
  }

  id: string;
  name: string;
  city: string;
  state: string;
}
