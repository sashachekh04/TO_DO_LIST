import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, Subject, tap } from "rxjs";
import { Task } from "../model/model";
import { taskList } from "../taskData";

@Injectable({
  providedIn: "root"
})
export class TaskDataService {

  public tasks$!: BehaviorSubject<Task[]>

  constructor() {
    this.tasks$ = new BehaviorSubject<Task[]>(taskList)
  }

  public get data(): Subject<Task[]> {
    return this.tasks$
  }
  // public addTask(text: string): void {
  //   const arr = this.tasks$.getValue();
  //   arr.push({
  //     text,
  //     id: this.tasks$.getValue().length + 1,
  //     isCompleted: false
  //   })
  //   this.tasks$.next(arr)
  //   console.log(this.tasks$.getValue())
  // }
}
