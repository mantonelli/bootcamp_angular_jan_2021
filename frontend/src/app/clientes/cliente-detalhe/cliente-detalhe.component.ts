import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoDialogService, PoNotificationService } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { CidadesService } from 'src/app/shared/servicos/cidades.service';
import { EstadosService } from 'src/app/shared/servicos/estados.service';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../models/clientes';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css'],
})
export class ClienteDetalheComponent implements OnInit {
  titulo = '';
  cliente: Cliente;

  constructor(
    private clientesService: ClientesService,
    private route: ActivatedRoute,
    private alertService: PoDialogService,
    private notificationService: PoNotificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const { id } = params;

      if (id) {
        this.clientesService.getCliente(id).subscribe((cliente) => {
          this.cliente = cliente;
        });
      }
    });
  }

  get sexo(): string {
    const sexoOpt = {
      M: 'Masculino',
      F: 'Feminino',
      P: 'Prefiro não informar',
    };

    return sexoOpt[this.cliente?.sexo] ?? sexoOpt.P;
  }

  onRemove() {
    this.alertService.confirm({
      title: 'Pergunta',
      message: `Deseja realmente apagar o cliente ${this.cliente.nome}?`,
      confirm: () => {
        this.removeCliente(this.cliente.id);
      },
    });
  }

  onEdit() {
    this.router.navigate(['home/clientes/edit', this.cliente.id]);
  }

  onBack() {
    window.history.back();
  }

  private removeCliente(id: string) {
    this.clientesService.deleteCliente(id).subscribe((_) => {
      this.notificationService.success({
        message: 'Cliente removido com sucesso',
      });
      this.router.navigate(['/home/clientes']);
    });
  }
}
