import {Component, OnInit} from '@angular/core';
import {RiotService} from '../shared/riot.service';
import {FormControl, FormGroup} from '@angular/forms';
import {SummonerDto} from '../shared/dtos';

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.css']
})
export class RegisterTeamComponent implements OnInit {

  teamForm: FormGroup;
  summoner: SummonerDto;

  constructor(private riotService: RiotService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.teamForm = new FormGroup({
      name: new FormControl('')
    });
  }

  SubmitForm(): void {
    const name = this.teamForm.value.name;
    this.riotService.findSummoner(name)
      .subscribe(summoner => this.summoner = summoner);
  }
}
