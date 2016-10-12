// app.build.js

({
    appDir: '../',
    baseUrl: 'scripts',
    mainConfigFile: 'init.js',
    dir: '../build',
    modules: [
        {
            name: 'init',
            include: [
                'app',
                'searchForm',
                'resultsList',
                'metaResults',
                'currentVideoSelection',
                'youtube',
                'videoResult'
            ],
            findNestedDependencies: true,
        },
    ],
    optimizeCss: 'standard',
    paths: {
        jquery: 'empty:',
        knockout: 'empty:',

    },
    removeCombined: true,
});
