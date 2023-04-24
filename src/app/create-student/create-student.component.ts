import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveStudent(){
   
    this.studentService.createStudent(this.student).subscribe( data =>{
      console.log("h1i");
      console.log(data);
      this.goToStudentList();
    },
    error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/students']);
  }
  
  onSubmit(){
    if(this.student.studentName === '' || this.student.standard === '' || this.student.contactNo === '' || this.student.city === '' || this.student.gender === '' || this.student.dateOfBirth === ''){
      var status = confirm("Please fill all the fields");
    }
    else{
    var status = confirm("Do you want to insert student records?");
    if(status==true){
      var status = confirm("Inserted Successfully!");
      
   console.log(this.student);
    this.saveStudent();
  }
}
  }
}