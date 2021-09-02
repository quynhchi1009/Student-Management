import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { ServerHttpServiceService } from 'src/app/services/server-http-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public students: Student[] = [];

  constructor(private common: CommonServiceService, 
    private serverHttp: ServerHttpServiceService) { }
  
  ngOnInit(): void {
    this.serverHttp.getStudents().subscribe((data) => {
      console.log('getStudents', data);
      this.students = data;
    })
  }

}
