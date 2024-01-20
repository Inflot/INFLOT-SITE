const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  basePath: '',
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
