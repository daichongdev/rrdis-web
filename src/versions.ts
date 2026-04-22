/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Version {
  version: string;
  date: string;
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
      x64?: string;
    };
    linux?: {
      x64?: string;
      arm64?: string;
    };
  };
}

export const versions: Version[] = [
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
        x64: "pkg/RRdis_1.1.0_x64.msi"
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
        x64: "pkg/RRdis_1.0.0_x64.msi"
      }
    }
  }
];
