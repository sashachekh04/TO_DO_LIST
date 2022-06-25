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
  public addTask(text: string, priority: number): void {
    const newTask = {
      text,
        id: this.tasks$.getValue().length + 1,
      isCompleted: false,
      priority
    }
    this.tasks$.next([...this.tasks$.value, newTask])
  }

  public deleteTask(id: number): void {
    const arr = this.tasks$.value.filter(item => item.id !== id)
    this.tasks$.next(arr)
  }
}
