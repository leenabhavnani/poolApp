import { UserpoolDetailsComponent } from './userpool-details/userpool-details.component';
import { CreateUserpoolComponent } from './create-userpool/create-userpool.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserpoolListComponent } from './userpool-list/userpool-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpenpoolsComponent } from './openpools/openpools.component';
import { IncomeComponent } from './income/income.component';
import { FAQComponent } from './faq/faq.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { HelpandSuggestionComponent } from './helpand-suggestion/helpand-suggestion.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'redirecting', redirectTo: 'account', pathMatch: 'full' },
  { path: 'getAllUserPools', component: UserpoolListComponent },
  { path: 'add', component: CreateUserpoolComponent },
  { path: 'details/:id', component: UserpoolDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'openpools', component: OpenpoolsComponent },
  { path: 'income', component: IncomeComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'account', component: UserAccountComponent },
  { path:'help', component: HelpandSuggestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
