define("ft-cl/app", 
  ["ember","ember/resolver","ember/load-initializers","ft-cl/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Resolver = __dependency2__["default"];
    var loadInitializers = __dependency3__["default"];
    var config = __dependency4__["default"];

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix,
      Resolver: Resolver
    });

    loadInitializers(App, config.modulePrefix);

    __exports__["default"] = App;
  });
define("ft-cl/controllers/home", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    var HomeController = Ember.ArrayController.extend({
      actions: {
        displayMenu: function() {
          var sideslider = $('[data-toggle=collapse-side]');
          var sel = sideslider.attr('data-target');
          var sel2 = sideslider.attr('data-target-2');
          $(sel).toggleClass('in');
          $(sel2).toggleClass('out');
        }
      }
    })

    __exports__["default"] = HomeController;
  });
define("ft-cl/controllers/login", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    var LoginController = Ember.ArrayController.extend({
    	loggedIn: false,
      loginInput: '',
      passwordInput: '',
    	actions: {
    		hackIn: function() {
          var loginData = this.get('model').content;
          var loginInput = this.get('loginInput');
          var passwordInput = this.get('passwordInput');
          this.transitionToRoute('home');
    		},
        hackInWithFB: function() {
          var loginData = this.get('model').content;
          var loginInput = this.get('loginInput');
          var passwordInput = this.get('passwordInput');
          this.transitionToRoute('home');
        }
    	}
    })

    __exports__["default"] = LoginController;
  });
define("ft-cl/controllers/nav", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    var NavController = Ember.ArrayController.extend({
      actions: {
        displayMenu: function() {
          var sideslider = $('[data-toggle=collapse-side]');
          var sel = sideslider.attr('data-target');
          var sel2 = sideslider.attr('data-target-2');
          $(sel).toggleClass('in');
          $(sel2).toggleClass('out');
        }
      }
    })

    __exports__["default"] = NavController;
  });
define("ft-cl/initializers/export-application-global", 
  ["ember","ft-cl/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    function initialize(container, application) {
      var classifiedName = Ember.String.classify(config.modulePrefix);

      if (config.exportApplicationGlobal) {
        window[classifiedName] = application;
      }
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: 'export-application-global',

      initialize: initialize
    };
  });
define("ft-cl/router", 
  ["ember","ft-cl/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    var Router = Ember.Router.extend({
      location: config.locationType
    });

    Router.map(function() {
    	this.resource('login', { path: '/'})
    	this.resource('home', { path: '/home'})
    	this.resource('brands', { path: '/brands'})
    	this.resource('inventory', { path: '/inventory'})
    	this.resource('map', { path: '/map'})
    	this.resource('feed', { path: '/feed'})
    });

    __exports__["default"] = Router;
  });
define("ft-cl/routes/home", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    var ResetScroll = Ember.Mixin.create({
      activate: function() {
        this._super();
        window.scrollTo(0,0); 
      }
    });

    var HomeRoute = Ember.Route.extend(ResetScroll, {
        model: function() {
          return []
        },
      	renderTemplate: function() {
          	this.render('nav-bar', {  
          	  into: 'application', 
          	  outlet: 'main',
              controller: 'nav'
          	})
        },
        activate: function() {
        this._super.apply(this, arguments); // Call super at the beginning
        // Your stuff
        },
        setupController: function(home, model) {
          home.set('model', model)
        }
    })

    __exports__["default"] = HomeRoute;
  });
define("ft-cl/routes/login", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    var loginData = [
      { 'id': 0,
        'name':'danila',
        'password':111
      },
      { 'id': 1,
        'name':'denis',
        'password':111
      },
      { 'id': 2,
        'name':'tim',
        'password':111
      }
    ]
    var ResetScroll = Ember.Mixin.create({
      activate: function() {
        this._super();
        window.scrollTo(0,0);
      }
    });

    var LoginRoute = Ember.Route.extend(ResetScroll, {
        model: function() {
          return loginData;
        },
      	renderTemplate: function() {
          	this.render('login', {  
          	  into: 'application', 
          	  outlet: 'main',
              controller: 'login'
          	})
        },
        activate: function() {
        this._super.apply(this, arguments); // Call super at the beginning
        // Your stuff
        },
        setupController: function(login, model) {
          login.set('model', model)
        }
    })

    __exports__["default"] = LoginRoute;
  });
define("ft-cl/templates/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("ft-cl/templates/home-screen", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      


      data.buffer.push("1231241");
      
    });
  });
define("ft-cl/templates/home", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


      data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "nav", options) : helperMissing.call(depth0, "outlet", "nav", options))));
      
    });
  });
define("ft-cl/templates/login", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', escapeExpression=this.escapeExpression;


      data.buffer.push("<div class=\"container\">\n	<div class=\"row login_box\">\n\n	    <div class=\"col-md-12 col-xs-12\" align=\"center\">\n\n            <div class=\"line\">\n            	<h3>FASHION TALK</h3>\n            </div>\n            <div class=\"outter\">\n            	<img src=\"/images/equipment.svg\" class=\"image-circle\"/>\n            </div>   \n            <h1>Hi Guest</h1>\n\n	    </div>\n\n        <div class=\"col-md-12 col-xs-12 login_control\">\n                \n                <div class=\"control\">\n                    <div class=\"label\">Email Address</div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"admin@gmail.com\"/>\n                </div>\n                \n                <div class=\"control\">\n                     <div class=\"label\">Password</div>\n                    <input type=\"password\" class=\"form-control\" placeholder=\"******\"/>\n                </div>\n                <div align=\"center\">\n                     <button ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "hackIn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(" class=\"btn btn-success\">LOGIN</button>\n                     <button ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "hackInWithFB", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(" class=\"btn btn-primary\">FB LOGIN</button>\n                </div>\n                \n        </div>\n\n    </div>\n</div>");
      return buffer;
      
    });
  });
define("ft-cl/templates/nav-bar", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


      data.buffer.push("<header role=\"banner\" class=\"navbar navbar-fixed-top navbar-inverse\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "displayMenu", "on", "click", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","STRING"],data:data})));
      data.buffer.push(" data-toggle=\"collapse-side\" data-target=\".side-collapse\" data-target-2=\".side-collapse-container\" type=\"button\" class=\"navbar-toggle pull-left\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n        </div>\n        <div class=\"navbar-inverse side-collapse in\">\n          <nav role=\"navigation\" class=\"navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n              <li>");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Brands", "brands", options) : helperMissing.call(depth0, "link-to", "Brands", "brands", options))));
      data.buffer.push("</li>\n              <li>");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Your Clothes", "inventory", options) : helperMissing.call(depth0, "link-to", "Your Clothes", "inventory", options))));
      data.buffer.push("</li>\n              <li>");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Home", "home", options) : helperMissing.call(depth0, "link-to", "Home", "home", options))));
      data.buffer.push("</li>\n              <li>");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Map", "map", options) : helperMissing.call(depth0, "link-to", "Map", "map", options))));
      data.buffer.push("</li>\n              <li>");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Feed", "feed", options) : helperMissing.call(depth0, "link-to", "Feed", "feed", options))));
      data.buffer.push("</li>\n              <li>");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Logout", "login", options) : helperMissing.call(depth0, "link-to", "Logout", "login", options))));
      data.buffer.push("</li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n</header>");
      return buffer;
      
    });
  });
define("ft-cl/tests/app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('app.js should pass jshint', function() { 
      ok(true, 'app.js should pass jshint.'); 
    });
  });
define("ft-cl/tests/controllers/home.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/home.js should pass jshint', function() { 
      ok(false, 'controllers/home.js should pass jshint.\ncontrollers/home.js: line 13, col 3, Missing semicolon.\ncontrollers/home.js: line 6, col 24, \'$\' is not defined.\ncontrollers/home.js: line 9, col 7, \'$\' is not defined.\ncontrollers/home.js: line 10, col 7, \'$\' is not defined.\n\n4 errors'); 
    });
  });
define("ft-cl/tests/controllers/login.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/login.js should pass jshint', function() { 
      ok(false, 'controllers/login.js should pass jshint.\ncontrollers/login.js: line 21, col 3, Missing semicolon.\ncontrollers/login.js: line 9, col 11, \'loginData\' is defined but never used.\ncontrollers/login.js: line 10, col 11, \'loginInput\' is defined but never used.\ncontrollers/login.js: line 11, col 11, \'passwordInput\' is defined but never used.\ncontrollers/login.js: line 15, col 11, \'loginData\' is defined but never used.\ncontrollers/login.js: line 16, col 11, \'loginInput\' is defined but never used.\ncontrollers/login.js: line 17, col 11, \'passwordInput\' is defined but never used.\n\n7 errors'); 
    });
  });
define("ft-cl/tests/controllers/nav.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/nav.js should pass jshint', function() { 
      ok(false, 'controllers/nav.js should pass jshint.\ncontrollers/nav.js: line 13, col 3, Missing semicolon.\ncontrollers/nav.js: line 6, col 24, \'$\' is not defined.\ncontrollers/nav.js: line 9, col 7, \'$\' is not defined.\ncontrollers/nav.js: line 10, col 7, \'$\' is not defined.\n\n4 errors'); 
    });
  });
define("ft-cl/tests/ft-cl/tests/helpers/resolver.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ft-cl/tests/helpers');
    test('ft-cl/tests/helpers/resolver.js should pass jshint', function() { 
      ok(true, 'ft-cl/tests/helpers/resolver.js should pass jshint.'); 
    });
  });
define("ft-cl/tests/ft-cl/tests/helpers/start-app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ft-cl/tests/helpers');
    test('ft-cl/tests/helpers/start-app.js should pass jshint', function() { 
      ok(true, 'ft-cl/tests/helpers/start-app.js should pass jshint.'); 
    });
  });
define("ft-cl/tests/ft-cl/tests/test-helper.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ft-cl/tests');
    test('ft-cl/tests/test-helper.js should pass jshint', function() { 
      ok(true, 'ft-cl/tests/test-helper.js should pass jshint.'); 
    });
  });
define("ft-cl/tests/helpers/resolver", 
  ["ember/resolver","ft-cl/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];
    var config = __dependency2__["default"];

    var resolver = Resolver.create();

    resolver.namespace = {
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix
    };

    __exports__["default"] = resolver;
  });
define("ft-cl/tests/helpers/start-app", 
  ["ember","ft-cl/app","ft-cl/router","ft-cl/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Application = __dependency2__["default"];
    var Router = __dependency3__["default"];
    var config = __dependency4__["default"];

    __exports__["default"] = function startApp(attrs) {
      var application;

      var attributes = Ember.merge({}, config.APP);
      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

      Ember.run(function() {
        application = Application.create(attributes);
        application.setupForTesting();
        application.injectTestHelpers();
      });

      return application;
    }
  });
define("ft-cl/tests/router.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('router.js should pass jshint', function() { 
      ok(false, 'router.js should pass jshint.\nrouter.js: line 9, col 41, Missing semicolon.\nrouter.js: line 10, col 44, Missing semicolon.\nrouter.js: line 11, col 48, Missing semicolon.\nrouter.js: line 12, col 54, Missing semicolon.\nrouter.js: line 13, col 42, Missing semicolon.\nrouter.js: line 14, col 44, Missing semicolon.\n\n6 errors'); 
    });
  });
define("ft-cl/tests/routes/home.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/home.js should pass jshint', function() { 
      ok(false, 'routes/home.js should pass jshint.\nroutes/home.js: line 12, col 16, Missing semicolon.\nroutes/home.js: line 19, col 13, Missing semicolon.\nroutes/home.js: line 26, col 31, Missing semicolon.\nroutes/home.js: line 28, col 3, Missing semicolon.\n\n4 errors'); 
    });
  });
define("ft-cl/tests/routes/login.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/login.js should pass jshint', function() { 
      ok(false, 'routes/login.js should pass jshint.\nroutes/login.js: line 16, col 2, Missing semicolon.\nroutes/login.js: line 33, col 13, Missing semicolon.\nroutes/login.js: line 40, col 32, Missing semicolon.\nroutes/login.js: line 42, col 3, Missing semicolon.\n\n4 errors'); 
    });
  });
define("ft-cl/tests/test-helper", 
  ["ft-cl/tests/helpers/resolver","ember-qunit"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var resolver = __dependency1__["default"];
    var setResolver = __dependency2__.setResolver;

    setResolver(resolver);

    document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

    QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container'});
    var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
    document.getElementById('ember-testing-container').style.visibility = containerVisibility;
  });
/* jshint ignore:start */

define('ft-cl/config/environment', ['ember'], function(Ember) {
  var prefix = 'ft-cl';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("ft-cl/tests/test-helper");
} else {
  require("ft-cl/app")["default"].create({});
}

/* jshint ignore:end */
//# sourceMappingURL=ft-cl.map