import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro';
import { EstudanteService } from '../estudante.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  estudantes: Cadastro[] = [];

  constructor(private estudanteService: EstudanteService) { }

  ngOnInit() {
    this.getEstudantes();
  }

  getEstudantes(): void {
    this.estudanteService.getEstudantes()
      .subscribe(estudante => this.estudantes = estudante.slice(1, 5));
  }
}