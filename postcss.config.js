module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ru',
        permanent: true,
      },
    ]
  },
}
