
module.exports = [
  {
    target: 'http://127.0.0.1:3000',
    secure: false,
    context: [
      '/api',
    ],
    logLevel: 'debug'
  },
];
