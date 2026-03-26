import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上角“跳过广告/跳过”按钮',
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
        ],
        action: 'clickCenter',
      },
    },
  ],
});
