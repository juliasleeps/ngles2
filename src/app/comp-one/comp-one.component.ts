import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-comp-one",
  templateUrl: "./comp-one.component.html",
  styleUrls: ["./comp-one.component.css"]
})
export class CompOneComponent implements OnInit {
  @Input() title1: string;
  @Output() outputText1: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onOutputText(text) {
    this.outputText1.emit(text);
  }
}
