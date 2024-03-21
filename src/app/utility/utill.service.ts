import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtillService {
title:any=""

  public dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public data$: Observable<any> = this.dataSubject.asObservable();

  constructor() { }

  setData(data: any) {
    this.dataSubject.next(data);
  }
}
