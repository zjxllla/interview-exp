webpack打包流程  基于node开发，cjs模块系统
    Webpack 是一个模块化打包工具，核心思想是将所有资源（JS、CSS、图片等）视为模块，通过依赖分析生成静态资源。它的打包流程分为以下步骤：

    ​读取配置​
    从 webpack.config.js 中读取入口（entry）、输出（output）、Loader、Plugin 等配置。
    ​构建依赖图​
    从入口文件（如 main.js）开始，递归解析模块的依赖关系（通过 import/require 语句），生成一个依赖关系图。
    ​模块处理​
    ​Loader 转换​：通过 Loader（如 babel-loader、css-loader）将非 JS 文件（如 TypeScript、Sass）转换为 Webpack 能处理的模块。
    ​代码分析​：处理模块间的依赖关系，生成 AST（抽象语法树），优化代码（如 Tree Shaking 删除无用代码）。
    ​代码分块（Chunk）​​
    根据配置（如 splitChunks）将代码拆分成多个 Chunk（如 vendor.js、app.js），避免单个文件过大。
    ​输出文件​
    将处理后的代码打包成浏览器可执行的静态文件（Bundle），并注入 Plugin（如 HtmlWebpackPlugin 生成 HTML 文件）的副作用代码。


vite
    Vite 是一个现代化的前端构建工具，采用了与 Webpack 不同的构建思路，主要分为开发环境和生产环境两种模式：

    开发环境（Dev Server）：  极致速度
    利用浏览器原生 ES 模块（ESM）支持，实现按需编译
    使用 esbuild 预构建依赖，速度比传统工具快 10-100 倍
    无需打包，直接提供源文件，实现毫秒级热更新（HMR）
    
    生产环境（Build）：  深度优化
    使用 Rollup 进行代码打包和优化
    默认输出高度优化的静态资源
    支持多页应用和库模式构建

    为什么使用 esbuild（开发环境）：
    极速性能：用 Go 语言编写，比 JavaScript 构建工具快 10-100 倍
    依赖预构建：快速将 CommonJS/UMD 转为 ESM，并将多个内部模块合并
    TypeScript/JSX 转译：无需额外配置即可处理这些文件类型

    为什么使用 Rollup（生产环境）：
    成熟的生态系统：拥有丰富的插件和优化策略
    更好的代码分割：能够生成更优化的 chunk 分割
    CSS 代码分割：可以为异步组件生成单独的 CSS 文件
    更好的兼容性：处理各种边缘情况的能力更强



hmr区别：

    vite：
        - 利用浏览器原生 ESM 的导入/导出机制
        - 更新时只需替换模块的导出内容
        - 对框架组件（如 Vue、React）提供了优化的 HMR 处理

    webpack：
        - 当文件变更时，Webpack 需要重新构建整个依赖图
        - 即使只修改了一个模块，也需要重新打包含有该模块的 chunk
        - 对于大型项目，即使使用了 HMR，热更新也会有明显延迟