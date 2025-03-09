import { Component } from '@angular/core';
import { UsersService } from '../../users.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  user: any 
  data: any

  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    let id = this.route.snapshot.params['id']
    this.userService.getUserById(id).subscribe(data=> {
      this.user = data
      console.log(data)
    })
  }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  submit(){
    this.data = this.form.value
    this.user.name = this.data.name
    this.user.email = this.data.email
    console.log(this.data)

    this.userService.updateUser(this.user?.id, this.user).subscribe(data=> {
      console.log(data)
    })

    this.router.navigate(['/'])
  }

}
