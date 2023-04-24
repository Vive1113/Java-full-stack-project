import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})

//component class to display the student data of particular student
export class StudentDetailsComponent implements OnInit {

  id: number = 0;
  student: any = [];
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.student = new Student();
    this.studentService.getStudentById(this.id).subscribe( data => {
      this.student = data;
    });
  }

}
