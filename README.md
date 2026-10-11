# GitHub Pages PDF 공유 페이지

빌드나 설치 없이 HTML, CSS, JavaScript만으로 실행됩니다. 실제 PDF는 포함되어 있지 않습니다.

## 1. PDF 넣기

공유할 PDF 이름을 `document.pdf`로 변경해 `pdfs` 폴더에 넣습니다.
다른 파일명을 사용하려면 `config.js`의 `file` 값을 수정합니다.
문서 제목과 설명도 `config.js`에서 변경할 수 있습니다.

## 2. GitHub에 업로드

1. GitHub에서 새 공개(Public) 저장소를 만듭니다. 예: `pdf-share`.
2. 압축을 풀고 `github-pdf-site` 폴더 **안의 파일과 pdfs 폴더**를 저장소 최상위에 올립니다. 상위 폴더 전체를 올리면 안 됩니다.
3. GitHub 웹의 `Add file → Upload files`로 올리고 커밋합니다. 빈 폴더는 업로드되지 않으므로 PDF를 먼저 넣으세요.

저장소 구조:

```text
index.html
config.js
app.js
README.md
pdfs/document.pdf
```

## 3. Pages 설정

1. 저장소 `Settings → Pages`로 이동합니다.
2. `Build and deployment → Source`에서 `Deploy from a branch`를 선택합니다.
3. `Branch`는 `main`, 폴더는 `/(root)`를 선택하고 `Save`를 누릅니다.
4. 배포가 끝나면 Pages에 표시되는 주소를 공유합니다.

페이지 주소 예: `https://사용자명.github.io/pdf-share/`
PDF 직접 주소 예: `https://사용자명.github.io/pdf-share/pdfs/document.pdf`

공식 안내: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 사용 및 수정

- PDF를 교체하고 커밋하면 다음 배포에 반영됩니다.
- 브라우저의 PDF 뷰어로 표시되므로 확대, 페이지 이동 등은 브라우저에 따라 다릅니다.
- 모바일이나 미리보기를 지원하지 않는 브라우저에서는 `PDF 열기` 또는 `다운로드`를 사용합니다.
- `링크 복사`는 HTTPS로 배포된 페이지에서 사용합니다.
- 파일 경로는 상대 경로로 유지하세요. `/pdfs/document.pdf`처럼 시작하면 저장소 하위 주소에서 깨질 수 있습니다.
- 이 페이지에는 업로드 서버가 없습니다. 방문자가 파일을 올리는 방식이 아니라 운영자가 저장소에 PDF를 올리는 방식입니다.
- 공개 배포용입니다. 접근 권한이나 비밀번호 보호가 없으며 PDF 주소로 직접 접근할 수 있습니다.
- 기본 배포는 Jekyll 처리에서 제외되는 숨김 폴더나 파일에 의존하지 않습니다.

## 로컬 확인

이 폴더에서 `python3 -m http.server 8000`을 실행한 뒤 `http://localhost:8000`에 접속합니다.
Windows에서 python3 명령이 없으면 `python -m http.server 8000`을 사용합니다.
