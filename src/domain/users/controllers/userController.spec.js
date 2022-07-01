const supertest = require("supertest");
const app = require("../../../shared/infra/http/app");

describe("Listar todos os users", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
        const StatusEsperado = await supertest(app).get("/users");
        expect(StatusEsperado.status).toBe(200);
    });
});
describe("Listar users por id", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
        const StatusEsperado = await supertest(app).get("/users/2");
        expect(StatusEsperado.status).toBe(200);
    });
});
describe("Listar users inexistente", () => {
    test("Em caso de sucesso, retornar o status 404", async () => {
        const StatusEsperado = await supertest(app).get("/users/200");
        expect(StatusEsperado.status).toBe(404);
    });
});
describe("Dados recebidos", () => {
    test("Em caso de sucesso, deve retornar os atributos desejados", async () => {
        const BodyEsperado = await supertest(app).get("/users/2");
        expect(BodyEsperado.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nome: expect.any(String),
                email: expect.any(String),
                cidade: expect.any(String),
                uf: expect.any(String),
            }),
        );
    });
});
