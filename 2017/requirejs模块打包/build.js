/**
 * @author:huangjin
 * @parameter:
 * @description:
 * @Date:2017/11/17
 */
({
    paths: {
        'jquery': './src/lib/jQuery/jquery.min',
        'entry': './src/js/a',
        'b': './src/js/b',
        'c': './src/js/c'
    },
    shim: {
        'jquery': {
            exports: '$'
        }
    },
    optimize: 'none',
    name: 'entry',
    out: './dist/entry-build.js'
});