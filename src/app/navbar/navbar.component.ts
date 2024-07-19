import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isFullscreen = false;


  // Using F Key
@HostListener('window:keydown', ['$event'])
handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'f' || event.key === 'F') {
    event.preventDefault();  
    this.toggleFullscreen();
  }
}


toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().then(() => {
      this.isFullscreen = true;
    }).catch(err => {
      alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
    });
  } else {
    document.exitFullscreen().then(() => {
      this.isFullscreen = false;
    }).catch(err => {
      alert(`Error attempting to exit fullscreen mode: ${err.message} (${err.name})`);
    });
  }
}


  refreshPage(){
    window.location.reload();
  }

}
