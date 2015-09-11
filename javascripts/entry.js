requirejs(['main']);

require.config({
    shim : {
        "bootstrap":{ "deps":['jquery']}
    },
    paths: {
      'jquery': '../bower_components/jquery/dist/jquery.min',
      'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min'
    }
});
