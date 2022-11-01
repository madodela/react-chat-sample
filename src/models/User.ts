export class User {
  public id: number;
  public name: string;

  constructor(obj?: Partial<User>) {
    this.id = obj?.id || this.id;
    this.name = obj?.name || this.name;
  }
}
