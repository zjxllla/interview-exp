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
