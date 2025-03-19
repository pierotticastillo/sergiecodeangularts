import { Component, OnInit } from '@angular/core';
import { cursos } from './mock';
import { NgFor } from '@angular/common';
import { Curso } from '../../models/curso.dto';

@Component({
  selector: 'app-tabla-cursos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tabla-cursos.component.html',
  styleUrl: './tabla-cursos.component.css',
})
export class TablaCursosComponent implements OnInit {
  public cursos?: Curso[];

  ngOnInit(): void {
    this.cursos = cursos;
  }
}
