'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function() {
    $.get('/github/user/repos')
    .then(data => repos.all = data, err => console.error(err))
  };
  repos.requestRepos();

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
