import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const IMPORT_EXPORTS = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
];

@NgModule({
  imports: IMPORT_EXPORTS,
  exports: IMPORT_EXPORTS,
})
export class MaterialModule {}
