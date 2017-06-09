import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class NetService {

  private prefix = "http://localhost:58109";

  constructor(private http: Http) { }

  get(url: string, params?: any) {

    let headers = new Headers();
    headers.append("Accept", "application/json");

    return this.http.get(this.prefix + url,
      {
        headers: headers
      });
  }

}
