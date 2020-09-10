import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat/observable';
import { GithubfollowersService } from './../githubfollowers.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs-compat/add/observable/combineLatest';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/switchMap';
@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any = [];
  constructor(private githubFollowersService: GithubfollowersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      

    this.githubFollowersService.getAll()
      .subscribe(response => {
        this.followers = response;
      });
  }

}
