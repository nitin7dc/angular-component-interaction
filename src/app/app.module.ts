import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToChildComponent } from './to-child/to-child.component';
import { FromChildComponent } from './from-child/from-child.component';
import { ViaServiceComponent } from './via-service/via-service.component';
import { FromChildTwoComponent } from './from-child-two/from-child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ToChildComponent,
    FromChildComponent,
    ViaServiceComponent,
    FromChildTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
