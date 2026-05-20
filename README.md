# RRdis - Modern Redis Management

<div align="center">

![RRdis Logo](public/assets/logo.png)

**The next-generation Redis desktop client that doesn't compromise on performance**

*Built with Rust + Tauri 2 for native speed. Designed for developers who work with production-scale data.*

[English](README.md) | [中文](README.zh-CN.md)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-2.1.0-green.svg)](https://github.com/daichongdev/rrdis-web/releases)
[![Platform](https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-lightgrey.svg)](https://github.com/daichongdev/rrdis-web)
[![Downloads](https://img.shields.io/github/downloads/daichongdev/rrdis-web/total.svg)](https://github.com/daichongdev/rrdis-web/releases)

</div>

---

## 🚀 Why RRdis?

A professional Redis desktop client built with **Rust + Tauri 2** for native performance. Handle millions of keys and 100MB+ values without lag.

- **🔥 10x Faster** - <1s startup, ~50MB memory (vs 200MB+ Electron clients)
- **💪 Production-Ready** - Stream large values, SCAN-based pagination, connection keep-alive
- **🎯 Zero Friction** - Built-in CLI autocomplete, syntax highlighting, JSON formatting
- **🎨 Ultra Lightweight** - Only ~15MB installed size

## ✨ Core Capabilities

### 🎯 **Handle Production-Scale Data**
- **Streaming Architecture** - Load and edit 100MB+ values in real-time without memory spikes or UI freezing
- **SCAN-Based Pagination** - Browse databases with millions of keys using Redis SCAN for consistent performance
- **Smart Truncation** - Preview large values instantly, expand to full content on demand
- **Universal Type Support** - First-class editors for String, List, Set, Hash, ZSet, and Stream with type-specific optimizations

### 🔥 **Enterprise-Grade Reliability**
- **Connection Keep-Alive** - Automatic health checks and reconnection prevent silent failures
- **Multi-Window Isolation** - Each window maintains independent database context—no cross-contamination
- **Sub-Second Startup** - Native Rust core launches instantly, even on cold start
- **Memory Optimized** - Efficient rendering engine handles 100K+ row tables without lag
- **SQL Query Logging** - Track all operations for debugging and audit compliance

### 💎 **Developer Productivity**
- **Intelligent CLI** - Full Redis command support with context-aware autocomplete and command history
- **Advanced Syntax Highlighting** - Automatic language detection and formatting for JSON, XML, HTML, and more
- **Recursive JSON Display** - Nested JSON structures automatically parsed and beautifully formatted
- **One-Click Operations** - Copy values, duplicate keys, or export data with single clicks
- **Keyboard-First Design** - Navigate and execute commands without touching the mouse

### 🎨 **Polished Interface**
- **Professional Dark Mode** - Carefully tuned contrast reduces eye strain during long sessions
- **Enhanced Readability** - Alternating row colors, hover states, and selection highlighting
- **Multi-Tab Workspace** - Manage multiple connections simultaneously without context switching overhead
- **Context Menus** - Right-click anywhere for relevant operations
- **True Internationalization** - Full support for English, Chinese, and extensible to more languages

### 🛠️ **Advanced Operations**
- **Comprehensive Key Management** - Create, rename, copy, duplicate, and delete with validation
- **Batch Operations** - Execute operations across multiple keys with progress tracking
- **Smart Pagination** - Configurable page sizes with smooth navigation through massive datasets
- **Duplicate Prevention** - Intelligent validation prevents duplicate members in ZSET and SET operations
- **TTL Management** - View and modify key expiration with visual indicators

## 🏗️ Technical Architecture

**Why Rust + Tauri 2?**

Traditional Redis clients built on Electron suffer from high memory usage, slow startup times, and performance degradation with large datasets. RRdis takes a different approach:

- **Rust Backend** - Zero-cost abstractions, memory safety without garbage collection, and true multi-threading
- **Tauri 2 Framework** - Native OS integration with ~95% smaller bundle size than Electron
- **React 19 Frontend** - Modern UI with concurrent rendering and automatic batching
- **TypeScript** - Type-safe development with excellent IDE support
- **Tailwind CSS** - Utility-first styling for consistent, maintainable design

**Performance Benchmarks:**
- **Startup Time**: <1s (vs 3-5s for Electron-based clients)
- **Memory Usage**: ~50MB baseline (vs 200-300MB for Electron)
- **Large Value Loading**: Stream 100MB+ without blocking UI
- **Key Browsing**: Handle 10M+ keys with constant memory usage

## 📦 Installation

**Latest Version: v2.1.0** | [Release Notes](https://github.com/daichongdev/rrdis-web/releases/latest)

Choose your platform and download the installer:

| Platform | Architecture | Package | Size |
|----------|-------------|---------|------|
| **macOS** | Apple Silicon (M1/M2/M3/M4) | [Download .zip](https://github.com/daichongdev/rrdis-web/releases/latest) | ~15MB |
| **macOS** | Intel (x64) | [Download .zip](https://github.com/daichongdev/rrdis-web/releases/latest) | ~15MB |
| **Windows** | x64 | [Download .msi](https://github.com/daichongdev/rrdis-web/releases/latest) | ~18MB |
| **Windows** | x64 | [Download .exe](https://github.com/daichongdev/rrdis-web/releases/latest) | ~18MB |
| **Linux** | x64 | [Download .AppImage](https://github.com/daichongdev/rrdis-web/releases/latest) | ~20MB |

**Installation Notes:**
- **macOS**: After downloading, extract the .zip and drag RRdis.app to Applications
- **Windows**: Run the .msi installer or portable .exe (no admin required)
- **Linux**: Make the .AppImage executable: `chmod +x RRdis.AppImage`

## 📝 Release Highlights

### v2.1.0 (Latest) - Enhanced Observability & Stability
- ✅ **SQL Query Logging** - Track all Redis operations for debugging and compliance
- ✅ **Connection Keep-Alive Configuration** - Customizable health check intervals
- ✅ **Improved Error Handling** - Better error messages and recovery strategies
- ✅ **Performance Optimizations** - Reduced memory footprint and faster rendering

### v2.0.0 - Production-Ready Release
- ✅ **Streaming Data Loading** - Handle 100MB+ values without memory spikes
- ✅ **SCAN-Based Pagination** - Browse millions of keys efficiently
- ✅ **Multi-Window Isolation** - Independent database contexts per window
- ✅ **JSON Serialization** - Automatic detection and recursive formatting
- ✅ **CLI Autocomplete** - Intelligent command suggestions
- ✅ **Enhanced UI** - Dark mode, syntax highlighting, alternating row colors

[View Complete Changelog](CHANGELOG.md) | [All Releases](https://github.com/daichongdev/rrdis-web/releases)

## 🎯 Use Cases

**Development & Testing**
- Test Redis commands and data structures in a safe local environment
- Debug application Redis interactions with real-time data inspection
- Prototype data models before production deployment

**DevOps & Operations**
- Monitor production Redis instances with read-only connections
- Perform emergency data fixes with audit logging
- Analyze memory usage and key distribution patterns

**Data Engineering**
- Explore and validate Redis data pipelines
- Export data for analysis or migration
- Inspect Stream data structures for event processing systems

**Learning & Education**
- Interactive environment for learning Redis commands
- Visualize how different data types work
- Experiment with advanced features like Streams and Pub/Sub

## 🆚 Why Choose RRdis Over Alternatives?

| Feature | RRdis | RedisInsight | Another Redis Desktop Manager |
|---------|-------|--------------|-------------------------------|
| **Startup Time** | <1s | 3-5s | 2-4s |
| **Memory Usage** | ~50MB | 200-300MB | 150-250MB |
| **Large Value Handling** | Streaming (100MB+) | Limited | Limited |
| **Million+ Keys** | SCAN-based | Slow | Very Slow |
| **Native Performance** | ✅ Rust | ❌ Electron | ❌ Electron |
| **Multi-Window Isolation** | ✅ | ❌ | ❌ |
| **Open Source** | ✅ MIT | ❌ Proprietary | ✅ |
| **Bundle Size** | ~15MB | 200MB+ | 100MB+ |
| **SQL Query Logging** | ✅ | ❌ | ❌ |

## 🚀 Quick Start

1. **Download** the installer for your platform from the [releases page](https://github.com/daichongdev/rrdis-web/releases/latest)
2. **Install** following the platform-specific instructions above
3. **Launch** RRdis and click "New Connection"
4. **Connect** to your Redis instance (localhost:6379 for local development)
5. **Start managing** your Redis data with a professional-grade interface

**First-Time Tips:**
- Use `Ctrl/Cmd + K` to open the command palette
- Right-click any key for quick operations
- Press `Tab` in the CLI for autocomplete
- Click "View Full Content" for truncated large values

## 📸 Screenshots

Visit our [official website](https://daichongdev.github.io/rrdis-web/) to see RRdis in action with interactive demos and detailed screenshots.

## 🤝 Contributing

We welcome contributions from the community! Whether it's bug reports, feature requests, or code contributions, your input helps make RRdis better.

**Ways to Contribute:**
- 🐛 [Report bugs](https://github.com/daichongdev/rrdis-web/issues/new?template=bug_report.md)
- 💡 [Request features](https://github.com/daichongdev/rrdis-web/issues/new?template=feature_request.md)
- 📖 Improve documentation
- 🌍 Add translations for new languages
- 💻 Submit pull requests

Please read our [Contributing Guide](CONTRIBUTING.md) for development setup and guidelines.

## 🛣️ Roadmap

**Planned Features:**
- [ ] Redis Cluster support with topology visualization
- [ ] Pub/Sub message monitoring and publishing
- [ ] Performance profiling and slow query analysis
- [ ] Data import/export in multiple formats (JSON, CSV, Redis Protocol)
- [ ] Custom themes and UI customization
- [ ] Plugin system for extensibility

Vote on features or suggest new ones in our [Discussions](https://github.com/daichongdev/rrdis-web/discussions).

## 💬 Community & Support

- **Documentation**: [Official Docs](https://daichongdev.github.io/rrdis-web/)
- **Issues**: [GitHub Issues](https://github.com/daichongdev/rrdis-web/issues)
- **Discussions**: [GitHub Discussions](https://github.com/daichongdev/rrdis-web/discussions)
- **Website**: [daichongdev.github.io/rrdis-web](https://daichongdev.github.io/rrdis-web/)

## 📄 License

RRdis is open source software licensed under the [MIT License](LICENSE).

**What this means:**
- ✅ Free for personal and commercial use
- ✅ Modify and distribute as you wish
- ✅ No warranty or liability
- ✅ Attribution appreciated but not required

## 🙏 Acknowledgments

Built with these amazing open source projects:
- [Tauri](https://tauri.app/) - Native app framework
- [React](https://react.dev/) - UI library
- [Rust](https://www.rust-lang.org/) - Systems programming language
- [Redis](https://redis.io/) - The database we all love

## ⭐ Star History

If you find RRdis useful, please consider giving it a star on GitHub! It helps others discover the project.

[![Star History Chart](https://api.star-history.com/svg?repos=daichongdev/rrdis-web&type=Date)](https://star-history.com/#daichongdev/rrdis-web&Date)
