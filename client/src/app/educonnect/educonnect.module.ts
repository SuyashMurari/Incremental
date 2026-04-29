import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EduConnectRoutingModule } from "./educonnect-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
<<<<<<< HEAD
import { CourseCreateComponent } from "./components/coursecreate/coursecreate.component";
import { StudentCreateComponent } from "./components/studentcreate/studentcreate.component";
import { TeacherCreateComponent } from "./components/teachercreate/teachercreate.component";

@NgModule({
  declarations: [
    StudentCreateComponent,
    TeacherCreateComponent,
    CourseCreateComponent],
=======
import { StudentCreateComponent } from "./components/studentcreate/studentcreate.component";
import { TeacherCreateComponent } from "./components/teachercreate/teachercreate.component";
import { CourseCreateComponent } from "./components/coursecreate/coursecreate.component";
import { RouterModule } from "@angular/router";
import { EnrollmentComponent } from "./components/enrollment/enrollment.component";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { StudentEditComponent } from "./components/studentedit/studentedit.component";
import { TeacherEditComponent } from "./components/teacheredit/teacheredit.component";
import { CourseEditComponent } from "./components/courseedit/courseedit.component";

@NgModule({
  
  declarations: [
    StudentCreateComponent,
    TeacherCreateComponent,
    CourseCreateComponent,
    EnrollmentComponent,
    DashboardComponent,
    StudentEditComponent,
    TeacherEditComponent,
    CourseEditComponent
  ],
>>>>>>> 1def2018b76ae2443f6677804c0eb6266be13dce
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    EduConnectRoutingModule,
    SharedModule
  ],
  exports: [

  ]
})
export class EduconnectModule { }