import { Component,OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'relojAE';
  isJqueryWorking: any;
  ngOnInit()
  {
    $(document).ready(() => {
        this.isJqueryWorking = 'Jquery en uso';
    });
  }
}
