import { CoursesComponent } from './courses/courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesService } from './courses/courses.service';
import { AuthorComponent } from './author/author.component';
import { SummaryPipe } from './summary.pipe';
import { FaveComponent } from './fave/fave.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorComponent,
    SummaryPipe,
    FaveComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
