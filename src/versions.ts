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
    version: "2.3.1",
    date: "2026-05-11",
    isPaid: true,
    changelog: {
      en: [
        "Added SQL log functionality",
        "Added connection keep-alive time settings",
        "Added keys loading count configuration",
        "UI adjustments and visual enhancements",
        "Fixed error link issues",
        "Optimized UI design",
        "Key deletion no longer requires API refresh"
      ],
      zh: [
        "新增SQL日志功能",
        "新增链接保活时间设置",
        "新增keys加载条数配置",
        "UI调整",
        "优化错误链接问题",
        "优化UI设计",
        "删除key后无需调用接口刷新数据"
      ]
    },
    downloads: {
      macOS: {
        arm64: "pkg/RRdis_2.3.1_aarch64.dmg",
      },
      windows: {
        msi: "pkg/RRdis_2.3.1_x64.msi",
        exe: "pkg/RRdis_2.3.1_x64-setup.exe"
      }
    }
  },
  {
    version: "2.2.1",
    date: "2026-04-26",
    isPaid: true,
    changelog: {
      en: [
        "Added SQL log functionality",
        "Added connection keep-alive time settings",
        "Added keys loading count configuration",
        "UI adjustments and visual enhancements",
        "Fixed error link issues",
        "Optimized UI design",
        "Key deletion no longer requires API refresh"
      ],
      zh: [
        "新增SQL日志功能",
        "新增链接保活时间设置",
        "新增keys加载条数配置",
        "UI调整",
        "优化错误链接问题",
        "优化UI设计",
        "删除key后无需调用接口刷新数据"
      ]
    },
    downloads: {
      macOS: {
        arm64: "pkg/RRdis_2.1.0_aarch64.dmg",
      },
      windows: {
        msi: "pkg/RRdis_2.1.0_x64.msi",
        exe: "pkg/RRdis_2.1.0_x64-setup.exe"
      }
    }
  }
];
