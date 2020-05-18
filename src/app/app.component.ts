import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)])
  });

  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }

}
