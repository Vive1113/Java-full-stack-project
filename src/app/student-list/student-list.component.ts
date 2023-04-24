import { Component, OnInit } from '@angular/core';
import { Student } from '../student'
import { StudentService } from '../student.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

//this component class is accessed by its template to display the list of data of students maintained.
export class StudentListComponent implements OnInit {

  firstName : String = '';
  studentFoundBySearch : Student[] = [];
  gradeValue : number = 0;
  students: Student[] = [];
  

  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(){
    this.studentService.getStudentsList().subscribe(data => {
      this.students = data;
console.log(this.students);
      //int num[]
      //int num1[]
      //num = num1
    });
  }

  studentDetails(id: number){
    this.router.navigate(['student-details', id]);
  }

  updateStudent(id: number){
    this.router.navigate(['update-student', id]);
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe( data => {
      console.log(data);
      this.getStudents();
    })
  }
  confirmDelete(student:Student){
    var status = confirm("Do you want to delete this Record?");
    if(status==true){
      this.deleteStudent(student.id);
    }
  }
    confirmUpdate(student:Student){
      var status = confirm("Do you want to update this Record?");
      if(status==true){
        this.updateStudent(student.id);
      }
    else{
      this.getStudents();
    }
  }
  removeAllStudents(): void{
    var status=confirm("Be aware this will remove all the records!! Do you really want to persue?");
    if(status==true){
    this.studentService.deleteAll().subscribe(
      data => {
        console.log(data);
        this.getStudents();
      },
      error => {
        console.log(error);
      }
    );
    }}
    searchByName(){
      this.studentService.findByName(this.firstName).subscribe( data => {
        this.students = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
    }
    fetchByStandard(grade: any){
      this.gradeValue = grade.target.value;
      console.log(this.gradeValue);
      this.studentService.findByStandard(this.gradeValue).subscribe( data => {
          this.students = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

    viewCourse(student: Student){
      console.log(student.standard);
      console.log(student.isLowerGrade);
      if(student.standard>=6 && student.standard<=10) {
        student.isLowerGrade = true;
        console.log('studentComponent if condition '+student.isLowerGrade);
        this.router.navigate(['courses',true]);
      }
      else{
        student.isLowerGrade = false;
        console.log("studentComponent else condition "+student.isLowerGrade);
        this.router.navigate(['courses',false]);
      }
    }



}
