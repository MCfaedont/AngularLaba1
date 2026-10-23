import { Component, Inject, OnInit} from "@angular/core";
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Student } from "../../../../models/student";
import { FormsModule } from "@angular/forms";

@Component({
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule],
  selector: "app-dialog-delete-wrapper",
  styleUrl: "./dialog-delete-wrapper.css",
  templateUrl: "./dialog-delete-wrapper.html",
})
export class DialogDeleteWrapper implements OnInit {
  
  studentId: number | null = null;

  constructor(public dialogRef: MatDialogRef<DialogDeleteWrapper>,@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
