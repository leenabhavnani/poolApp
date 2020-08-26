
import { UserpoolDetailsComponent } from '../userpool-details/userpool-details.component';
import { Observable } from "rxjs";
import { UserPoolService } from "../user-pool.service";
import { Userpool } from "../userpool";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-userpool-list',
  templateUrl: './userpool-list.component.html',
  styleUrls: ['./userpool-list.component.css']
})
@Injectable()
export class UserpoolListComponent implements OnInit {
  userpoolData: Observable<Userpool[]>;
  private baseUrl: string ='http://localhost:8080/poolservice/';
  private currentPoolsUrl : String = this.baseUrl+'current-pools/';
  private shortlistedPoolsUrl : String = this.baseUrl+'shortlisted-pools/';
  private completedPoolsUrl : String = this.baseUrl+'completed-pools/';
  currentPoolData:any;
  shortlistedPoolData:any;
  completedPoolData:any;
  constructor(private userPoolService: UserPoolService,
              private router: Router, private http: HttpClient) {
              }

  ngOnInit() {
    this.loadPools();
    this.reloadData();
  }
loadPools(){
this.http.get(this.currentPoolsUrl+"Id").subscribe((data) => this.currentPoolData = data);
this.http.get(this.shortlistedPoolsUrl+"Id").subscribe((data) => this.shortlistedPoolData = data);
this.http.get(this.completedPoolsUrl+"accId").subscribe((data2) => this.completedPoolData = data2);
}
  reloadData() {
    this.userPoolService.getUserpoolList();
  }


  userpoolDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
