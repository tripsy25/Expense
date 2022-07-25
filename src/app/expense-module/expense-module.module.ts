import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';

@NgModule({
  declarations: [
    ExpenseDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExpenseDetailsComponent

  ]
})
export class ExpenseModuleModule { }
