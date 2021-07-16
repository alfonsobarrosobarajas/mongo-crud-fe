import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User;
  userList: User[];
  constructor(private userService: UserService) {
    this.user = new User();
    this.userList = [];
  }

  ngOnInit(): void {
    this.get();
  }

  private get() {
    this.userService.get().subscribe((data) => (this.userList = data));
  }

  create() {
    const userData = {
      name: this.user.name,
      surname: this.user.surname,
      points: this.user.points,
    };
    this.userService.create(userData).subscribe();
    this.get();
  }

  delete(user: User) {
    this.userService.deleteById(user).subscribe();
    this.get();
  }
}
