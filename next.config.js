const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  basePath: '',
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ru',
        permanent: true,
      },
    ];
  },
});
