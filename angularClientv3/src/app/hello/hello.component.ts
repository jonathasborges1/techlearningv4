import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HelloService} from "../service/hello.service";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  welcomeMessage = '';

  constructor(
    private route: ActivatedRoute,
              private router: Router,
                  private helloWorldService: HelloService) { }

  ngOnInit() {
    this.helloWorldService.executeHelloService().subscribe(
      (res) => { this.welcomeMessage = res.content;}
    );
  }
}
