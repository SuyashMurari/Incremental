<<<<<<< HEAD
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from '../../models/Course';

@Component({
    selector: 'app-coursecreate',
    templateUrl: './coursecreate.component.html',
    styleUrls: ['./coursecreate.component.scss']
})
export class CourseCreateComponent {

    courseForm: FormGroup;
    successMessage: string | null = null;
    errorMessage: string | null = null;

    constructor(private fb: FormBuilder) {
        this.courseForm = this.fb.group({
            courseId: [0],
            courseName: ['', Validators.required],
            description: ['', [Validators.maxLength(500)]],
            teacherId: [null, Validators.required]
        });
    }

    onSubmit(): void {
        this.successMessage = null;
        this.errorMessage = null;

        if (this.courseForm.valid) {
            const formValue = this.courseForm.value;

            const course = new Course(
                0,
                formValue.courseName,
                formValue.description,
                formValue.teacherId
            );

            this.successMessage = 'Course created successfully!';
            console.log(course);
        } else {
            this.errorMessage = 'Please fill all required fields correctly!';
        }
    }

    resetForm(): void {
        this.courseForm.reset({
            courseName: '',
            description: '',
            teacherId: ''
        });

        this.successMessage = null;
        this.errorMessage = null;
    }
=======
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EduConnectService } from '../../services/educonnect.service';

@Component({
  selector: 'app-course-create',
  templateUrl: './coursecreate.component.html',
  styleUrls: ['./coursecreate.component.scss']
})
export class CourseCreateComponent {

  courseForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';


  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      courseId: [0],
      courseName: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      teacherId: [null, [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }

  // ngOnInit(): void {

  //   const teacherId = Number(localStorage.getItem('teacher_id')) || 0;

  //   this.eduService.getTeacherById(teacherId).subscribe({
  //     next: (teacher) => {
  //       console.log('Loaded teacher', teacher);

  //       this.courseForm.patchValue({ teacherId: teacher.teacherId });
  //     },
  //     error: (err) => {
  //       console.error('Failed to load teacher', err);
  //     }
  //   });
  // }

  get f() {
    return this.courseForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';
    if (this.courseForm.invalid) {
      this.errorMessage = 'Please correct the errors in the form.';
      return;
    }
    const teacher = this.courseForm.value;
    console.log('Course Created:', teacher);
    this.successMessage = 'Course created successfully!';
    this.courseForm.reset();
    this.submitted = false;
  }

  resetForm(): void {
    this.courseForm.reset({ courseId: 0, courseName: '', description: '', teacherId: 0 });
    this.submitted = false;
    this.successMessage = '';
    this.errorMessage = '';
  }
>>>>>>> 1def2018b76ae2443f6677804c0eb6266be13dce
}