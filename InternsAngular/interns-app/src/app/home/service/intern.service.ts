import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intern } from 'src/app/intern';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  readonly baseUrl= "https://localhost:44360/interns/";

   readonly httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };



  constructor(private httpClient: HttpClient) { }

  serviceCall() {
    console.log("intern service was called");
  }

  addIntern(intern: Intern) {
    return this.httpClient.post(this.baseUrl, intern, this.httpOptions);
  }

  editIntern(intern: Intern) {
    return this.httpClient.put(this.baseUrl + intern.id, intern, this.httpOptions);
  }

  getInterns(): Observable<Intern[]> {
    return this.httpClient.get<Intern[]>(this.baseUrl, this.httpOptions);
  }

  getIntern(internId: string): Observable<Intern> {
    return this.httpClient.get<Intern>(this.baseUrl + internId, this.httpOptions);
  }

  deleteIntern(internId: string): Observable<Intern> {
    let idUrl = internId;
    return this.httpClient.delete<Intern>(this.baseUrl + idUrl);
  }

}
