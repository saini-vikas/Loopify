import { Component, input, signal } from '@angular/core';
import { AppComponent } from '../app.component';
import { KeyValue } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  message = input();
  name = signal('Vikas');

  readName() {}
}
