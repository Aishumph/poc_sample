import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './content/content.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FileComponent } from './file/file.component';

import {MatTableModule} from '@angular/material/table';
// Material Modules
import { MatIconModule  } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import{ MatButtonModule} from '@angular/material/button';
import{MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import{ MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ResizableModule  } from 'angular-resizable-element';
import { DraggableDialogComponent } from './draggable-dialog/draggable-dialog.component';
// import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    SidenavComponent,
   
    PopupComponent,
         DraggableDialogComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    CommonModule,
    DragDropModule,
    ResizableModule,
   


   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
