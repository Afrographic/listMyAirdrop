import { Validator } from './../../../tools/validator';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AirDropTask } from 'src/app/models/task';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  title?= "";
  link?= "";
  @Input() tasks?: any = [];
  @Output() getTasks = new EventEmitter<AirDropTask[]>();

  // error state
  title_error = false;
  link_error = false;
  keyUnique = true;
  constructor(private _snackBar: MatSnackBar) { }

  saveWithEnterKey(e: any) {
    if (e.keyCode == 13) {
      this.saveTaskProxy();
    }
  }



  ngOnInit(): void {
    this.resetItems();
  }

  resetItems() {
    if (this.tasks == undefined) {
      this.tasks = [];
    }
  }

  resetError() {
    this.title_error = false;
    this.title_error = false;
  }

  saveTaskProxy() {
    this.keyUnique = true;
    this.resetError();
    let fieldOK = true;

    if (this.title!.trim().length == 0) {
      this.title_error = true;
      fieldOK = false;
    }
    if (Validator.correctString(`${this.title}`)) {
      this.title_error = false;
    }
    if (!Validator.correctURL(`${this.link}`)) {
      this.link_error = true;
      fieldOK = false;
    }
    // check if the key is Unique
    for (const task of this.tasks) {
      if (task.title == this.title) {
        this.keyUnique = false;
        break;
      }
    }
    // save the taskerty
    if (fieldOK && this.keyUnique) {
      this.savetask();
    }
  }

  savetask() {
    this.removeError();
    this.tasks.push({ title: this.title, link: this.link });
    this.getTasks.emit(this.tasks);
    this._snackBar.open('Task registered!', 'OK', {
      duration: 2000
    });
    // reset the fields
    this.resetField()
  }

  removeError() {
    this.title_error = false;
    this.link_error = false;
  }

  resetField() {
    this.link = '';
    this.title = '';
    this.resetError();
  }

  editTask(task: AirDropTask) {
    // Delete the task
    this.tasks = this.tasks.filter(function (value: any, index: any, arr: any) {
      return value != task;
    });
    this.title = task.title;
    this.link = task.link
  }

  deleteTask(task: AirDropTask) {
    if (confirm("Do you really want to delete this task?")) {
      this.tasks = this.tasks.filter(function (value: any, index: any, arr: any) {
        return value != task;
      });
      this._snackBar.open('Task deleted!', 'OK', {
        duration: 2000
      });
    }
  }

}
