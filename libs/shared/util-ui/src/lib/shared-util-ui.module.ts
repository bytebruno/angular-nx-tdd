import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTrackerComponent } from './components/scroll-tracker/scroll-tracker.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ScrollTrackerComponent],
  exports: [ScrollTrackerComponent],
})
export class SharedUtilUiModule {}
