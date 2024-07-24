import { Component, ViewChild, Renderer2, ElementRef, ChangeDetectionStrategy, TemplateRef   } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import{ PopupComponent} from '../popup/popup.component';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { CdkDrag, DragDropModule } from '@angular/cdk/drag-drop';
import { ResizableModule, ResizeEvent  } from 'angular-resizable-element';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



export interface AirlineData {
  Airlines: string;
  Departure: string;
  Arrival: string;
  Itinerary: string;
}

const AIRLINES_DATA: AirlineData[] = [
  {Airlines: 'DL', Departure: 'Sun 9:35', Arrival: 'Sun 11:17', Itinerary: 'ATL DCA'},
  {Airlines: 'DL', Departure: 'Sun 9:10', Arrival: 'Sun 10:53', Itinerary: 'ATL DCA'},
  {Airlines: 'DL', Departure: 'Sun 3:12', Arrival: 'Sun 04:55', Itinerary: 'ATL DCA'},
  {Airlines: 'DL', Departure: '12:55', Arrival: 'Sun 02:39', Itinerary: 'ATL DCA'},
  {Airlines: 'DL', Departure: '05:30', Arrival: 'Sun 07:14', Itinerary: 'ATL DTW DCA'},
  
];


@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatTableModule, CommonModule, DragDropModule, ResizableModule, MatIconModule, CdkDrag, MatProgressSpinnerModule]
})



export class FileComponent {
  displayedColumns: string[] = ['Airlines', 'Departure', 'Arrival', 'Itinerary'];
  dataSource = [...AIRLINES_DATA];
  popupVisible: boolean= false;
  popupWidth = 300;
  popupHeight = 200;
  loading = false;

  
constructor( public dialog : MatDialog,
  private renderer: Renderer2,
   private el: ElementRef,
   private snackBar: MatSnackBar,
){}


  @ViewChild(MatTable)
  table!: MatTable<AirlineData>;
  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;

addData() {
  const randomElementIndex = Math.floor(Math.random() * AIRLINES_DATA.length);
  this.dataSource.push(AIRLINES_DATA[randomElementIndex]);
  this.table.renderRows();
 this.closePopup();
  this.showSnackBar('New row added successfully');
}

removeData() {
  this.dataSource.pop();
  this.table.renderRows();
}

openDialog() {
  const dialogRef = this.dialog.open(this.dialogTemplate, {
    width: '400px',
   
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.showLoaderAndAddData();
    }
  });
}

onConfirm() {
  this.dialog.closeAll(); 
  this.showLoaderAndAddData();

}

onCancel() {
  this.dialog.closeAll(); 
}
  
showLoaderAndAddData() {
  this.loading = true;
  setTimeout(() => {
    this.addData();
    this.loading = false; 
  }, 500); 
}

showSnackBar(message: string) {
  this.snackBar.open(message, 'Close', {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
  });
}


openPopup(){
  this.popupVisible= true;
 
}

closePopup(){
  this.popupVisible= false;
}
onResizeEnd(event: ResizeEvent): void {
  this.popupWidth = event.rectangle.width || this.popupWidth;
  this.popupHeight = event.rectangle.height || this.popupHeight;
  this.updatePopupSize();
}

updatePopupSize() {
  const popupContent = this.el.nativeElement.querySelector('.popup-content');
  this.renderer.setStyle(popupContent, 'width', `${this.popupWidth}px`);
  this.renderer.setStyle(popupContent, 'height', `${this.popupHeight}px`);
}




}



