module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }

    config.resolve.fallback = {
        "assert": false,
        "util": false,
        "buffer": false,
        "fs": false,
        "child_process": false,
        "path": false
    };

    config.stats = 'errors-only';

    return config;
}