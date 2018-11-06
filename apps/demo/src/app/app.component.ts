import { Component, Input, OnInit } from "@angular/core";
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Input() value;

  public editorControl: FormControl = new FormControl('', Validators.required);

  constructor() {}

  ngOnInit() {}
}
