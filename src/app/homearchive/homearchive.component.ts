import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homearchive',
  templateUrl: './homearchive.component.html',
  styleUrls: ['./homearchive.component.css']
})
export class HomearchiveComponent implements OnInit {

  month:number;
  year:number;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
  }
  

}
