import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class BaseServise {

  studentsSubject = new BehaviorSubject<Student[]>([]);

  private studentsUrl='https://049a8eb6a1337039.mokky.dev/studentsdata';

  constructor(private http: HttpClient) {
    this.loadStudents();
  }

  addNewStudent(newstudent: Student) : Observable<Student> {
    
    return this.http.post<Student>(this.studentsUrl, newstudent)
    
  }

  loadStudents(): void{
    console.log(`studenti zagruzheni`);
    this.http.get<Student[]>(this.studentsUrl).subscribe(data => {
      this.studentsSubject.next(data);
    });
  }

  deleteStudent(studentdel: Student, rowID: number): Observable<Student>{
    return this.http.delete<Student>(`${this.studentsUrl}/${studentdel.id = rowID}`);
  }

  editStudent(studented: Student, rowID: number): Observable<Student>{
    return this.http.patch<Student>(`${this.studentsUrl}/${studented.id = rowID}`, {name: studented.name, surname: studented.surname});
  }

  //получить массив с сервера.
  //надо или преобразовать обсервабл в обычный массив или возвращать опять обсерабл и подумать нужен ли он кому то

}
