requirejs(['main']);

require.config({
    shim : {
        "bootstrap":{ "deps":['jquery']}
    },
    paths: {
      'jquery': '../lib/bower_components/jquery/dist/jquery.min',
      'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
    }
});
