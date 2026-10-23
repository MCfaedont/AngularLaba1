import { Routes } from '@angular/router';
import { Toolbar } from './components/toobar/toolbar/toolbar';
import { StudentInfo } from './components/student-info/student-info/student-info';

export const routes: Routes = [
    {path: '', component: Toolbar},
    {path: 'info', component: StudentInfo}
];
