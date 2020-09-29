import './app.css'; //로더를 통해 css파일을 모듈로 import하게끔 한다.
import nyancat from './nyancat.jpg';

document.addEventListener('DOMContentLoaded',()=>{
    document.body.innerHTML=`
    <img src="${nyancat}"/> 
    `
}) //DOM이 만들어졌을때 img src를 넣어준다.
