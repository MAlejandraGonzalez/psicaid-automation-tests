import { Page } from '@playwright/test';

export class RegistroPage {
  constructor(private page: Page) {}

  private form = this.page.locator('form');

  async completarFormulario(datos: any) {

    await this.form.locator('input').nth(0).fill(datos.nombre);
    await this.form.locator('input').nth(1).fill(datos.apellido);
    await this.form.locator('input').nth(2).fill(datos.email);
    await this.form.locator('input').nth(3).fill(datos.password);
    await this.form.locator('input').nth(4).fill(datos.confirmPassword);

  }

  async enviar() {
    await this.form.locator('button').click();
  }
}







