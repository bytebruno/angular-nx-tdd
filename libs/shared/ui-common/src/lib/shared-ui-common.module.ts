import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [MainLayoutComponent, HeaderComponent],
  exports: [MainLayoutComponent],
})
export class SharedUiCommonModule {}
