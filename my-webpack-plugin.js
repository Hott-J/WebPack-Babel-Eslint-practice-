const { compilation } = require("webpack");

class MyWebpackPlugin{
    apply(complier){
      //  complier.hooks.done.tap('My Plugin',stats=>{
        //    console.log('MyPlugin:done');
        //})
        complier.plugin('emit',(compilation,callback)=>{
            const source=compilation.assets['main.js'].source();
            //console.log(source); main.js의 소스 접근
            compilation.assets['main.js'].source=()=>{
                const banner=[
                    '/**',
                    '/*이것은 BannerPlugin이 처리한 결과',
                    '/*Build Date:2020-09-28',
                    '*/'
                ].join('\n'); //번들링 결과에 내용 추가. dist의 main.js 맨위에 위 문자열 넣어짐.
                return banner+'\n\n'+source;
            }
            callback();
        })
    }
}

module.exports=MyWebpackPlugin;