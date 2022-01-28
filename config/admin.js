module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fc4a6d53fedba84d68ca1293bf21987d'),
  },
});
