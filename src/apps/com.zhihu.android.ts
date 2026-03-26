import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhihu.android',
  name: '知乎',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击右上角跳过按钮',
      fastQuery: true,
      forcedTime: 10_000,
      matchRoot: true,
      matchTime: 10_000,
      actionMaximum: 1,
      priorityTime: 10_000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          excludeActivityIds: [
            '.app.SearchActivity',
            '.comment.ui.activity.CommentListActivity',
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          ],
          anyMatches: [
            '@[clickable=true] > [vid="btn_skip"][visibleToUser=true]',
            '@[clickable=true] > [text*="跳过"][text.length<8][visibleToUser=true]',
            '@[clickable=true] > [desc*="跳过"][desc.length<8][visibleToUser=true]',
          ],
        },
        {
          key: 1,
          action: 'clickCenter',
          excludeActivityIds: [
            '.app.SearchActivity',
            '.comment.ui.activity.CommentListActivity',
            '.feature.short_container_feature.ui.ShortContainerHostActivity',
          ],
          anyMatches: [
            '[vid="btn_skip"][visibleToUser=true]',
            '[text*="跳过"][text.length<8][width<300 && height<200][visibleToUser=true]',
            '[desc*="跳过"][desc.length<8][width<300 && height<200][visibleToUser=true]',
          ],
        },
      ],
    },
  ],
});
