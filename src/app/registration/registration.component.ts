import { Component } from '@angular/core';
import { User } from '../user.interface';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  title = 'Please';
  angForm!: FormGroup;
  constructor(private fb: FormBuilder) {
   this.createForm();
 }
  createForm() {
   this.angForm = this.fb.group({
      name: ['', Validators.required,],
      lname: ['',Validators.required],
      address: ['', Validators.required ],
      officeaddress: ['', Validators.required ],
      mobile: ['', Validators.minLength(10)]
     
   });
 }


}
