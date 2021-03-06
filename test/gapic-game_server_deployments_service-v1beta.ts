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
const gameserverdeploymentsserviceModule = require('../src');

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
describe('v1beta.GameServerDeploymentsServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      gameserverdeploymentsserviceModule.v1beta
        .GameServerDeploymentsServiceClient.servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint =
      gameserverdeploymentsserviceModule.v1beta
        .GameServerDeploymentsServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port =
      gameserverdeploymentsserviceModule.v1beta
        .GameServerDeploymentsServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
      {
        fallback: true,
      }
    );
    assert(client);
  });
  describe('listGameServerDeployments', () => {
    it('invokes listGameServerDeployments without error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IListGameServerDeploymentsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.listGameServerDeployments = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.listGameServerDeployments(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes listGameServerDeployments with error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IListGameServerDeploymentsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.listGameServerDeployments = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.listGameServerDeployments(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('getGameServerDeployment', () => {
    it('invokes getGameServerDeployment without error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IGetGameServerDeploymentRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getGameServerDeployment = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getGameServerDeployment(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getGameServerDeployment with error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IGetGameServerDeploymentRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getGameServerDeployment = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getGameServerDeployment(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('getGameServerDeploymentRollout', () => {
    it('invokes getGameServerDeploymentRollout without error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IGetGameServerDeploymentRolloutRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getGameServerDeploymentRollout = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getGameServerDeploymentRollout(
        request,
        (err: {}, response: {}) => {
          assert.ifError(err);
          assert.deepStrictEqual(response, expectedResponse);
          done();
        }
      );
    });

    it('invokes getGameServerDeploymentRollout with error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IGetGameServerDeploymentRolloutRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getGameServerDeploymentRollout = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getGameServerDeploymentRollout(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('previewGameServerDeploymentRollout', () => {
    it('invokes previewGameServerDeploymentRollout without error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IPreviewGameServerDeploymentRolloutRequest = {};
      request.rollout = {};
      request.rollout.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.previewGameServerDeploymentRollout = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.previewGameServerDeploymentRollout(
        request,
        (err: {}, response: {}) => {
          assert.ifError(err);
          assert.deepStrictEqual(response, expectedResponse);
          done();
        }
      );
    });

    it('invokes previewGameServerDeploymentRollout with error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IPreviewGameServerDeploymentRolloutRequest = {};
      request.rollout = {};
      request.rollout.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.previewGameServerDeploymentRollout = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.previewGameServerDeploymentRollout(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('fetchDeploymentState', () => {
    it('invokes fetchDeploymentState without error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IFetchDeploymentStateRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.fetchDeploymentState = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.fetchDeploymentState(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes fetchDeploymentState with error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IFetchDeploymentStateRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.fetchDeploymentState = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.fetchDeploymentState(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('createGameServerDeployment', () => {
    it('invokes createGameServerDeployment without error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.ICreateGameServerDeploymentRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createGameServerDeployment = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );
      client
        .createGameServerDeployment(request)
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

    it('invokes createGameServerDeployment with error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.ICreateGameServerDeploymentRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createGameServerDeployment = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );
      client
        .createGameServerDeployment(request)
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
  describe('deleteGameServerDeployment', () => {
    it('invokes deleteGameServerDeployment without error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IDeleteGameServerDeploymentRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteGameServerDeployment = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );
      client
        .deleteGameServerDeployment(request)
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

    it('invokes deleteGameServerDeployment with error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IDeleteGameServerDeploymentRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteGameServerDeployment = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );
      client
        .deleteGameServerDeployment(request)
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
  describe('updateGameServerDeployment', () => {
    it('invokes updateGameServerDeployment without error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IUpdateGameServerDeploymentRequest = {};
      request.gameServerDeployment = {};
      request.gameServerDeployment.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateGameServerDeployment = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );
      client
        .updateGameServerDeployment(request)
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

    it('invokes updateGameServerDeployment with error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IUpdateGameServerDeploymentRequest = {};
      request.gameServerDeployment = {};
      request.gameServerDeployment.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateGameServerDeployment = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );
      client
        .updateGameServerDeployment(request)
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
  describe('updateGameServerDeploymentRollout', () => {
    it('invokes updateGameServerDeploymentRollout without error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IUpdateGameServerDeploymentRolloutRequest = {};
      request.rollout = {};
      request.rollout.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateGameServerDeploymentRollout = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );
      client
        .updateGameServerDeploymentRollout(request)
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

    it('invokes updateGameServerDeploymentRollout with error', done => {
      const client = new gameserverdeploymentsserviceModule.v1beta.GameServerDeploymentsServiceClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      // Mock request
      const request: protosTypes.google.cloud.gaming.v1beta.IUpdateGameServerDeploymentRolloutRequest = {};
      request.rollout = {};
      request.rollout.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateGameServerDeploymentRollout = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );
      client
        .updateGameServerDeploymentRollout(request)
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
