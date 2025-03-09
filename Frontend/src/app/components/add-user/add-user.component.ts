import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UsersService],
  imports: [ReactiveFormsModule] // Asegúrate de incluirlo aquí
})
export class AddUserComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', Validators.required)
  });

  data: any

  constructor(private userService: UsersService, private router: Router) {}



  addUser(){
    this.data = this.form.value
    this.userService.addUser(this.data).subscribe(data=>{
      this.router.navigate(['/']) //redireccionar al home
    })
  }

}
