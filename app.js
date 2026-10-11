"use strict";
const config = window.PDF_CONFIG;
document.title = config.title;
document.getElementById("title").textContent = config.title;
document.getElementById("description").textContent = config.description;
const pdf = new URL(config.file, location.href);
const viewer = document.getElementById("viewer");
const status = document.getElementById("status");
document.getElementById("open").href = pdf.href;
document.getElementById("download").href = pdf.href;
function showNotice(title, message) {
  viewer.replaceChildren();
  const box = document.createElement("div");
  box.className = "notice";
  const heading = document.createElement("h2");
  heading.textContent = title;
  const text = document.createElement("p");
  text.textContent = message;
  box.append(heading, text);
  viewer.append(box);
}
async function load() {
  if (location.protocol !== "file:") {
    try {
      const response = await fetch(pdf, {method: "HEAD"});
      if (!response.ok) {
        showNotice("PDF 파일을 찾을 수 없습니다.", "pdfs/document.pdf 파일을 업로드하거나 config.js의 파일 경로를 확인해 주세요.");
        return;
      }
    } catch (_) {
      status.textContent = "파일 확인에 실패했습니다. PDF 열기 버튼으로 확인해 주세요.";
    }
  }
  const frame = document.createElement("iframe");
  frame.title = config.title + " PDF 미리보기";
  frame.src = pdf.href;
  viewer.append(frame);
}
document.getElementById("share").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(location.href);
    status.textContent = "페이지 링크를 복사했습니다.";
  } catch (_) {
    status.textContent = "자동 복사가 지원되지 않습니다. 주소창의 링크를 복사해 주세요.";
  }
});
load();
