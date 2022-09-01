import '../styles/globals.css'


/**
 * pages 폴더 바로 아래에 존재하는 "_app.js"의 컴포넌트는 루트 컴포넌트 역할을 합니다.
 * 서버측에서는 렌더링될 콘텐츠를 포함하는 각 HTML 문서를 만든다고 앞에서 설명했습니다.
 * 이때 pre-rendering을 위한 HTML 문서를 만들 때 가장 먼저 실행되는 파일이 바로 _app.js입니다.
 * _app.js 파일을 통해 pre-rendering될 HTML 파일에 포함될 콘텐츠를 생성해주는 파일입니다.
 *
 * 즉, 모든 페이지에서 공통적으로 적용될 것들을 _app.js 파일에서 작업이 가능합니다.
 * 이렇게 적용한 공통 레이아웃이나 컴포넌트, 공통 스타일 등은 다른 URL 경로로 라우팅이 되더라도 계속해서 유지가 됩니다.
 *
 *
 * "_app.js"는 필수로 작성해야 하며 pre-rendering을 위해 생성될 HTML 문서의 body 영역에 들어갈 콘텐츠를 담당하며,
 * 모든 페이지에서 공통적으로 사용될 레이아웃, 스타일 등을 설정할 수 있습니다.
 * */
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
