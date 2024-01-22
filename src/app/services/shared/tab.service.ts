// shared/tab.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  private currentTabSubject = new BehaviorSubject<string>('home');
  currentTab$: Observable<string> = this.currentTabSubject.asObservable();

  setCurrentTab(tab: string) {
    this.currentTabSubject.next(tab);
  }
}
