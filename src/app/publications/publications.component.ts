import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  publicationClick(){
    window.open("https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=SUMO2Unity%3A+An+Open-Source+Traffic+Co-Simulation+Tool+to+Improve+Road+Safety&btnG=", "_blank");
  }

}
