import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
interface SideList {
  id: number;
  title: string;
  link: string;
  children?: SideList[];
  isExpanded?: boolean;
}
@Component({
  selector: 'app-menu-content',
  imports: [RouterLink],
  template: `
    <div
      class="fixed top-mobile-header bottom-mobile-nav left-0 right-0 transition-transform duration-500 ease-in-out z-50 overflow-y-auto md:hidden bg-white"
      [class]="isMenuOpen() ? 'translate-x-0' : '-translate-x-full'"
    >
      <ul class="p-6">
        @for (item of sideItem; track item.id) {
          <li class="text-xl cursor-pointer " (click)="toggleExpanded(item)">
            {{ item.title }}
          </li>
          @if (item.isExpanded) {
            <ul class="flex flex-col gap-1 py-2">
              @for (child of item.children; track child.id) {
                <li class="hover:text-side-upper-hover">
                  <a [routerLink]="child.link">{{ child.title }}</a>
                </li>
              }
            </ul>
          }
        }
      </ul>
    </div>
    <div class="fixed bottom-0 left-0 right-0 px-4 md:hidden">
      <div class="flex justify-between py-3 border-t bg-white">
        <a routerLink="/"><i class="fa-solid fa-home fa-xl"></i></a>
        <span (click)="toggleMenu()" class="cursor-pointer"
          ><i class="fa-solid fa-bars fa-xl"></i
        ></span>
        <a routerLink="/cart"><i class="fa-solid fa-shopping-cart fa-xl"></i></a>
        <a routerLink="/user"><i class="fa-solid fa-user fa-xl"></i></a>
      </div>
    </div>
  `,
  styles: ``,
})
export class MenuContent {
  isMenuOpen = signal(false);
  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }
  toggleExpanded(item: SideList) {
    if (item.children) {
      item.isExpanded = !item.isExpanded;
    }
  }
  sideItem: SideList[] = [
    {
      id: 1,
      title: '聯名授權',
      link: '/side',
      isExpanded: false,
      children: [
        { id: 1, title: '迪士尼', link: '/child' },
        { id: 2, title: '史努比', link: '/child' },
        { id: 3, title: '三麗鷗', link: '/child' },
        { id: 4, title: '米飛兔', link: '/child' },
        { id: 5, title: '貓福珊迪', link: '/child' },
        { id: 6, title: '艾絲樂小兔', link: '/child' },
        { id: 7, title: '蠟筆小新', link: '/child' },
        { id: 8, title: '大人的圖鑑', link: '/child' },
        { id: 9, title: 'LINE FRIENDS', link: '/child' },
        { id: 10, title: '創意設計', link: '/child' },
        { id: 11, title: '1107', link: '/child' },
        { id: 12, title: '可口可樂', link: '/child' },
        { id: 13, title: '小王子', link: '/child' },
        { id: 14, title: 'Cherry Coke', link: '/child' },
        { id: 15, title: '皮克斯', link: '/child' },
        { id: 16, title: '侏羅紀世界', link: '/child' },
        { id: 17, title: 'Discovery', link: '/child' },
        { id: 18, title: 'MARVEL', link: '/child' },
        { id: 19, title: '七龍珠Z', link: '/child' },
        { id: 20, title: '七龍珠', link: '/child' },
        { id: 21, title: 'STAR WARS', link: '/child' },
        { id: 22, title: '航海王', link: '/child' },
      ],
    },

    {
      id: 2,
      title: '男女適穿',
      link: '/side',
      isExpanded: false,
      children: [
        { id: 1, title: '聯名T/中性款', link: '/child' },
        { id: 2, title: '上衣類', link: '/child' },
        { id: 3, title: '襯衫類', link: '/child' },
        { id: 4, title: '外套類', link: '/child' },
        { id: 5, title: '下身類', link: '/child' },
      ],
    },
    {
      id: 3,
      title: '上衣類',
      link: '/side',
      isExpanded: false,
      children: [
        { id: 1, title: '聯名短T', link: '/child' },
        { id: 2, title: '聯名長T', link: '/child' },
        { id: 3, title: '聯名大學T', link: '/child' },
        { id: 4, title: '七/八分袖', link: '/child' },
        { id: 5, title: '竹節棉系列', link: '/child' },
        { id: 6, title: '長袖上衣', link: '/child' },
        { id: 7, title: '長版上衣', link: '/child' },
        { id: 8, title: '條紋系列', link: '/child' },
        { id: 9, title: 'polo系列', link: '/child' },
        { id: 10, title: '厚棉系列', link: '/child' },
        { id: 11, title: '磨毛系列', link: '/child' },
        { id: 12, title: '立領/高領', link: '/child' },
        { id: 13, title: '針織衫/毛衣', link: '/child' },
        { id: 14, title: 'Fleece系列', link: '/child' },
        { id: 15, title: '莫代爾系列', link: '/child' },
        { id: 16, title: '短袖上衣', link: '/child' },
        { id: 17, title: '快乾系列', link: '/child' },
        { id: 18, title: '清涼系列', link: '/child' },
        { id: 19, title: '背心', link: '/child' },
        { id: 20, title: 'Bra系列', link: '/child' },
      ],
    },
    {
      id: 4,
      title: '襯衫類',
      link: '/side',
      isExpanded: false,
      children: [
        { id: 1, title: '休閒襯衫', link: '/child' },
        { id: 2, title: '牛津襯衫', link: '/child' },
        { id: 3, title: '格紋襯衫', link: '/child' },
        { id: 4, title: '牛仔襯衫', link: '/child' },
        { id: 5, title: '法蘭絨襯衫', link: '/child' },
        { id: 6, title: '商務襯衫', link: '/child' },
        { id: 7, title: '輕柔/雪紡', link: '/child' },
        { id: 8, title: '棉麻襯衫', link: '/child' },
      ],
    },
    {
      id: 5,
      title: '外套類',
      link: '/side',
      isExpanded: false,
      children: [
        { id: 1, title: '抗UV系列', link: '/child' },
        { id: 2, title: '機能外套', link: '/child' },
        { id: 3, title: '休閒外套', link: '/child' },
        { id: 4, title: '牛仔外套', link: '/child' },
        { id: 5, title: '西裝外套', link: '/child' },
        { id: 6, title: '針織外套', link: '/child' },
        { id: 7, title: '鋪棉外套', link: '/child' },
        { id: 8, title: 'Fleece系列', link: '/child' },
        { id: 9, title: '大衣', link: '/child' },
        { id: 10, title: '極輕羽絨', link: '/child' },
        { id: 11, title: '極暖羽絨', link: '/child' },
        { id: 12, title: '背心', link: '/child' },
      ],
    },
    {
      id: 6,
      title: '下身類',
      link: '/side',
      isExpanded: false,
      children: [
        { id: 1, title: '九分褲', link: '/child' },
        { id: 2, title: '西裝褲', link: '/child' },
        { id: 3, title: '休閒長褲', link: '/child' },
        { id: 4, title: '束口褲', link: '/child' },
        { id: 5, title: '牛仔系列', link: '/child' },
        { id: 6, title: '寬褲', link: '/child' },
        { id: 7, title: '工裝系列', link: '/child' },
        { id: 8, title: '緊身褲', link: '/child' },
        { id: 9, title: '內搭褲', link: '/child' },
        { id: 10, title: '家居褲', link: '/child' },
        { id: 11, title: '保暖褲', link: '/child' },
        { id: 12, title: '七/八分褲', link: '/child' },
        { id: 13, title: '裙子', link: '/child' },
        { id: 14, title: '短褲', link: '/child' },
      ],
    },
    {
      id: 7,
      title: '洋裝',
      link: '/side',
      isExpanded: false,
      children: [
        { id: 1, title: '長袖洋裝', link: '/child' },
        { id: 2, title: '襯衫式洋裝', link: '/child' },
        { id: 3, title: 'Bra洋裝', link: '/child' },
        { id: 4, title: '短袖洋裝', link: '/child' },
        { id: 5, title: '無袖洋裝', link: '/child' },
        { id: 6, title: '吊帶裙', link: '/child' },
      ],
    },
    {
      id: 8,
      title: '內衣類',
      link: '/side',
      isExpanded: false,
      children: [
        { id: 1, title: '無鋼圈內衣', link: '/child' },
        { id: 2, title: '內褲系列', link: '/child' },
        { id: 3, title: 'Bra系列', link: '/child' },
        { id: 4, title: '背心', link: '/child' },
        { id: 5, title: 'heatup系列', link: '/child' },
        { id: 6, title: 'heatup輕磨毛', link: '/child' },
        { id: 7, title: '清涼系列', link: '/child' },
      ],
    },
    {
      id: 9,
      title: '家居服',
      link: '/side',
      isExpanded: false,
      children: [
        { id: 1, title: '家居套裝', link: '/child' },
        { id: 2, title: '家居洋裝', link: '/child' },
        { id: 3, title: '家居褲', link: '/child' },
        { id: 4, title: '家居毯', link: '/child' },
      ],
    },
    {
      id: 10,
      title: '配件',
      link: '/side',
      isExpanded: false,
      children: [
        { id: 1, title: '襪子', link: '/child' },
        { id: 2, title: '圍巾', link: '/child' },
        { id: 3, title: '帽子', link: '/child' },
        { id: 4, title: '袖套', link: '/child' },
        { id: 5, title: '鞋類', link: '/child' },
        { id: 6, title: '皮帶', link: '/child' },
      ],
    },
  ];
}
