import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PARTIES_DECLARATIONS } from './parties/index'
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    ...PARTIES_DECLARATIONS,
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
