import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  public database: SQLiteObject;
  constructor(private sqlite: SQLite, private platform: Platform) {
    this.platform.ready().then(() => {
      this.createDb();
    });
  }

  async createDb() {
    await this.sqlite.create({
      name: 'prueba.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.database = db;
      this.createTables();
    }, (error) => {
      console.log('Error al crear BD', error);
    });
  }
  private async createTables() {
    try {
      // eslint-disable-next-line max-len
      await this.database.executeSql('CREATE TABLE IF NOT EXISTS personas(id INTEGER PRIMARY KEY AUTOINCREMENT, nombres TEXT, apellidos TEXT, edad INTEGER, fechaNacimiento TEXT)');
    } catch (e) {
      console.log('error al crear tablas', e);
    }
  }
}
