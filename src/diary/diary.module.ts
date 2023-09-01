import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DiaryComponent }   from './diary.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ DiaryComponent ],
    bootstrap:    [ DiaryComponent ]
})
export class DiaryModule { }