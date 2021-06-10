import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    $(`#spnLang`).fadeToggle(0);
    $(`#brzLang`).fadeToggle(0);
  }

  changeLang(){
    $(`#spnLang`).fadeToggle(300);
    $(`#brzLang`).fadeToggle(300);
    $("#toggleLang").toggleClass("rotate")
  }
}