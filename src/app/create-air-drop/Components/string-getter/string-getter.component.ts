import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-string-getter',
  templateUrl: './string-getter.component.html',
  styleUrls: ['./string-getter.component.scss']
})
export class StringGetterComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }
  items: string[] = [];
  itemToInsert: string = "";
  @Input() placeHolderInput: string = "";
  @Output() getitems = new EventEmitter<string[]>();

  addItem(item: any) {
    let save = true;

    //emitting the items Array

    if (this.items.indexOf(item) == -1) {

      if (save) {
        this.items.push(item);
        this.getitems.emit(this.items);
        //reset input field
        this.itemToInsert = "";
      }
    } else {
      this._snackBar.open(`Cet element existe deja!`, "OK", {
        duration: 2 * 1000,
      });
    }
  }

  removeItem(item: any) {
    if (confirm("Do you really want to remove the task?")) {
      let indexItem = this.items.indexOf(item);
      if (indexItem >= 0) {
        this.items.splice(indexItem, 1);
      }
    }
  }
  editItem(item: any) {
    this.itemToInsert = item;
    this.removeItem(item);
  }

  ngOnInit() { }

}
