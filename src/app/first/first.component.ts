import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }
   name= 'asma';
   moyenne= 10;
   alternative= 'logo angular';
   imgurl= 'https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36' ;
   text= '';
   user={
    username:'asma',
    moyenne:30,
    img:'https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36',

   }
   onchange(){
    this.name= "ayari";
    this.moyenne=20;
  
   } ;
   display=true;
  ngOnInit(): void {
    

  }

}
