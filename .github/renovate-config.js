module.exports = {
  hostRules: [
    {
      hostType: 'terraform-module',
      matchHost: 'app.terraform.io',
      token: process.env.RENOVATE_TFE_TOKEN,
    },
  ],
};