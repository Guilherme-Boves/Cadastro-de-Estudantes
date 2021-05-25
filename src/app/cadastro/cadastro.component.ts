import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro';
import { EstudanteService } from '../estudante.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  selectedestudante?: Cadastro;

  estudantes: Cadastro[] = [];

  constructor(private estudanteService: EstudanteService, private messageService: MessageService) {}

  ngOnInit() {
  this.getEstudantes();
}

onSelect(ESTUDANTES: Cadastro): void {
  this.selectedestudante = ESTUDANTES;
  this.messageService.add(`HeroesComponent: Selected hero id=${ESTUDANTES.id}`);
}

getEstudantes(): void {
  this.estudanteService.getEstudantes()
      .subscribe(estudante => this.estudantes = estudante);
}

}
