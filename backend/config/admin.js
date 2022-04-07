module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7068f31ec502e82984d6ef147aba1153'),
  },
});
