import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Futebol';

  formCategorias: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createFormCategorias();
  }

  createFormCategorias() {
    this.formCategorias = this.fb.group(
      {
        categorias: this.fb.array([this.addCategoria()])
      }
    )
  }

  addCategoria() {
    return this.fb.group(
      {
        descricao: (null),
        grupos: this.fb.array([this.addGrupo()])
      }
    )
  }

  addGrupo() {
    return this.fb.group(
      {
        nomeGrupo: (null),
        times: new FormArray([this.addTime()])
      }
    )
  }

  addTime() {
    return this.fb.group(
      {
        nomeTime: (null)
      }
    )
  }

  onSubmit(){
    console.log(JSON.stringify(this.formCategorias.value))
  }

  get categorias() {
    return this.formCategorias.get("categorias") as FormArray;
  }

  get grupos() {
    return this.categorias.get("grupos") as FormArray;
  }

  get times() {
    return this.grupos.get("times") as FormArray;
  }

  addNewCategoria() {
    this.categorias.push(this.addCategoria());
  }

  addNewGrupo() {
    this.grupos.push(this.addGrupo());
  }

  addNewTime() {
    this.times.push(this.addTime());
  }

  removeCategoria(index: Required<number>) {
    this.categorias.removeAt(index);
  }

  removeGrupo(index: Required<number>) {
    this.grupos.removeAt(index);
  }

  removeTime(index: Required<number>) {
    this.times.removeAt(index);
  }
}
