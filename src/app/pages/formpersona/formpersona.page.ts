import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaBLL } from 'src/dal/bll/PersonaBLL';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-formpersona',
  templateUrl: './formpersona.page.html',
  styleUrls: ['./formpersona.page.scss'],
})
export class FormpersonaPage implements OnInit {
  objPersona = {
    nombres: '',
    apellidos: '',
    edad: 0,
    fechaNacimiento: ''
  };
  objPersonaBLL: PersonaBLL = new PersonaBLL();

  constructor(private dbService: DbService, private router: Router) { }

  ngOnInit() {
  }
  guardarPersona() {
    this.objPersonaBLL.insert(
      this.dbService,
      this.objPersona.nombres,
      this.objPersona.apellidos,
      this.objPersona.edad,
      this.objPersona.fechaNacimiento
    ).then(() => {
      this.router.navigate(['/home']);
    }).catch(error => {
      console.log('Error al insertar', error);
    });
  }

}
