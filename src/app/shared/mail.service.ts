import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class MailService {

  constructor(private http: HttpClient) { }

  feedback(request) {
    return this.http.post(`${environment.teacherWebServiceUrl}/ContactUs/Feedback`, request);
  }

  shortFeedback(request) {
    return this.http.post(`${environment.teacherWebServiceUrl}/ContactUs/ShortFeedback`, request);
  }

}
