import { Component, OnInit } from '@angular/core';
import { Intern } from 'src/app/intern';
import { InternService } from '../service/intern.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  name: string;
  age: string;
  birthDate:string;

  constructor(private internService: InternService) { }

  public addIntern() {
    const intern: Intern = {
      name: this.name,
      age: this.age,
      dateOfBirth:this.birthDate
    }
    this.internService.addIntern(intern).subscribe();
  }
  ngOnInit(): void {
  }

}
