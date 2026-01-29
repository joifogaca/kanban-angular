import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ResponsavelService } from '../shared/responsavel.service';
import { Responsavel, Prioridade } from './../shared/card.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-add-cartao',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './add-cartao.component.html',
  styleUrl: './add-cartao.component.scss'
})
export class AddCartaoComponent {
  fecharEmit = output();
  responsaveis: Responsavel[] = [];
  prioridades: Prioridade[] = []

  constructor(private readonly responsavelService: ResponsavelService) {
    this.responsaveis = responsavelService.responsaveis();
  }

  tarefaForm = new FormGroup({
    nomeTarefa: new FormControl('',[Validators.required,Validators.minLength(10)]),
    responsavel: new FormControl('',[Validators.required]),
    prioridade: new FormControl('',[Validators.required])
  })
  fechar() {
    this.fecharEmit.emit();
  }

  confirmar() {
    console.log(this.tarefaForm.value);
  }

}
