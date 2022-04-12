import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-file-upload-component",
  templateUrl: "./file-upload-component.component.html",
  styleUrls: ["./file-upload-component.component.scss"],
})
export class FileUploadComponentComponent implements OnInit {
  filename: string = "";
  @Input() toolTip: string="";
  @Output() outputFile = new EventEmitter<File>();

  constructor() {}

  ngOnInit() {}

  ////clicking on the hidden input type file when we click on CNIPassport
  @ViewChild("file", { static: false }) file:any;
  choseFile() {
    this.file.nativeElement.click();
  }
  getFile(event: any): void {
    const file: File = event.target.files[0];
    const fileName = file.name;
    this.filename = fileName;
    this.outputFile.emit(file);
  }
}
