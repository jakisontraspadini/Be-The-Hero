const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('incident', () => {
  beforeEach( async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll( async () => {
    await connection.destroy();
  });
  
  it('shoul be able to create a new Incident', async () => {
    const response = await request(app)
      .post('/incidents')
      .set('Authorization', '4cc1399d')
      .send({
        title: "Teste",
        description: "Teste de funcionalidade",
        value: "200",
        ong_id: "4cc1399d",
      });
  });
});