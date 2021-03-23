module.exports={
    configureWebpack:{
        resolve:{
            alias:{
               "assets":'@/assets',
               "common":"@/common",
               "components":"@/components",
               "network":"@/network",
               "views":"@/views"
            }
        }
    },
    // devServe:{
    //     contentBase:path.join(_dirname,'src')
    // }
}