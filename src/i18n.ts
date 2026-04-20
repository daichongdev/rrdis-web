/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const translations = {
  en: {
    nav: {
      features: "Features",
      demo: "Demo",
      tech: "Tech Stack",
      docs: "Docs",
      download: "Download"
    },
    hero: {
      badge: "V2.0 NOW AVAILABLE",
      title: "Modern Redis Management, ",
      titleHighlight: "Simplified",
      subtitle: "A high-performance desktop client designed for architects. Manage your data clusters with precision, speed, and a beautiful interface that stays out of your way.",
      downloadMac: "Download for macOS",
      starGithub: "Star on GitHub"
    },
    features: {
      title: "Architected for Speed",
      subtitle: "Every feature is tuned for low latency and high cognitive efficiency.",
      multiTab: {
        title: "Multi-tab Connection",
        desc: "Switch between local, staging, and production clusters in milliseconds without losing context."
      },
      dataSupport: {
        title: "Full Data Support",
        desc: "Strings, Lists, Sets, Hashes, and Streams handled with native UI editors."
      },
      fast: {
        title: "Blazing Fast",
        desc: "Native Tauri 2 core means zero overhead and instant startup times."
      },
      cli: {
        title: "Built-in CLI",
        desc: "For the power users who prefer the prompt. Full command autocomplete and history support.",
        learnMore: "Learn more"
      },
      multiLang: {
        title: "Multi-language",
        desc: "Localized for global teams, supporting 12+ languages out of the box."
      },
      modernUI: {
        title: "Modern UI",
        desc: "A design system that respects your focus and reduces ocular fatigue."
      }
    },
    workflow: {
      title: "Master Your Workflows",
      step1: {
        title: "Connection Management",
        desc: "Securely store SSH tunnels and multi-node clusters with industry-standard encryption."
      },
      step2: {
        title: "Data Browsing",
        desc: "Search through millions of keys with fuzzy filtering and advanced pattern matching."
      }
    },
    tech: {
      title: "Built with Modern Standards"
    },
    download: {
      title: "Ready to upgrade your workflow?",
      subtitle: "Free for personal use, forever. Choose your platform.",
      macOS: "macOS",
      macDetails: "Universal (Intel/M-series)",
      windows: "Windows",
      winDetails: "Windows 10, 11 (x64)",
      linux: "Linux",
      linuxDetails: "command-line only",
      comingSoon: "Coming Soon"
    },
    openSource: {
      title: "Open Source by Heart",
      desc: "RRdis is built under the MIT license. We believe in transparency and community-driven development. Join contributors making Redis management accessible to everyone.",
      community: "Community",
      donate: "Donate",
      stars: "GitHub Stars"
    },
    footer: {
      features: "Features",
      privacy: "Privacy",
      terms: "Terms",
      support: "Support",
      github: "GitHub",
      copyright: "© 2024 RRdis Desktop. Built for performance and precision."
    }
  },
  zh: {
    nav: {
      features: "功能特性",
      demo: "演示",
      tech: "技术栈",
      docs: "文档",
      download: "下载"
    },
    hero: {
      badge: "V2.0 现已发布",
      title: "现代化 Redis 管理，",
      titleHighlight: "化繁为简",
      subtitle: "专为架构师设计的高性能桌面客户端。以精准、快速和优雅的界面管理您的数据集群。",
      downloadMac: "下载 macOS 版本",
      starGithub: "在 GitHub 上点赞"
    },
    features: {
      title: "为速度而生",
      subtitle: "每个功能都经过优化，实现低延迟和高认知效率。",
      multiTab: {
        title: "多标签连接",
        desc: "在本地、测试和生产集群之间毫秒级切换，不丢失上下文。"
      },
      dataSupport: {
        title: "全面数据支持",
        desc: "原生 UI 编辑器支持字符串、列表、集合、哈希和流。"
      },
      fast: {
        title: "极速体验",
        desc: "原生 Tauri 2 内核意味着零开销和即时启动。"
      },
      cli: {
        title: "内置命令行",
        desc: "为喜欢命令行的高级用户准备。完整的命令自动补全和历史记录支持。",
        learnMore: "了解更多"
      },
      multiLang: {
        title: "多语言支持",
        desc: "为全球团队本地化，开箱即用支持 12+ 种语言。"
      },
      modernUI: {
        title: "现代化界面",
        desc: "尊重您的专注力并减少视觉疲劳的设计系统。"
      }
    },
    workflow: {
      title: "掌控您的工作流",
      step1: {
        title: "连接管理",
        desc: "使用行业标准加密安全存储 SSH 隧道和多节点集群。"
      },
      step2: {
        title: "数据浏览",
        desc: "通过模糊过滤和高级模式匹配搜索数百万个键。"
      }
    },
    tech: {
      title: "采用现代化标准构建"
    },
    download: {
      title: "准备好升级您的工作流了吗？",
      subtitle: "个人使用永久免费。选择您的平台。",
      macOS: "macOS",
      macDetails: "通用版 (Intel/M系列)",
      windows: "Windows",
      winDetails: "Windows 10, 11 (x64)",
      linux: "Linux",
      linuxDetails: "仅命令行",
      comingSoon: "即将推出"
    },
    openSource: {
      title: "开源之心",
      desc: "RRdis 基于 MIT 许可证构建。我们相信透明度和社区驱动的开发。加入贡献者，让 Redis 管理对每个人都触手可及。",
      community: "社区",
      donate: "捐赠",
      stars: "GitHub 星标"
    },
    footer: {
      features: "功能特性",
      privacy: "隐私政策",
      terms: "服务条款",
      support: "技术支持",
      github: "GitHub",
      copyright: "© 2024 RRdis Desktop. 为性能和精准而生。"
    }
  }
};

export type Language = keyof typeof translations;
