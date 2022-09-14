import { Component, OnInit } from '@angular/core';
import { FutebolService } from 'src/app/Service/futebol.service';

@Component({
  selector: 'app-get-local',
  templateUrl: './get-local.component.html',
  styleUrls: ['./get-local.component.css']
})
export class GetLocalComponent implements OnInit {

  response: any;
  sorteando?: boolean;
  categoriaSelecionada: string;
  constructor(private service: FutebolService) { }

  ngOnInit(): void {
    this.getLocal();
  }

  getLocal() {
    this.response = this.service.getFromLocal("@item");
  }



  selecionarCategoria(nome: string) {
    this.categoriaSelecionada = nome;
  }


  getCategoriaSelecionada(): any {

    var categorias = this.response.categorias.filter(el => !this.categoriaSelecionada || el.descricao == this.categoriaSelecionada);

    return categorias.sort(this.compare);
  }

  compare(a, b): any {
    if (a.descricao < b.descricao) {
      return -1;
    }
    if (a.descricao > b.descricao) {
      return 1;
    }
    return 0;
  }


  preSorteio(categoria: any) {

    this.sorteando = true;

    categoria.grupos.forEach(grupo => {
      grupo.times = new Array();
    });

    setTimeout(() => {

      this.sorteio(categoria);

    }, 5000);

  }

  sorteio(categoria: any) {

    var timesCabecaChave = categoria.times.filter(el => el.cabecaDeChave);
    var timesGrupo = categoria.times.filter(el => !el.cabecaDeChave);

    if (timesCabecaChave) {
      var index = 0;
      this.shuffleArray(timesCabecaChave).forEach(time => {
        categoria.grupos[index].times.push(time.nomeTime);
        index++;
      })
    }

    if (timesGrupo) {
      var index = 0;
      this.shuffleArray(timesGrupo).forEach(time => {
        categoria.grupos[index].times.push(time.nomeTime);
        index++;
      })
    }

    this.service.saveOnLocal(JSON.stringify(this.response));

    this.sorteando = false;
  }

  shuffleArray(times: any) {

    var novoArray = new Array();
    var m = times.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = times[m];
      times[m] = times[i];
      times[i] = t;
      novoArray.push(times[m]);
    }

    return novoArray;
  }
}
