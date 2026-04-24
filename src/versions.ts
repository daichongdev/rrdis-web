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
    version: "2.0.0",
    date: "2026-04-23",
    isPaid: true,
    changelog: {
      en: [
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
        "Bug fixes"
      ],
      zh: [
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
        "bug修复"
      ]
    },
    downloads: {
      macOS: {
        arm64: "pkg/RRdis_2.0.0_aarch64.dmg"
      },
      windows: {
        msi: "pkg/RRdis_2.0.0_x64.msi",
        exe: "pkg/RRdis_2.0.0_x64-setup.exe"
      }
    }
  },
  {
    version: "1.1.0",
    date: "2026-04-22",
    changelog: {
      en: [
        "UI optimization",
        "Added right-click context menu",
        "Click value to show full content with copy support"
      ],
      zh: [
        "优化UI",
        "新增右键功能",
        "点击值弹出全部内容并支持复制"
      ]
    },
    downloads: {
      macOS: {
        arm64: "pkg/RRdis_1.1.0_aarch64.dmg"
      },
      windows: {
        msi: "pkg/RRdis_1.1.0_x64.msi"
      }
    }
  },
  {
    version: "1.0.0",
    date: "2024-04-20",
    changelog: {
      en: [
        "Initial release",
        "Multi-tab connection management",
        "Support for all Redis data types",
        "Modern UI with dark mode",
        "Multi-language support (English/Chinese)",
        "Built with Tauri 2 and React 19"
      ],
      zh: [
        "首次发布",
        "多标签连接管理",
        "支持所有 Redis 数据类型",
        "现代化界面支持暗黑模式",
        "多语言支持（英文/中文）",
        "基于 Tauri 2 和 React 19 构建"
      ]
    },
    downloads: {
      macOS: {
        arm64: "pkg/RRdis_1.0.0_aarch64.dmg"
      },
      windows: {
        msi: "pkg/RRdis_1.0.0_x64.msi"
      }
    }
  }
];
