import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-some",
  templateUrl: "./some.component.html",
  styleUrls: ["./some.component.css"]
})
export class SomeComponent implements OnInit {
  @Input() someText: string;
  @Output() outputText: EventEmitter<string> = new EventEmitter();

  constructor() {
    console.log(this.someText);
  }

  ngOnInit() {
    console.log(this.someText, 2);
  }

  onReturnText() {
    this.outputText.emit(this.someText);
  }
}
