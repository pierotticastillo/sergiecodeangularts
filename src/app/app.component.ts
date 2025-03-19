import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, RouterOutlet, TablaCursosComponent, TablaAlumnosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cursos: boolean = false;
  changeOptions() {
    this.cursos = !this.cursos;
  }
  title = 'sergiecodeangularts';
}
