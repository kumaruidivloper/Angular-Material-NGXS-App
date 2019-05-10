import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { environment } from './../environments/environment';
import { CustomerState } from './+state/customer.state';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxsModule.forRoot([
      CustomerState
    ], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
