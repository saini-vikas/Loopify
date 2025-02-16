import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { Avatar } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { Button } from 'primeng/button';
@Component({
  selector: 'app-navbar',
  imports: [
    MenubarModule,
    RouterLink,
    Avatar,
    InputTextModule,
    FormsModule,
    MenuModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  searchInput = signal('');
  activeUser = signal('Vikas');
  profileMenu = signal([
    { title: 'View profile', link: '/profile' },
    { title: 'My playlists', link: '/myplaylists' },
  ]);

  openAvatar() {
    console.log('Avatar clicked');
  }
}
