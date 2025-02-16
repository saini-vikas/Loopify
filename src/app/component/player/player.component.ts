import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css',
})
export class PlayerComponent {
  isPlaying = signal(false);
  volume = signal(0.5);
  albumArt = signal('');
  updateProgress() {}
  togglePlayPause() {}

  changeVolume(event: Event) {
    const input = event.target as HTMLInputElement;
    this.volume.set(parseFloat(input.value));
  }
}
