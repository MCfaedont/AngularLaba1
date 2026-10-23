import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatSidenavModule, MatSidenav} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import { Table } from "../../table/table";
import { RouterLink } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  imports: [MatToolbarModule, MatSidenavModule, MatSidenav, MatButtonModule, Table, RouterLink],
  selector: "app-toolbar",
  styleUrl: "./toolbar.css",
  templateUrl: "./toolbar.html",
})
export class Toolbar {

  constructor(private router: Router){}

  OnInfoButClick(): void{
    this.router.navigate(['/info']);
  }
}
