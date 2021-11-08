import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageModel} from "../model/message";

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  constructor(private http: HttpClient) {
  }
  executeHelloService() {
    return this.http.get<MessageModel>('http://localhost:8080/api/v1/greeting');
  }
}
