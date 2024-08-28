#!/usr/bin/env node

const jwt = require('jsonwebtoken');
const yargs = require('yargs');

yargs
  .command('sign <payload> <key>', 'Sign a payload and create a JWT', (yargs) => {
    yargs
      .positional('payload', {
        describe: 'The payload to sign (string, number, or JSON object)',
        type: 'string'
      })
      .positional('key', {
        describe: 'The signing key',
        type: 'string'
      });
  }, (argv) => {
    try {
      let parsedPayload = argv.payload;
      try {
        parsedPayload = JSON.parse(argv.payload);
      } catch (e) {
        // If parsing fails, use the original string
      }
      const token = jwt.sign(parsedPayload, argv.key);
      console.log('Signed JWT:', token);
    } catch (error) {
      console.error('Error signing JWT:', error.message);
    }
  })
  .command('decode <token> <key>', 'Decode and verify a JWT', (yargs) => {
    yargs
      .positional('token', {
        describe: 'The JWT to decode and verify',
        type: 'string'
      })
      .positional('key', {
        describe: 'The signing key used to verify the token',
        type: 'string'
      });
  }, (argv) => {
    try {
      const decoded = jwt.verify(argv.token, argv.key);
      console.log('Decoded payload:', JSON.stringify(decoded, null, 2));
    } catch (error) {
      console.error('Error decoding JWT:', error.message);
    }
  })
  .command('help', 'Show help information', () => {
    yargs.showHelp();
  })
  .help()
  .argv;