import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-incorporar-video',
  templateUrl: './incorporar-video.component.html',
  styleUrls: ['./incorporar-video.component.css']
})
export class IncorporarVideoComponent implements OnInit {

  videoList = [
    {
      name: "Item 1",
      slug: "item-1",
      embed: `6wD4V0rvlDI`
    },
    {
      name: "Item 2",
      slug: "item-2",
      embed: `5yXQJBU8A28`
    },
    {
      name: "Item 3",
      slug: "item-3",
      embed: `9Sc-ir2UwGU`
    }
  ]

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getEmbedUrl(item){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+  item.embed +'?ecver=2')
  }

}
