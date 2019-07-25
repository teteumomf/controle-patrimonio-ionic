import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

@Injectable()
export class SubcategoryProvider {

  constructor(private dbProvider: DatabaseProvider) { }


  public getAllSub() {
    return this.dbProvider.getDB()
    .then((db: SQLiteObject) => {

      return db.executeSql('select * from subcategories', [])
        .then((data: any) => {
          if (data.rows.length > 0) {
            let subcategories: any[] = [];
            for (var i = 0; i < data.rows.length; i++) {
              var subcategory = data.rows.item(i);
              subcategories.push(subcategory);
            }
            return subcategories;
          } else {
            return [];
          }
        })
        .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
  }

  public getAllSubOne() {
    return this.dbProvider.getDB()
    .then((db: SQLiteObject) => {
8
      return db.executeSql('SELECT s.* FROM subcategories s WHERE s.cat_id = 1', [])
        .then((data: any) => {
          if (data.rows.length > 0) {
            let subcategories: any[] = [];
            for (var i = 0; i < data.rows.length; i++) {
              var subcategory = data.rows.item(i);
              subcategories.push(subcategory);
            }
            return subcategories;
          } else {
            return [];
          }
        })
        .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
  }

  public getAllSubTwo() {
    return this.dbProvider.getDB()
    .then((db: SQLiteObject) => {

      return db.executeSql('SELECT s.* FROM subcategories s WHERE s.cat_id = 2', [])
        .then((data: any) => {
          if (data.rows.length > 0) {
            let subcategories: any[] = [];
            for (var i = 0; i < data.rows.length; i++) {
              var subcategory = data.rows.item(i);
              subcategories.push(subcategory);
            }
            return subcategories;
          } else {
            return [];
          }
        })
        .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
  }

  public getAllSubThree() {
    return this.dbProvider.getDB()
    .then((db: SQLiteObject) => {

      return db.executeSql('SELECT s.* FROM subcategories s WHERE s.cat_id = 3', [])
        .then((data: any) => {
          if (data.rows.length > 0) {
            let subcategories: any[] = [];
            for (var i = 0; i < data.rows.length; i++) {
              var subcategory = data.rows.item(i);
              subcategories.push(subcategory);
            }
            return subcategories;
          } else {
            return [];
          }
        })
        .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
  }
}
