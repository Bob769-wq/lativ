import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
interface NavList {
  id: number;
  title: string;
  link: string;
}
@Component({
  selector: 'app-header',
  imports: [RouterLink, ReactiveFormsModule],
  template: `
    <header class="fixed top-0 left-0 right-0 bg-white">
      <div class="flex flex-col gap-2 pt-5 px-4 xl:px-0 xl:max-w-1180 mx-auto">
        <div class="hidden lg:flex justify-end gap-6">
          <a routerLink="/fb">
            <i class="fa-brands fa-facebook-f fa-xl" style="color: #999999;"></i>
          </a>
          <a routerLink="/ig">
            <i class="fa-brands fa-instagram fa-xl" style="color: #999999;"></i>
          </a>
          <a routerLink="/line">
            <i class="fa-brands fa-line fa-xl" style="color: #999999;"></i>
          </a>
        </div>
        <div class="flex py-2 items-baseline">
          <a class="w-44 pl-4"><img src="/lativ_logo.svg" width="80" alt="logo" /></a>
          <ul class="lg:flex items-center text-base hidden">
            @for (item of navItem; track item.id) {
              @if (item.id === 1) {
                <li class="bg-nav-bg text-hover-nav-text text-center mr-1">
                  <a [routerLink]="item.link" class="inline-block py-1 w-24">{{ item.title }}</a>
                </li>
              } @else {
                <div class="w-0.5 h-3 bg-divider-bg"></div>
                <li class="mx-1  text-center hover:text-black">
                  <a [routerLink]="item.link" class="inline-block py-1 w-24">{{ item.title }}</a>
                </li>
              }
            }
          </ul>
          <ul class="flex items-center gap-6 ml-auto text-right-icon">
            <li class="relative">
              <i
                class="fa-solid fa-magnifying-glass fa-lg cursor-pointer"
                (click)="toggleSearch()"
                style="color: #444444;"
              ></i>
              <div
                class="fixed inset-0 bg-black bg-opacity-40 z-[40]"
                [class]="isSearchOpen() ? 'opacity-100' : 'opacity-0 pointer-events-none'"
                (click)="toggleSearch()"
              ></div>
              @if (isSearchOpen()) {
                <div
                  class="absolute rounded-lg z-50 top-5 right-0 w-96 h-96 bg-white md:block hidden"
                >
                  <div class="p-4 flex flex-col gap-4">
                    <form (submit)="submit()" [formGroup]="form" class="group">
                      <div
                        class="rounded-full py-2 px-2 border flex items-center group-focus-within:border-side-upper-hover"
                      >
                        <input
                          type="text"
                          class="w-full outline-none"
                          formControlName="searchControl"
                        />
                        <button type="submit">
                          <i class="fa-solid fa-magnifying-glass fa-lg" style="color: #444444;"></i>
                        </button>
                      </div>
                    </form>
                    <div class="flex flex-col">
                      <h3 class="flex gap-2"><span>⭐</span><span>熱門搜尋</span></h3>
                      <ul class="mt-4 flex flex-col gap-2 ">
                        @for (item of searchItem; track item.id) {
                          <li class="flex gap-2">
                            <span class="invisible">⭐️</span>
                            <a [routerLink]="item.link" class="hover:text-side-upper-hover">{{
                              item.title
                            }}</a>
                          </li>
                        }
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="fixed top-0 right-0 left-0 bg-white z-50 md:hidden">
                  <form (submit)="submit()" [formGroup]="form" class="group py-5 px-8">
                    <div
                      class="rounded-full py-2 px-2 border flex items-center group-focus-within:border-side-upper-hover"
                    >
                      <input
                        type="text"
                        class="w-full outline-none"
                        formControlName="searchControl"
                      />
                      <button type="submit">
                        <i class="fa-solid fa-magnifying-glass fa-lg" style="color: #444444;"></i>
                      </button>
                    </div>
                  </form>
                </div>
              }
            </li>

            <li>
              <a routerLink="/cart" class="flex items-center gap-2">
                <span>
                  <i class="fa-solid fa-shopping-cart fa-lg" style="color: #444444;"></i>
                </span>
                <span>0</span>
              </a>
            </li>
            <li class="rounded-full w-28 bg-sign-bg flex justify-center items-center">
              <a routerLink="/log-in" class="flex items-center py-2 gap-1">
                <span>
                  <i class="fa-solid fa-user fa-lg" style="color: #444444;"></i>
                </span>
                <span>登入/註冊</span>
              </a>
            </li>
          </ul>
        </div>
        <ul class="flex justify-between items-center text-base pb-1 md:hidden">
          @for (item of navItem; track item.id) {
            @if (item.id === 1) {
              <li class="bg-nav-bg text-hover-nav-text text-center mr-1">
                <a [routerLink]="item.link" class="inline-block py-1 ">{{ item.title }}</a>
              </li>
            } @else {
              <li class="mx-1  text-center hover:text-black">
                <a [routerLink]="item.link" class="inline-block py-1 px-4">{{ item.title }}</a>
              </li>
            }
          }
        </ul>
      </div>
    </header>
  `,
  styles: ``,
})
export class Header {
  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    searchControl: this.fb.control('', {
      validators: [Validators.required],
    }),
  });
  submit() {
    if (this.form.invalid) {
      console.error('錯誤');
      return;
    }
    const data = this.form.getRawValue();
    data.searchControl = data.searchControl.trim();
    console.log(data);
  }
  isSearchOpen = signal(false);
  toggleSearch() {
    this.isSearchOpen.update((value) => !value);
  }
  navItem: NavList[] = [
    { id: 1, title: 'WOMEN', link: '/nav' },
    { id: 2, title: 'MEN', link: '/nav' },
    { id: 3, title: 'KIDS', link: '/nav' },
    { id: 4, title: 'BABY', link: '/nav' },
    { id: 5, title: 'SPORTS', link: '/nav' },
    { id: 6, title: 'STYLE', link: '/nav' },
  ];
  searchItem: NavList[] = [
    { id: 1, title: '溫差外套', link: '/search' },
    { id: 2, title: '牛仔系列', link: '/search' },
    { id: 3, title: '親子裝推薦', link: '/search' },
    { id: 4, title: '秋冬新品', link: '/search' },
    { id: 5, title: '人氣排行', link: '/search' },
    { id: 6, title: '新尺碼XXL＆160＆XS', link: '/search' },
    { id: 7, title: '零碼優惠專區', link: '/search' },
    { id: 8, title: '熱銷到貨', link: '/search' },
    { id: 9, title: '職場穿搭', link: '/search' },
  ];
}
