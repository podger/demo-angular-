import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NetService } from '../../services/net.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-lazy-page',
  templateUrl: './lazy-page.component.html',
  styleUrls: ['./lazy-page.component.css']
})
export class LazyPageComponent implements OnInit {

  private phone;
  private currentId = null;

  constructor(
    private net: NetService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    
    this.route.params.
      subscribe(el => {
        if (el) {
          this.loadPhone(el["id"]);
        }
      });

  }

  loadPhone(idVal: number) {
      this.net.get("/api/Sample/getById?id=" + idVal).subscribe(val => {
        this.phone = val.json();
      })
  }

}
