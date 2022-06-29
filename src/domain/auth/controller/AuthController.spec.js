const supertest = require("supertest");
const app = require("../../../shared/infra/http/app");

describe("Teste de login", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
        const StatusEsperado = await supertest(app).
        post("/login").send({"email": "Hamill54@hotmail.com",
        "senha": "teste"
        })
        expect(StatusEsperado.status).toBe(200);
    });
    test("Ao enviar email errado, retornar o status 400", async () => {
        const StatusEsperado = await supertest(app).
        post("/login").send({"email": "e@hotmail.com",
        "senha": "teste"
        })
        expect(StatusEsperado.status).toBe(400);
    });
    test("Ao enviar senha errada, retornar o status 400", async () => {
        const StatusEsperado = await supertest(app).
        post("/login").send({"email": "Hamill54@hotmail.com",
        "senha": "t"
        })
        expect(StatusEsperado.status).toBe(400);
    });
});


