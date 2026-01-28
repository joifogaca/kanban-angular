import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-cartao',
  standalone: true,
  imports: [],
  templateUrl: './add-cartao.component.html',
  styleUrl: './add-cartao.component.scss'
})
export class AddCartaoComponent {
  fecharEmit = output();
  fechar() {
    this.fecharEmit.emit();
  }

}
