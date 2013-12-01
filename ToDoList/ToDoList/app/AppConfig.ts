/// <reference path="../app/modules/require.d.ts" />
/// <reference path="../app/modules/jquery.d.ts" />
/// <reference path="AppMain.ts" />
require.config({
    paths: {
        'jquery': 'lib/jquery'
    },
    shim: {
        jquery: {
            exports: '$'
        }    
    }
});

require(['jquery','AppMain'], ($, main) => {
    var appMain = new main.AppMain();
    appMain.run();
});