/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Version {
  version: string;
  date: string;
  isPaid?: boolean;
  changelog: {
    en: string[];
    zh: string[];
  };
  downloads: {
    macOS?: {
      arm64?: string;
      x64?: string;
    };
    windows?: {
      msi?: string;
      exe?: string;
    };
    linux?: {
      x64?: string;
      arm64?: string;
    };
  };
}

export const versions: Version[] = [
  {
    version: "2.1.0",
    date: "2026-04-26",
    isPaid: true,
    changelog: {
      en: [
        "Added SQL log functionality",
        "Added connection keep-alive time settings",
        "Added keys loading count configuration"
      ],
      zh: [
        "新增SQL日志功能",
        "新增链接保活时间设置",
        "新增keys加载条数配置"
      ]
    },
    downloads: {
      macOS: {
        arm64: "pkg/RRdis-2.1.0_aarch64.dmg",
      },
      windows: {
        msi: "pkg/RRdis_2.1.0_x64.msi",
        exe: "pkg/RRdis_2.1.0_x64-setup.exe"
      }
    }
  },
  {
    version: "2.0.0",
    date: "2026-04-26",
    isPaid: true,
    changelog: {
      en: [
        "White screen issue fixed",
        "Added React error boundary to catch crashes",
        "Implemented connection heartbeat keep-alive mechanism (PING every 30 seconds)",
        "Automatic reconnection mechanism, detects connection errors and auto-recovers",
        "Detailed error log tracking",
        "Data viewing experience optimization",
        "All data types now use Monaco Editor",
        "Smart detection and formatting for JSON, XML, HTML, SQL, YAML, Markdown",
        "Removed data size limitation, supports viewing data of any size",
        "Removed fullscreen modal, simplified interaction",
        "Performance optimization",
        "Use SCAN instead of KEYS command (non-blocking)",
        "Pipeline batch get key types",
        "Multi-level nested tree structure display",
        "Fixed multi-window DB switching isolation issue",
        "Added data syntax highlighting",
        "Added JSON serialization display and copy functionality",
        "Added ability to create any type of key data for current DB",
        "Added rename, copy, and duplicate creation features",
        "Optimized pagination display",
        "Fixed duplicate entry issue in ZSET & SET",
        "Added alternating row colors and selection effect for tables",
        "Added recursive JSON display",
        "Optimized CLI page with command auto-completion support",
        "Optimized keys list display with batch loading via SCAN for large datasets",
        "Added streaming data loading for string type to prevent lag with data over 1MB",
        "Modified large data truncation display and streaming loading in details for all types",
        "Bug fixes"
      ],
      zh: [
        "白屏问题修复",
        "添加 React 错误边界捕获崩溃",
        "实现连接心跳保活机制（每 30 秒 PING）",
        "自动重连机制，检测连接错误并自动恢复",
        "详细的错误日志追踪",
        "数据查看体验优化",
        "所有数据类型统一使用 Monaco Editor",
        "智能检测并格式化 JSON、XML、HTML、SQL、YAML、Markdown",
        "移除数据大小判断，支持任意大小数据查看",
        "移除全屏查看模态框，简化交互",
        "性能优化",
        "使用 SCAN 替代 KEYS 命令（非阻塞）",
        "Pipeline 批量获取 key 类型",
        "多层嵌套树形结构展示",
        "修复多窗口db切换隔离问题",
        "增加数据高亮",
        "增加数据json序列化展示与复制功能",
        "增加为当前db创建任意类型key数据功能",
        "增加修改rename、copy、创建副本功能",
        "优化分页展示",
        "优化zset&set添加重复问题",
        "table隔行变色，增加选中效果",
        "增加json递归显示",
        "优化cli页面，支持命令自动补全",
        "优化keyslist展示，通过scan在大数据情况下分批加载",
        "string类型中增加流式数据加载，防止数据在1mb以上时出现卡顿的情况",
        "修改各种类型下大数据的切断展示和详情中流式加载",
        "bug修复"
      ]
    },
    downloads: {
      macOS: {
        arm64: "pkg/RRdis-2.0.0.zip"
      },
      windows: {
        msi: "pkg/RRdis_2.0.0_x64.msi",
        exe: "pkg/RRdis_2.0.0_x64-setup.exe"
      }
    }
  }
];
