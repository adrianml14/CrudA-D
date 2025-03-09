import { Component } from '@angular/core';
import { UsersService } from '../../users.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent {
  users: any | undefined

  constructor(private  userService: UsersService){}

  ngOnInit(): void{
    this.userService.getUsers().subscribe(data=>{
      this.users = data
      console.log(data)
    })
  }

  deleteUser(id: number){
    this.userService.deleteUserById(id).subscribe(data =>{
      console.log(data)
      this.ngOnInit() //refresh
    })
  }
}
