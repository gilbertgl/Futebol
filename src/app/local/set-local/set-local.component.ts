import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FutebolService } from '../../Service/futebol.service';

@Component({
  selector: 'app-set-local',
  templateUrl: './set-local.component.html',
  styleUrls: ['./set-local.component.css']
})
export class SetLocalComponent implements OnInit {
  formCategorias: FormGroup;

  constructor(private fb: FormBuilder, private service: FutebolService,
    private route: Router) { }

  ngOnInit(): void {
    this.createFormCategorias();
  }

  createFormCategorias() {

    if (!this.service.getFromLocal("@item") || !this.service.getFromLocal("@item").categorias || this.service.getFromLocal("@item").categorias.length == 0) {
      this.formCategorias = this.fb.group(
        {
          categorias: this.fb.array([this.addCategoria()])
        }
      )
    }
  else {
       this.formCategorias = this.fb.group(
         {
           categorias: this.fb.array([])
         })
     };

    if (this.service.getFromLocal("@item")) {
      this.service.getFromLocal("@item").categorias.forEach(categoria => {

        var grupos = new Array();
        var times = new Array();
        var timesGrupo = new Array();

        if (categoria.grupos && categoria.grupos.times) {
          categoria.grupos.times.forEach(time => {

            timesGrupo.push(

              this.fb.group(
                {
                  nomeTime: (time.nomeTime),
                  cabecaDeChave: (time.cabecaDeChave)
                }
              )

            );

          });
        }

        if (categoria.grupos) {
          categoria.grupos.forEach(grupo => {

            grupos.push(

              this.fb.group(
                {
                  nomeGrupo: (grupo.nomeGrupo),
                  times: this.fb.array(timesGrupo)
                })

            );

          });
        }

        if (categoria.times) {
          categoria.times.forEach(time => {

            times.push(

              this.fb.group(
                {
                  nomeTime: (time.nomeTime),
                  cabecaDeChave: (time.cabecaDeChave)
                }
              )

            );

          });
        }

        var categoriaDB = this.fb.group(
          {
            descricao: (categoria.descricao),
            grupos: this.fb.array(grupos),
            times: this.fb.array(times)
          });

        this.categorias().push(categoriaDB);


      });
    }
  }

  //Categorias
  categorias(): FormArray {
    return this.formCategorias.get("categorias") as FormArray;
  }
  addCategoria(): FormGroup {
    return this.fb.group(
      {
        descricao: (null),
        grupos: this.fb.array([]),
        times: this.fb.array([])
      }
    )
  }
  addNewCategoria() {
    this.categorias().push(this.addCategoria());
  }
  removeCategoria(index: number) {
    this.categorias().removeAt(index);
  }

  //Grupos
  grupos(index: number): FormArray {
    return this.categorias().at(index).get("grupos") as FormArray;
  }
  addGrupo(): FormGroup {
    return this.fb.group(
      {
        nomeGrupo: (null),
        times: this.fb.array([])
      }
    )
  }
  addNewGrupo(index: number) {
    this.grupos(index).push(this.addGrupo());
  }
  removeGrupo(indexCategoria: number, indexGrupo: number) {
    this.grupos(indexCategoria).removeAt(indexGrupo);
  }

  //Times
  times(index: number): FormArray {
    return this.categorias().at(index).get("times") as FormArray;
  }
  addTime(): FormGroup {
    return this.fb.group(
      {
        nomeTime: (null),
        cabecaDeChave: (false)
      }
    )
  }
  addNewTime(indexCategoria: number) {
    this.times(indexCategoria).push(this.addTime());
  }
  removeTime(indexCategoria: number, indexTime: number) {
    this.times(indexCategoria).removeAt(indexTime);
  }

  onSubmit() {
    this.service.saveOnLocal(JSON.stringify(this.formCategorias.value));
    alert("Salvo com sucesso!");
    this.route.navigate([""]);
  }
}
