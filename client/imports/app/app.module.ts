import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountsModule } from 'angular2-meteor-accounts-ui';

import { PARTIES_DECLARATIONS } from './parties/index'
import { AppComponent } from './app.component';
import { routes, ROUTES_PROVIDERS } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AccountsModule
  ],
  declarations: [
    ...PARTIES_DECLARATIONS,
    AppComponent
  ],
  providers: [
    ...ROUTES_PROVIDERS
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
