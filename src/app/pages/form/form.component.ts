import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private form: FormGroup;
  constructor() { }

  private myName: string;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required, validateName])
    });
  }

}

function validateName(c: FormControl) {
  let EMAIL_REGEXP = /@/ig;

  return EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}