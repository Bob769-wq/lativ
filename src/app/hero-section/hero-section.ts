import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  template: `
    <div>
      <a routerLink="/woman">
        <img src="/hero-section.jpeg" class="w-full" alt="hero-section" />
      </a>
    </div>
  `,
  styles: ``,
})
export class HeroSection {}
