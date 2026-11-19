# Anqi Li 李安琪 · Academic Homepage

主页：<https://starrywiki.github.io/>

白色背景、固定个人信息侧栏、移动端自适应。页面由原生 HTML 和 CSS 构成，不需要安装依赖或构建，也不使用外部字体、统计脚本或图标服务。

## 修改内容

- `index.html`：个人介绍、研究方向、论文、实习、教育、荣誉，以及左侧的社交链接。
- `styles.css`：排版、字号、颜色和响应式布局。
- `assets/portrait.png`：从本人提供的简历中提取的头像。
- `assets/Anqi_Li_CV.pdf`：本人提供的原始简历，左侧 CV 直接打开此文件。

### 增加 X / Twitter 链接

目前未提供该账号链接，因此保留图标和文字并设为不可点击。找到 `index.html` 中的 `class="unavailable-link"`，将外层 `span` 改为包含真实个人链接的 `a`，并移除 `class`、`aria-disabled` 和 `title`。不要填入占位链接。

### 论文

复制一个 `li.publication` 后修改标题、作者、会议、Paper 和 Code 链接。本人姓名用 `strong` 加粗，共同第一作者用星号标注。

## 本地预览

在此文件夹运行：

```sh
python3 -m http.server 8000
```

打开 <http://localhost:8000>。

## 发布

GitHub Pages 使用 `main` 分支根目录。将修改提交并推送到 `main` 后，GitHub Pages 会自动更新站点。

内容依据本人提供的简历整理。论文的 Paper / Code 链接指向对应的 arXiv 页面和公开项目仓库。
