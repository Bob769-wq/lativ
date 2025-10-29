import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Sidenav } from './sidenav/sidenav';
import { HeroSection } from './hero-section/hero-section';
import { ProductList } from './product-list/product-list';
import { Footer } from './footer/footer';
import { MenuContent } from './menu-content/menu-content';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidenav, HeroSection, ProductList, Footer, MenuContent],
  template: `
    <div class="px-4 xl:px-0 xl:max-w-1180 mx-auto">
      <app-header />
      <div class="flex md:mt-28 mt-32">
        <app-sidenav class="hidden md:block w-44 pr-5" />
        <div class="flex-1">
          <app-hero-section />
          <app-product-list />
        </div>
      </div>
      <app-footer />
    </div>
    <app-menu-content />
  `,
  styles: ``,
})
export class App {
  protected readonly title = signal('lativ');
}
