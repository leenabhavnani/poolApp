
import { UserPoolService } from '../user-pool.service';
import { Userpool } from '../userpool';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-userpool',
  templateUrl: './create-userpool.component.html',
  styleUrls: ['./create-userpool.component.css']
})
export class CreateUserpoolComponent implements OnInit {

  userpool: Userpool = new Userpool();
  submitted = false;

  constructor(private userPoolService: UserPoolService,
              private router: Router) { }

  ngOnInit() {
  }

  newUserpool(): void {
    this.submitted = false;
    this.userpool = new Userpool();
  }

  save() {
    this.userPoolService.createUserpool(this.userpool)
      .subscribe(data => console.log(data), error => console.log(error));
    this.userpool = new Userpool();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/userpools']);
  }
}
