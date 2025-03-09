import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { UsersService } from '../../users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  constructor(private  userService: UsersService, private router: Router){}

  data: any

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  })

  addUser(){
    this.data = this.form.value
    this.userService.addUser(this.data).subscribe(data=>{
      this.router.navigate(['/']) //redireccionar al home
    })
  }

}
