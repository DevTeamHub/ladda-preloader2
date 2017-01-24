import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LaddaPreloader2Component } from "../src/ladda-preloader2.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
    ],
    declarations: [
        AppComponent,
        LaddaPreloader2Component
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}