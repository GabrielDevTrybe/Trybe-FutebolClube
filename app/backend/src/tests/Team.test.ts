import * as sinon from 'sinon';
import * as chai from 'chai';
import { Model } from 'sequelize';
// @ts-ignore
import chaiHttp = require('chai-http');

import { App } from '../app';
import TeamModel from '../database/models/TeamModel';

import { Response } from 'superagent';

import { teamsMock, teamIDMock } from './mock/Team.mock'

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste Serviço: Teams', () => {
  const app = new App();

  afterEach(() => {
    sinon.restore();
  });

  describe('Função findAll', function () {

    it('Retorna o status correto', async () => {
      sinon.stub(Model, 'findAll').resolves(teamsMock);


      const response = await chai.request(app.app).get('/teams');

      expect(response.status).to.be.equal(200);


    });

    it('Retorna as informações corretas', async () => {
      sinon.stub(Model, 'findAll').resolves(teamsMock);

      const response = await chai.request(app.app).get('/teams');

      expect(response.body).to.be.deep.equal(teamsMock)
    })
  })

  describe('Função findByPk', function () {

    it('Testa se retorna o status correto', async () => {
      
      sinon.stub(Model, 'findByPk').resolves(teamIDMock);
      const response = await chai.request(app.app).get('/teams/1');
      expect(response.status).to.be.equal(200);


    })

    it('Retorna o elemento correto baseado no id', async () => {
      sinon.stub(Model, 'findByPk').resolves(teamIDMock);

      const response = await chai.request(app.app).get('/teams/1');

      expect(response.body).to.be.deep.equal(teamIDMock)

    })


  })
});