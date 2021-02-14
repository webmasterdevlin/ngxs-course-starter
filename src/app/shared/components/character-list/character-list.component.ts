import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  styleUrls: ["./character-list.component.css"],
})
export class CharacterListComponent implements OnInit {
  heroes: any;
  villains: any;

  constructor() {}

  ngOnInit(): void {}
}
