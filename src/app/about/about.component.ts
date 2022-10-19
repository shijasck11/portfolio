import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mail(){
    window.location.href = "mailto:shijasck11@gmail.com"
  }

  linkedin(){
    window.location.href = "https://www.linkedin.com/in/muhammed-shijas-cherakkatil-50584a15b/"
  }

  github(){
    window.location.href = "https://www.github.com/shijasck11"
  }

}
