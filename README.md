# VSCode 插件下载器

[中文](README.md) | [English](README.en.md)

一个简单实用的 Chrome 扩展程序，可在 VS Code Marketplace 的插件历史版本页面添加下载按钮，方便用户下载特定版本的 VS Code 插件。

### 功能特点

- 自动在 VS Code Marketplace 插件版本历史页面添加下载按钮
- 支持下载任意历史版本的 VS Code 插件
- 界面清爽，操作简单
- 实现轻量化，不影响其他页面功能

### 安装方法

1. 克隆或下载此仓库到本地
2. 打开 Chrome 浏览器，进入扩展程序页面（chrome://extensions/）
3. 在右上角启用"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择包含此仓库的文件夹

### 使用说明

1. 安装扩展程序后，访问任意 VS Code Marketplace 插件的版本历史页面
2. 每个版本信息旁边会自动出现蓝色的"下载"按钮
3. 点击"下载"按钮即可下载对应版本的插件包（.vsix 文件）

### 技术实现

- 使用 Chrome Extension Manifest V3
- 通过 content script 注入下载按钮
- 使用 VS Code Marketplace API 实现插件下载

### 注意事项

- 此扩展程序仅在 VS Code Marketplace 网站上有效。
- 下载的插件文件为 .vsix 格式，适用于离线安装。
- 建议下载后检查文件完整性。

### 许可证

MIT License
