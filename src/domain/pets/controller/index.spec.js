const supertest = require("supertest");
const app = require("../../../shared/infra/http/app");


describe("Testes na rota /pets", () => {
describe("Listar todos os pets", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
        const StatusEsperado = await supertest(app).get("/pets");
        expect(StatusEsperado.status).toBe(200);
    });
});
describe("Listar pets por id", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
        const StatusEsperado = await supertest(app).get("/pets/6");
        expect(StatusEsperado.status).toBe(200);
    });
});
describe("Listar pet inexistente", () => {
    test("Em caso de sucesso, retornar o status 404", async () => {
        const StatusEsperado = await supertest(app).get("/pets/200");
        expect(StatusEsperado.status).toBe(400);
    });
});

});

