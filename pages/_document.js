// _document.js  // -> 서버에서 _app.js를 실행한 뒤에 실행할 파일
/**
 * _document.js는 NextJS에서 사용될 "기본적인 html 태그의 대한 보강"을 위해 사용합니다.
 * HTML 문서의 head 태그에 작성될 메타 데이터(title, meta, link, style,,)들을 _document.js의
 * Head 컴포넌트 내부에 작성하면 생성되는 모든 HTML 문서의 head 태그에 그대로 작성되어 생성이 됩니다.
 * 즉, _document.js는 공통적으로 활용할 head(Ex. 메타 태그)나 body 태그 안에 들어갈 내용들을 커스텀할때 활용합니다.
 *
 *
 * _docudment.js"는 생략 가능하며, 생략시 기본값을 사용하게 됩니다.
 * _document.js는 실질적으로 HTML 문서를 생성하며 공통적으로 적용할 HTML 마크업을 설정하기 위해 사용합니다
 * */
import Document, { Html,Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
            <Head/>
            <body>
            <div id="root">
                <Main />
                <NextScript />
            </div>
            </body>
            </Html>
        );
    }
}