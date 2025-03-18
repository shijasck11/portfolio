import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shijasPortfolio';

  mail(){
    window.location.href = "mailto:shijasck11@gmail.com"
  }

  linkedin(){
    window.location.href = "https://www.linkedin.com/in/muhammed-shijas-cherakkatil-50584a15b/"
  }

  github(){
    window.location.href = "https://www.github.com/shijasck11"
  }

  resumeClicked(){
    console.log("Working")
    window.location.href = "https://docs.google.com/document/d/1yCjNpuGv09ALWWRp7ZWJLeQuKweZAv3t/export?format=pdf"
  }
}

