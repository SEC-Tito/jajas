import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  @ViewChild('popover') popover: any;

  isOpen = false;

  constructor() {}

  ngOnInit() {}

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
}