import { CoursesService } from './courses.service';
import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `<h2>{{ getTitle() }}</h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
                </ul>
                <button (click)="onSave()">Save</button>
                <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" /><br><br>
                {{ text | summary }}
                `
})

export class CoursesComponents{

    text = "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?";
    title = "List of Courses";
    getTitle(){
        return this.title;
    }
    courses;
    email=""
    onKeyUp(){
        console.log(this.email);
    }
    onSave(){
        console.log("button was clicked");
    }
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

}