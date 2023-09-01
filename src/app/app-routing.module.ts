import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DiaryComponent } from 'src/diary/diary.component';


const routes: Routes = [
  { path: 'diary', component: DiaryComponent }
];

@NgModule({
  declarations: [],
  imports: [
    [ RouterModule.forRoot(routes) ],
    CommonModule
  ]
})
export class AppRoutingModule { }
