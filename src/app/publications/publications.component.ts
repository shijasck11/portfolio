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
    window.open("https://ieeexplore.ieee.org/abstract/document/10588571?casa_token=11J2WauGrLYAAAAA:vzF7SiqHTtIMLHCbE9Fwde0eWMxAU3UP9IrKNcviIJR_9D8iK7MllR4l24gcEDbv3h5TlM2lv94", "_blank");
  }

}
