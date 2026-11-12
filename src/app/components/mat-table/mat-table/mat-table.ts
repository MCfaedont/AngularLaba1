import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Student } from '../../../models/student';
import { BaseServise } from '../../../service/base-servise';
import { MatDialog } from '@angular/material/dialog';
import { Table } from '../../table/table';
import { DialogEditWrapper } from '../../studeditor/dialog-edit-wrapper/dialog-edit-wrapper';
import { DialogRedactWrapper } from '../../studeditor/dialog-edit-wrapper/dialog-redact-wrapper/dialog-redact-wrapper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-mat-table',
  styleUrl: './mat-table.css',
  templateUrl: './mat-table.html',
  imports: [MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule],
})
export class MatTable implements AfterViewInit, OnInit {

  constructor( public baseService: BaseServise, public dialog: MatDialog){}

  displayedColumns: string[] = ['id', 'name', 'surname', 'actions'];
  dataSource = new MatTableDataSource<Student>([]);


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.baseService.studentsSubject.subscribe(students => {
      this.dataSource.data = students;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  
    
    mOnAddNewStudentClicked(): void {
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
  
    mOnDeleteStudentClicked(currentStudent: Student, rowId: number): void {
      if(rowId != null){
          this.baseService.deleteStudent(currentStudent, rowId).subscribe(() => {this.baseService.loadStudents();});
        }
      
    }
  
    mOnEditStudentClicked(rowId: number): void{
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

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    }
  