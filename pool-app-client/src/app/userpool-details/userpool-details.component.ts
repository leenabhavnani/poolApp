
import { Userpool } from '../userpool';
import { Component, OnInit, Input } from '@angular/core';
import { UserPoolService } from '../user-pool.service';
import { UserpoolListComponent } from '../userpool-list/userpool-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userpool-details',
  templateUrl: './userpool-details.component.html',
  styleUrls: ['./userpool-details.component.css']
})
export class UserpoolDetailsComponent implements OnInit {

  id: number;
  userpool: Userpool;

  constructor(private route: ActivatedRoute,private router: Router,
              private userPoolService: UserPoolService) { }

  ngOnInit() {
    this.userpool = new Userpool();

    this.id = this.route.snapshot.params['id'];

    this.userPoolService.getUserpool(this.id)
      .subscribe(data => {
        console.log(data)
        this.userpool = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['getAllUserPools']);
  }
}
