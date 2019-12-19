import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import {Subject} from 'rxjs';
import { send } from 'q';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  constructor(private sharedservice:SharedService) { }

  name:string='';

  ngOnInit() {
    
    this.sharedservice.receive().subscribe((data)=>{
      this.name= data;
     console.log("name is " + this.name);
    })

  }

  
 

}
