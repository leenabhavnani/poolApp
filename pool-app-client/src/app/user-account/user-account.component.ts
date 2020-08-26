import { Component, OnInit } from '@angular/core';
import { UserAccountService } from "../user-account.service";
import { Account } from "../account";
import { report } from 'process';
import { Observable } from "rxjs";

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  userCode: string;
  token: string ;
  consent: string;
  allAccounts: [];

  constructor(private userAccountService: UserAccountService) { }

  ngOnInit(): void {
   
    let codeHalf = window.location.href.split('#code=')[1];//.slice(0, string.indexOf("&"));
    

    if (codeHalf != undefined) {
      let code = codeHalf.split('&i')[0];
      
      this.getToken(code);
    }

  }

  getUserAccountList() {
    this.userAccountService.getUserAccountList().subscribe((response) => {
   
      window.location.href = '' + response;
    })
  }

  getToken(code: string) {
    this.userAccountService.getToken(code).subscribe((response) => {
      
      this.token = response.access_token;
      this.getAispConsent(this.token);
    })
     
  }

  getAispConsent(token : string)
  {
    
    this.userAccountService.getConsent(this.token).subscribe((response) => {
   
       this.consent = response.Data.ConsentId
     
       this.getAuthorization( );
    })
  }

  getAuthorization()
  {
    this.userAccountService.getAuthorization(this.consent).subscribe((response) => {
     // console.log("getAuthorization" + response.status);
      this.getAccount();
    })
  }

  getAccount()
  {
   

    this.userAccountService.getAccount(this.token).subscribe((response) => {
      
      this.allAccounts = response.Data.Account;
      // console.log("getAuthorization 2"+ response.access_token);
      // window.location.href = '' + response;
    })
  }
}
