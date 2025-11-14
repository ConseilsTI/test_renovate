module.exports = {
  // Global Renovate settings
  branchPrefix: 'renovate/',
  username: 'renovate-bot',
  gitAuthor: 'Renovate Bot <bot@example.com>',
  onboarding: true, // Set to true for initial onboarding PRs
  platform: 'github', // Or 'gitlab', 'bitbucket', etc.

  // Define the repositories to be processed
  // repositories: [
    // 'ConseilsTI/test_renovate',
    // Add more repositories as needed
  // ],

  hostRules: [
    {
      hostType: 'terraform-module',
      matchHost: 'app.terraform.io',
      token: process.env.RENOVATE_TFE_TOKEN,
    },
  ],
};