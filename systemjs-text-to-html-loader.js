/**
 * Removes inline systemjs-style loader syntax for html!text imports
 *
 *   require('./some-module.html!systemjs-plugin')  ->  require('./some-module.html')
 */
module.exports = function (source) {
    if (source.indexOf('.html!text')) {
        const exp = new RegExp('require\\(([\'"])([^!\\s]*)!text\\1\\)', 'g');
        source = source.replace(exp, `require($1$2$1)`);
    }

    return source;
};
