export class CardFeatureData {
  constructor(
    public backgroundText: string,
    public imageUrl: string,
    public cardTitle: string,
    public content: string,
    public buttonTitle: string,
    public routerLink: any[] | string | null | undefined,
    public fragment: string
  ) {
  }
}
