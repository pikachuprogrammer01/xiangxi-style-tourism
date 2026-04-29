export const attractions = [
  {
    id: 1,
    name: '凤凰古城',
    category: 'history',
    tags: ['4A景区', '历史古镇', '夜景绝美'],
    rating: 4.8,
    price: 148,
    location: '湘西土家族苗族自治州凤凰县',
    coverImage: '/images/carousel/hero-1-fenghuang-night.jpg',
    images: [
      '/images/attractions/fenghuang/fenghuang-river-building.jpg',
      '/images/attractions/fenghuang/fenghuang-sunset.jpg',
      '/images/attractions/fenghuang/fenghuang-night-2.jpg',
    ],
    description:
      '凤凰古城始建于清康熙年间，是国家历史文化名城，被誉为"中国最美的小城"之一。沱江穿城而过，两岸吊脚楼鳞次栉比，青石板街蜿蜒曲折，处处透着浓郁的湘西风情。沈从文先生的《边城》让这座古城名扬天下。',
    details: {
      openTime: '全天开放（内部景点 8:00-17:30）',
      duration: '建议 1-2 天',
      bestSeason: '3-5月、9-11月',
      priceDetail: '古城免费，核心景点联票148元',
      traffic:
        '吉首火车站乘坐大巴约1小时可达；怀化高铁站乘坐大巴约1.5小时；铜仁凤凰机场驾车约40分钟。',
    },
    tabs: {
      intro: {
        title: '景点介绍',
        sections: [
          {
            heading: '千年古城，沱江明珠',
            text: '凤凰古城位于湖南省湘西土家族苗族自治州凤凰县，是一座具有千年历史的古城。古城依山傍水，沱江穿城而过，两岸分布着大量明清时期的吊脚楼建筑群，形成了独特的城市风貌。古城内保留着虹桥、万名塔、夺翠楼、沈从文故居、熊希龄故居等众多历史文化遗迹。',
            image: '/images/attractions/fenghuang/fenghuang-river-building.jpg',
          },
          {
            heading: '沱江泛舟与古城夜景',
            text: '沱江是凤凰的母亲河，乘坐乌篷船泛舟沱江，两岸吊脚楼倒映水中，船夫哼唱着湘西山歌，让人仿佛穿越回百年前。夜幕降临后，万家灯火倒映江面，虹桥如彩虹横跨两岸，构成凤凰最标志性的景观，被众多游客誉为"中国最美夜景"之一。',
            image: '/images/attractions/fenghuang/fenghuang-night-2.jpg',
          },
        ],
      },
      guide: {
        title: '游玩攻略',
        sections: [
          {
            heading: '推荐路线',
            text: 'Day1：南华门 → 东门城楼 → 沈从文故居 → 虹桥 → 万名塔 → 夺翠楼（白天游览）→ 晚上沱江泛舟赏夜景。\nDay2：南方长城 → 奇梁洞 → 山江苗寨（体验苗族风情）。',
          },
          {
            heading: '最佳拍照点',
            text: '1. 虹桥二楼俯瞰沱江全景\n2. 跳岩附近拍摄吊脚楼群\n3. 南华门观景台拍摄古城夜景\n4. 万名塔前拍摄沱江倒影\n5. 夺翠楼下拍摄游船穿梭',
            image: '/images/attractions/fenghuang/fenghuang-sunset.jpg',
          },
          {
            heading: '注意事项',
            text: '古城内多为石板路，建议穿舒适的平底鞋。早晚温差较大，春秋季节需带薄外套。沱江边蚊虫较多，建议携带防蚊用品。景区内消费较高，可在古城外就餐。',
          },
        ],
      },
      reviews: {
        title: '用户评价',
        items: [
          {
            id: 1,
            user: '旅行达人小王',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=traveler1',
            rating: 5,
            date: '2024-03-15',
            content:
              '夜景真的太美了，强烈推荐住一晚！沱江边的民宿很有特色，晚上在阳台上看灯火阑珊，感觉整个人都安静下来了。',
          },
          {
            id: 2,
            user: '背包客老李',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=traveler2',
            rating: 4,
            date: '2024-02-28',
            content:
              '古城保护得很好，商业化程度刚好。建议避开节假日，人少的时候在石板街上慢慢逛，特别有感觉。',
          },
          {
            id: 3,
            user: '摄影爱好者小陈',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=traveler3',
            rating: 5,
            date: '2024-03-20',
            content:
              '作为一个摄影爱好者，凤凰古城简直是天堂。清晨的薄雾、黄昏的夕阳、夜晚的灯火，每个时段都有不同的美。虹桥是必拍机位！',
          },
        ],
      },
      traffic: {
        title: '交通指南',
        sections: [
          {
            heading: '公共交通',
            text: '吉首火车站出站后，乘坐前往凤凰的班车（约1小时，票价20元）。怀化高铁站有直达凤凰的大巴（约1.5小时，票价30元）。铜仁凤凰机场至古城约40分钟车程，可打车或预约接机服务。',
          },
          {
            heading: '自驾路线',
            text: '长沙出发：长张高速 → 杭瑞高速，全程约4小时。\n张家界出发：张花高速 → 龙吉高速，全程约2.5小时。\n怀化出发：怀化绕城高速 → 包茂高速，全程约1.5小时。',
          },
          {
            heading: '周边停车',
            text: '古城周边有多个停车场：南华门停车场（推荐，步行5分钟进古城）、栗湾停车场、城北停车场。停车费约20-30元/天。古城内部禁止机动车通行。',
          },
        ],
      },
    },
  },
  {
    id: 2,
    name: '张家界国家森林公园',
    category: 'nature',
    tags: ['5A景区', '自然风光', '世界地质公园'],
    rating: 4.9,
    price: 228,
    location: '湖南省张家界市武陵源区',
    coverImage: '/images/carousel/hero-4-zhangjiajie-misty.jpg',
    images: [
      '/images/attractions/zhangjiajie/zhangjiajie-pillars-day.jpg',
      '/images/attractions/zhangjiajie/zhangjiajie-mist.jpg',
      '/images/attractions/zhangjiajie/zhangjiajie-elevator.jpg',
    ],
    description:
      '张家界国家森林公园是中国第一个国家森林公园，世界自然遗产，世界地质公园。三千余座石英砂岩峰林拔地而起，形态各异，被联合国教科文组织誉为"扩大的盆景，缩小的仙境"。这里还是电影《阿凡达》悬浮山的取景灵感来源地。',
    details: {
      openTime: '旺季 7:00-18:00，淡季 8:00-17:30',
      duration: '建议 2-3 天',
      bestSeason: '4-6月、9-11月',
      priceDetail: '大门票228元（4天有效），含景区内环保车',
      traffic:
        '张家界火车站/高铁站乘坐旅游大巴约40分钟至武陵源；张家界荷花机场至武陵源约1小时车程。',
    },
    tabs: {
      intro: {
        title: '景点介绍',
        sections: [
          {
            heading: '世界自然遗产，峰林奇观',
            text: '张家界国家森林公园位于湖南省张家界市武陵源区，总面积4810公顷。公园以独特的石英砂岩峰林地貌著称，三千余座石峰拔地而起，最高的超过400米。这里是中国第一个国家森林公园（1982年），1992年被列入世界自然遗产名录，2004年被列为世界地质公园。',
            image: '/images/attractions/zhangjiajie/zhangjiajie-pillars-day.jpg',
          },
          {
            heading: '阿凡达取景灵感地',
            text: '袁家界景区的"乾坤柱"（又名哈利路亚山）是电影《阿凡达》悬浮山的取景灵感来源地。云雾缭绕时，石柱若隐若现，仿佛真的悬浮在空中。这里也是摄影爱好者的天堂，每个角度都能拍出震撼人心的大片。',
            image: '/images/attractions/zhangjiajie/zhangjiajie-mist.jpg',
          },
        ],
      },
      guide: {
        title: '游玩攻略',
        sections: [
          {
            heading: '推荐路线',
            text: 'Day1：武陵源门票站 → 天子山（贺龙公园、御笔峰）→ 袁家界（乾坤柱、迷魂台）→ 百龙天梯下山。\nDay2：黄石寨 → 金鞭溪（全程7.5公里，沿溪而行）→ 十里画廊。\nDay3（可选）：天门山国家森林公园（玻璃栈道、天门洞）。',
          },
          {
            heading: '最佳拍照点',
            text: '1. 天子山御笔峰——张家界名片级机位\n2. 袁家界乾坤柱——阿凡达悬浮山原型\n3. 黄石寨摘星台——俯瞰峰林全景\n4. 金鞭溪——溪水与石峰交相辉映\n5. 百龙天梯顶部——俯瞰山谷云海',
            image: '/images/attractions/zhangjiajie/zhangjiajie-elevator.jpg',
          },
          {
            heading: '注意事项',
            text: '景区面积较大，建议穿登山鞋或舒适运动鞋。山上天气多变，请携带雨具和薄外套。景区内猴子较多，请勿投喂或挑逗。旺季游客较多，建议清晨入园避开人流。百龙天梯单向收费，下山建议步行。',
          },
        ],
      },
      reviews: {
        title: '用户评价',
        items: [
          {
            id: 1,
            user: '户外运动爱好者大刘',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=hiker1',
            rating: 5,
            date: '2024-04-02',
            content:
              '张家界果然名不虚传！站在天子山顶俯瞰千峰竞秀，那种震撼无法用语言形容。百龙天梯也超级刺激，垂直上升的感觉太棒了。',
          },
          {
            id: 2,
            user: '自由行达人小美',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=tourist1',
            rating: 5,
            date: '2024-03-25',
            content:
              '云海+石柱的组合实在太美了！建议一定要在山上住一晚，清晨的云海日出是张家界的灵魂。金鞭溪徒步很舒服，空气清新得像天然氧吧。',
          },
          {
            id: 3,
            user: '退休旅游老周',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=senior1',
            rating: 4,
            date: '2024-03-10',
            content:
              '风景绝佳，但游客确实多。建议65岁以上老人选乘索道和电梯，爬山路段还是比较吃力的。景区管理规范，指示牌清晰，适合自由行。',
          },
        ],
      },
      traffic: {
        title: '交通指南',
        sections: [
          {
            heading: '公共交通',
            text: '张家界火车站出站后有直达武陵源的旅游大巴（约40分钟，票价12元）。张家界荷花机场至武陵源约1小时车程，可乘坐机场大巴至市区后转旅游巴士。张家界西站（高铁站）有直达武陵源的公交专线。',
          },
          {
            heading: '自驾路线',
            text: '长沙出发：长张高速直达，全程约3.5小时。\n凤凰出发：龙吉高速 → 张花高速，全程约2.5小时。\n常德出发：常张高速，全程约2小时。',
          },
          {
            heading: '周边停车',
            text: '武陵源门票站设有大型停车场（收费20元/天）。森林公园门票站也有停车场（15元/天）。旺季车位紧张，建议8点前到达。景区内部禁止自驾，需乘坐环保车或索道。',
          },
        ],
      },
    },
  },
  {
    id: 3,
    name: '芙蓉镇',
    category: 'history',
    tags: ['历史古镇', '瀑布景观', '影视取景'],
    rating: 4.5,
    price: 100,
    location: '湘西土家族苗族自治州永顺县',
    coverImage: '/images/attractions/furong/furong-waterfall.jpg',
    images: [
      '/images/attractions/furong/furong-waterfall.jpg',
      '/images/attractions/furong/furong-town.jpg',
    ],
    description:
      '芙蓉镇原名王村，是一座拥有两千多年历史的古镇。因电影《芙蓉镇》在此拍摄而得名，更因古镇建于悬崖瀑布之上而闻名，被誉为"挂在瀑布上的千年古镇"。青石板街、土家吊脚楼、米豆腐的香气，处处透着浓郁的湘西风情。',
    details: {
      openTime: '全天开放（核心景区 8:00-17:00）',
      duration: '建议 1 天',
      bestSeason: '4-10月（丰水期瀑布最壮观）',
      priceDetail: '门票100元',
      traffic: '张家界市出发乘车约1.5小时可达；凤凰古城出发约2小时车程。',
    },
    tabs: {
      intro: {
        title: '景点介绍',
        sections: [
          {
            heading: '挂在瀑布上的千年古镇',
            text: '芙蓉镇大瀑布高60米、宽40米，分两级从悬崖上飞泻而下，气势磅礴。古镇建筑沿瀑布两侧层层叠叠而建，形成了"挂在瀑布上的千年古镇"的独特景观。这是湘西地区最具特色的自然与人文结合的景观之一。',
            image: '/images/attractions/furong/furong-waterfall.jpg',
          },
          {
            heading: '土司文化与千年历史',
            text: '芙蓉镇历史悠久，可追溯到秦汉时期。这里曾是土司王朝的重要据点，保留了大量土家族传统建筑和文化习俗。古镇内的土司王行宫遗址、摆手堂等建筑，展示了土家族独特的民族文化和建筑艺术。',
            image: '/images/attractions/furong/furong-town.jpg',
          },
        ],
      },
      guide: {
        title: '游玩攻略',
        sections: [
          {
            heading: '推荐路线',
            text: '上午：土司王行宫 → 摆手堂 → 青石板老街（品尝刘晓庆米豆腐）。\n下午：大瀑布观景台 → 瀑布水帘洞 → 土家民俗博物馆。\n傍晚：芙蓉镇码头看日落，拍摄瀑布+古镇的经典构图。',
          },
          {
            heading: '最佳拍照点',
            text: '1. 瀑布正对面观景台——拍摄瀑布全景+古镇\n2. 芙蓉镇码头——日落剪影\n3. 青石板老街——人文纪实\n4. 瀑布水帘洞——透过瀑布看古镇',
          },
          {
            heading: '注意事项',
            text: '瀑布丰水期（4-10月）最为壮观，建议此期间前往。古镇依山而建，台阶较多，需穿舒适的鞋子。品尝米豆腐推荐刘晓庆米豆腐店，价格实惠。',
          },
        ],
      },
      reviews: {
        title: '用户评价',
        items: [
          {
            id: 1,
            user: '自驾游老张',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=driver1',
            rating: 5,
            date: '2024-04-05',
            content:
              '瀑布+古镇的组合太震撼了！站在瀑布对面的观景台，看着水流从悬崖上倾泻而下，背后是层层叠叠的吊脚楼，简直就是一幅活的山水画。',
          },
          {
            id: 2,
            user: '美食猎人阿芳',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=foodie1',
            rating: 4,
            date: '2024-03-18',
            content:
              '刘晓庆米豆腐果然名不虚传！逛完古镇在青石板街上吃一碗热乎的米豆腐，简直完美。古镇不大但很精致，一天时间刚刚好。',
          },
        ],
      },
      traffic: {
        title: '交通指南',
        sections: [
          {
            heading: '公共交通',
            text: '张家界火车站/高铁站乘坐前往永顺的班车，在芙蓉镇路口下车后步行约15分钟（全程约1.5小时）。吉首火车站有直达芙蓉镇的班车（约2小时）。',
          },
          {
            heading: '自驾路线',
            text: '张家界出发：张花高速 → 龙吉高速，芙蓉镇出口下，全程约1.5小时。\n凤凰出发：龙吉高速，全程约2小时。\n吉首出发：龙吉高速，全程约1.5小时。',
          },
          {
            heading: '周边停车',
            text: '芙蓉镇景区入口设有停车场（收费15元/天）。古镇内部为步行街，车辆需停放在外围停车场。节假日期间车位紧张，建议上午10点前到达。',
          },
        ],
      },
    },
  },
]
