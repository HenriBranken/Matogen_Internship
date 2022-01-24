import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-date',
  templateUrl: './show-date.component.html',
  styleUrls: ['./show-date.component.scss'],
})
export class ShowDateComponent implements OnInit {
  message: string = new Date().toString(); // Create the member variable `message`.

  ngOnInit(): void {}
}
