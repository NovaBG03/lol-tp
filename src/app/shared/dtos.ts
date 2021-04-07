export class MessageDto {
  constructor(public name: string, public email: string, public message: string) {
  }
}

export class SummonerDto {
  public profileIconUrl: string;

  constructor(public id: string,
              public accountId: string,
              public puuid: string,
              public name: string,
              public profileIconId: number,
              public revisionDate: string,
              public summonerLevel: number) {
    this.profileIconUrl = `http://ddragon.leagueoflegends.com/cdn/11.7.1/img/profileicon/${this.profileIconId}.png`;
  }
}
