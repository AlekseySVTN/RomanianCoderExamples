import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  constructor() { }

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
      const components = xml.getElementsByTagName("Component");
      const flag = false;

      if(components.length > 0){
          for(let elem in components){
            if(
                components[elem]
                && components[elem].parentNode
                && components[elem].children
                && components[elem].children.hasAttribute
            ){
              for(let child in components[elem].children){
                let child_item = components[elem].children[child];
                console.log(child_item);
              }
            }
          }
      }

      console.log(components);

    };
    reader.readAsText(f);
  }

}
