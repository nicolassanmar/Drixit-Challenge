import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, VersioningType } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('GET /api/v0/users/me', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.setGlobalPrefix('api/');

    app.enableVersioning({
      type: VersioningType.URI,
    });
    await app.init();
  });

  it('A should return the user info for authenticated users)', () => {
    return request(app.getHttpServer())
      .post('/api/v0/authenticate')
      .send({ email: 'it@drixit.com', password: 'some-password' })
      .expect(201)
      .then(async (response) => {
        const { jwt } = response.body;
        return request(app.getHttpServer())
          .get('/api/v0/users/me')
          .set('Authorization', `Bearer ${jwt}`)
          .expect(200)
          .expect((res) => {
            expect(res.body.id).toBe('it-drixit-1');
          });
      });
  });

  it('should not return the user info for unauthenticated users)', () => {
    return request(app.getHttpServer()).get('/api/v0/users/me').expect(401);
  });

  it('should not return the user info for authenticated users with invalid token)', () => {
    return request(app.getHttpServer())
      .get('/api/v0/users/me')
      .set('Authorization', `Bearer not-a-valid-token`)
      .expect(401);
  });
  afterAll(async () => {
    await app.close();
  });
});
