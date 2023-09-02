import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  ngOnInit(): void {}
  drop1: boolean = false;
  drop2: boolean = false;
  drop3: boolean = false;
  drop4: boolean = false;
  drop5: boolean = false;
  drop6: boolean = false;
  drop7: boolean = false;
  showMenu: boolean = false;
  checkmenu(){
    if(this.drop1 || this.drop2 || this.drop3 || this.drop4 || this.drop5 || this.drop6 || this.drop7){
      this.showMenu = true;
    }
  }
  constructor(){}
}
