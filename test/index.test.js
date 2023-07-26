// api.test.js
import { expect } from "chai"; //funcion expect para realizar aserciones en tus pruebas.
import request from "supertest"; // permite hacer solicitudes HTTP a tu API en las pruebas.
import app from "../app.js"; // Importar la aplicación Express

//describe: Es una función proporcionada por Mocha que se utiliza para agrupar pruebas relacionadas
describe("API de register y de manga", () => {
  // Definir un requerimiento o conjunto de pruebas para agregar una tarea
  describe("POST /api/users/register", () => {
    //También función de Mocha y se utiliza para definir prueba específica o requerimiento a ser probado
    it("Debería crear un usuario", async () => {
      const userBody = {
        email: "pepito102017@gmail.com",
        photo:"https://www.google.com/search?sxsrf=AB5stBgiLQVxxmx3S7rlJEIhfR_HaK-Tkg:1690327769151&q=JEST&si=ACFMAn9guiESjt3hsdqUPIy1y2qa0157EysY45UH-07krUGxzv93HurQVyempEug2xXrhHQtStB4k5t_y0Dk5nEspAllN43qRxCLSu17ZldyhFj43dobhfEJO2E3lWZek2yrPJJGsyjk3qtQ2wyW3z3eLjSr9nQaMFP6R7XhTHpFroo-xjXE7oDGA3-9bel7Uh1uYMTyqf-nuEl5O15jFgXXvWkvT6DXmRatr1MT5NJTN2Kt_dJ4BQvUvb-dCaa6HrjxtJkg8W44Ijm2Xbc8xFiI2l3HKr1AZcDNVNZvQ8TRpkBBpAiD9Yc%3D&sa=X&sqi=2&ved=2ahUKEwiDqe_RgauAAxUAspUCHYNLAjgQxA16BAhMEAU",
        password: "hola675643",
      };
      const respuesta = await request(app)
        .post("/api/users/register")
        .send(userBody); //para enviar datos al servidor en el cuerpo de la solicitud.
      expect(respuesta.status).to.equal(201);
    });
  });

  // Definir un requerimiento o conjunto de pruebas para obtener la lista de tareas
  describe("GET /api/mangas/:id", () => {
    it("Debería obtener el manga solicitado", async () => {
      const respuesta = await request(app).get(
        "/api/mangas/64a632ed371773eb1edebcaa"
      );
      expect(respuesta.status).to.equal(200);
      expect(respuesta.body).to.be.an("object");
    });
  });
  
  describe("POST /api/create_preference", () => {
    it("Debería crear una preferencia", async () => {
      const preferenceBody = {
        description: "Gracias por la donación",
        price: 5000,
      };
      const respuesta = await request(app)
        .post("/api/create_preference")
        .send(preferenceBody); //send es una función que toma un objeto y envía ese objeto como datos en el cuerpo de la solicitud HTTP
      expect(respuesta.status).to.equal(200);
      expect(respuesta.body).to.be.an("object");
      expect(respuesta.body).to.have.property("id");
    });
  });
});
