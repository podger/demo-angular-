import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// import { IPhone } from "@app/models/phones.model";
import { NetService } from "../../services/net.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private phones;

  constructor(private net: NetService) { }

  ngOnInit() {

    this.net.get("/api/Sample/getAll")
      .subscribe(phones => {
        this.phones = phones.json();
      });

  }

}
