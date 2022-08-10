import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  dataUser: FormGroup;
  dataToSend: any;

  constructor(private _formBuilder: FormBuilder) {
    this.dataUser = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    // console.log(this.dataUser.value);
    for (let c in this.dataUser.controls) {
      this.dataUser.controls[c].markAsTouched();
    }
    if (this.dataUser.valid) {
      this.dataToSend = Object.assign(this.dataUser.value);
      console.log('dataToSend', this.dataToSend);
    }
  }
}
