import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-module/login-component/login-component.component';
import { ExpenseDetailsComponent } from './expense-module/expense-details/expense-details.component';
import { PageNotFound } from './pageNotFound/pageNotFound.component'

const routes: Routes = [
  {path:'login', component:LoginComponentComponent},
  {path:'expenseDetails', component: ExpenseDetailsComponent},
  {path: '**', component: PageNotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
