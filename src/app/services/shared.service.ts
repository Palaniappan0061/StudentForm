import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  

  subject:Subject<string>= new Subject<string>();

  send(str:string){

    this.subject.next(str);
  }

  receive(){

    return this.subject.asObservable();
  }

}
