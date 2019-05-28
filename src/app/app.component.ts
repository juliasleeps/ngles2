import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "This is initial title";
  newTitle: string;

  // clicked(event) {
  //   console.log(event);
  //   this.title += "Yuka";
  // }

  onOutputText(text) {
    this.newTitle = text;
  }
}
