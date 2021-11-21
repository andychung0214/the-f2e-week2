import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {

  // @Input()
  // features;
  // @Input()
  // cityData;

  // cityDataLoaded = false;
  // areaList = [];
  // select = { City: '台北市', Area: '中正區' };

  // @Output()
  // clickCardEvent = new EventEmitter();

  // @Output()
  // selectEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeCity():void{

  }

  changeArea():void{

  }

}
