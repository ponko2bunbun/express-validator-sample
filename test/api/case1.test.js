'use strict'

const app = require('../../app');
const request = require('supertest');
const urljoin = require('url-join');

const Url = '/api/case1';

describe('/api/case1', () => {
    beforeAll(() => {});

    beforeEach(() => {});

    describe('arg1', () => {
        describe('Required', () => {
            describe('Error', () => {
                test('null', async() => {
                    const response = await request(app).get(Url);
                    expect(response.statusCode).toBe(400);
                });
            });

            describe('Success', () => {
                test('string', async() => {
                    const response = await request(app).get(urljoin(Url, '?arg1=hoge'));
                    expect(response.statusCode).toBe(200);
                });
            });
        });
    });

    describe('arg2', () => {
        describe('Type', () => {
            describe('Error', () => {
                test('alphabet', async() => {
                    const response = await request(app).get(urljoin(Url, '?arg1=hoge&arg2=ab'));
                    expect(response.statusCode).toBe(400);
                });
            });

            describe('Success', () => {
                test('number', async() => {
                    const response = await request(app).get(urljoin(Url, '?arg1=hoge&arg2=12'));
                    expect(response.statusCode).toBe(200);
                });
            });
        });

        describe('Length', () => {
            describe('Error', () => {
                test('length = 1', async() => {
                    const response = await request(app).get(urljoin(Url, '?arg1=hoge&arg2=1'));
                    expect(response.statusCode).toBe(400);
                });

                test('length = 5', async() => {
                    const response = await request(app).get(urljoin(Url, '?arg1=hoge&arg2=12345'));
                    expect(response.statusCode).toBe(400);
                });
            });

            describe('Success', () => {
                test('length = 2', async() => {
                    const response = await request(app).get(urljoin(Url, '?arg1=hoge&arg2=12'));
                    expect(response.statusCode).toBe(200);
                });

                test('length = 4', async() => {
                    const response = await request(app).get(urljoin(Url, '?arg1=hoge&arg2=1234'));
                    expect(response.statusCode).toBe(200);
                });
            });
        });
    });

    describe('arg3', () => {
        describe('Type', () => {
            describe('Error', () => {
                test('alphabet', async() => {
                    const response = await request(app).get(urljoin(Url, '?arg1=hoge&arg3=ab'));
                    expect(response.statusCode).toBe(400);
                });
            });

            describe('Success', () => {
                test('number', async() => {
                    const response = await request(app).get(urljoin(Url, '?arg1=hoge&arg3=12'));
                    expect(response.statusCode).toBe(200);
                });
            });
        });

        describe('Length', () => {
            describe('Error', () => {
                test('length = 5', async() => {
                    const response = await request(app).get(urljoin(Url, '?arg1=hoge&arg3=12345'));
                    expect(response.statusCode).toBe(400);
                });
            });

            describe('Success', () => {
                test('length = 1', async() => {
                    const response = await request(app).get(urljoin(Url, '?arg1=hoge&arg3=1'));
                    expect(response.statusCode).toBe(200);
                });

                test('length = 4', async() => {
                    const response = await request(app).get(urljoin(Url, '?arg1=hoge&arg3=1234'));
                    expect(response.statusCode).toBe(200);
                });
            });
        });
    });

    describe('arg4', () => {
        describe('Type', () => {
            describe('Error', () => {
                test('alphabet', async() => {
                    const response = await request(app).get(urljoin(Url, '?arg1=hoge&arg4=ab'));
                    expect(response.statusCode).toBe(400);
                });
            });

            describe('Success', () => {
                test('number', async() => {
                    const response = await request(app).get(urljoin(Url, '?arg1=hoge&arg4=12'));
                    expect(response.statusCode).toBe(200);
                });
            });
        });

        describe('Length', () => {
            describe('Error', () => {
                test('length = 1', async() => {
                    const response = await request(app).get(urljoin(Url, '?arg1=hoge&arg4=1'));
                    expect(response.statusCode).toBe(400);
                });
            });

            describe('Success', () => {
                test('length = 2', async() => {
                    const response = await request(app).get(urljoin(Url, '?arg1=hoge&arg4=12'));
                    expect(response.statusCode).toBe(200);
                });

                test('length = 10', async() => {
                    const response = await request(app).get(urljoin(Url, '?arg1=hoge&arg4=1234567890'));
                    expect(response.statusCode).toBe(200);
                });
            });
        });
    });
});