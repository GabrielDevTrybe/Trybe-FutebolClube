import * as sinon from 'sinon';
import * as chai from 'chai';
// import { Model } from 'sequelize';
import User from '../database/models/UserModel';


// @ts-ignore

import chaiHttp = require('chai-http');

import { App } from '../app';
// import UserModel from '../database/models/UserModel';

import { Response } from 'superagent';

import { userMock, allUsers } from './mock/Login.mock'


chai.use(chaiHttp);

const { expect } = chai;


describe('Teste Serviço: User', () => {
  const app = new App();

  afterEach(() => {
    sinon.restore();
  });

  describe('Função findOne e findAll', function () {
    it('Testa se a requisição devolve o status 200', async () => {

      sinon.stub(User, 'findOne').resolves(userMock);


      const response = await chai.request(app.app).post('/login').send({ email: userMock.email, password: 'secret_user' });

      expect(response.status).to.be.equal(200);


    })

    it('Testa se ao dar um get em /login, retorna um status 200', async () => {
      sinon.stub(User, 'findAll').resolves(allUsers);

      const response = await chai.request(app.app).get('/login');

      expect(response.status).to.be.equal(200);



    })
  });

});
