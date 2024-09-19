import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http: HttpClient) { }

  getClasses() {
    return this.http.get(`${environment.api}/classes`);
  }

  getClass(_id: string) {
    return this.http.get(`${environment.api}/classes/${_id}`);
  }

  createClass(classData: any) {
    return this.http.post(`${environment.api}/classes/`, classData);
  }

  updateClass(_id: string, classData: any) {
    return this.http.put(`${environment.api}/classes/${_id}`, classData);
  }

  deleteClass(_id: string) {
    const user = JSON.parse(localStorage.getItem('user') || '{}').name;
    return this.http.delete(`${environment.api}/classes/${_id}/${user}`);
  }
}
