import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { Item } from '../item';

@Component({
  selector: 'app-pooh',
  templateUrl: './pooh.component.html',
  styleUrls: ['./pooh.component.css']
})
export class PoohComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * 
   */
  moveNorth() {
    console.log("click the North button")
  }

  /**
   * 
   */
  moveSouth() {
    console.log("click the South button")

  }

  /**
   * 
   */
  moveEast() {
    console.log("click the East button")

  }

  /**
   * 
   */
  moveWest() {
    console.log("click the West button")

  }
  dropItem(item:Item) {

  }

}
