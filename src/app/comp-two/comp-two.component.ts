import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-comp-two",
  templateUrl: "./comp-two.component.html",
  styleUrls: ["./comp-two.component.css"]
})
export class CompTwoComponent implements OnInit {
  @Input() title2: string;
  @Output() outputText2: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onOutputText(text) {
    this.outputText2.emit(text);
  }
}
