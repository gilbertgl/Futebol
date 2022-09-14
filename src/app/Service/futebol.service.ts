import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FutebolService {

constructor() { }
  saveOnLocal(item: string) {
    localStorage.setItem("@item", item);
  }

  getFromLocal(item: string) {
    const result = localStorage.getItem(item)!;
    return JSON.parse(result);
  }

  deleteFromLocal(item: string) {
    
  }
}
