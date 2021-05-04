import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro: Cadastro = {
    id: 1,
    nome: 'Guilherme',
    curso: 'Ads',
    idade: 18,
    escola: 'Fatec',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
