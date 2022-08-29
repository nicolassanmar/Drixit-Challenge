import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, VersioningType } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('POST /api/v0/authenticate', () => {
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

  it('should authenticate it@drixit.com with correct password', () => {
    return (
      request(app.getHttpServer())
        .post('/api/v0/authenticate')
        .send({ email: 'it@drixit.com', password: 'some-password' })
        .expect(201)
        // body should have a jwt field
        .expect((res) => {
          expect(res.body.jwt).toBeDefined();
        })
    );
  });
  it('should validate email, but not return jwt if password is not present', () => {
    return request(app.getHttpServer())
      .post('/api/v0/authenticate/email')
      .send({ email: 'info@drixit.com' })
      .expect(201)
      .expect((res) => {
        expect(res.body.jwt).toBeUndefined();
      });
  });
  it('should not be authorized to login with a wrong password', () => {
    return request(app.getHttpServer())
      .post('/api/v0/authenticate')
      .send({ email: 'info@drixit.com', password: 'wrong-password' })
      .expect(401);
  });
  afterAll(async () => {
    await app.close();
  });
});
