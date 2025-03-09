import { Component } from '@angular/core';
import { UsersService } from '../../users.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UsersService],
  imports: [ReactiveFormsModule] // Asegúrate de incluirlo aquí
})
export class ViewUsersComponent {
  users: any[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser (id: number) {
    this.userService.deleteUserById(id).subscribe(() => {
      this.loadUsers(); // Refresh the user list
    });
  }
}