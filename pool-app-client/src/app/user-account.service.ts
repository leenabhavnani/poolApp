import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class UserAccountService {
  private baseUrl = 'http://localhost:8080/open-banking/*/aisp/init';
  constructor(private http: HttpClient) { }

  getUserAccountList() {

    return this.http.get(this.baseUrl, { responseType: 'text' });

  }

  getToken(code: string) {
   

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Code': code
      })
    }
    return this.http.post<any>('http://localhost:8080/open-banking/v3/token', JSON.stringify({
      code: code
    }), httpOptions);

  }

  getConsent(token: string) {
   

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.http.post<any>('http://localhost:8080/open-banking/*/aisp/account-access-consents',
      {
        "Data": {
          "Permissions": ["ReadAccountsBasic", "ReadAccountsDetail", "ReadBalances", "ReadBeneficiariesBasic",
            "ReadBeneficiariesDetail", "ReadDirectDebits", "ReadProducts", "ReadStandingOrdersBasic", "ReadStandingOrdersDetail",
            "ReadTransactionsBasic", "ReadTransactionsCredits", "ReadTransactionsDebits", "ReadTransactionsDetail"]
        },
        "Risk":
          {}
      },
      httpOptions);

  }

  getAuthorization(consentId: string) {
    

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    // return this.http.get<string>('http://localhost:8080/open-banking/v3.1/aisp/authorization.oauth2?request='+ consentId, httpOptions);
    return this.http.get('http://localhost:8080/open-banking/v3.1/aisp/authorization.oauth2?request=' + consentId, { responseType: 'text' });

  }

  getAccount(token: string) {
   

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.http.get<any>('http://localhost:8080/open-banking/v3.1/aisp/accounts/' , httpOptions);

  }
}
