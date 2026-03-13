import { test, expect } from '@playwright/test';
import { RegistroPage } from '../pages/RegistroPage';
import registroData from '../data/registroData.json';

for (const datos of registroData) {

  test(`Registro en PSICAID`, async ({ page }) => {

    const registro = new RegistroPage(page);

    const emailDinamico = `usuario${Date.now()}@test.com`;
    datos.email = emailDinamico;

    await page.goto("https://i006-psicaid-fullstack.vercel.app/register");

    await registro.completarFormulario(datos);

    await registro.enviar();

    await expect(page).not.toHaveURL(/register/);

  });

}
