module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c86a195720e8086d1d31643e9f14e3a7'),
  },
});
