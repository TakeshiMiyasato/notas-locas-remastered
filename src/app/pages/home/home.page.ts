import { Component, OnInit } from '@angular/core';
import { PersonaBLL } from '../../../dal/bll/PersonaBLL';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listaPersonas: any[];
  objPersonaBLL: PersonaBLL = new PersonaBLL();
  constructor(private dbService: DbService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }
  cargarDatos() {
    this.objPersonaBLL.selectAll(this.dbService)
      .then((res) => {
        if (res.rows.length > 0) {
          this.listaPersonas = [];
          for (let i = 0; i < res.rows.length; i++) {
            const row = res.rows.item(i);
            //TODO: Convertir en un objeto persona
            this.listaPersonas.push(row);
          }
        }
      })
      .catch(error => {
        console.log('Error en cargarDatos', error);
      });
  }

}
