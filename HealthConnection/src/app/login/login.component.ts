import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente';
import { PacienteService } from './paciente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  paciente:Paciente=new Paciente();

  constructor(private pacienteservice: PacienteService, private router: Router) { }

  ngOnInit(): void { }
  getCredenciales(): void {
    //no mandar por url ---mandar en body
    console.log(this.paciente);
    this.pacienteservice.getCredenciales(this.paciente).subscribe(
      (response) => {
        console.log(response)
        if (response) {
            this.router.navigate(['login/gestionCitas'])
            console.log("Registro exitoso");
        }
      },
      (error) => {
        if (error.error && error.error.mensajes && error.error.mensajes.length > 0) {
          const mensajeDeError = error.error.mensajes[0];
          alert(mensajeDeError);
        }
      }
    );
  }
}