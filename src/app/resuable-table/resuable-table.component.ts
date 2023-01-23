import { Component, OnInit ,Input} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Column {
  columnDef : string;
  header : string;
  cell : Function;
  isLink?: boolean;
  url ?: string;
}

@Component({
  selector: 'app-resuable-table',
  templateUrl: './resuable-table.component.html',
  styleUrls: ['./resuable-table.component.css']
})
export class ResuableTableComponent<T> implements OnInit {


  @Input() 
  tableColumns : Array<Column> = [];

  @Input()
  tableData : Array<T> = [];

  displayedColumns : Array<string> = [];
  dataSource : MatTableDataSource<T> = new MatTableDataSource();


  constructor() { }

  ngOnInit(): void {
  this.displayedColumns = this.tableColumns.map((c)=>c.columnDef);
  this.dataSource = new MatTableDataSource(this.tableData)
  
  }


}
