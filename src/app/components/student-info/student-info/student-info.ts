import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTable } from "../../mat-table/mat-table/mat-table";

@Component({
  imports: [ CommonModule, MatTable],
  selector: "app-student-info",
  styleUrl: "./student-info.css",
  templateUrl: "./student-info.html",
})
export class StudentInfo {}
