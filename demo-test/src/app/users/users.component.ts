import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private testService: TestServiceService,
  ) { }

  usersData: any;
  id: number;

  ngOnInit() {
    
this.id = 10;

  }

  getData() {

    this.testService.getUsersData().subscribe(result => {
      console.log(result);
      this.usersData = result;
    })

  }

}
