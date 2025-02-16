import { Component, signal } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';
import { PlayerComponent } from './component/player/player.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ButtonModule, PlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Loopify';
  counter = signal(0);

  raiseCounter() {
    this.counter.set(this.counter() + 1);
  }

  lowerCounter() {
    this.counter.set(this.counter() - 1);
  }
}
