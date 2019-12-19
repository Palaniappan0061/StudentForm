import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from 'src/app/service/chat-service.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  constructor(private chatService:ChatServiceService) { }

  info:string='';
  id:number = Math.floor(Math.random() * 1000000000);
  message:any=[];

  ngOnInit() {

    this.chatService.receive().subscribe((info)=>{

      this.message.push(this.info);
      
    });
  }

  send(){
 
 this.chatService.send({
  id:this.id,
  info:this.info,
  dt: new Date()
 });

 this.info='';
 
 
    
   
  }
}
