export const attractions = [
  {
    id: 1,
    name: '凤凰古城',
    category: 'history',
    tags: ['4A景区', '历史古镇', '夜景绝美'],
    rating: 4.8,
    price: 148,
    location: '湘西土家族苗族自治州凤凰县',
    coverImage: '/images/attractions/fenghuang/fh-04-night-view.jpg',
    images: [
      '/images/attractions/fenghuang/fh-01-river-sculpture.jpg',
      '/images/attractions/fenghuang/fh-02-river-building.jpg',
      '/images/attractions/fenghuang/fh-03-sunset-river.jpg',
      '/images/attractions/fenghuang/fh-04-night-view.jpg',
      '/images/attractions/fenghuang/fh-05-bridge-day.jpg',
      '/images/attractions/fenghuang/fh-06-ancient-bridge.jpg',
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
            image: '/images/attractions/fenghuang/fh-02-river-building.jpg',
          },
          {
            heading: '沱江泛舟与古城夜景',
            text: '沱江是凤凰的母亲河，乘坐乌篷船泛舟沱江，两岸吊脚楼倒映水中，船夫哼唱着湘西山歌，让人仿佛穿越回百年前。夜幕降临后，万家灯火倒映江面，虹桥如彩虹横跨两岸，构成凤凰最标志性的景观，被众多游客誉为"中国最美夜景"之一。',
            image: '/images/attractions/fenghuang/fh-04-night-view.jpg',
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
            image: '/images/attractions/fenghuang/fh-03-sunset-river.jpg',
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
    coverImage: '/images/attractions/zhangjiajie/zj-04-majestic-peaks.jpg',
    images: [
      '/images/attractions/zhangjiajie/zj-01-elevator.jpg',
      '/images/attractions/zhangjiajie/zj-02-pillars-day.jpg',
      '/images/attractions/zhangjiajie/zj-03-mist-forest.jpg',
      '/images/attractions/zhangjiajie/zj-04-majestic-peaks.jpg',
      '/images/attractions/zhangjiajie/zj-05-avatar-mountains.jpg',
      '/images/attractions/zhangjiajie/zj-06-misty-peaks.jpg',
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
            image: '/images/attractions/zhangjiajie/zj-02-pillars-day.jpg',
          },
          {
            heading: '阿凡达取景灵感地',
            text: '袁家界景区的"乾坤柱"（又名哈利路亚山）是电影《阿凡达》悬浮山的取景灵感来源地。云雾缭绕时，石柱若隐若现，仿佛真的悬浮在空中。这里也是摄影爱好者的天堂，每个角度都能拍出震撼人心的大片。',
            image: '/images/attractions/zhangjiajie/zj-03-mist-forest.jpg',
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
            image: '/images/attractions/zhangjiajie/zj-01-elevator.jpg',
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
    coverImage: '/images/attractions/furong/fr-01-waterfall.jpg',
    images: [
      '/images/attractions/furong/fr-01-waterfall.jpg',
      '/images/attractions/furong/fr-02-town-view.jpg',
      '/images/attractions/furong/fr-03-ancient-town.jpg',
      '/images/attractions/furong/fr-04-canal-bridge.jpg',
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
            image: '/images/attractions/furong/fr-01-waterfall.jpg',
          },
          {
            heading: '土司文化与千年历史',
            text: '芙蓉镇历史悠久，可追溯到秦汉时期。这里曾是土司王朝的重要据点，保留了大量土家族传统建筑和文化习俗。古镇内的土司王行宫遗址、摆手堂等建筑，展示了土家族独特的民族文化和建筑艺术。',
            image: '/images/attractions/furong/fr-02-town-view.jpg',
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
  {
    id: 4,
    name: '矮寨大桥',
    category: 'nature',
    tags: ['超级工程', '桥梁奇观', '峡谷风光'],
    rating: 4.7,
    price: 120,
    location: '湘西土家族苗族自治州吉首市矮寨镇',
    coverImage: '/images/attractions/fenghuang/fh-07-stone-bridge.jpg',
    images: [
      '/images/attractions/fenghuang/fh-07-stone-bridge.jpg',
      '/images/attractions/fenghuang/fh-05-bridge-day.jpg',
    ],
    description:
      '矮寨大桥横跨德夯大峡谷，全长1073米，桥面距谷底355米，是世界上跨度最大的峡谷悬索桥之一。大桥与周围的群山、峡谷融为一体，被誉为"中国的天空之桥"。站在桥上俯瞰德夯大峡谷，云海翻涌、群山连绵，令人叹为观止。',
    details: {
      openTime: '8:00-18:00',
      duration: '建议 半天',
      bestSeason: '4-10月（晴朗天气视野最佳）',
      priceDetail: '景区门票120元（含大桥观光电梯）',
      traffic: '吉首市区乘坐矮寨专线公交约40分钟可达；自驾从吉首出发沿319国道约30分钟。',
    },
    tabs: {
      intro: {
        title: '景点介绍',
        sections: [
          {
            heading: '跨越天堑的世界奇观',
            text: '矮寨大桥于2012年建成通车，是一座钢桁加劲梁单跨悬索桥。大桥主跨1176米，创造了四个"世界第一"：跨度最大、塔梁分离、岩锚吊索、轨索移梁。大桥不仅是一座交通枢纽，更成为湘西的标志性景观，被誉为"中国的金门大桥"。',
            image: '/images/attractions/fenghuang/fh-07-stone-bridge.jpg',
          },
          {
            heading: '德夯大峡谷的壮丽风光',
            text: '矮寨大桥横跨德夯大峡谷，峡谷纵深达500余米，两岸峭壁如削。清晨时分，峡谷中云雾缭绕，大桥如巨龙腾云驾雾，宛若仙境。站在桥面观景台上，可俯瞰蜿蜒的矮寨盘山公路——这段仅6公里的公路上有13道急弯，被誉为"天下公路奇观"。',
            image: '/images/attractions/fenghuang/fh-05-bridge-day.jpg',
          },
        ],
      },
      guide: {
        title: '游玩攻略',
        sections: [
          {
            heading: '推荐路线',
            text: '上午：矮寨大桥观光电梯 → 桥面观光通道 → 大桥博物馆。\n下午：德夯大峡谷玻璃栈道 → 矮寨盘山公路观景台 → 德夯苗寨（体验苗族风情）。\n傍晚：在大桥观景台拍摄日落，大桥灯光秀。',
          },
          {
            heading: '最佳拍照点',
            text: '1. 大桥东侧观景台——拍摄大桥全貌\n2. 桥面人行通道——体验"云端漫步"\n3. 矮寨盘山公路观景台——拍摄公路奇观\n4. 德夯峡谷底——仰拍大桥雄姿',
          },
          {
            heading: '注意事项',
            text: '大桥观景台风大，建议携带外套。恐高游客可选择地面观景台。盘山公路弯多坡陡，自驾需谨慎驾驶。景区内无餐饮设施，建议自备干粮或在矮寨镇用餐。',
          },
        ],
      },
      reviews: {
        title: '用户评价',
        items: [
          {
            id: 1,
            user: '工程师小刘',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=engineer1',
            rating: 5,
            date: '2024-04-10',
            content:
              '作为一个土木工程师，矮寨大桥让我震撼！四个世界第一真的不是吹的。站在桥上往下看，盘山公路就像一条白丝带，太壮观了。',
          },
          {
            id: 2,
            user: '摄影达人老吴',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=photo1',
            rating: 5,
            date: '2024-03-22',
            content:
              '晨雾中的矮寨大桥简直是摄影天堂！建议早上6点前到达东侧观景台，能拍到云海+大桥+日出的完美画面。夜晚的灯光秀也很值得拍。',
          },
        ],
      },
      traffic: {
        title: '交通指南',
        sections: [
          {
            heading: '公共交通',
            text: '吉首火车站出站后乘坐矮寨专线公交（约40分钟，票价10元）。吉首东站（高铁站）有直达矮寨的旅游巴士（约50分钟）。凤凰古城出发可在吉首转乘，全程约2小时。',
          },
          {
            heading: '自驾路线',
            text: '吉首出发：沿319国道向西行驶，约30分钟即达。\n凤凰出发：杭瑞高速 → 包茂高速 → 吉首出口 → 319国道，全程约1.5小时。\n张家界出发：张花高速 → 龙吉高速 → 吉首出口，全程约2小时。',
          },
          {
            heading: '周边停车',
            text: '矮寨大桥景区入口设有大型停车场（收费10元/天）。节假日期间游客较多，建议上午9点前到达以确保有车位。景区内步行游览，全程约2-3小时。',
          },
        ],
      },
    },
  },
  {
    id: 5,
    name: '德夯苗寨',
    category: 'ethnic',
    tags: ['苗族风情', '民俗体验', '峡谷村寨'],
    rating: 4.3,
    price: 80,
    location: '湘西土家族苗族自治州吉首市矮寨镇德夯村',
    coverImage: '/images/culture/culture-04-traditional-dress.jpg',
    images: [
      '/images/culture/culture-04-traditional-dress.jpg',
      '/images/culture/culture-02-miao-women.jpg',
    ],
    description:
      '德夯苗寨位于德夯大峡谷深处，"德夯"在苗语中意为"美丽的峡谷"。这里保存着最完整的苗族传统文化——苗家吊脚楼依山而建，银饰锻制技艺世代相传，苗鼓声声回荡山谷。来到德夯，你可以在苗家吊脚楼里品尝地道的酸汤鱼，聆听苗家阿妹动人的山歌。',
    details: {
      openTime: '8:00-17:30',
      duration: '建议 半天至1天',
      bestSeason: '4-6月、9-11月',
      priceDetail: '门票80元（含苗寨歌舞表演）',
      traffic: '吉首市区乘坐德夯专线约50分钟；矮寨大桥景区步行约30分钟可达。',
    },
    tabs: {
      intro: {
        title: '景点介绍',
        sections: [
          {
            heading: '峡谷深处的苗家秘境',
            text: '德夯苗寨坐落在德夯大峡谷最深处，四面环山，溪水潺潺。寨子依山势而建，80多户苗家吊脚楼层层叠叠，青瓦木墙，古朴自然。这里被称为"天下鼓乡"，苗鼓是德夯最具代表性的文化符号，寨中男女老少皆会打鼓。',
            image: '/images/culture/culture-04-traditional-dress.jpg',
          },
          {
            heading: '苗族银饰与传统技艺',
            text: '德夯苗寨保留着完整的苗族银饰锻制技艺，这项技艺已被列入国家级非物质文化遗产。银匠们用传统工具将银块捶打成薄片，再拉成细丝，经过数十道工序制成精美的银饰。游客可以在寨中银匠铺亲眼观看银饰制作全过程，还可定制专属的苗族银饰。',
            image: '/images/culture/culture-02-miao-women.jpg',
          },
        ],
      },
      guide: {
        title: '游玩攻略',
        sections: [
          {
            heading: '推荐路线',
            text: '上午：寨门迎宾仪式 → 苗鼓表演 → 银匠铺体验 → 苗家吊脚楼群。\n中午：在苗家乐品尝地道酸汤鱼、腊肉。\n下午：流纱瀑布 → 问天台 → 峡谷栈道徒步。',
          },
          {
            heading: '最佳拍照点',
            text: '1. 寨门——拍摄苗族迎宾仪式\n2. 苗鼓广场——抓拍打鼓瞬间\n3. 吊脚楼群——拍摄苗寨全景\n4. 流纱瀑布——苗寨后的秘境瀑布',
          },
          {
            heading: '注意事项',
            text: '苗寨多石板台阶，建议穿平底鞋。尊重苗族风俗习惯，进入苗家需脱鞋。苗家敬酒是传统礼仪，不胜酒力可礼貌婉拒。寨中无大型超市，日用品建议自备。',
          },
        ],
      },
      reviews: {
        title: '用户评价',
        items: [
          {
            id: 1,
            user: '文化爱好者小林',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=culture1',
            rating: 5,
            date: '2024-04-08',
            content:
              '银饰制作过程太有意思了！亲眼看着银块变成精美的手镯，这种传统技艺真的值得被更多人看到。苗鼓表演也非常震撼，鼓声在山谷中回荡，热血沸腾。',
          },
          {
            id: 2,
            user: '背包客阿杰',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=backpack1',
            rating: 4,
            date: '2024-03-30',
            content:
              '德夯苗寨比凤凰更原生态，商业化程度低。在吊脚楼上喝茶看云雾，非常惬意。流纱瀑布虽然不大但很精致，值得一看。',
          },
        ],
      },
      traffic: {
        title: '交通指南',
        sections: [
          {
            heading: '公共交通',
            text: '吉首火车站出站后乘坐德夯专线公交（约50分钟，票价10元）。矮寨大桥景区步行至德夯苗寨约30分钟（下坡路）。凤凰古城出发可到吉首转乘，全程约2.5小时。',
          },
          {
            heading: '自驾路线',
            text: '吉首出发：沿319国道至矮寨镇，根据路牌转入德夯方向，全程约40分钟。\n凤凰出发：杭瑞高速 → 包茂高速 → 吉首出口 → 矮寨方向，全程约2小时。\n张家界出发：张花高速 → 龙吉高速 → 吉首出口，全程约2.5小时。',
          },
          {
            heading: '周边停车',
            text: '德夯苗寨景区入口设有停车场（收费10元/天）。苗寨内部禁止机动车通行。节假日期间建议将车停在矮寨镇停车场，步行或乘坐景区接驳车进入。',
          },
        ],
      },
    },
  },
  {
    id: 6,
    name: '里耶古城',
    category: 'history',
    tags: ['秦代遗址', '考古发现', '历史文化'],
    rating: 4.4,
    price: 60,
    location: '湘西土家族苗族自治州龙山县里耶镇',
    coverImage: '/images/attractions/fenghuang/fh-08-garden-bridge.jpg',
    images: [
      '/images/attractions/fenghuang/fh-08-garden-bridge.jpg',
      '/images/attractions/fenghuang/fh-06-ancient-bridge.jpg',
    ],
    description:
      '里耶古城因2002年出土的3.7万枚秦简而震惊世界，被考古界誉为"北有西安兵马俑，南有里耶秦简牍"。这批秦简记录了秦朝基层政权运转的方方面面，是研究秦代历史的最珍贵原始档案。古城遗址包含战国—秦汉时期的城墙、道路、水井等完整遗迹。',
    details: {
      openTime: '淡季 9:00-17:00，旺季 8:30-17:30',
      duration: '建议 半天',
      bestSeason: '全年皆宜',
      priceDetail: '门票60元（含秦简博物馆）',
      traffic: '吉首火车站乘坐大巴至龙山县约2.5小时，再转乘至里耶约40分钟。',
    },
    tabs: {
      intro: {
        title: '景点介绍',
        sections: [
          {
            heading: '改写秦史的重大发现',
            text: '2002年，考古工作者在里耶古城的一口古井中发现了3.7万枚秦代简牍，数量超过此前全国出土秦简总数的10倍。这批秦简记录了从秦王政二十五年（公元前222年）至秦二世二年（公元前208年）的连续档案，内容涵盖行政文书、司法判决、粮食调拨、户口登记等，被称为"秦代的百科全书"。',
            image: '/images/attractions/fenghuang/fh-08-garden-bridge.jpg',
          },
          {
            heading: '千年古城的前世今生',
            text: '里耶古城遗址面积约2万平方米，保存有完整的战国—秦汉时期城墙、护城河、道路系统和建筑基址。古城始建于战国时期的楚国，秦统一后成为迁陵县的县治所在地。考古发现的"迁陵以邮行洞庭"邮简，证明这里曾是秦代重要的邮驿枢纽。',
            image: '/images/attractions/fenghuang/fh-06-ancient-bridge.jpg',
          },
        ],
      },
      guide: {
        title: '游玩攻略',
        sections: [
          {
            heading: '推荐路线',
            text: '上午：秦简博物馆（重点！）→ 里耶古城遗址公园 → 古井遗址（秦简出土地）。\n下午：里耶明清古街 → 酉水河畔 → 里耶秦简研学基地（体验简牍书写）。',
          },
          {
            heading: '最佳拍照点',
            text: '1. 秦简博物馆大厅——秦简阵列墙\n2. 古城遗址城墙——千年古城剪影\n3. 古井遗址——秦简发现地\n4. 酉水河畔——拍摄古镇全景',
          },
          {
            heading: '注意事项',
            text: '秦简博物馆周一闭馆，请避开此日。博物馆内禁止使用闪光灯。遗址区多为露天环境，夏季注意防晒。龙山县路途较远，建议与凤凰古城同线游览。',
          },
        ],
      },
      reviews: {
        title: '用户评价',
        items: [
          {
            id: 1,
            user: '历史老师老郑',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=history1',
            rating: 5,
            date: '2024-04-12',
            content:
              '作为历史老师，站在秦简出土地的那一刻真的热泪盈眶。博物馆布展非常专业，3.7万枚秦简的数字化展示做得很好，强烈推荐给喜欢历史的朋友。',
          },
          {
            id: 2,
            user: '研学生小王',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=student1',
            rating: 4,
            date: '2024-03-28',
            content:
              '学校组织的研学旅行来的，没想到这么有趣！亲手体验了简牍书写，感受到了两千多年前的文字魅力。古城遗址保存得很好，值得一看。',
          },
        ],
      },
      traffic: {
        title: '交通指南',
        sections: [
          {
            heading: '公共交通',
            text: '吉首火车站出站后乘坐前往龙山县的大巴（约2.5小时，票价40元）。龙山县城有直达里耶的公交（约40分钟，票价8元）。张家界出发可乘火车至龙山北站，再转公交至里耶。',
          },
          {
            heading: '自驾路线',
            text: '吉首出发：龙吉高速 → 龙山出口 → S305省道，全程约2.5小时。\n张家界出发：张花高速 → 龙吉高速 → 龙山出口，全程约2小时。\n凤凰出发：杭瑞高速 → 包茂高速 → 龙吉高速，全程约2.5小时。',
          },
          {
            heading: '周边停车',
            text: '里耶秦简博物馆设有免费停车场。古城遗址公园入口旁有收费停车场（5元/天）。里耶古镇内部为步行区，车辆需停放在外围停车场。',
          },
        ],
      },
    },
  },
]
