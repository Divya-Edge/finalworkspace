import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { TimelineUiComponent } from './timeline-ui.component';

@NgModule({
  declarations: [TimelineUiComponent],
  imports: [BrowserModule,FormsModule
  ],
  exports: [TimelineUiComponent]
})
export class TimelineUiModule { }
