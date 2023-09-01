import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { DiaryComponent }   from '../diary/diary.component';
import {Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes =[
    { path: 'diary', component: DiaryComponent,}
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), AppRoutingModule],
    declarations: [ AppComponent, DiaryComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }