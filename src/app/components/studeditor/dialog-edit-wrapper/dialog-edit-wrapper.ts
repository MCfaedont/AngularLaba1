import { Component, Inject, OnInit} from "@angular/core";
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Student } from "../../../models/student";
import { FormsModule } from "@angular/forms";

@Component({
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule],
  selector: "app-dialog-edit-wrapper",
  styleUrl: "./dialog-edit-wrapper.css",
  templateUrl: "./dialog-edit-wrapper.html",
})
export class DialogEditWrapper implements OnInit{
  editingStudent: Student;

  constructor(public dialogRef: MatDialogRef<DialogEditWrapper>,
    @Inject(MAT_DIALOG_DATA) public data: Student)
    {
      this.editingStudent = new Student();
    }

    ngOnInit(): void{

    }

    onNoClick(): void{
      this.dialogRef.close();
    }
}

