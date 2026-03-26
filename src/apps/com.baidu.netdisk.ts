import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上角“跳过广告/跳过/关闭”按钮',
      fastQuery: true,
      matchRoot: true,
      matchTime: 10_000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: {
        anyMatches: [
          '[text*="跳过广告"]',
          '[text*="跳过"]',
          '[desc*="跳过广告"]',
          '[desc*="跳过"]',
          '[text="关闭"]',
          '[desc="关闭"]',
        ],
        action: 'clickCenter',
      },
    },
  ],
});
