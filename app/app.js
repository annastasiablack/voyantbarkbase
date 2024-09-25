import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'voyantbarkbase/config/environment';
import { setBuildURLConfig } from '@ember-data/request-utils';

// namespace prefix
setBuildURLConfig({
  namespace: 'api',
});

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
