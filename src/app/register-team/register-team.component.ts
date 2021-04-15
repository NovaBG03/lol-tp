import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {RiotService} from '../shared/riot.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SummonerDto} from '../shared/dtos';
import {LolTpValidatorService} from './lol-tp-validator.service';

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.css']
})
export class RegisterTeamComponent implements OnInit, OnDestroy {

  teamForm: FormGroup;
  maxMessageLength = 256;
  isLoading = false;
  isRegistered = false;
  error: any = null;

  constructor(private riotService: RiotService, private lolTpValidators: LolTpValidatorService, private renderer: Renderer2) {
  }

  get teamTag(): FormControl {
    return this.teamForm.get('teamTag') as FormControl;
  }

  get teamName(): FormControl {
    return this.teamForm.get('teamName') as FormControl;
  }

  get contactEmail(): FormControl {
    return this.teamForm.get('contactEmail') as FormControl;
  }

  get contactPhone(): FormControl {
    return this.teamForm.get('contactPhone') as FormControl;
  }

  get message(): FormControl {
    return this.teamForm.get('message') as FormControl;
  }

  get leftMessageCharacters(): number {
    return this.maxMessageLength - this.message.value.length;
  }

  ngOnInit(): void {
    this.initForm();
  }

  submitForm(): void {
    this.isLoading = true;

    const value = this.teamForm.value;
    const teamInfo = {
      tag: value.teamTag,
      name: value.teamName,
      email: value.contactEmail,
      phone: value.contactPhone,
      players: [
        {summonerName: value.summonerName1, playerName: value.playerName1},
        {summonerName: value.summonerName2, playerName: value.playerName2},
        {summonerName: value.summonerName3, playerName: value.playerName3},
        {summonerName: value.summonerName4, playerName: value.playerName4},
        {summonerName: value.summonerName5, playerName: value.playerName5}
      ],
      message: value.message
    };

    this.riotService.registerTeam(teamInfo)
      .subscribe(
        message => {
          this.isLoading = false;
          this.isRegistered = true;
          this.renderer.addClass(document.body, 'no-scroll');
          console.log(message);
        },
        error => {
          this.isLoading = false;
          this.renderer.addClass(document.body, 'no-scroll');
          this.error = error;
          console.log(error);
        }
      );
  }

  getPlayerName(index: number): FormControl {
    return this.teamForm.get(`playerName${index}`) as FormControl;
  }

  getSummonerName(index: number): FormControl {
    return this.teamForm.get(`summonerName${index}`) as FormControl;
  }

  getSummonerPicture(index: number): string {
    const pictureId = this.lolTpValidators.profileImages[this.getSummonerName(index).value];
    return `http://ddragon.leagueoflegends.com/cdn/11.8.1/img/profileicon/${pictureId}.png`;
  }

  resetForm(): void {
    this.renderer.removeClass(document.body, 'no-scroll');
    this.error = null;
    this.isLoading = false;
    this.isRegistered = false;
    this.teamForm.reset({
      teamTag: '',
      teamName: '',
      contactEmail: '',
      contactPhone: '',
      playerName1: '',
      playerName2: '',
      playerName3: '',
      playerName4: '',
      playerName5: '',
      summonerName1: '',
      summonerName2: '',
      summonerName3: '',
      summonerName4: '',
      summonerName5: '',
      message: ''
    });
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  private initForm(): void {
    this.teamForm = new FormGroup({
      teamTag: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3)]),
      teamName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(32)]),
      contactEmail: new FormControl('', [
        Validators.required,
        Validators.pattern('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])'),
        Validators.maxLength(320)]),
      contactPhone: new FormControl('', [
        Validators.required,
        Validators.pattern('08[789]\\d{7}')]),
      playerName1: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)]),
      playerName2: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)]),
      playerName3: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)]),
      playerName4: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)]),
      playerName5: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)]),
      summonerName1: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(16)
        ],
        [this.lolTpValidators.summonerNameValidator()]),
      summonerName2: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(16)],
        [this.lolTpValidators.summonerNameValidator()]),
      summonerName3: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(16)],
        [this.lolTpValidators.summonerNameValidator()]),
      summonerName4: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(16)],
        [this.lolTpValidators.summonerNameValidator()]),
      summonerName5: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(16)],
        [this.lolTpValidators.summonerNameValidator()]),
      message: new FormControl('', [
        Validators.minLength(10),
        Validators.maxLength(this.maxMessageLength)])
    });
  }
}
