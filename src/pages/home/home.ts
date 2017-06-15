import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  col: Object[] = [];
  
  constructor(public navCtrl: NavController) {
    this.col.push({
      'imgURL':"./img/panadol.png",
      'title':"Panadol",
      'button1':"S, T, F & W",
      'button2':"S, T, F & W",
      'button3':"S, T, F & W"
    });
    this.col.push({
      'imgURL':"./img/glucovance.jpg",
      'title':"Glucovance",
      'button1':"S, T, F & W",
      'button2':"S, T, F & W",
      'button3':"S, T, F & W"
    });
    this.col.push({
      'imgURL':"./img/fenistilgel.jpg",
      'title':"Fenistil Gel",
      'button1':"S, T, F & W",
      'button2':"S, T, F & W",
      'button3':"S, T, F & W"
    });
    this.col.push({
      'imgURL':"./img/maaloxplus.png",
      'title':"Maalox Plus",
      'button1':"S, T, F & W",
      'button2':"S, T, F & W",
      'button3':"S, T, F & W"
    });
  }
  
  ngAfterViewInit(){
  }

}

class Col {
  imgUrl: String
  
  constructor (){
    this.imgUrl = "";
  }
}
  