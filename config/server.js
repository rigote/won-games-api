module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    url: '/dashboard',
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e620046d6b7b7176b700be1673b3c780'),
    },
  },
});
