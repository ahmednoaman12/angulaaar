export class Profile {
  constructor(
    public id: number,
    public name: string,
    public picture: string,
    public photo: string,
    public hobbies: string[],
    public currentdate: Date
  ) {}
}
