import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.page.html',
  styleUrls: ['./hogar.page.scss'],
})
export class HogarPage implements OnInit {
  @ViewChild('popoverHeart') popoverHeart: any;
  @ViewChild('popoverMessage') popoverMessage: any;

  isOpenHeart = false;
  isOpenMessage = false;

  constructor() {}

  ngOnInit() {}

  presentPopover(e: Event, popoverType: string) {
    if (popoverType === 'heart') {
      this.popoverHeart.event = e;
      this.isOpenHeart = true;
    } else if (popoverType === 'message') {
      this.popoverMessage.event = e;
      this.isOpenMessage = true;
    }
  }
}