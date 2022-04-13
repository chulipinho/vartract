module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }

    config.resolve.fallback = {
        "assert": false,
        "util": false,
        "buffer": false,
        "fs": false,
        "child_process": false
    };

    return config;
}