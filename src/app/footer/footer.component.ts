import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmailService} from '../shared/email.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  askForm: FormGroup;
  maxMessageLength = 256;
  isLoading = false;

  constructor(private emailService: EmailService) {
  }

  get year(): number {
    return new Date().getFullYear();
  }

  get name(): FormControl {
    return this.askForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.askForm.get('email') as FormControl;
  }

  get message(): FormControl {
    return this.askForm.get('message') as FormControl;
  }

  get leftMessageCharacters(): number {
    return this.maxMessageLength - this.message.value.length;
  }

  ngOnInit(): void {
    this.initAskForm();
  }

  onAskQuestion(): void {
    this.isLoading = true;
    const formValue = this.askForm.value;

    this.emailService.askQuestion(formValue.name, formValue.email, formValue.message)
      .pipe(tap(msg => {
        this.isLoading = false;
        this.resetForm();
      }))
      .subscribe(msg => console.log(msg));
  }

  private initAskForm(): void {
    this.askForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])'),
        Validators.maxLength(30)]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(this.maxMessageLength)])
    });
  }

  private resetForm(): void {
    this.askForm.reset({name: '', email: '', message: ''});
  }
}
