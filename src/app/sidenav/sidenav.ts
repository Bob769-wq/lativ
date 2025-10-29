import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface SideList {
  id: number;
  title: string;
  link: string;
  children?: SideList[];
}
@Component({
  selector: 'app-sidenav',
  imports: [RouterLink],
  template: `
    <ul class="border-b">
      @for (item of sideItemUpper; track item.id) {
        <li class="font-bold text-side-title flex items-center gap-2">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="5" width="5" viewBox="0 0 640 640">
              <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                fill="#253756"
                d="M160 96L480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96z"
              />
            </svg>
          </span>
          <a [routerLink]="item.link" class="hover:underline">
            {{ item.title }}
          </a>
        </li>
        <ul class="py-4 flex flex-col gap-2.5">
          @for (child of item.children; track child.id) {
            <li
              class="flex items-center gap-2 text-side-upper-item hover:text-side-upper-hover text-xs"
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="8" width="8" viewBox="0 0 640 640">
                  <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                  <path
                    fill="#83521e"
                    d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"
                  />
                </svg>
              </span>
              <a [routerLink]="child.link">{{ child.title }}</a>
            </li>
          }
        </ul>
      }
    </ul>
    <ul class="flex flex-col">
      @for (item of sideItem; track item.id) {
        <li class="pt-5 flex gap-2 items-center font-bold text-side-title">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="5" width="5" viewBox="0 0 640 640">
              <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                fill="#253756"
                d="M160 96L480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96z"
              />
            </svg>
          </span>
          <span>{{ item.title }}</span>
        </li>
        <ul class="py-2 flex flex-col gap-2.5">
          @for (child of item.children; track child.id) {
            <li
              class="flex items-center gap-2 text-xs text-side-title hover:text-side-upper-hover hover:underline cursor-pointer"
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="8" width="8" viewBox="0 0 640 640">
                  <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                  <path
                    fill="#4d494a"
                    d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"
                  />
                </svg>
              </span>
              <a [routerLink]="child.link">{{ child.title }}</a>
            </li>
          }
        </ul>
      }
    </ul>
  `,
  styles: ``,
})
export class Sidenav {
  sideItemUpper: SideList[] = [
    {
      id: 1,
      title: '女裝新品＆熱銷',
      link: '/side',
      children: [
        { id: 1, title: '限時特惠．2件580元', link: '/child' },
        { id: 2, title: '溫差推薦．任選450起', link: '/child' },
        { id: 3, title: '秋上新．任選220起', link: '/child' },
        { id: 4, title: '舒適體驗．2件75折起', link: '/child' },
        { id: 5, title: '換季下殺．任選９９起', link: '/child' },
      ],
    },
  ];

  sideItem: SideList[] = [
    {
      id: 1,
      title: '聯名授權',
      link: '/side',
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
