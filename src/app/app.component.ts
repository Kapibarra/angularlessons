import {Component, OnInit} from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
form: FormGroup

ngOnInit() {
  this.form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.minLength(6), Validators.required]),
    adress: new FormGroup({
      country: new FormControl('ru'),
      city: new FormControl('', Validators.required)
    })
  })
  
}
submit() {
  console.log('Foprm sub', this.form);
  const formData = {...this.form.value}
  console.log('form data', formData);
  
}
}

