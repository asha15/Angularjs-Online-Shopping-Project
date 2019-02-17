import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Product1Component} from './product1/product1.component';
import {Product2Component} from './product2/product2.component';
import {Product3Component} from './product3/product3.component';
import {MessageComponent} from './message/message.component';
import { FormComponent} from './form/form.component';

const routes: Routes = [
 {path: 'product1', component: Product1Component},
 {path: 'product2', component: Product2Component},
 {path: 'product3', component: Product3Component},
 {path: 'form', component:  FormComponent},
 {path: 'message', component:  MessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ Product1Component, Product2Component,Product3Component, FormComponent,MessageComponent]