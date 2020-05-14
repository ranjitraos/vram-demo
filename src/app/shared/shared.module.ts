import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { MapComponent } from './components/map.component';
import { EchartsDirective } from './directives/echarts.directive';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';



@NgModule({
  declarations: [MapComponent, EchartsDirective],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    LeafletModule
  ],
  exports: [NbCardModule, NbButtonModule, NbIconModule, MapComponent, EchartsDirective, LeafletModule]
})
export class SharedModule { }
