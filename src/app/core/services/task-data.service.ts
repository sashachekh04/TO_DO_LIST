import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, Subject, tap } from "rxjs";
import { Task } from "../model/model";
import { taskList } from "../taskData";

@Injectable({
  providedIn: "root"
})
export class TaskDataService {

  public tasks$!: BehaviorSubject<Task[]>
  public changeTask!: Task;

  constructor() {
    this.tasks$ = new BehaviorSubject<Task[]>(this.sortTasks(taskList))
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
    this.tasks$.next(this.sortTasks([...this.tasks$.value, newTask]))
  }

  public deleteTask(id: number): void {
    const arr = this.tasks$.value.filter(item => item.id !== id)
    this.tasks$.next(this.sortTasks(arr))
  }

  public setChangedTask(t: Task): void {
    this.changeTask = t;
  }
  public get taskForChange(): Task {
    return this.changeTask
  }
  public saveChangedTask(t: Task, text: string, priority: number): void {
    const changedTask = t;
    changedTask.text = text;
    changedTask.priority = priority;
    const arr = this.tasks$.value.filter(item => item.id != t.id)
    this.tasks$.next(this.sortTasks([...arr, changedTask]))
  }

  private sortTasks(arr : Task[]): Task[] {
    return arr.sort((a,b) => b.priority - a.priority)
  }
}
