import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as leaflet from 'leaflet';
import { LeafletDirective } from '@asymmetrik/ngx-leaflet';
import { Subject } from 'rxjs';
import ResizeObserver from 'resize-observer-polyfill';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'chart' },
  template: `
    <div leaflet [leafletOptions]="options"></div>
  `,
})
export class MapComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {

  @ViewChild(LeafletDirective, { static: false }) map: LeafletDirective;

  options = {
    layers: [
      leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    ],
    zoom: 10,
    center: leaflet.latLng({ lat: 20.2961, lng: 85.8245 }),
  };

  private resizeObserver: ResizeObserver;
  private resize$ = new Subject<void>();
  private destroyed$ = new Subject<void>();

  ngOnInit() {
    this.resize$
      .pipe(
        debounceTime(100),
        takeUntil(this.destroyed$),
      )
      .subscribe(() => this.map.getMap().invalidateSize());
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.resizeObserver.disconnect();
    this.resizeObserver = null;
  }

  /**
   * Create resize observer to detect resize current container
   * We use this approach because of OnPush detection strategy
   * and not using `DoCheck` logic
   */
  private createResizeObserver() {
    if (this.resizeObserver) {
      return;
    }

    this.resizeObserver = new ResizeObserver(() => this.resize$.next());
    this.resizeObserver.observe(this.map.getMap().getContainer());
  }

  ngAfterViewInit() {
    this.createResizeObserver();
  }

  ngAfterViewChecked() {
    this.resize$.next();
  }
}
