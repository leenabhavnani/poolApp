import { Component, OnInit } from '@angular/core';
import transactionsData from '../data/transactions.json';
@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  public transData:
  {TransactionId : string, Amount : string, CreditDebitIndicator : string, status : string,
  BookingDateTime: string, Balance: string, MerchantDetails: string }[]=transactionsData;
  constructor() {
    }

  ngOnInit(): void {

  }

}
