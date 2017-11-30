import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import {AccordionModule} from 'primeng/primeng';

import {ColorPickerModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CalendarModule} from 'primeng/primeng';
import {SidebarModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/primeng';
import {GalleriaModule} from 'primeng/primeng';
import {CarouselModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {DragDropModule} from 'primeng/primeng';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule ,
    ColorPickerModule,
    CalendarModule,
    BrowserAnimationsModule,
    AccordionModule,
    SidebarModule,
    GrowlModule,
    PanelMenuModule,
    GalleriaModule,
    DragDropModule,
    CarouselModule,
    DialogModule

   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
