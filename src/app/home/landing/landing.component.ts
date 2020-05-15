import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor(private router: Router) { }

  goToAbout() {
    this.router.navigateByUrl('about');
  }

  download() {
    saveAs('../../assets/files/Resume__Mashud.Karim.pdf', 'Resume__Mashud.Karim.pdf');
  }

  ngOnInit() {}

}
