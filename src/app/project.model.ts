export class Project {
  public funds = 0;
  constructor(
    public name: string,
    public projectManagers: string[],
    public description: string,
    public goal: number,
    public intention: string) {}
}
