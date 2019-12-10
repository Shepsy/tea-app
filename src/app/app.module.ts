import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatListModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TeaService } from './services/tea.service';
import { TrackingService } from './services/tracking.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    TeaService,
    TrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
