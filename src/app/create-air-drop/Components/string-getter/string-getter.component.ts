import { Validator } from './../../../tools/validator';
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-string-getter',
  templateUrl: './string-getter.component.html',
  styleUrls: ['./string-getter.component.scss']
})
export class StringGetterComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }
  @Input() items?: string[] = [];
  itemToInsert: string = "";
  link_error = false;
  @Input() placeHolderInput: string = "";
  @Output() getitems = new EventEmitter<string[]>();

  addItemProxy(){
    let fieldOK = true;
    if(!Validator.correctURL(this.itemToInsert)){
      fieldOK = false;
      this.link_error = true;
    }
    if(fieldOK){
      this.addItem();
    }
  }

  removeErrorMessage(){
    this.link_error = false;
  }
  addItem() {
    this.removeErrorMessage();
    let save = true;
    //emitting the items Array
    if (this.items!.indexOf(this.itemToInsert) == -1) {

      if (save) {
        this.items!.push(this.itemToInsert);
        this.getitems.emit(this.items);
        //reset input field
        this.itemToInsert = "";
      }
    } else {
      this._snackBar.open(`This link already exist!`, "OK", {
        duration: 2 * 1000,
      });
    }
  }

  removeItemProxy(item: any) {
    if (confirm("Do you really want to remove the task?")) {
      this.removeItem(item);
    }
  }
  removeItem(item: any) {
      let indexItem = this.items!.indexOf(item);
      if (indexItem >= 0) {
        this.items!.splice(indexItem, 1);
      }
  }
  editItem(item: any) {
    this.itemToInsert = item;
    this.removeItem(item);
  }

  ngOnInit() { 
    this.resetItems();
  }

  resetItems(){
    if(this.items == undefined){
      this.items = [];
    }
  }

}
