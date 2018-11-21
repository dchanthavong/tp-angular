import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() users;
  @Output() deleteEmitter: EventEmitter<string> = new EventEmitter<string>();

  onDelete(user) {
    this.deleteEmitter.emit(user);
  }

  constructor() { }

  ngOnInit() {
  }

}
