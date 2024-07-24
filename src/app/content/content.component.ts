import { Component } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import{ DraggableDialogComponent} from '../draggable-dialog/draggable-dialog.component'
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
// import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import{ PopupComponent} from '../popup/popup.component';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { CdkDrag, DragDropModule } from '@angular/cdk/drag-drop';
import { ResizableModule, ResizeEvent  } from 'angular-resizable-element';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  
})
export class ContentComponent {

  constructor(private dialog: MatDialog){}

  openDialog() {
    this.dialog.open(DraggableDialogComponent, {
      width: '400px'
    });
  }

}
