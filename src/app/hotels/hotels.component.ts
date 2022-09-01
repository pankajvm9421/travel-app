import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})


export class HotelsComponent implements OnInit {

  range!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.range = new FormGroup({
      checkInDate: new FormControl<Date | null>(null),
      checkOutDate: new FormControl<Date | null>(null),
    });
    console.log(this.range.controls['checkInDate'].value)


  }





}
