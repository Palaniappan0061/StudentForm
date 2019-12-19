import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor() { }

  subject:Subject<any>= new Subject<any>();

  send(message:any){

    this.subject.next(message);
  }

  receive(){
    return this.subject.asObservable();
  }
}
