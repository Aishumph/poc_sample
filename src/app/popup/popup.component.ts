import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @Output() yesClicked: EventEmitter<void> = new EventEmitter<void>();
response:boolean=false
changeResponse(){
  // this.response=true
  this.yesClicked.emit();
}
}
