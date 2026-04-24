# RRdis - Modern Redis Management

<div align="center">

![RRdis Logo](https://via.placeholder.com/150x150?text=RRdis)

**A blazing-fast, feature-rich Redis desktop client built for modern developers**

[English](#english) | [中文](#中文)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-2.0.0-green.svg)](https://github.com/yourusername/rrdis/releases)
[![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey.svg)](https://github.com/yourusername/rrdis)

</div>

---

## English

### 🚀 Overview

RRdis is a high-performance desktop client for Redis management, designed for developers and architects who demand precision, speed, and a beautiful interface that stays out of your way. Built with Tauri 2 and React 19, it delivers native performance with a modern, intuitive user experience.

### ✨ Key Features

#### 🎯 **Smart Data Management**
- **Streaming Data Loading** - Handle massive datasets (1MB+) without lag using intelligent streaming technology
- **Batch Loading with SCAN** - Efficiently browse millions of keys with progressive loading
- **Smart Truncation** - Large data automatically truncated with on-demand full content viewing
- **All Redis Types Supported** - Native editors for String, List, Set, Hash, ZSet, and Stream

#### 🔥 **Performance & Reliability**
- **Connection Keep-Alive** - Automatic connection health monitoring and recovery
- **Multi-Window Isolation** - Perfect DB switching isolation across multiple windows
- **Blazing Fast Startup** - Native Tauri 2 core with zero overhead
- **Memory Efficient** - Optimized rendering for large datasets

#### 💎 **Developer Experience**
- **Built-in CLI with Autocomplete** - Full Redis command support with intelligent suggestions
- **Syntax Highlighting** - Beautiful code highlighting for JSON, XML, and more
- **JSON Serialization** - Automatic JSON detection, formatting, and recursive display
- **One-Click Copy** - Copy any value with a single click

#### 🎨 **Modern Interface**
- **Dark Mode** - Eye-friendly design that reduces fatigue
- **Alternating Row Colors** - Enhanced table readability with selection effects
- **Multi-tab Management** - Switch between connections without losing context
- **Right-Click Context Menu** - Quick access to common operations
- **Multi-language Support** - English, Chinese, and more

#### 🛠️ **Advanced Operations**
- **Key Management** - Create, rename, copy, and duplicate keys with ease
- **Batch Operations** - Perform operations on multiple keys simultaneously
- **Optimized Pagination** - Smooth navigation through large datasets
- **Duplicate Prevention** - Smart validation for ZSET & SET operations

### 🏗️ Tech Stack

- **Frontend**: React 19 + TypeScript + Tailwind CSS
- **Backend**: Rust + Tauri 2
- **Performance**: Native compilation, zero-overhead runtime
- **Cross-platform**: macOS, Windows, Linux

### 📦 Download

**Latest Version: v2.0.0** (Released: 2026-04-23)

| Platform | Architecture | Download |
|----------|-------------|----------|
| **macOS** | Apple Silicon (M1/M2/M3) | [Download .dmg](https://github.com/yourusername/rrdis/releases) |
| **macOS** | Intel (x64) | [Download .dmg](https://github.com/yourusername/rrdis/releases) |
| **Windows** | x64 | [Download .msi](https://github.com/yourusername/rrdis/releases) / [.exe](https://github.com/yourusername/rrdis/releases) |
| **Linux** | x64 | [Download .AppImage](https://github.com/yourusername/rrdis/releases) |

### 📝 What's New in v2.0.0

- ✅ Streaming data loading for large values (1MB+)
- ✅ SCAN-based batch loading for massive key lists
- ✅ Connection keep-alive mechanism
- ✅ Multi-window DB switching isolation
- ✅ JSON serialization with recursive display
- ✅ Syntax highlighting for all data types
- ✅ CLI command autocomplete
- ✅ Key rename, copy, and duplicate operations
- ✅ Enhanced table UI with alternating colors
- ✅ Optimized pagination and performance

[View Full Changelog](CHANGELOG.md)

### 🎯 Use Cases

- **Development**: Test and debug Redis operations locally
- **DevOps**: Monitor and manage production Redis instances
- **Data Analysis**: Explore and analyze Redis data structures
- **Learning**: Perfect tool for learning Redis commands and concepts

### 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### 📄 License

MIT License - Open source by heart. See [LICENSE](LICENSE) for details.

### 🔗 Links

- [Official Website](https://yourdomain.com)
- [Documentation](https://docs.yourdomain.com)
- [Issue Tracker](https://github.com/yourusername/rrdis/issues)
- [Discussions](https://github.com/yourusername/rrdis/discussions)

---

## 中文

### 🚀 项目简介

RRdis 是一款高性能的 Redis 桌面管理客户端，专为追求精准、速度和优雅界面的开发者和架构师设计。基于 Tauri 2 和 React 19 构建，提供原生性能和现代化的直观用户体验。

### ✨ 核心功能

#### 🎯 **智能数据管理**
- **流式数据加载** - 使用智能流式技术处理海量数据（1MB+），无卡顿
- **SCAN 批量加载** - 通过渐进式加载高效浏览百万级键
- **智能截断显示** - 大数据自动截断，支持按需查看完整内容
- **全类型支持** - 原生编辑器支持 String、List、Set、Hash、ZSet 和 Stream

#### 🔥 **性能与可靠性**
- **连接保活机制** - 自动连接健康监控和恢复
- **多窗口隔离** - 完美的多窗口 DB 切换隔离
- **极速启动** - 基于 Tauri 2 原生内核，零开销
- **内存优化** - 针对大数据集优化的渲染性能

#### 💎 **开发者体验**
- **内置 CLI 自动补全** - 完整的 Redis 命令支持和智能建议
- **语法高亮** - 精美的 JSON、XML 等代码高亮显示
- **JSON 序列化** - 自动 JSON 检测、格式化和递归显示
- **一键复制** - 单击即可复制任何值

#### 🎨 **现代化界面**
- **暗黑模式** - 护眼设计，减少视觉疲劳
- **隔行变色** - 增强表格可读性，带选中效果
- **多标签管理** - 在连接之间切换不丢失上下文
- **右键菜单** - 快速访问常用操作
- **多语言支持** - 支持中文、英文等多种语言

#### 🛠️ **高级操作**
- **键管理** - 轻松创建、重命名、复制和创建键副本
- **批量操作** - 同时对多个键执行操作
- **优化分页** - 在大数据集中流畅导航
- **重复检测** - ZSET 和 SET 操作的智能验证

### 🏗️ 技术栈

- **前端**: React 19 + TypeScript + Tailwind CSS
- **后端**: Rust + Tauri 2
- **性能**: 原生编译，零开销运行时
- **跨平台**: macOS、Windows、Linux

### 📦 下载

**最新版本：v2.0.0**（发布日期：2026-04-23）

| 平台 | 架构 | 下载 |
|------|------|------|
| **macOS** | Apple Silicon (M1/M2/M3) | [下载 .dmg](https://github.com/yourusername/rrdis/releases) |
| **macOS** | Intel (x64) | [下载 .dmg](https://github.com/yourusername/rrdis/releases) |
| **Windows** | x64 | [下载 .msi](https://github.com/yourusername/rrdis/releases) / [.exe](https://github.com/yourusername/rrdis/releases) |
| **Linux** | x64 | [下载 .AppImage](https://github.com/yourusername/rrdis/releases) |

### 📝 v2.0.0 版本更新

- ✅ 大数据值（1MB+）流式加载
- ✅ 基于 SCAN 的海量键列表批量加载
- ✅ 连接保活机制
- ✅ 多窗口 DB 切换隔离
- ✅ JSON 序列化与递归显示
- ✅ 全类型数据语法高亮
- ✅ CLI 命令自动补全
- ✅ 键重命名、复制和创建副本操作
- ✅ 增强表格 UI，隔行变色
- ✅ 优化分页和性能

[查看完整更新日志](CHANGELOG.md)

### 🎯 使用场景

- **开发调试**: 本地测试和调试 Redis 操作
- **运维管理**: 监控和管理生产环境 Redis 实例
- **数据分析**: 探索和分析 Redis 数据结构
- **学习工具**: 学习 Redis 命令和概念的完美工具

### 🤝 参与贡献

我们欢迎贡献！请查看我们的[贡献指南](CONTRIBUTING.md)了解详情。

### 📄 开源协议

MIT 协议 - 用心开源。详见 [LICENSE](LICENSE) 文件。

### 🔗 相关链接

- [官方网站](https://yourdomain.com)
- [使用文档](https://docs.yourdomain.com)
- [问题反馈](https://github.com/yourusername/rrdis/issues)
- [讨论区](https://github.com/yourusername/rrdis/discussions)
