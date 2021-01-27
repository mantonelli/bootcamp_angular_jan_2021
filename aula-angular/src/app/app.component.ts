import { Component } from '@angular/core';
import { Alunos } from './alunos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'aula-angular';

  listaAlunos: Alunos = [
    { nome: 'Matheus', dataNascimento: '02/28/2020' },
    { nome: 'Fulano', dataNascimento: '10/30/1980' },
  ];
}
