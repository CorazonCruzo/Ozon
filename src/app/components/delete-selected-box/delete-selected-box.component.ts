import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';

@Component({
  selector: 'app-delete-selected-box',
  templateUrl: './delete-selected-box.component.html',
  styleUrls: ['./delete-selected-box.component.scss']
})
export class DeleteSelectedBoxComponent implements OnInit {

  constructor(private service: ProductsService) {}

  ngOnInit() {}

  onClick() {
    this.service.deleteChecked();
  }

}
