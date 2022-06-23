const supertest = require('supertest');
const app = require('../../../shared/infra/http/app');

describe("Listar todos os users", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
      const expectResponse = await supertest(app)
        .get('/users')
      expect(expectResponse.status).toBe(200);
    });
  });