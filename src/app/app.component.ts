import { Component, OnInit } from '@angular/core';
//import { FormControl, Validators, FormGroup } from '@angular/forms';

declare var CKEDITOR: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private data:string;
  //private isShowError:boolean = false;
  //@Input() editor:FormGroup;

  constructor() { }

  ngOnInit() {
    CKEDITOR.replace('content', {
      on: {
        change: () => {
          this.data = [CKEDITOR.instances['content'].getData()][0];
        }
      }
    });
  }
}
