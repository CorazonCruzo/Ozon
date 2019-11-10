import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-delete-selected-box',
  templateUrl: './delete-selected-box.component.html',
  styleUrls: ['./delete-selected-box.component.scss']
})
export class DeleteSelectedBoxComponent implements OnInit {
  @Output() clicked: EventEmitter<void>;

  constructor() {
    this.clicked = new EventEmitter<void>();
  }

  ngOnInit() {
  }

  onClick() {
    this.clicked.emit();
  }

}
