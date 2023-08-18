import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const IMPORT_EXPORTS = [MatToolbarModule, MatButtonModule, MatCardModule];

@NgModule({
  imports: IMPORT_EXPORTS,
  exports: IMPORT_EXPORTS,
})
export class MaterialModule {}
