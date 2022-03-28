import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Intern } from 'src/app/intern';
import { InternService } from '../service/intern.service';

@Component({
  selector: 'app-internal-box',
  templateUrl: './internal-box.component.html',
  styleUrls: ['./internal-box.component.scss']
})
export class InternalBoxComponent implements OnInit {

  show: string;
  interns: Intern[];
  internEd: Intern;

  constructor(private internService: InternService) { }

  showForm(id: string) {
    this.show = "true";
    this.internService.getIntern(id).subscribe((intern) => {
      this.internEd = intern;
    });
  }

  getId(id: string) {
    console.log(id);
    this.internService.deleteIntern(id).subscribe();
    const allInterns = this.internService.getInterns().subscribe((intern: Intern[]) => {
      this.interns = intern
    });
  }

  editIntern() {
    this.show = "false";
    const intern: Intern = {
      id:this.internEd.id,
      name: this.internEd.name,
      age: this.internEd.age,
      dateOfBirth: this.internEd.dateOfBirth
    }
    this.internService.editIntern(intern).subscribe(res => console.log(res));
    const allInterns = this.internService.getInterns().subscribe((intern: Intern[]) => {
      this.interns = intern
    });
  }


  ngOnInit(): void {
    this.internService.serviceCall();
    const allInterns = this.internService.getInterns().subscribe((intern: Intern[]) => {
      this.interns = intern
    });

  }
}

