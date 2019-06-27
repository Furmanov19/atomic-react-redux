const req = require.context('.', false, /^((?!index).)*\.js$/);

req.keys().forEach(key => {
  const routeName = key.replace(/^\.\/([^.]+)\.js$/, '$1');
  module.exports[routeName] = req(key).default;
});
