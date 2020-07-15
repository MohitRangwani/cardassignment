import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Details } from '../details.model';




@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})
export class AddDetailComponent implements OnInit {
detailsForm = new FormGroup({
name : new FormControl('',[Validators.required,Validators.minLength(3),
  Validators.maxLength(30),Validators.pattern('[a-zA-Z ]*')]),
cardNo : new FormControl('',[Validators.required,Validators.minLength(16),
  Validators.maxLength(16),Validators.pattern('[0-9]*')]),
expiryMonth : new FormControl('',[Validators.required]),
expiryYear : new FormControl('',[Validators.required]),
securityCode : new FormControl('',[Validators.required,Validators.minLength(4),
  Validators.maxLength(4),Validators.pattern('[0-9]*')])
});
details : Details;
@Output() detailsCreated = new EventEmitter();
  constructor() { 
  
  }

  ngOnInit(): void {
  }
   
  onFormSubmit(){
    this.details=this.detailsForm.value;
    
    this.detailsCreated.emit(this.details);
  }
  onFormReset(){
    this.details=this.detailsForm.value;
    
    this.detailsCreated.emit(this.details);
  }
}
