import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AgendarService {
  private baseURL = "http://localhost:8080/api/v1/agendar"
  constructor(private httpClient: HttpClient) {}

  getSchedule() {
    //return this.http.get<Schedules[]>(this.API);
  }

  createSchedule(item: any) {
    return this.httpClient.post(this.baseURL, item);
  }

  updateSchedule(id: number, item: any) {
    //return this.http.put(`${this.API}/${id}`, item);
  }

  deleteSchedule(id: number) {
    //return this.http.delete(`${this.API}/${id}`);
  }
}
