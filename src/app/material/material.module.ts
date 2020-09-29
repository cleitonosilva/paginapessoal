import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

const materialComponents = [MatGridListModule, MatMenuModule, MatSidenavModule];

@NgModule({
  imports: [materialComponents, MatMenuModule, MatSidenavModule],
  exports: [materialComponents, MatMenuModule, MatSidenavModule],
})
export class MaterialModule {}
