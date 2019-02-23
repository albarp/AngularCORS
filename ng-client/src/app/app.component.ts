import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'authkey',
      'userid': '1',
      'Content-Type': 'text/plain'
    })
  };

  title = 'ng-client';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {

    this.httpClient.get<any>('http://localhost:63888/', this.httpOptions).subscribe(
      resp => {
        this.title = resp.Success;
      },
      err => {
        this.title = err;
      }
    );

  }
}


