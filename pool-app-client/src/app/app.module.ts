import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserpoolComponent } from './create-userpool/create-userpool.component';
import { UserpoolDetailsComponent } from './userpool-details/userpool-details.component';
import { UserpoolListComponent } from './userpool-list/userpool-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OpenpoolsComponent } from './openpools/openpools.component';
import { AccountComponent } from './account/account.component';
import { IncomeComponent } from './income/income.component';
import { FAQComponent } from './faq/faq.component';
import { HelpandSuggestionComponent } from './helpand-suggestion/helpand-suggestion.component';
import { UserAccountComponent } from './user-account/user-account.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserpoolComponent,
    UserpoolDetailsComponent,
    UserpoolListComponent,
    DashboardComponent,
    OpenpoolsComponent,
    AccountComponent,
    IncomeComponent,
    FAQComponent,
    HelpandSuggestionComponent,
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
