import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Table } from './components/table/table';
import { FormsModule } from '@angular/forms';
import { Toolbar } from './components/toobar/toolbar/toolbar';


@Component({
  imports: [Table, FormsModule, Toolbar, RouterLink, RouterOutlet],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('labnew');
}
