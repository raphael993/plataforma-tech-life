import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http: HttpClient) { }

  getClasses() {
    return this.http.get('http://13.37.224.17:3000/classes');
  }

  getClass(_id: string) {
    return this.http.get(`http://13.37.224.17:3000/classes/${_id}`);
  }

  createClass(classData: any) {
    return this.http.post(`http://13.37.224.17:3000/classes/`, classData);
  }

  updateClass(_id: string, classData: any) {
    return this.http.put(`http://13.37.224.17:3000/classes/${_id}`, classData);
  }

  deleteClass(_id: string) {
    return this.http.delete(`http://13.37.224.17:3000/classes/${_id}`);
  }
}
