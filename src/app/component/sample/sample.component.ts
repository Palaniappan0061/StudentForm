import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  name:string='';

  ngOnInit() {
  }

  send(){
    this.sharedService.send(this.name);

    console.log(this.name);
  }
}
