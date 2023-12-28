const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  basePath: '',
  images: {
    unoptimized: true,
  },
});
