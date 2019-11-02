'use strict'

const app = require('../../app');
const request = require('supertest');

const Url = '/api/case3';

describe('/api/case3', () => {
    beforeAll(() => {});

    beforeEach(() => {});

    describe('arg1', () => {
        describe('Required', () => {
            describe('Error', () => {
                test('null', async() => {
                    const param = {
                        // arg1: false
                    };
                    const response = await request(app).post(Url).send(param);
                    expect(response.statusCode).toBe(400);
                });
            });

            describe('Success', () => {
                test('false', async() => {
                    const param = {
                        arg1: false
                    };
                    const response = await request(app).post(Url).send(param);
                    expect(response.statusCode).toBe(200);
                });
            });
        });

        describe('Type', () => {
            describe('Error', () => {
                test('alphabet', async() => {
                    const param = {
                        arg1: 'false'
                    };
                    const response = await request(app).post(Url).send(param);
                    expect(response.statusCode).toBe(400);
                });

                test('number', async() => {
                    const param = {
                        arg1: 0
                    };
                    const response = await request(app).post(Url).send(param);
                    expect(response.statusCode).toBe(400);
                });
            });

            describe('Success', () => {
                test('boolean', async() => {
                    const param = {
                        arg1: false
                    };
                    const response = await request(app).post(Url).send(param);
                    expect(response.statusCode).toBe(200);
                });
            });
        });
    });

    describe('arg2', () => {
        describe('Required', () => {
            describe('Error', () => {
                test('null (arg1 is true)', async() => {
                    const param = {
                        arg1: true
                    };
                    const response = await request(app).post(Url).send(param);
                    expect(response.statusCode).toBe(400);
                });
            });

            describe('Success', () => {
                test('string (arg1 is true)', async() => {
                    const param = {
                        arg1: true,
                        arg2: 'hoge'
                    };
                    const response = await request(app).post(Url).send(param);
                    expect(response.statusCode).toBe(200);
                });

                test('null (arg1 is false)', async() => {
                    const param = {
                        arg1: false
                    };
                    const response = await request(app).post(Url).send(param);
                    expect(response.statusCode).toBe(200);
                });
            });
        });
    });
});