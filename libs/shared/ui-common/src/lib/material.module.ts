import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const IMPORT_EXPORTS = [MatToolbarModule, MatButtonModule];

@NgModule({
  imports: IMPORT_EXPORTS,
  exports: IMPORT_EXPORTS,
})
export class MaterialModule {}
