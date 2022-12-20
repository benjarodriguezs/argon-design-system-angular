import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    // model = {
    //     left: true,
    //     middle: false,
    //     right: false
    // };
    // closeResult: string;
    // focus;
    // focus1;

    modalRef: BsModalRef | undefined;

    constructor(
      private modalService: BsModalService,
      ) { }

    ngOnInit() {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  modificarPedido() {
    this.modalService.hide();
  }

  closeModal() {
    this.modalService.hide();
  }

}
