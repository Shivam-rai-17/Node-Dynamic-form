const request = require('supertest');
const app = require('../index');

describe('GET /api/data', () => {
  let serverInstance;

  beforeAll(() => {
    serverInstance = app.listen(5000);
  });

  afterAll((done) => {
    serverInstance.close(done);
  });

  it('should return data', async () => {
    const response = await request(app).get('/api/data');

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
});
