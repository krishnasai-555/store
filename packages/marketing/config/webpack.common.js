module.exports={
    module:{
        rules:[
            {
                test: /\.m?js$/,           // .mjs and .js files will open by babel
                exclude: /node_modules/,  //whenever file loaded babel will not consider node_modules
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-react','@babel/preset-env'], //babel process all different jsx tags //preset= transfer code into variety of different ways of ES syntax to ES5
                        plugins:['@babel/plugin-transform-runtime'],  //used to provide async away syntax
                    }
                }
            }
        ]
    }
}