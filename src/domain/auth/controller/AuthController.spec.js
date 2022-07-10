const supertest = require("supertest");
const app = require("../../../shared/infra/http/app");



describe("Testes na rota /login", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
        const statusEsperado = await supertest(app).
        post("/login").send({"email": "teste12@teste.com",
        "senha": "teste123"
        })
        expect(statusEsperado.status).toBe(200);
    });
    test("Em caso de sucesso, deve retornar um token", async () => {
        const tokenEsperado = await supertest(app).
        post("/login").send({"email": "teste12@teste.com",
        "senha": "teste123"
        })
        expect(tokenEsperado.body.token).toEqual(expect.any(String));
    });
    test("Em caso de sucesso, deve retornar dados via body", async () => {
        const tokenEsperado = await supertest(app).
        post("/login").send({"email": "teste12@teste.com",
        "senha": "teste123"
        })
        expect(tokenEsperado.body).toEqual(expect.objectContaining({
            id: expect.any(Number),
            userStatus: expect.any(Boolean),
            permissao: expect.any(String),
            token: expect.any(String),
        }),
        );
    });
    test("Ao enviar email errado, retornar o status 400", async () => {
        const statusEsperado = await supertest(app).
        post("/login").send({"email": "e@hotmail.com",
        "senha": "teste"
        })
        expect(statusEsperado.status).toBe(400);
    });
    test("Ao enviar senha errada, retornar o status 400", async () => {
        const statusEsperado = await supertest(app).
        post("/login").send({"email": "Hamill54@hotmail.com",
        "senha": "t"
        })
        expect(statusEsperado.status).toBe(400);
    });
});



