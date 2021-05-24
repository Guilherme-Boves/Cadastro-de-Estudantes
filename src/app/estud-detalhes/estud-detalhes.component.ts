import { Component, OnInit, Input } from '@angular/core';
import { Cadastro } from '../cadastro';

@Component({
  selector: 'app-estud-detalhes',
  templateUrl: './estud-detalhes.component.html',
  styleUrls: ['./estud-detalhes.component.css']
})
export class EstudDetalhesComponent implements OnInit {

  @Input() estudante?: Cadastro;

  constructor() { }

  ngOnInit(): void {
  }

}
