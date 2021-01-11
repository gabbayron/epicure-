import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() img_src: string
  @Input() restaurant: string
  @Input() chef: string
  constructor() { }

  ngOnInit(): void {
  }

}
