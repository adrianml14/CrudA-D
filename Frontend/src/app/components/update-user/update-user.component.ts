import { Component } from '@angular/core';
import { UsersService } from '../../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UsersService],
  imports: [ReactiveFormsModule] // Asegúrate de incluirlo aquí
})
export class UpdateUserComponent {
  user: any;
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.userService.getUserById(id).subscribe(data => {
      this.user = data;
      this.form.patchValue(data); // Populate the form with user data
    });
  }

  submit() {
    if (this.form.valid) {
      const updatedUser  = { ...this.user, ...this.form.value };
      this.userService.updateUser (this.user.id, updatedUser ).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}