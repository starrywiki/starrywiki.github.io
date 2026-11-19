# Anqi Li 李安琪 · Academic Homepage

主页：<https://starrywiki.github.io/>

白色背景、固定个人信息侧栏、移动端自适应。页面由原生 HTML、CSS 和少量用于放大论文主图的 JavaScript 构成，不需要安装依赖或构建。正文和图标使用本地资源，访客地图由 MapMyVisitors 提供。

## 修改内容

- `index.html`：个人介绍、研究方向、论文、实习、教育、荣誉，以及左侧的社交链接。
- `styles.css`：排版、字号、颜色和响应式布局。
- `assets/portrait.jpg`：本人提供的花丛照片，使用 CSS 裁切并将脸部居中。
- `assets/Anqi_Li_CV.pdf`：本人提供的原始简历，左侧 CV 直接打开此文件。
- `assets/publications/`：论文主图。
- `scripts/figures.js`：点击论文主图后弹出放大视图，可按 Esc 或点击 Close 关闭。
- `visitor-map.html`：隔离加载访客统计服务，仅显示访问总数和静态地图。
- `scripts/visitor-map.js`：保留服务商的实际数值和地区，将地图转换为不可点击的静态 SVG 图片。

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

### 修改头像构图

`styles.css` 顶部的 `--portrait-zoom` 控制照片放大比例，`--portrait-focus-x` / `--portrait-focus-y` 控制取景中心。图片本身保留原样；当前使用圆形取景框，缩小脸部占比并以脸部中心取景，保留头发、肩部与花朵。桌面端左栏顶部与 About Me 标题对齐。

### 论文

复制一个 `li.publication` 后修改主图、标题、作者、会议、PDF 和 Code 链接。本人姓名用 `strong` 加粗，共同第一作者用星号标注。主图链接中的 `data-figure` 用于放大视图的标题。

### 访客地图

左栏 CV 下方显示真实的 `数字 Views` 和静态地图，没有动画、日期面板、点击跳转或统计链接。后台统计页供本人管理：<https://mapmyvisitors.com/web/1c9kn>。

`visitor-map.html` 在隐藏区域加载服务商提供的小组件，等待真实访问总数和地区数据就绪后，将地图转换为一次性静态 SVG 图片，并销毁原始部件。这样既保留真实计数，也不会重复加载另一个图片计数入口。地图保持白色背景、浅灰色陆地和红色标记。颜色参数：`co` 背景、`cl` 陆地、`cmo`/`cmn` 访客标记、`ct` 文字。

地图和访问量由第三方服务提供，从启用后开始累计，不能补回此前未记录的访问；地区来自 IP 的大致定位。代码中的 `d` 是本站的公开嵌入 ID，修改它会切换统计站点。站点不保存服务商账户密码。

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
- 访客地图底图：MapMyVisitors 为本站浅灰陆地、白色背景配置生成的 220px 世界地图，存于 `assets/visitor-worldmap.png`。

论文排版参考 <https://irene-shi.github.io/> 的“主图、会议信息、作者和资源入口”形式，使用本人论文的图片和作者信息。
