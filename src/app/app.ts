import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Sidenav } from './sidenav/sidenav';
import { HeroSection } from './hero-section/hero-section';
import { ProductList } from './product-list/product-list';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidenav, HeroSection, ProductList, Footer],
  template: `
    <div class="max-w-1180 mx-auto">
      <app-header />
      <div class="flex ">
        <app-sidenav class="w-44 pr-5" />
        <div class="flex-1">
          <app-hero-section />
          <app-product-list />
        </div>
      </div>
      <app-footer />
    </div>
  `,
  styles: ``,
})
export class App {
  protected readonly title = signal('lativ');
}
