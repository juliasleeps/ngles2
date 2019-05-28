import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-comp-three",
  templateUrl: "./comp-three.component.html",
  styleUrls: ["./comp-three.component.css"]
})
export class CompThreeComponent implements OnInit {
  @Input() title3: string;
  @Output() outputText3: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  returnTitle() {
    this.outputText3.emit(this.title3.toUpperCase());
  }
}
