import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.components';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule, NgIf, NgTemplateOutlet, NgFor, NgSwitch, NgSwitchCase],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'angular practicing';
  imgUrl : string = "https://w7.pngwing.com/pngs/311/952/png-transparent-angular-logo-landscape-tech-companies-thumbnail.png";
  isDisable : boolean = false;
  isActive : boolean = false;

  userName : string = 'john doe';

  userRole:string = 'Admin'

  // exp(){
  //   alert(900)
  // }

  // keyMessage(event:object){
  //   console.log(event);
  // }

  // filteringAng(user: HTMLInputElement) {
  //   console.log(user.value);
  // }

  // getUser(username: HTMLInputElement){
  //   this.userName = username.value;
  //   console.log(this.userName )
  // }

//   isLog:boolean = false;
//   isGuest: boolean = true;
//   logCount: number = 0;
// stopped:boolean = false;

//   log(){
//     this.logCount ++;

//     if(this.logCount > 3){
//       this.stopped = true
//     }
  // }

  userInfo: Array<any> = [
    {id:1, name:'Muhammad s.a.w', title: 'prophet and messenger off Allah'},
    {id:2, name:'Isa a.w', title: 'prophet and messenger off Allah'},
    {id:3, name:'MUSA .a.w', title: 'prophet and messenger off Allah'},
    {id:4, name:'Irahim a.w', title: 'prophet and messenger off Allah'},
    {id:5, name:'Nuhu a .w', title: 'prophet and messenger off Allah'},

  ]


  addNewUser(){
    let user = {id:6, name:'Nuhu a .w', title: 'prophet and messenger off Allah'};

    this.userInfo.push(user);
  }


  onDelete(proInfo:any){
    let index = this.userInfo.indexOf(proInfo);

    this.userInfo.splice(index, 1);
  }
}
