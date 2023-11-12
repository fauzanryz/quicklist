import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {
  // array of checklists / list of checklists
  checklists = ['run', 'walk', 'sleep', 'eat'];

  constructor(private http: HttpClient) {}

  fetchData() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnInit() {
    this.fetchData();
  }

  addChecklist() {
    console.log('Add Checklist button clicked');
  }

  renameChecklist(checklist: any) {
    console.log('Rename Checklist button clicked');
  }

  removeChecklist(checklist: any) {
    console.log('Remove Checklist button clicked');
  }
}
