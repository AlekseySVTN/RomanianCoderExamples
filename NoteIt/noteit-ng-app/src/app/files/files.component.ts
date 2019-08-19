import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  constructor(private jq : Lite) { }

  ngOnInit() {
  }

  onChange(event) {

    let files: any = event.srcElement.files;
    let f:File = files[0];
    let reader = new FileReader();
    var name = f.name;
    const self = this;
    console.log("File name: " + name);
    reader.onload = function (e) {
      var target: any = e.target;
      var data = target.result;

      const parser = new DOMParser();
      const xml = parser.parseFromString(data, 'text/xml');
      console.log(xml);
      xml.

    };
    reader.readAsText(f);
  }

}
