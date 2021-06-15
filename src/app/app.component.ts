import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    { id: 1, name: 'course0'},
    { id: 2, name: 'course1'},
    { id: 3, name: 'course2'}
  ];
  onAdd(){
    this.courses.push({ id: 4, name: 'course3'});
  }
  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  canSave = false;

}
