import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/Models/Categoria';
import { FutebolService } from '../../Service/futebol.service';

@Component({
  selector: 'app-get-local',
  templateUrl: './getAll-local.component.html',
  styleUrls: ['./getAll-local.component.css']
})
export class GetAllLocalComponent implements OnInit {

  response: any;
  constructor(private service: FutebolService) { }

  ngOnInit(): void {
    this.getLocal();
  }

  getLocal() {
    this.response = this.service.getFromLocal("@item");
  }

  onSubmit() {
    this.service.saveOnLocal(JSON.stringify(this.response));
    alert("Salvo com sucesso!");
  }

  onDeleteCategoria(index: number): void {
    if (index > -1) {
      this.response.categorias.splice(index, 1);
    }
  }
  onDeleteGrupo(indexCategoria: number, indexGrupo: number): void {
    this.response.categorias[indexCategoria].grupos.splice(indexGrupo, 1);
    console.log(this.response)
  }
  onDeleteTime(indexCategoria: number, indexTime: number): void {
    this.response.categorias[indexCategoria].times.splice(indexTime, 1);
  }
}
