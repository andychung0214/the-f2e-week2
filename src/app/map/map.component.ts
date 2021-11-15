import { Component, Input, OnInit } from '@angular/core';
import * as L from "leaflet";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map;
  @Input()
  features = [];

  @Input()
  center = [];

  markersObj = {};
  icons = {
    green: '',
    gold: '',
    orange: '',
    red: '',
    grey: ''
  };
  tiles;
  constructor() { }

  ngOnInit(): void {
    this.map = L.map('map', { center: [25.0249211,121.5075035], zoom: 16 });//指定欲繪製地圖在id為map的元素中，中心座標為[25.0249211,121.5075035]，縮放程度為16
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    // const marker = L
    //   .marker([25.0219273,121.4820652,20.25], { title: '我是座標' })
    //   .addTo(this.map)
    //   .bindPopup('<h1>我是彈出視窗</h1>');
    // marker.openPopup();//開啟彈出視窗\

    const greenIcon = L.icon({
      iconUrl: 'assets/icon/marker-icon-green.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    const goldIcon = L.icon({
      iconUrl: 'assets/icon/marker-icon-gold.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    const orangeIcon = L.icon({
      iconUrl: 'assets/icon/marker-icon-orange.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    const redIcon = L.icon({
      iconUrl: 'assets/icon/marker-icon-red.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    const greyIcon = L.icon({
      iconUrl: 'assets/icon/marker-icon-grey.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    this.icons.green = greenIcon;
    this.icons.gold = goldIcon;
    this.icons.red = redIcon;
    this.icons.grey = greyIcon;
    this.icons.orange = orangeIcon;
  }

}
