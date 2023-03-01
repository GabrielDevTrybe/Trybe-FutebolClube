import * as sinon from 'sinon';
import * as chai from 'chai';
import { Model } from 'sequelize';

// @ts-ignore

import chaiHttp = require('chai-http');

import { App } from '../app';
// import UserModel from '../database/models/UserModel';

import { Response } from 'superagent';


chai.use(chaiHttp);

const { expect } = chai;


describe('Teste Serviço: User', () => {
  const app = new App();

  afterEach(() => {
    sinon.restore();
  });

  describe('Função create', function() {
    it('Testa se a requisição devolve o status 201', async () => {
      const user = {
        email: 'exemplo@exemplo.com',
        password: '123456'
      }

      const response = await chai.request(app.app).post('/post').send(user);

      expect(response.status).to.be.equal(201);   



    })
  });

});
