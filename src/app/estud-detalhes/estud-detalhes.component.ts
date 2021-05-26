import { Component, OnInit, Input } from '@angular/core';
import { Cadastro } from '../cadastro';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-estud-detalhes',
  templateUrl: './estud-detalhes.component.html',
  styleUrls: ['./estud-detalhes.component.css']
})
export class EstudDetalhesComponent implements OnInit {

  @Input() estudante?: Cadastro;

  constructor(
    private route: ActivatedRoute,
    private estudanteService: EstudanteService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEstudante();
  }
  
  getEstudante(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.estudanteService.getEstudante(id)
      .subscribe(estudantes => this.estudante = estudantes);
  }

  voltar(): void {
    this.location.back();
  }

  salvar(): void {
    if (this.estudante) {
      this.estudanteService.updateEstudante(this.estudante)
        .subscribe(() => this.voltar());
    }
  }

}
