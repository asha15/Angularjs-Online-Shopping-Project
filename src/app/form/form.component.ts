import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { OrderService } from '../order.service'; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

   submitted = false;

  constructor(private _orderService: OrderService) { }

  public userModel: User = new User('','','','');

  ngOnInit(){
    this.userModel = new User('','','','');
    console.log('user mode', this.userModel.userName)
  }

  onSubmit(){
    this.submitted = true;
   this._orderService.order(this.userModel)
   .subscribe(
      data=> console.log('Success!',data),
      error=> console.error('Error!',error)
    )
  }

}
