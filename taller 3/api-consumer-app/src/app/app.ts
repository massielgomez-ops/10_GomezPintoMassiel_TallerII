import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService, User } from './data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('api-consumer-app');
  users = signal<User[]>([]);
  errorMessage = signal<string>('');

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe({
      next: (data) => {
        this.users.set(data);
      },
      error: (error) => {
        this.errorMessage.set('Error al cargar los datos: ' + error.message);
      }
    });
  }
}
