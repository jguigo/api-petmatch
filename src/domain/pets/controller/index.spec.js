const supertest = require("supertest");
const app = require("../../../shared/infra/http/app");
var FormData = require("form-data");

let token;
beforeAll(done => {
    supertest(app)
        .post("/login")
        .send({ email: "teste12@teste.com", senha: "teste123" })
        .end((err, response) => {
            token = response.body.token;
            done();
        });
});

describe("Testes na rota /pets", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
        const StatusEsperado = await supertest(app).get("/pets");
        expect(StatusEsperado.status).toBe(200);
    });
    test("Em caso de sucesso, retornar o status 200", async () => {
        const StatusEsperado = await supertest(app).get("/pets/6");
        expect(StatusEsperado.status).toBe(200);
    });
    test("Em caso de sucesso, retornar o status 400", async () => {
        const StatusEsperado = await supertest(app).get("/pets/200");
        expect(StatusEsperado.status).toBe(400);
    });
    test("Em caso de sucesso, deve retornar mensagem de erro", async () => {
        const BodyEsperado = await supertest(app).get("/pets/200");
        expect(BodyEsperado.body).toBe("Nenhum pet cadastrado com este ID!");
    });
    describe("deletar um pet", ()=>{
        test("Em caso de sucesso, retornar o status 204", async () => {
            const expectResponse = await supertest(app)
            .delete("/pets/2")
            .set('Authorization', `Bearer ${token}`)
              expect(expectResponse.status).toBe(204);
          });
    })
});
