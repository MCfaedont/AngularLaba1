import { BaseServise } from './../../service/base-servise';
import { Component, OnInit} from '@angular/core';
import { Student } from '../../models/student';
import { DialogEditWrapper } from '../studeditor/dialog-edit-wrapper/dialog-edit-wrapper';
import { DialogDeleteWrapper } from '../studeditor/dialog-edit-wrapper/dialog-delete-wrapper/dialog-delete-wrapper';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { DialogRedactWrapper } from '../studeditor/dialog-edit-wrapper/dialog-redact-wrapper/dialog-redact-wrapper';


@Component({
  imports: [FormsModule, AsyncPipe, CommonModule],
  selector: 'app-table',
  styleUrl: './table.css',
  templateUrl: './table.html',
})
export class Table {

  constructor( public baseService: BaseServise, public dialog: MatDialog){
    this.baseService.loadStudents();
  }

  OnAddNewStudentClicked(): void {
    const dialogRef = this.dialog.open(DialogEditWrapper, {
      width: '400px',
      data: {name: '', surname: ''} as Student
    });
    dialogRef.afterClosed().subscribe((result:Student) => {
      if(result){
        this.baseService.addNewStudent(result).subscribe(() => {this.baseService.loadStudents();});
      }
    });
  }

  OnDeleteStudentClicked(currentStudent: Student, rowId: number): void {
    if(rowId != null){
        this.baseService.deleteStudent(currentStudent, rowId).subscribe(() => {this.baseService.loadStudents();});
      }
    
  }


  OnEditStudentClicked(rowId: number): void{
    const dialogRef = this.dialog.open(DialogRedactWrapper, {
      width: '400px',
      data: {name: '', surname: ''} as Student
    });
    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.baseService.editStudent(result, rowId).subscribe(() => {this.baseService.loadStudents();});
      }
    })
  }

}
