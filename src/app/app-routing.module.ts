import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FileComponent } from './file/file.component';

const routes: Routes = [
{path: 'file', component: FileComponent},
{path: 'edit', component: ContentComponent},
{path: 'view', component: FileComponent},
{path: 'go', component: FileComponent},
{path: 'tools', component: FileComponent},
{path: 'help', component: FileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
