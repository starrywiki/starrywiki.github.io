# Anqi Li 李安琪 · Academic Homepage

主页：<https://starrywiki.github.io/>

白色背景、固定个人信息侧栏、移动端自适应。页面由原生 HTML、CSS 和少量用于放大论文主图的 JavaScript 构成，不需要安装依赖或构建，也不使用外部字体、统计脚本或图标服务。

## 修改内容

- `index.html`：个人介绍、研究方向、论文、实习、教育、荣誉，以及左侧的社交链接。
- `styles.css`：排版、字号、颜色和响应式布局。
- `assets/portrait.png`：从本人提供的简历中提取的头像。
- `assets/Anqi_Li_CV.pdf`：本人提供的原始简历，左侧 CV 直接打开此文件。
- `assets/publications/`：论文主图。
- `scripts/figures.js`：点击论文主图后弹出放大视图，可按 Esc 或点击 Close 关闭。

### 修改字体

打开 `styles.css`，文件最上面的 `:root` 中集中放置字体设置：

```css
--font-body: Georgia, "Times New Roman", "Songti SC", "SimSun", serif;
--font-heading: var(--font-body);
--font-ui: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, "PingFang SC", sans-serif;
--body-font-size: 1.125rem;
--body-line-height: 1.8;
```

- `--font-body`：正文，当前为 Georgia 衬线字体，中文回退到宋体。
- `--font-heading`：标题，默认与正文相同；可单独指定。
- `--font-ui`：侧栏社交链接、导航和按钮，当前为系统无衬线字体。
- `--body-font-size`：正文字号，`1.125rem` 在默认浏览器设置下为 18px。
- `--body-line-height`：正文行距。

字体按从左到右的顺序选用；如果读者设备没有某种字体，会使用下一个。更改为特殊字体时，需要同时添加获授权的字体文件及对应 `@font-face` 定义。

也可以直接在 GitHub 打开 `styles.css`，点击编辑按钮，保存提交到 `main` 后自动发布。

### 论文

复制一个 `li.publication` 后修改主图、标题、作者、会议、PDF 和 Code 链接。本人姓名用 `strong` 加粗，共同第一作者用星号标注。主图链接中的 `data-figure` 用于放大视图的标题。

### 访客地图

左栏 CV 下方已预留 `.visitor-map`，在得到属于本站的真实访客统计嵌入代码前保持隐藏，不显示示例计数或模拟地区。

可在 <https://mapmyvisitors.com/add> 为 `https://starrywiki.github.io/` 生成地图代码，选择白色背景、红色标记和小尺寸地图。将生成的代码加入 `#visitor-map-widget`，再移除 `.visitor-map` 的 `hidden` 属性。地图和访问量从启用后开始累计，不能补回此前未记录的访问。不要使用其他网站的统计 ID。

地图使用第三方统计服务；地区来自 IP 的大致定位。该服务未接入前，本站不会加载其统计脚本。

## 本地预览

在此文件夹运行：

```sh
python3 -m http.server 8000
```

打开 <http://localhost:8000>。

## 发布

GitHub Pages 使用 `main` 分支根目录。将修改提交并推送到 `main` 后，GitHub Pages 会自动更新站点。

内容依据本人提供的简历整理。论文的 Paper / Code 链接指向对应的 arXiv 页面和公开项目仓库。

### 图片来源

- 上海交通大学标识：学校官网 <https://en.sjtu.edu.cn/favicon.ico>。
- 致远学院标识：学院官网 <https://en.zhiyuan.sjtu.edu.cn/assets/home/images/logoWhite.png>，通过 CSS 显示其校徽部分。
- Microsoft 标识：本地 SVG，作为机构链接的视觉标识。
- TwinPrune 主图：<https://github.com/Kai-Liu001/TwinPrune/blob/main/docs/assets/twinprune_method.png>。
- DRScaffold 主图：<https://github.com/irene-shi/DRScaffold/blob/main/figs/teaser.png>。

论文排版参考 <https://irene-shi.github.io/> 的“主图、会议信息、作者和资源入口”形式，使用本人论文的图片和作者信息。
