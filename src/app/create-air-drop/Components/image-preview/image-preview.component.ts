import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";


@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  tempAvatar: any = "";
  imageChangedEvent: any = "";
  @Input() toolTip: string = "";
  @Output() outputFile = new EventEmitter<File>();

  @ViewChild("hiddentInputFile", { static: false }) hiddentInputFile: any;
  //clicking on the hidden input type file when we click on avatar
  choseProfileImage() {
    console.log("fuck this shit");
    this.hiddentInputFile.nativeElement.click();
  }

  onFileSelected(event: any): void {
    let that = this;
    const file: File = event.target.files[0];
    this.outputFile.emit(file);

    //displaying the image on the UI
    var reader = new FileReader();
    var imageExtension = ["jpg", "png", "gif", "jpeg"];
    var extension = file.name.split(".")[1].toLowerCase();

    reader.onload = function () {
      if (imageExtension.indexOf(extension) != -1) {
        that.tempAvatar = this.result;
      } else {
        alert("unsupported image file!");
      }
    };

    reader.readAsDataURL(file);

    // Backend stuff
    if (file) {
      const formData = new FormData();
      formData.append("partenaireAvatar", file);
    }
  }

}
