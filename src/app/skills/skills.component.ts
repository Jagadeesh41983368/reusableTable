import { Component, OnInit } from '@angular/core';


export interface Element {
  position: number,
  name: string,
  weight: number,
  symbol: string
}

export interface Employee {
  name: string,
  role: string,
  skills: string
}

export interface Column {
  columnDef : string;
  header : string;
  cell : Function;
  isLink?: boolean;
  url ?: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  anotherTableColumns: Array<Column> = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`
    },
    {
      columnDef: 'role',
      header: 'Role',
      cell: (element: Record<string, any>) => `${element['role']}`,
      isLink: true,
      url: 'abc'
    },
    {
      columnDef: 'skills',
      header: 'Skills',
      cell: (element: Record<string, any>) => `${element['skills']}`
    }
  ];

  anotherTableData: Array<Employee> = [
    {
      name: 'John',
      role: 'Fullstack Developer',
      skills: 'Angular, Typescript, React'
    },
    { name: 'Mile', role: 'Java Developer', skills: 'Java' },
    { name: 'Peter', role: 'DevOps', skills: 'AWS, GCP' }
  ];
}
