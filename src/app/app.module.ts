import { SignupFormComponent } from './signup-form/signup-form.component';
import { summaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { CoursesComponents } from './courses.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponents,
    CourseComponent,
    summaryPipe,
    ContactFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ 
    CoursesService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
