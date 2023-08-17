import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
})
export class SharedUiCommonModule {}
