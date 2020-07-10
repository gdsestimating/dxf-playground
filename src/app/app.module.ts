import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ParserService } from './services/ParserService';
import { JsonViewerComponent } from './json-viewer/json-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    JsonViewerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
