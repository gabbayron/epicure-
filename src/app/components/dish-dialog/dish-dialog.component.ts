import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface dialogData {
  img_src: string,
  dish_name: string,
  description: string,
  price: number
}

@Component({
  selector: 'app-dish-dialog',
  templateUrl: './dish-dialog.component.html',
  styleUrls: ['./dish-dialog.component.css']
})



export class DishDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: dialogData) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
