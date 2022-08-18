import type { Options } from '@wdio/types'
require('dotenv').config({path:'./config/.env'})

export const config: Options.Testrunner = {

    autoCompileOpts: {
        autoCompile: true
    },
  
    user: process.env.BROWSERSTACK_USERNAME ,
    key: process.env.BROWSERSTACK_ACCESS_KEY ,
    hostname: 'hub.browserstack.com',
    services: [
        [
          'browserstack',
          { browserstackLocal: true, opts: { forcelocal: false } },
        ],
      ],
    specs: [
        './test/specs/**/*.ts'
    ],
    
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
    
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://127.0.0.1:8081',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 10000
    }
}
