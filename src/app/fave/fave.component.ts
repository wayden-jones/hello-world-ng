import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fave',
  templateUrl: './fave.component.html',
  styleUrls: ['./fave.component.css']
})
export class FaveComponent implements OnInit {

  isFavourite: boolean = false;

  onClick($event){
    console.log(this.isFavourite, "is clicked")
    this.isFavourite = !this.isFavourite;
  };

  constructor() { }

  ngOnInit() {
  }

}
