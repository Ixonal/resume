import { DataWrapper } from "./DataWrapper";

export class Proficiency extends DataWrapper {
  constructor(props: any) {
    super(props);
  }

  name: string;
  level: string;
  description: string;
}
