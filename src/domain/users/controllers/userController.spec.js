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
    test("Em caso de sucesso, retornar o status 404", async () => {
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
                email: expect.any(String),
                cidade: expect.any(String),
                uf: expect.any(String),
            }),
        );
    });
});
describe("Registrar usuário", () => {
    test("Em caso de sucesso, retornar o status 201", async () => {
        const fakeName = faker.name.findName();
        const fakeEmail = faker.internet.email();
        const fakeCpf = faker.random.numeric(11, { allowLeadingZeros: false });
        const pass = faker.random.alpha(10);
        const novaSenha = bcrypt.hashSync(pass, 10);
        const fakeContato = faker.random.numeric(8);
        const fakeCep = faker.random.numeric(8, { allowLeadingZeros: false });
        const fakeLogradouro = faker.address.street();
        const fakeNumero = faker.random.numeric(3);
        const fakeComplemento = faker.address.buildingNumber();
        const fakeBairro = faker.name.findName();
        const fakeCidade = faker.address.cityName();
        const fakeUf = faker.address.state();
        const fakeSobre = faker.lorem.words(10);

        const expectResponse = await supertest(app).post("/users").send({
            nome: fakeName,
            email: fakeEmail,
            cpf: fakeCpf,
            senha: novaSenha,
            contato: fakeContato,
            cep: fakeCep,
            logradouro: fakeLogradouro,
            numero_logradouro: fakeNumero,
            complemento: fakeComplemento,
            bairro: fakeBairro,
            cidade: fakeCidade,
            uf: fakeUf,
            sobre: fakeSobre
        });
        expect(expectResponse.status).toBe(201);
    });
});

});

