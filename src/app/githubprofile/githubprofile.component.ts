import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs-compat/add/observable/combineLatest';
import { Observable } from 'rxjs-compat/observable';

@Component({
  selector: 'app-githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrls: ['./githubprofile.component.css']
})
export class GithubprofileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {


    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .subscribe(
      combined=>{
        let params = combined[0]['params'];
        console.log(params)
       let queryparams = combined[1].get('page');
      }
    )

    console.log("onInit")
    this.route.paramMap.subscribe((params)=>{
      console.log(params);
    });

  }

}
