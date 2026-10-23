import { Component, Inject, OnInit} from "@angular/core";
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Student } from "../../../../models/student";
import { FormsModule } from "@angular/forms";


@Component({
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule],
  selector: "app-dialog-redact-wrapper",
  styleUrl: "./dialog-redact-wrapper.css",
  templateUrl: "./dialog-redact-wrapper.html",
})
export class DialogRedactWrapper {

  redactStudent: Student = {id: 0, name: '', surname: ''};

  constructor(public dialogRef: MatDialogRef<DialogRedactWrapper>,
    @Inject(MAT_DIALOG_DATA) public data: any)
    {
      
    }

    ngOnInit(): void{
        if(this.data){
          this.redactStudent = {...this.data};
        }
    }

    onNoClick(): void{
      this.dialogRef.close();
    }


  
}
