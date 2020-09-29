// .\node_modules\.bin\webpack --mode development --entry ./scr/app.js --output dist/main.js
//와 동일한 동작을 한다. 위처럼 매번 터미널에 긴 명령어 쓰기 힘드므로 아래와 같이 번들링해주는 설정 파일을 만든다.

const path=require('path');
const webpack=require('webpack');
const childProcess-require('child_process');

module.exports={
    mode:'development',
    entry:{
        main:'./src/app.js'
    },
    output:{
        path:path.resolve('./dist'), //디렉터리 경로
        filename:'[name].js' //main.js로 저장 , 이렇게해야 동적으로 이름 저장됨.
    },
    module:{
        rules:[
            {
                test:/\.css$/, //로더가 처리해야될 파일들의 패턴들 .js로 끝나는 모든파일들로 지정했음.
                use:[
                    'style-loader',
                    'css-loader' //사용할 로더를 명시. 뒤에서 부터 앞으로 실행 순서.
                ]
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                loader:'url-loader',
                options:{
                    publicPath:'./dist', // 파일로더가 처리하는 파일을 모듈로 사용했을때 경로앞에 추가되는 문자열.
                    name: '[name].[ext]?[hash]', //캐시 무력화를 위해 매번 달라지는 해시값 입력 맨뒤에.
                    limit:20000,//20kb미만의 파일은 url-loader로해서 base64로 변환, 20kb이상이면 파일로더가 실행
                } //20kb이하인 냥캣은 src에 저장, 20kb이상인 bg는 dist에 저장.
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin({
            banner:`
            Build Date : ${new Date().toLocaleDateString()}
            `
        })
    ]
}

