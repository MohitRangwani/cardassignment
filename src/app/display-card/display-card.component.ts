import { Component, OnInit, Input } from '@angular/core';
import { Details } from '../details.model';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent implements OnInit {
@Input() detailsDisplay :Details;
  constructor() { }

  ngOnInit(): void {
  }

}
