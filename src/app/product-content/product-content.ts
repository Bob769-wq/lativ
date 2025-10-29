import { Component, input } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { RouterLink } from '@angular/router';
interface Product {
  id: number;
  title: string;
  img: string;
  link: string;
  oldPrice?: string;
  price: string;
  color: Color[];
}
interface Color {
  id: number;
  img: string;
  link: string;
}
@Component({
  selector: 'app-product-content',
  imports: [RouterLink],
  template: `
    <div class="flex flex-col">
      <a [routerLink]="product().link">
        <img [src]="product().img" [alt]="product().title" />
      </a>
      <div class="p-6 text-xs flex flex-col gap-4">
        <div class="flex justify-center gap-1">
          @for (color of product().color; track color.id) {
            <a [routerLink]="color.link"
              ><img [src]="color.img" width="16" height="16" [alt]="product().title"
            /></a>
          }
        </div>
        <h3 class="text-center">{{ product().title }}</h3>
        <div class="flex justify-center gap-2">
          <p class="line-through">{{ product().oldPrice }}</p>
          <p>{{ product().price }}</p>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductContent {
  product = input.required<Product>();
}
