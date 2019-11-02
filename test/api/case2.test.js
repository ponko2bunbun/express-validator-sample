'use strict'

const app = require('../../app');
const request = require('supertest');

const Url = '/api/case2';

describe('/api/case2', () => {
    beforeAll(() => {});

    beforeEach(() => {});

    describe('arg1', () => {
        describe('Required', () => {
            describe('Error', () => {
                test('null', async() => {
                    const param = {
                        // arg1: 1
                    };
                    const response = await request(app).post(Url).send(param);
                    expect(response.statusCode).toBe(400);
                });
            });

            describe('Success', () => {
                test('number', async() => {
                    const param = {
                        arg1: 1
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
                        arg1: 'a'
                    };
                    const response = await request(app).post(Url).send(param);
                    expect(response.statusCode).toBe(400);
                });

                test('number string', async() => {
                    const param = {
                        arg1: '1'
                    };
                    const response = await request(app).post(Url).send(param);
                    expect(response.statusCode).toBe(400);
                });
            });

            describe('Success', () => {
                test('number', async() => {
                    const param = {
                        arg1: 1
                    };
                    const response = await request(app).post(Url).send(param);
                    expect(response.statusCode).toBe(200);
                });
            });
        });
    });

    describe('arg2', () => {
        describe('Type', () => {
            describe('Error', () => {
                test('alphabet', async() => {
                    const param = {
                        arg1: 1,
                        arg2: 'a'
                    };
                    const response = await request(app).post(Url).send(param);
                    expect(response.statusCode).toBe(400);
                });

                test('number', async() => {
                    const param = {
                        arg1: 1,
                        arg2: 1
                    };
                    const response = await request(app).post(Url).send(param);
                    expect(response.statusCode).toBe(400);
                });
            });

            describe('Success', () => {
                test('number string', async() => {
                    const param = {
                        arg1: 1,
                        arg2: '1'
                    };
                    const response = await request(app).post(Url).send(param);
                    expect(response.statusCode).toBe(200);
                });
            });
        });
    });
});