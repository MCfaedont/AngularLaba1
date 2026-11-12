import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Student } from '../../../models/student';
import { BaseServise } from '../../../service/base-servise';
import { MatDialog } from '@angular/material/dialog';
import { Table } from '../../table/table';
import { DialogEditWrapper } from '../../studeditor/dialog-edit-wrapper/dialog-edit-wrapper';
import { DialogRedactWrapper } from '../../studeditor/dialog-edit-wrapper/dialog-redact-wrapper/dialog-redact-wrapper';



/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-mat-table',
  styleUrl: './mat-table.css',
  templateUrl: './mat-table.html',
  imports: [MatTableModule, MatPaginatorModule],
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

  // @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ngOnInit(): void {
  //   studentsSubject.subscribe((students: Student[]) => {
  //       this.dataSource.data = students;
  //     });
  // }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];
















// import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
// import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
// import {MatSort, MatSortModule} from '@angular/material/sort';
// import {MatTableDataSource, MatTableModule} from '@angular/material/table';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import { Student } from '../../../models/student';
// import { BaseServise } from '../../../service/base-servise';
// import { DialogEditWrapper } from '../../studeditor/dialog-edit-wrapper/dialog-edit-wrapper';
// import { DialogRedactWrapper } from '../../studeditor/dialog-edit-wrapper/dialog-redact-wrapper/dialog-redact-wrapper';



// @Component({
//   imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
//   selector: "app-mat-table",
//   styleUrl: "./mat-table.css",
//   templateUrl: "./mat-table.html",
// })
// export class MatTable implements AfterViewInit {

//   displayedColumns: string[] = ['id', 'name', 'surname', 'action'];
//   dataSource = new MatTableDataSource<Student>([]);

//   private baseService = inject(BaseServise);

//   @ViewChild(MatPaginator) paginator!: MatPaginator;

//   nngOnInit() {
//   this.baseService.studentsSubject.subscribe(students => {
//     this.dataSource.data = students; // Закидываем массив в dataSource
//   });
// }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//   }


//   OnAddNewStudentClicked(): void {
//       const dialogRef = this.dialog.open(DialogEditWrapper, {
//         width: '400px',
//         data: {name: '', surname: ''} as Student
//       });
//       dialogRef.afterClosed().subscribe((result:Student) => {
//         if(result){
//           this.baseService.addNewStudent(result).subscribe(() => {this.baseService.loadStudents();});
//         }
//       });
//     }
  
//     OnDeleteStudentClicked(currentStudent: Student, rowId: number): void {
//       if(rowId != null){
//           this.baseService.deleteStudent(currentStudent, rowId).subscribe(() => {this.baseService.loadStudents();});
//         }
      
//     }
  
//     OnEditStudentClicked(rowId: number): void{
//       const dialogRef = this.dialog.open(DialogRedactWrapper, {
//         width: '400px',
//         data: {name: '', surname: ''} as Student
//       });
//       dialogRef.afterClosed().subscribe((result) => {
//         if(result){
//           this.baseService.editStudent(result, rowId).subscribe(() => {this.baseService.loadStudents();});
//         }
//       })
//     }
  
  
  

// }

  // constructor() {
  //   // Create 100 usersприсваивает компонент пагинатора (MatPaginator) источнику данных (dataSource). 
  //   const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1)); //сюда надо передавать мой массив, сделать функцию

  //   // Assign the data to the data source for the table to render
  //   this.dataSource = new MatTableDataSource(users);
  // }
  // //сделать типа функции  loadStudents() но чтобы она была типа Observable<Student>

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }


  // getArray(): Student[]{
  //   return 
  // }

  


 


  


// /** Builds and returns a new User. */
// function createNewUser(id: number): Student {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';

//   return {
//     id: id,
//     name: name,
//     surname: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
// }



// /**
//  * @title Table with pagination and Mokky.dev data
//  */
// @Component({
//   selector: 'table-pagination-example',
//   styleUrl: 'table-pagination-example.css',
//   templateUrl: 'table-pagination-example.html',
//   imports: [MatTableModule, MatPaginatorModule],
// })
// export class TablePaginationExample implements OnInit, AfterViewInit {
//   // 1. Твои колонки вместо 'position', 'name', 'weight', 'symbol'
//   displayedColumns: string[] = ['id', 'name', 'surname'];
  
//   // 2. Создаем пустой DataSource, как в примере, но с твоим интерфейсом Student
//   dataSource = new MatTableDataSource<Student>([]);

//   // 3. Подключаем твой сервис через внедрение зависимостей
//   private baseService = inject(BaseServise);

//   @ViewChild(MatPaginator) paginator!: MatPaginator;

//   // 4. Добавляем ngOnInit, чтобы забрать данные из BehaviorSubject
//   ngOnInit() {
//     this.baseService.studentsSubject.subscribe(students => {
//       // Когда данные приходят с сервера, мы просто записываем их в .data
//       this.dataSource.data = students;
//     });
//   }

//   ngAfterViewInit() {
//     // 5. Связываем пагинатор точно так же, как в официальном примере
//     this.dataSource.paginator = this.paginator;
//   }
// }6

