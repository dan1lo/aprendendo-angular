import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = "monteiro.inf.br";
  cursoAngular:boolean = true;
  urlImagem:string ="http://lorempixel.com/400/200/sports";
  valorAtual:string = "";
  valorSalvo:string = "";
  isMouseOver:boolean = false;
  nome:string = "abc"
  constructor() { }

  ngOnInit() {
  }

  getCurtirCurso(){

    return true;
  }
  getValor() {

    return 1;
  }

  botaoClicado(){

    alert("cliquei");
  }

  onKeyUp(evento: KeyboardEvent){
  this.valorAtual = ((<HTMLInputElement> evento.target).value);

  }

  salvarValor(valor){
   this.valorSalvo = valor;

  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

}
