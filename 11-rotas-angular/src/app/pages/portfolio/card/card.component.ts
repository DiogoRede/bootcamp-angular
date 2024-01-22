import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private router:Router) {

    activatedRoute.params.subscribe(
      param => console.log(param)
    );

    activatedRoute.firstChild?.params.subscribe(
      param => console.log(param)
    )

    activatedRoute.queryParams.subscribe(
      param => console.log(param)
    )
  }

  ngOnInit(): void {
    // setInterval(()=>{
    //   this.router.navigate([''])
    // },5000)
  }

}
