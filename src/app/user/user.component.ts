import { UserService } from './../user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = [];
  username = '';
  gender = '';
  color = '';

  clickMessage = '';
  colors: string[] = ['red', 'blue', 'green', 'orange'];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onClick() {
    this.users.push({username : this.username, gender : this.gender, color : this.color});
    this.username = '';
    console.log(this.users);
  }

  deleteUser(user) {
    this.users = this.users.filter(u => u.username !== user.username);
  }

  getRandomUser() {
    this.userService.getUsers().subscribe((resp: any) => {
      this.username = resp.results[0].name.first;
      this.gender = resp.results[0].gender;
      this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    });
  }
}
