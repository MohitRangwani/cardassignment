import { Component, OnInit } from '@angular/core';
import { Details } from '../details.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor() { }
detailsEmit : Details;
  ngOnInit(): void {
  }
  onDetailsAdd(details){
    this.detailsEmit=details;

    
  }
}