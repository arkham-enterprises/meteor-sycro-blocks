Package.describe({
  name: 'sycro:blocks',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Easily create full page blocks with fullpage.js and Blaze',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ARKHAM-Enterprises/meteor-sycro-blocks.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  // Core packages
  api.use(['ecmascript', 'templating', 'ui', 'underscore']);

  // Atmosphere packages
  api.use('estatedev:fullpage@0.0.3');

  api.addFiles(['lib/templates.html', 'lib/blocks.js'], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sycro:blocks');
});
