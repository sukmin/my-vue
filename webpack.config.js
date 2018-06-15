const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    context: __dirname + "/js", 
    entry: {
        "app": "./main.js"
    },
    output: { 
        path : __dirname + '/output',
        filename : '[name].bundle.js' 
    },
    module: {
        rules: [
	{
		test: /\.vue$/,
               	loader: 'vue-loader',
		options: {
			loaders:{}
		}
	}
        ]
    },
    plugins: [     new VueLoaderPlugin()   ]
};
