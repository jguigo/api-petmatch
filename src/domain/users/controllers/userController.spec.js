const supertest = require("supertest");
const app = require("../../../shared/infra/http/app");
const bcrypt = require("bcryptjs");
const { faker } = require("@faker-js/faker");

describe("Testes na rota /users", () => {
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
    test("Em caso de sucesso, retornar o status 400", async () => {
        const StatusEsperado = await supertest(app).get("/users/200");
        expect(StatusEsperado.status).toBe(400);
    });
});
describe("Dados recebidos", () => {
    test("Em caso de sucesso, deve retornar os atributos desejados", async () => {
        const BodyEsperado = await supertest(app).get("/users/2");
        expect(BodyEsperado.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nome: expect.any(String),
                senha: expect.any(String),
            }),
        );
    });
});
describe("Registrar usuário", () => {
    test("Em caso de sucesso, retornar o status 201", async () => {
        const fakeName = faker.name.findName();
        const fakeEmail = faker.internet.email();
        const pass = faker.random.alpha(10);
        const novaSenha = bcrypt.hashSync(pass, 10);
        const expectResponse = await supertest(app).post("/users").send({
            nome: fakeName,
            email: fakeEmail,
            senha: novaSenha,
        });
        expect(expectResponse.status).toBe(201);
    });
});

});

