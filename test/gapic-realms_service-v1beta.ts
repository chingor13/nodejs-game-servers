// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import {describe, it} from 'mocha';
const realmsserviceModule = require('../src');

const FAKE_STATUS_CODE = 1;
class FakeError {
  name: string;
  message: string;
  code: number;
  constructor(n: number) {
    this.name = 'fakeName';
    this.message = 'fake message';
    this.code = n;
  }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError | null, response?: {} | null): void;
}

export class Operation {
  constructor() {}
  promise() {}
}
function mockSimpleGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return (actualRequest: {}, options: {}, callback: Callback) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
function mockLongRunningGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error?: {} | null
) {
  return (request: {}) => {
    assert.deepStrictEqual(request, expectedRequest);
    const mockOperation = {
      promise() {
        return new Promise((resolve, reject) => {
          if (error) {
            reject(error);
          } else {
            resolve([response]);
          }
        });
      },
    };
    return Promise.resolve([mockOperation]);
  };
}
describe('v1beta.RealmsServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      realmsserviceModule.v1beta.RealmsServiceClient.servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint =
      realmsserviceModule.v1beta.RealmsServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port = realmsserviceModule.v1beta.RealmsServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new realmsserviceModule.v1beta.RealmsServiceClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new realmsserviceModule.v1beta.RealmsServiceClient({
      fallback: true,
    });
    assert(client);
  });
  describe('listRealms', () => {
    it('invokes listRealms without error', done => {
      const client = new realmsserviceModule.v1beta.RealmsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IListRealmsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.listRealms = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.listRealms(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listRealms with error', done => {
      const client = new realmsserviceModule.v1beta.RealmsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IListRealmsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.listRealms = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.listRealms(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getRealm', () => {
    it('invokes getRealm without error', done => {
      const client = new realmsserviceModule.v1beta.RealmsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IGetRealmRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getRealm = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getRealm(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getRealm with error', done => {
      const client = new realmsserviceModule.v1beta.RealmsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IGetRealmRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getRealm = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getRealm(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('previewRealmUpdate', () => {
    it('invokes previewRealmUpdate without error', done => {
      const client = new realmsserviceModule.v1beta.RealmsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IPreviewRealmUpdateRequest = {};
      request.realm = {};
      request.realm.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.previewRealmUpdate = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.previewRealmUpdate(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes previewRealmUpdate with error', done => {
      const client = new realmsserviceModule.v1beta.RealmsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IPreviewRealmUpdateRequest = {};
      request.realm = {};
      request.realm.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.previewRealmUpdate = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.previewRealmUpdate(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('createRealm', () => {
    it('invokes createRealm without error', done => {
      const client = new realmsserviceModule.v1beta.RealmsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.ICreateRealmRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createRealm = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );
      client
        .createRealm(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then((responses: [Operation]) => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch((err: {}) => {
          done(err);
        });
    });

    it('invokes createRealm with error', done => {
      const client = new realmsserviceModule.v1beta.RealmsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.ICreateRealmRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createRealm = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );
      client
        .createRealm(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then(() => {
          assert.fail();
        })
        .catch((err: FakeError) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });
  });
  describe('deleteRealm', () => {
    it('invokes deleteRealm without error', done => {
      const client = new realmsserviceModule.v1beta.RealmsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IDeleteRealmRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteRealm = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );
      client
        .deleteRealm(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then((responses: [Operation]) => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch((err: {}) => {
          done(err);
        });
    });

    it('invokes deleteRealm with error', done => {
      const client = new realmsserviceModule.v1beta.RealmsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IDeleteRealmRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteRealm = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );
      client
        .deleteRealm(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then(() => {
          assert.fail();
        })
        .catch((err: FakeError) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });
  });
  describe('updateRealm', () => {
    it('invokes updateRealm without error', done => {
      const client = new realmsserviceModule.v1beta.RealmsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IUpdateRealmRequest = {};
      request.realm = {};
      request.realm.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateRealm = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );
      client
        .updateRealm(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then((responses: [Operation]) => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch((err: {}) => {
          done(err);
        });
    });

    it('invokes updateRealm with error', done => {
      const client = new realmsserviceModule.v1beta.RealmsServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IUpdateRealmRequest = {};
      request.realm = {};
      request.realm.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateRealm = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );
      client
        .updateRealm(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then(() => {
          assert.fail();
        })
        .catch((err: FakeError) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });
  });
});
