// ==UserScript==
// @name         语雀文档样式修改
// @namespace    https://greasyfork.org/
// @version      1.0
// @description  语雀文档样式修改试运行
// @author       AIJake
// @include      /^https://.*(yuque).*/
// @icon         https://www.google.com/s2/favicons?domain=yuque.com
// @grant        none
// @license MIT
// ==/UserScript==

window.onload = ()=>{
    const style = document.createElement('style');
    style.innerHTML = `
.ne-typography-traditional,
.ne-typography-classic {
  font-family: Roboto, RobotoNum, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Segoe UI";
  color: #262626;
  letter-spacing: initial;
}
.ne-typography-traditional ne-p,
.ne-typography-classic ne-p {
  margin-bottom: 10.32px;
}
.ne-typography-traditional ne-uli,
.ne-typography-classic ne-uli {
  margin-bottom: 3.87px;
}
.ne-typography-traditional ne-quote,
.ne-typography-classic ne-quote {
  position: relative;
  border-left: none;
}
.ne-typography-traditional ne-quote::before,
.ne-typography-classic ne-quote::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: -3px;
  bottom: 0;
  width: 3px;
  border-radius: 2px;
  background-color: #BEC0BF;
}
.ne-typography-traditional ne-quote ne-text,
.ne-typography-classic ne-quote ne-text {
  color: #585A5A;
}
.ne-typography-traditional.ne-engine ne-h1,
.ne-typography-classic.ne-engine ne-h1,
.ne-typography-traditional.ne-viewer ne-h1,
.ne-typography-classic.ne-viewer ne-h1 {
  font-size: 28px;
  line-height: 36px;
  margin: 54px 0 18px 0;
}
.ne-typography-traditional.ne-engine ne-h1:first-child,
.ne-typography-classic.ne-engine ne-h1:first-child,
.ne-typography-traditional.ne-viewer ne-h1:first-child,
.ne-typography-classic.ne-viewer ne-h1:first-child {
  margin-top: 0;
}
.ne-typography-traditional.ne-engine ne-h1 ne-heading-ext,
.ne-typography-classic.ne-engine ne-h1 ne-heading-ext,
.ne-typography-traditional.ne-viewer ne-h1 ne-heading-ext,
.ne-typography-classic.ne-viewer ne-h1 ne-heading-ext {
  height: 36px;
}
.ne-typography-traditional.ne-engine ne-h1 ne-text,
.ne-typography-classic.ne-engine ne-h1 ne-text,
.ne-typography-traditional.ne-viewer ne-h1 ne-text,
.ne-typography-classic.ne-viewer ne-h1 ne-text,
.ne-typography-traditional.ne-engine ne-h1 ne-card[data-card-type="inline"],
.ne-typography-classic.ne-engine ne-h1 ne-card[data-card-type="inline"],
.ne-typography-traditional.ne-viewer ne-h1 ne-card[data-card-type="inline"],
.ne-typography-classic.ne-viewer ne-h1 ne-card[data-card-type="inline"],
.ne-typography-traditional.ne-engine ne-h1 ne-code ne-text,
.ne-typography-classic.ne-engine ne-h1 ne-code ne-text,
.ne-typography-traditional.ne-viewer ne-h1 ne-code ne-text,
.ne-typography-classic.ne-viewer ne-h1 ne-code ne-text {
  font-size: 28px;
}
.ne-typography-traditional.ne-engine ne-h2,
.ne-typography-classic.ne-engine ne-h2,
.ne-typography-traditional.ne-viewer ne-h2,
.ne-typography-classic.ne-viewer ne-h2 {
  font-size: 24px;
  line-height: 32px;
  margin: 48px 0 16px 0;
}
.ne-typography-traditional.ne-engine ne-h2:first-child,
.ne-typography-classic.ne-engine ne-h2:first-child,
.ne-typography-traditional.ne-viewer ne-h2:first-child,
.ne-typography-classic.ne-viewer ne-h2:first-child {
  margin-top: 0;
}
.ne-typography-traditional.ne-engine ne-h2 ne-heading-ext,
.ne-typography-classic.ne-engine ne-h2 ne-heading-ext,
.ne-typography-traditional.ne-viewer ne-h2 ne-heading-ext,
.ne-typography-classic.ne-viewer ne-h2 ne-heading-ext {
  height: 32px;
}
.ne-typography-traditional.ne-engine ne-h2 ne-text,
.ne-typography-classic.ne-engine ne-h2 ne-text,
.ne-typography-traditional.ne-viewer ne-h2 ne-text,
.ne-typography-classic.ne-viewer ne-h2 ne-text,
.ne-typography-traditional.ne-engine ne-h2 ne-card[data-card-type="inline"],
.ne-typography-classic.ne-engine ne-h2 ne-card[data-card-type="inline"],
.ne-typography-traditional.ne-viewer ne-h2 ne-card[data-card-type="inline"],
.ne-typography-classic.ne-viewer ne-h2 ne-card[data-card-type="inline"],
.ne-typography-traditional.ne-engine ne-h2 ne-code ne-text,
.ne-typography-classic.ne-engine ne-h2 ne-code ne-text,
.ne-typography-traditional.ne-viewer ne-h2 ne-code ne-text,
.ne-typography-classic.ne-viewer ne-h2 ne-code ne-text {
  font-size: 24px;
}
.ne-typography-traditional.ne-engine ne-h3,
.ne-typography-classic.ne-engine ne-h3,
.ne-typography-traditional.ne-viewer ne-h3,
.ne-typography-classic.ne-viewer ne-h3 {
  font-size: 20px;
  line-height: 28px;
  margin: 42px 0 14px 0;
}
.ne-typography-traditional.ne-engine ne-h3:first-child,
.ne-typography-classic.ne-engine ne-h3:first-child,
.ne-typography-traditional.ne-viewer ne-h3:first-child,
.ne-typography-classic.ne-viewer ne-h3:first-child {
  margin-top: 0;
}
.ne-typography-traditional.ne-engine ne-h3 ne-heading-ext,
.ne-typography-classic.ne-engine ne-h3 ne-heading-ext,
.ne-typography-traditional.ne-viewer ne-h3 ne-heading-ext,
.ne-typography-classic.ne-viewer ne-h3 ne-heading-ext {
  height: 28px;
}
.ne-typography-traditional.ne-engine ne-h3 ne-text,
.ne-typography-classic.ne-engine ne-h3 ne-text,
.ne-typography-traditional.ne-viewer ne-h3 ne-text,
.ne-typography-classic.ne-viewer ne-h3 ne-text,
.ne-typography-traditional.ne-engine ne-h3 ne-card[data-card-type="inline"],
.ne-typography-classic.ne-engine ne-h3 ne-card[data-card-type="inline"],
.ne-typography-traditional.ne-viewer ne-h3 ne-card[data-card-type="inline"],
.ne-typography-classic.ne-viewer ne-h3 ne-card[data-card-type="inline"],
.ne-typography-traditional.ne-engine ne-h3 ne-code ne-text,
.ne-typography-classic.ne-engine ne-h3 ne-code ne-text,
.ne-typography-traditional.ne-viewer ne-h3 ne-code ne-text,
.ne-typography-classic.ne-viewer ne-h3 ne-code ne-text {
  font-size: 20px;
}
.ne-typography-traditional.ne-engine ne-h4,
.ne-typography-classic.ne-engine ne-h4,
.ne-typography-traditional.ne-viewer ne-h4,
.ne-typography-classic.ne-viewer ne-h4 {
  font-size: 16px;
  line-height: 24px;
  margin: 36px 0 12px 0;
}
.ne-typography-traditional.ne-engine ne-h4:first-child,
.ne-typography-classic.ne-engine ne-h4:first-child,
.ne-typography-traditional.ne-viewer ne-h4:first-child,
.ne-typography-classic.ne-viewer ne-h4:first-child {
  margin-top: 0;
}
.ne-typography-traditional.ne-engine ne-h4 ne-heading-ext,
.ne-typography-classic.ne-engine ne-h4 ne-heading-ext,
.ne-typography-traditional.ne-viewer ne-h4 ne-heading-ext,
.ne-typography-classic.ne-viewer ne-h4 ne-heading-ext {
  height: 24px;
}
.ne-typography-traditional.ne-engine ne-h4 ne-text,
.ne-typography-classic.ne-engine ne-h4 ne-text,
.ne-typography-traditional.ne-viewer ne-h4 ne-text,
.ne-typography-classic.ne-viewer ne-h4 ne-text,
.ne-typography-traditional.ne-engine ne-h4 ne-card[data-card-type="inline"],
.ne-typography-classic.ne-engine ne-h4 ne-card[data-card-type="inline"],
.ne-typography-traditional.ne-viewer ne-h4 ne-card[data-card-type="inline"],
.ne-typography-classic.ne-viewer ne-h4 ne-card[data-card-type="inline"],
.ne-typography-traditional.ne-engine ne-h4 ne-code ne-text,
.ne-typography-classic.ne-engine ne-h4 ne-code ne-text,
.ne-typography-traditional.ne-viewer ne-h4 ne-code ne-text,
.ne-typography-classic.ne-viewer ne-h4 ne-code ne-text {
  font-size: 16px;
}
.ne-typography-traditional.ne-engine ne-h5,
.ne-typography-classic.ne-engine ne-h5,
.ne-typography-traditional.ne-viewer ne-h5,
.ne-typography-classic.ne-viewer ne-h5 {
  line-height: 24px;
  margin: 36px 0 12px 0;
}
.ne-typography-traditional.ne-engine ne-h5:first-child,
.ne-typography-classic.ne-engine ne-h5:first-child,
.ne-typography-traditional.ne-viewer ne-h5:first-child,
.ne-typography-classic.ne-viewer ne-h5:first-child {
  margin-top: 0;
}
.ne-typography-traditional.ne-engine ne-h5 ne-heading-ext,
.ne-typography-classic.ne-engine ne-h5 ne-heading-ext,
.ne-typography-traditional.ne-viewer ne-h5 ne-heading-ext,
.ne-typography-classic.ne-viewer ne-h5 ne-heading-ext {
  height: 24px;
}
.ne-typography-traditional.ne-engine ne-h6,
.ne-typography-classic.ne-engine ne-h6,
.ne-typography-traditional.ne-viewer ne-h6,
.ne-typography-classic.ne-viewer ne-h6 {
  font-weight: bold;
  line-height: 24px;
  margin: 36px 0 12px 0;
}
.ne-typography-traditional.ne-engine ne-h6:first-child,
.ne-typography-classic.ne-engine ne-h6:first-child,
.ne-typography-traditional.ne-viewer ne-h6:first-child,
.ne-typography-classic.ne-viewer ne-h6:first-child {
  margin-top: 0;
}
.ne-typography-traditional.ne-engine ne-h6 ne-heading-ext,
.ne-typography-classic.ne-engine ne-h6 ne-heading-ext,
.ne-typography-traditional.ne-viewer ne-h6 ne-heading-ext,
.ne-typography-classic.ne-viewer ne-h6 ne-heading-ext {
  height: 24px;
}
.ne-viewer ne-h6 ne-text,
.ne-engine ne-h6 ne-text {
  font-weight: bold;
}
.ne-typography-classic.fz12 ne-p,
.ne-typography-traditional.fz12 ne-p {
  margin-bottom: 8.256px;
}
.ne-typography-classic.fz12 ne-uli,
.ne-typography-traditional.fz12 ne-uli {
  margin-bottom: 3.096px;
}
.ne-typography-classic.fz13 ne-p,
.ne-typography-traditional.fz13 ne-p {
  margin-bottom: 8.944px;
}
.ne-typography-classic.fz13 ne-uli,
.ne-typography-traditional.fz13 ne-uli {
  margin-bottom: 3.354px;
}
.ne-typography-classic.fz14 ne-p,
.ne-typography-traditional.fz14 ne-p {
  margin-bottom: 9.632px;
}
.ne-typography-classic.fz14 ne-uli,
.ne-typography-traditional.fz14 ne-uli {
  margin-bottom: 3.612px;
}
.ne-typography-classic.fz15 ne-p,
.ne-typography-traditional.fz15 ne-p {
  margin-bottom: 10.32px;
}
.ne-typography-classic.fz15 ne-uli,
.ne-typography-traditional.fz15 ne-uli {
  margin-bottom: 3.87px;
}
.ne-typography-classic.fz16 ne-p,
.ne-typography-traditional.fz16 ne-p {
  margin-bottom: 11.008px;
}
.ne-typography-classic.fz16 ne-uli,
.ne-typography-traditional.fz16 ne-uli {
  margin-bottom: 4.128px;
}
.ne-typography-classic.fz19 ne-p,
.ne-typography-traditional.fz19 ne-p {
  margin-bottom: 13.072px;
}
.ne-typography-classic.fz19 ne-uli,
.ne-typography-traditional.fz19 ne-uli {
  margin-bottom: 4.902px;
}
.ne-typography-classic.fz22 ne-p,
.ne-typography-traditional.fz22 ne-p {
  margin-bottom: 15.136px;
}
.ne-typography-classic.fz22 ne-uli,
.ne-typography-traditional.fz22 ne-uli {
  margin-bottom: 5.676px;
}
.ne-typography-classic.fz24 ne-p,
.ne-typography-traditional.fz24 ne-p {
  margin-bottom: 16.512px;
}
.ne-typography-classic.fz24 ne-uli,
.ne-typography-traditional.fz24 ne-uli {
  margin-bottom: 6.192px;
}
`;
    document.body.appendChild(style);
}
