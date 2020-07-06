export class Audit {
  updatedOn: Date;
  updatedBy: string;

  constructor(){
    this.updatedOn = new Date();
    this.updatedBy = "";
  }
}
