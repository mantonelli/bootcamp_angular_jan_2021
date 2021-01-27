import { Component, Input, OnInit } from '@angular/core';
import { Alunos } from '../alunos';

@Component({
  selector: 'app-exemplos-angular',
  templateUrl: './exemplos-angular.component.html',
  styleUrls: ['./exemplos-angular.component.css'],
})
export class ExemplosAngularComponent {
  @Input()
  listaAlunos!: Alunos;

  labelButton = 'Mostrar alunos';
  mostraLista = false;

  mostrarAlunos() {
    this.mostraLista = !this.mostraLista;
    this.labelButton = this.mostraLista ? 'Esconder alunos' : 'Mostrar alunos';
  }
}
