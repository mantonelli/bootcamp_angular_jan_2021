import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  PoBreadcrumb,
  PoPageAction,
  PoTableAction,
  PoTableColumn,
} from '@po-ui/ng-components';
import { ClientesService } from './clientes.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Cliente } from './models/clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  subscriptions = new Subscription();

  pageActions: Array<PoPageAction> = [
    { label: 'Incluir', url: 'home/clientes/new' },
  ];

  breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/home' },
      { label: 'Clientes', link: '/home/cliente' },
    ],
  };

  columns: Array<PoTableColumn> = [
    { property: 'id' },
    { property: 'nome', label: 'Nome', type: 'string' },
    { property: 'endereco', label: 'Endereço', type: 'string' },
    { property: 'dataNascimento', label: 'Data Nascimento', type: 'date' },
  ];

  tableActions: Array<PoTableAction> = [
    { label: 'Ver', action: this.onView.bind(this) },
    { label: 'Editar', action: this.onEdit.bind(this) },
  ];

  items$: Observable<any>;

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items$ = this.clientesService.getAll();
  }

  onView(data: Cliente): void {
    this.router.navigate(['home/clientes/view', data.id]);
  }

  onEdit(data: Cliente): void {
    this.router.navigate(['home/clientes/edit', data.id]);
  }
}
