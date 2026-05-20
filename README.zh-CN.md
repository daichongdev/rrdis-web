# RRdis - 现代化 Redis 管理工具

<div align="center">

![RRdis Logo](public/assets/logo.png)

**新一代 Redis 桌面客户端，性能毫不妥协**

*基于 Rust + Tauri 2 构建，原生速度。专为处理生产级数据的开发者设计。*

[English](README.md) | [中文](README.zh-CN.md)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-2.1.0-green.svg)](https://github.com/daichongdev/rrdis-web/releases)
[![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey.svg)](https://github.com/daichongdev/rrdis-web)
[![Downloads](https://img.shields.io/github/downloads/daichongdev/rrdis-web/total.svg)](https://github.com/daichongdev/rrdis-web/releases)

</div>

---

## 🚀 为什么选择 RRdis？

基于 **Rust + Tauri 2** 构建的专业 Redis 桌面客户端，原生性能。轻松处理百万级键和 100MB+ 数据值。

- **🔥 10倍速度提升** - <1秒启动，~50MB 内存（Electron 客户端需 200MB+）
- **💪 生产环境就绪** - 流式处理大值、基于 SCAN 的分页、连接保活
- **🎯 零摩擦体验** - 内置 CLI 自动补全、语法高亮、JSON 格式化
- **🎨 超轻量级** - 安装包仅 ~15MB

## ✨ 核心能力

### 🎯 **处理生产级数据规模**
- **流式架构** - 实时加载和编辑 100MB+ 数据值，无内存峰值或界面卡顿
- **基于 SCAN 的分页** - 使用 Redis SCAN 命令浏览百万级键的数据库，保持稳定性能
- **智能截断显示** - 即时预览大数据值，按需展开查看完整内容
- **全类型支持** - 为 String、List、Set、Hash、ZSet 和 Stream 提供一流的编辑器，针对每种类型进行优化

### 🔥 **企业级可靠性**
- **连接保活机制** - 自动健康检查和重连防止静默失败
- **多窗口隔离** - 每个窗口维护独立的数据库上下文，无交叉污染
- **亚秒级启动** - 原生 Rust 内核即时启动，即使冷启动也快速响应
- **内存优化** - 高效渲染引擎处理 10万+ 行表格无延迟
- **SQL 查询日志** - 跟踪所有操作，便于调试和审计合规

### 💎 **开发者生产力**
- **智能 CLI** - 完整的 Redis 命令支持，带上下文感知的自动补全和命令历史
- **高级语法高亮** - 自动语言检测和格式化，支持 JSON、XML、HTML 等
- **递归 JSON 显示** - 嵌套 JSON 结构自动解析并精美格式化
- **一键操作** - 单击即可复制值、复制键或导出数据
- **键盘优先设计** - 无需触摸鼠标即可导航和执行命令

### 🎨 **精致界面**
- **专业暗黑模式** - 精心调校的对比度减少长时间使用的眼部疲劳
- **增强可读性** - 隔行变色、悬停状态和选中高亮
- **多标签工作区** - 同时管理多个连接，无上下文切换开销
- **右键菜单** - 在任何位置右键获取相关操作
- **真正的国际化** - 完整支持中文、英文，可扩展更多语言

### 🛠️ **高级操作**
- **全面的键管理** - 创建、重命名、复制、创建副本和删除，带验证功能
- **批量操作** - 跨多个键执行操作，带进度跟踪
- **智能分页** - 可配置页面大小，在海量数据集中流畅导航
- **重复检测** - 智能验证防止 ZSET 和 SET 操作中的重复成员
- **TTL 管理** - 查看和修改键过期时间，带可视化指示器

## 🏗️ 技术架构

**为什么选择 Rust + Tauri 2？**

基于 Electron 构建的传统 Redis 客户端存在高内存占用、启动缓慢和大数据集性能下降的问题。RRdis 采用不同的方法：

- **Rust 后端** - 零成本抽象、无垃圾回收的内存安全和真正的多线程
- **Tauri 2 框架** - 原生操作系统集成，包体积比 Electron 小 ~95%
- **React 19 前端** - 现代 UI，支持并发渲染和自动批处理
- **TypeScript** - 类型安全开发，优秀的 IDE 支持
- **Tailwind CSS** - 实用优先的样式，保持一致性和可维护性

**性能基准测试：**
- **启动时间**：<1秒（Electron 客户端为 3-5秒）
- **内存使用**：~50MB 基线（Electron 为 200-300MB）
- **大值加载**：流式处理 100MB+ 不阻塞 UI
- **键浏览**：处理 1000万+ 键，内存使用恒定

## 📦 安装

**最新版本：v2.1.0** | [发布说明](https://github.com/daichongdev/rrdis-web/releases/latest)

选择您的平台并下载安装程序：

| 平台 | 架构 | 安装包 | 大小 |
|------|------|--------|------|
| **macOS** | Apple Silicon (M1/M2/M3/M4) | [下载 .zip](https://github.com/daichongdev/rrdis-web/releases/latest) | ~15MB |
| **macOS** | Intel (x64) | [下载 .zip](https://github.com/daichongdev/rrdis-web/releases/latest) | ~15MB |
| **Windows** | x64 | [下载 .msi](https://github.com/daichongdev/rrdis-web/releases/latest) | ~18MB |
| **Windows** | x64 | [下载 .exe](https://github.com/daichongdev/rrdis-web/releases/latest) | ~18MB |
| **Linux** | x64 | [下载 .AppImage](https://github.com/daichongdev/rrdis-web/releases/latest) | ~20MB |

**安装说明：**
- **macOS**：下载后解压 .zip 文件，将 RRdis.app 拖到应用程序文件夹
- **Windows**：运行 .msi 安装程序或便携式 .exe（无需管理员权限）
- **Linux**：使 .AppImage 可执行：`chmod +x RRdis.AppImage`

## 📝 版本亮点

### v2.1.0（最新版）- 增强可观测性与稳定性
- ✅ **SQL 查询日志** - 跟踪所有 Redis 操作，便于调试和合规审计
- ✅ **连接保活配置** - 可自定义健康检查间隔
- ✅ **改进错误处理** - 更好的错误消息和恢复策略
- ✅ **性能优化** - 减少内存占用，加快渲染速度

### v2.0.0 - 生产就绪版本
- ✅ **流式数据加载** - 处理 100MB+ 数据值无内存峰值
- ✅ **基于 SCAN 的分页** - 高效浏览百万级键
- ✅ **多窗口隔离** - 每个窗口独立的数据库上下文
- ✅ **JSON 序列化** - 自动检测和递归格式化
- ✅ **CLI 自动补全** - 智能命令建议
- ✅ **增强 UI** - 暗黑模式、语法高亮、隔行变色

[查看完整更新日志](CHANGELOG.md) | [所有版本](https://github.com/daichongdev/rrdis-web/releases)

## 🎯 使用场景

**开发与测试**
- 在安全的本地环境中测试 Redis 命令和数据结构
- 通过实时数据检查调试应用程序的 Redis 交互
- 在生产部署前原型化数据模型

**运维与操作**
- 使用只读连接监控生产 Redis 实例
- 执行紧急数据修复，带审计日志
- 分析内存使用和键分布模式

**数据工程**
- 探索和验证 Redis 数据管道
- 导出数据用于分析或迁移
- 检查事件处理系统的 Stream 数据结构

**学习与教育**
- 学习 Redis 命令的交互式环境
- 可视化不同数据类型的工作方式
- 实验 Stream 和 Pub/Sub 等高级功能

## 🆚 为什么选择 RRdis 而非其他工具？

| 功能 | RRdis | RedisInsight | Another Redis Desktop Manager |
|------|-------|--------------|-------------------------------|
| **启动时间** | <1秒 | 3-5秒 | 2-4秒 |
| **内存使用** | ~50MB | 200-300MB | 150-250MB |
| **大值处理** | 流式（100MB+） | 有限 | 有限 |
| **百万级键** | 基于 SCAN | 慢 | 非常慢 |
| **原生性能** | ✅ Rust | ❌ Electron | ❌ Electron |
| **多窗口隔离** | ✅ | ❌ | ❌ |
| **开源** | ✅ MIT | ❌ 专有 | ✅ |
| **包体积** | ~15MB | 200MB+ | 100MB+ |
| **SQL 查询日志** | ✅ | ❌ | ❌ |

## 🚀 快速开始

1. **下载** 适合您平台的安装程序，访问[发布页面](https://github.com/daichongdev/rrdis-web/releases/latest)
2. **安装** 按照上述平台特定说明操作
3. **启动** RRdis 并点击"新建连接"
4. **连接** 到您的 Redis 实例（本地开发使用 localhost:6379）
5. **开始管理** 使用专业级界面管理您的 Redis 数据

**首次使用提示：**
- 使用 `Ctrl/Cmd + K` 打开命令面板
- 右键点击任何键获取快速操作
- 在 CLI 中按 `Tab` 键自动补全
- 点击"查看完整内容"查看被截断的大值

## 📸 截图展示

访问我们的[官方网站](https://daichongdev.github.io/rrdis-web/)查看 RRdis 的实际操作演示和详细截图。

## 🤝 参与贡献

我们欢迎社区贡献！无论是错误报告、功能请求还是代码贡献，您的意见都能帮助 RRdis 变得更好。

**贡献方式：**
- 🐛 [报告错误](https://github.com/daichongdev/rrdis-web/issues/new?template=bug_report.md)
- 💡 [请求功能](https://github.com/daichongdev/rrdis-web/issues/new?template=feature_request.md)
- 📖 改进文档
- 🌍 添加新语言翻译
- 💻 提交拉取请求

请阅读我们的[贡献指南](CONTRIBUTING.md)了解开发设置和指南。

## 🛣️ 路线图

**计划功能：**
- [ ] Redis 集群支持，带拓扑可视化
- [ ] Pub/Sub 消息监控和发布
- [ ] 性能分析和慢查询分析
- [ ] 多格式数据导入/导出（JSON、CSV、Redis 协议）
- [ ] 自定义主题和 UI 定制
- [ ] 插件系统实现可扩展性

在我们的[讨论区](https://github.com/daichongdev/rrdis-web/discussions)为功能投票或提出新建议。

## 💬 社区与支持

- **文档**：[官方文档](https://daichongdev.github.io/rrdis-web/)
- **问题反馈**：[GitHub Issues](https://github.com/daichongdev/rrdis-web/issues)
- **讨论区**：[GitHub Discussions](https://github.com/daichongdev/rrdis-web/discussions)
- **官方网站**：[daichongdev.github.io/rrdis-web](https://daichongdev.github.io/rrdis-web/)

## 📄 开源协议

RRdis 是根据 [MIT 协议](LICENSE)授权的开源软件。

**这意味着：**
- ✅ 个人和商业使用免费
- ✅ 可随意修改和分发
- ✅ 无担保或责任
- ✅ 感谢署名但非必需

## 🙏 致谢

使用这些优秀的开源项目构建：
- [Tauri](https://tauri.app/) - 原生应用框架
- [React](https://react.dev/) - UI 库
- [Rust](https://www.rust-lang.org/) - 系统编程语言
- [Redis](https://redis.io/) - 我们都喜爱的数据库

## ⭐ Star 历史

如果您觉得 RRdis 有用，请考虑在 GitHub 上给它一个 star！这有助于其他人发现这个项目。

[![Star History Chart](https://api.star-history.com/svg?repos=daichongdev/rrdis-web&type=Date)](https://star-history.com/#daichongdev/rrdis-web&Date)
