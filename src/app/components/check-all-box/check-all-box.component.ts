import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-check-all-box',
  templateUrl: './check-all-box.component.html',
  styleUrls: ['./check-all-box.component.scss']
})
export class CheckAllBoxComponent implements OnInit {
  @Input() isChecked: boolean;
  @Input() isDisable: boolean;
  @Output() changed: EventEmitter<boolean>;

  constructor() {
    this.changed = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  onCheckAll() {
    this.changed.emit(this.isChecked);
  }

  onSpanCheck() {
    if (!this.isDisable) {
      this.isChecked = !this.isChecked;
      this.onCheckAll();
    }
  }

}
