import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageSvc: DataStorageService) { }

  ngOnInit() {
  }

  onSaveDate() {
    this.dataStorageSvc.storeRecipes();
  }

  onFetchData() {
    this.dataStorageSvc.fetchRecipes();
  }
}
