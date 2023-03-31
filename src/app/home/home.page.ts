import { Component, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage {
  phone: string | undefined;
  message: string | undefined;

  @ViewChild('form') form!: NgForm;

  constructor() {}

  onSubmit() {
    if (!this.form.valid) return;

    const fullPhoneAr = `549${this.phone}`;
    const url = new URL(`https://wa.me/${fullPhoneAr}`);

    if (typeof this.message === 'string') {
      url.searchParams.set('text', this.message);
    }

    window.location.href = url.toString();
  }
}
