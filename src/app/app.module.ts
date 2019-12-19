import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerComponent } from './component/ChatBot/customer/customer.component';
import { ExampleComponent } from './component/example/example.component';
import { SampleComponent } from './component/sample/sample.component';
import { SharedService } from './services/shared.service';
import { SupportComponent } from './component/ChatBot/support/support.component';

import { ChatServiceService } from './service/chat-service.service';
import { HomeComponentComponent } from './component/RoutingTask1/home-component/home-component.component';
import { AboutComponentComponent } from './component/RoutingTask1/about-component/about-component.component';
import { ContactUsComponent } from './component/RoutingTask1/contact-us/contact-us.component';
import { NotFoundComponent } from './component/RoutingTask1/not-found/not-found.component';
import { UsersComponentComponent } from './component/RoutingTask1/users-component/users-component.component';
import { UserComponentComponent } from './component/RoutingTask1/user-component/user-component.component';

@NgModule({
  declarations: [
    AppComponent,

    CustomerComponent,

    ExampleComponent,

    SampleComponent,

    SupportComponent,

    HomeComponentComponent,

    AboutComponentComponent,

    ContactUsComponent,

    NotFoundComponent,

    UsersComponentComponent,

    UserComponentComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SharedService,ChatServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
