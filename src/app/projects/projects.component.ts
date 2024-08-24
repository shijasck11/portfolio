import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cbclick(){
    window.open("https://campusbuddy.netlify.app/landing-page", "_blank");
  }

  rfclick(){
    window.open("https://github.com/rania-arbash-senecacollege-ca/xamarin-form-group-app-group-3", "_blank");
  }

  craclick(){
    window.open("https://github.com/shijasck11/Ionic-Angular-Cash-Registration-App", "_blank");
  }

  sumo2unityClick(){
    window.open("https://github.com/SimuTraffX-Lab/SUMO2Unity", "_blank");
  }

  vibeTribeClick(){
    window.open("https://github.com/StameLife/VibeTribe", "_blank");
  }

}
