import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
interface FooterList {
  id: number;
  title: string;
  link: string;
}
@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <div class="border-t">
      <div
        class="flex flex-col gap-4 md:flex-row md:justify-between md:gap-0 md:items-center pt-6 pb-10"
      >
        <div class="flex text-xs">
          @for (item of leftSide; track item.id) {
            @if (item.id === 1) {
              <a [routerLink]="item.link" class="mr-3 hover:underline">{{ item.title }}</a>
            } @else {
              <div class="flex items-center">
                <div class="w-0.5 h-4 bg-side-title"></div>
                <a [routerLink]="item.link" class="mx-3 hover:underline">{{ item.title }}</a>
              </div>
            }
          }
        </div>
        <div class="flex text-xs">
          @for (item of rightSide; track item.id) {
            @if (item.id === 1) {
              <a [routerLink]="item.link" class="mr-3 hover:underline">{{ item.title }}</a>
            } @else {
              <div class="flex items-center">
                <div class="w-0.5 h-4 bg-side-title"></div>
                <a [routerLink]="item.link" class="mx-3 hover:underline">{{ item.title }}</a>
              </div>
            }
          }
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Footer {
  leftSide: FooterList[] = [
    { id: 1, title: '聯絡lativ', link: '/footer' },
    { id: 2, title: '購物說明', link: '/footer' },
    { id: 3, title: '最新消息', link: '/footer' },
  ];
  rightSide: FooterList[] = [
    { id: 1, title: '網站使用條款', link: '/footer' },
    { id: 2, title: '隱私權政策', link: '/footer' },
    { id: 3, title: '免責聲明', link: '/footer' },
    { id: 4, title: '© 2025 lativ', link: '/footer' },
  ];
}
