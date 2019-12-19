import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  id:number=Math.floor(Math.random()* 1000000000);
  
 user:any[]=[{username:'Palani',userid:this.id},{username:'Praveen',userid:this.id}];
  // for (let index in user) {
  //   user[index].userid=this.id;
  // }

}
