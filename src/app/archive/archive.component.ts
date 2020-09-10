import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  month:number;
  year:number;
  constructor(private router: ActivatedRoute,private route: Router) { }

  ngOnInit(): void {
    this.router.paramMap
    .subscribe(params=>{
      this.month =+params.get('month');
      this.year =+params.get('year');
    })
  }

  viewAll(){
    this.route.navigate([''])
  }
  

}
