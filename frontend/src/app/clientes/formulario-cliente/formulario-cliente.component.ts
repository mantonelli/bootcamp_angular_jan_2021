import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  PoBreadcrumb,
  PoComboOption,
  PoNotificationService,
  PoSelectOption,
} from '@po-ui/ng-components';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CidadesService } from 'src/app/shared/servicos/cidades.service';
import { EstadosService } from 'src/app/shared/servicos/estados.service';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../models/clientes';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css'],
})
export class FormularioClienteComponent implements OnInit {
  titulo = '';
  breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home' }, { label: 'Cliente' }],
  };

  sexoOpt: Array<PoSelectOption> = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' },
    { label: 'Prefiro não informar', value: 'P' },
  ];

  estadoOpt: Array<PoComboOption>;
  cidadeOpt: Array<PoComboOption>;

  altera = false;

  clienteForm: FormGroup;

  constructor(
    private clienteService: ClientesService,
    private estadoService: EstadosService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private notofocationService: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.configForm();
    this.configEstados();
    this.configCliente();
  }

  private configCliente() {
    this.route.params
      .pipe(
        switchMap((params) => {
          const { id } = params;
          if (id) {
            this.altera = true;
            return this.clienteService.getCliente(id);
          }

          return of({} as Cliente);
        })
      )
      .subscribe((cliente) => {
        if (cliente && cliente.id) {
          this.titulo = `Cliente ${cliente.nome}`;
          this.clienteForm.patchValue(cliente);
        } else {
          this.titulo = `Novo cliente`;
        }
      });
  }

  private configForm() {
    this.clienteForm = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required]],
      sexo: [''],
      dataNascimento: [''],
      endereco: [''],
      estado: [''],
      cidade: [''],
    });
  }

  private configEstados(): void {
    this.estadoService
      .getAll()
      .pipe(
        map((estados) =>
          estados.map((estado) => ({ label: estado.nome, value: estado.id }))
        )
      )
      .subscribe((estadoOpt) => (this.estadoOpt = estadoOpt));
  }

  configCidades(id: string): void {
    console.dir(id);
    this.estadoService
      .getCidades(id)
      .pipe(
        map((cidades) =>
          cidades.map((cidade) => ({ label: cidade.nome, value: cidade.id }))
        )
      )
      .subscribe((cidadeOpt) => (this.cidadeOpt = cidadeOpt));
  }
  onCancel() {
    window.history.back();
  }

  onSave() {
    let obs$: Observable<Cliente>;
    let message: string;
    const cliente: Cliente = { ...this.clienteForm.value };

    if (this.altera) {
      obs$ = this.clienteService.editCliente(cliente.id, cliente);
      message = `Cliente ${cliente.nome} alterado`;
    } else {
      obs$ = this.clienteService.insertCliente(cliente);
      message = `Cliente ${cliente.nome} incluído`;
    }

    obs$.subscribe((_) => {
      this.notofocationService.success(message);
      this.router.navigate(['/home/clientes']);
    });
  }
}
