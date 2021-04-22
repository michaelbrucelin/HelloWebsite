function echart0101() {
    var dom = document.getElementById("echart01");
    var myChart = echarts.init(dom);
    myChart.clear();

    var app = {};
    option = null;
    var geoCoordMap = {
        "海门": [121.15, 31.89],
        "鄂尔多斯": [109.781327, 39.608266],
        "招远": [120.38, 37.35],
        "舟山": [122.207216, 29.985295],
        "齐齐哈尔": [123.97, 47.33],
        "盐城": [120.13, 33.38],
        "赤峰": [118.87, 42.28],
        "青岛": [120.33, 36.07],
        "乳山": [121.52, 36.89],
        "金昌": [102.188043, 38.520089],
        "泉州": [118.58, 24.93],
        "莱西": [120.53, 36.86],
        "日照": [119.46, 35.42],
        "胶南": [119.97, 35.88],
        "南通": [121.05, 32.08],
        "拉萨": [91.11, 29.97],
        "云浮": [112.02, 22.93],
        "梅州": [116.1, 24.55],
        "文登": [122.05, 37.2],
        "上海": [121.48, 31.22],
        "攀枝花": [101.718637, 26.582347],
        "威海": [122.1, 37.5],
        "承德": [117.93, 40.97],
        "厦门": [118.1, 24.46],
        "汕尾": [115.375279, 22.786211],
        "潮州": [116.63, 23.68],
        "丹东": [124.37, 40.13],
        "太仓": [121.1, 31.45],
        "曲靖": [103.79, 25.51],
        "烟台": [121.39, 37.52],
        "福州": [119.3, 26.08],
        "瓦房店": [121.979603, 39.627114],
        "即墨": [120.45, 36.38],
        "抚顺": [123.97, 41.97],
        "玉溪": [102.52, 24.35],
        "张家口": [114.87, 40.82],
        "阳泉": [113.57, 37.85],
        "莱州": [119.942327, 37.177017],
        "湖州": [120.1, 30.86],
        "汕头": [116.69, 23.39],
        "昆山": [120.95, 31.39],
        "宁波": [121.56, 29.86],
        "湛江": [110.359377, 21.270708],
        "揭阳": [116.35, 23.55],
        "荣成": [122.41, 37.16],
        "连云港": [119.16, 34.59],
        "葫芦岛": [120.836932, 40.711052],
        "常熟": [120.74, 31.64],
        "东莞": [113.75, 23.04],
        "河源": [114.68, 23.73],
        "淮安": [119.15, 33.5],
        "泰州": [119.9, 32.49],
        "南宁": [108.33, 22.84],
        "营口": [122.18, 40.65],
        "惠州": [114.4, 23.09],
        "江阴": [120.26, 31.91],
        "蓬莱": [120.75, 37.8],
        "韶关": [113.62, 24.84],
        "嘉峪关": [98.289152, 39.77313],
        "广州": [113.23, 23.16],
        "延安": [109.47, 36.6],
        "太原": [112.53, 37.87],
        "清远": [113.01, 23.7],
        "中山": [113.38, 22.52],
        "昆明": [102.73, 25.04],
        "寿光": [118.73, 36.86],
        "盘锦": [122.070714, 41.119997],
        "长治": [113.08, 36.18],
        "深圳": [114.07, 22.62],
        "珠海": [113.52, 22.3],
        "宿迁": [118.3, 33.96],
        "咸阳": [108.72, 34.36],
        "铜川": [109.11, 35.09],
        "平度": [119.97, 36.77],
        "佛山": [113.11, 23.05],
        "海口": [110.35, 20.02],
        "江门": [113.06, 22.61],
        "章丘": [117.53, 36.72],
        "肇庆": [112.44, 23.05],
        "大连": [121.62, 38.92],
        "临汾": [111.5, 36.08],
        "吴江": [120.63, 31.16],
        "石嘴山": [106.39, 39.04],
        "沈阳": [123.38, 41.8],
        "苏州": [120.62, 31.32],
        "茂名": [110.88, 21.68],
        "嘉兴": [120.76, 30.77],
        "长春": [125.35, 43.88],
        "胶州": [120.03336, 36.264622],
        "银川": [106.27, 38.47],
        "张家港": [120.555821, 31.875428],
        "三门峡": [111.19, 34.76],
        "锦州": [121.15, 41.13],
        "南昌": [115.89, 28.68],
        "柳州": [109.4, 24.33],
        "三亚": [109.511909, 18.252847],
        "自贡": [104.778442, 29.33903],
        "吉林": [126.57, 43.87],
        "阳江": [111.95, 21.85],
        "泸州": [105.39, 28.91],
        "西宁": [101.74, 36.56],
        "宜宾": [104.56, 29.77],
        "呼和浩特": [111.65, 40.82],
        "成都": [104.06, 30.67],
        "大同": [113.3, 40.12],
        "镇江": [119.44, 32.2],
        "桂林": [110.28, 25.29],
        "张家界": [110.479191, 29.117096],
        "宜兴": [119.82, 31.36],
        "北海": [109.12, 21.49],
        "西安": [108.95, 34.27],
        "金坛": [119.56, 31.74],
        "东营": [118.49, 37.46],
        "牡丹江": [129.58, 44.6],
        "遵义": [106.9, 27.7],
        "绍兴": [120.58, 30.01],
        "扬州": [119.42, 32.39],
        "常州": [119.95, 31.79],
        "潍坊": [119.1, 36.62],
        "重庆": [106.54, 29.59],
        "台州": [121.420757, 28.656386],
        "南京": [118.78, 32.04],
        "滨州": [118.03, 37.36],
        "贵阳": [106.71, 26.57],
        "无锡": [120.29, 31.59],
        "本溪": [123.73, 41.3],
        "克拉玛依": [84.77, 45.59],
        "渭南": [109.5, 34.52],
        "马鞍山": [118.48, 31.56],
        "宝鸡": [107.15, 34.38],
        "焦作": [113.21, 35.24],
        "句容": [119.16, 31.95],
        "北京": [116.46, 39.92],
        "徐州": [117.2, 34.26],
        "衡水": [115.72, 37.72],
        "包头": [110, 40.58],
        "绵阳": [104.73, 31.48],
        "乌鲁木齐": [87.68, 43.77],
        "枣庄": [117.57, 34.86],
        "杭州": [120.19, 30.26],
        "淄博": [118.05, 36.78],
        "鞍山": [122.85, 41.12],
        "溧阳": [119.48, 31.43],
        "库尔勒": [86.06, 41.68],
        "安阳": [114.35, 36.1],
        "开封": [114.35, 34.79],
        "济南": [117, 36.65],
        "德阳": [104.37, 31.13],
        "温州": [120.65, 28.01],
        "九江": [115.97, 29.71],
        "邯郸": [114.47, 36.6],
        "临安": [119.72, 30.23],
        "兰州": [103.73, 36.03],
        "沧州": [116.83, 38.33],
        "临沂": [118.35, 35.05],
        "南充": [106.110698, 30.837793],
        "天津": [117.2, 39.13],
        "富阳": [119.95, 30.07],
        "泰安": [117.13, 36.18],
        "诸暨": [120.23, 29.71],
        "郑州": [113.65, 34.76],
        "哈尔滨": [126.63, 45.75],
        "聊城": [115.97, 36.45],
        "芜湖": [118.38, 31.33],
        "唐山": [118.02, 39.63],
        "平顶山": [113.29, 33.75],
        "邢台": [114.48, 37.05],
        "德州": [116.29, 37.45],
        "济宁": [116.59, 35.38],
        "荆州": [112.239741, 30.335165],
        "宜昌": [111.3, 30.7],
        "义乌": [120.06, 29.32],
        "丽水": [119.92, 28.45],
        "洛阳": [112.44, 34.7],
        "秦皇岛": [119.57, 39.95],
        "株洲": [113.16, 27.83],
        "石家庄": [114.48, 38.03],
        "莱芜": [117.67, 36.19],
        "常德": [111.69, 29.05],
        "保定": [115.48, 38.85],
        "湘潭": [112.91, 27.87],
        "金华": [119.64, 29.12],
        "岳阳": [113.09, 29.37],
        "长沙": [113, 28.21],
        "衢州": [118.88, 28.97],
        "廊坊": [116.7, 39.53],
        "菏泽": [115.480656, 35.23375],
        "合肥": [117.27, 31.86],
        "武汉": [114.31, 30.52],
        "大庆": [125.03, 46.58]
    };

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push(geoCoord.concat(data[i].value));
            }
        }
        return res;
    };

    option = {
        backgroundColor: '#404a59',
        title: {
            text: '全国主要城市空气质量',
            subtext: 'data from PM25.in',
            sublink: 'http://www.pm25.in',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['pm2.5'],
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: {
            min: 0,
            max: 300,
            splitNumber: 5,
            color: ['#d94e5d', '#eac736', '#50a3ba'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: [
            {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData([
                    { name: "海门", value: 9 },
                    { name: "鄂尔多斯", value: 12 },
                    { name: "招远", value: 12 },
                    { name: "舟山", value: 12 },
                    { name: "齐齐哈尔", value: 14 },
                    { name: "盐城", value: 15 },
                    { name: "赤峰", value: 16 },
                    { name: "青岛", value: 18 },
                    { name: "乳山", value: 18 },
                    { name: "金昌", value: 19 },
                    { name: "泉州", value: 21 },
                    { name: "莱西", value: 21 },
                    { name: "日照", value: 21 },
                    { name: "胶南", value: 22 },
                    { name: "南通", value: 23 },
                    { name: "拉萨", value: 24 },
                    { name: "云浮", value: 24 },
                    { name: "梅州", value: 25 },
                    { name: "文登", value: 25 },
                    { name: "上海", value: 25 },
                    { name: "攀枝花", value: 25 },
                    { name: "威海", value: 25 },
                    { name: "承德", value: 25 },
                    { name: "厦门", value: 26 },
                    { name: "汕尾", value: 26 },
                    { name: "潮州", value: 26 },
                    { name: "丹东", value: 27 },
                    { name: "太仓", value: 27 },
                    { name: "曲靖", value: 27 },
                    { name: "烟台", value: 28 },
                    { name: "福州", value: 29 },
                    { name: "瓦房店", value: 30 },
                    { name: "即墨", value: 30 },
                    { name: "抚顺", value: 31 },
                    { name: "玉溪", value: 31 },
                    { name: "张家口", value: 31 },
                    { name: "阳泉", value: 31 },
                    { name: "莱州", value: 32 },
                    { name: "湖州", value: 32 },
                    { name: "汕头", value: 32 },
                    { name: "昆山", value: 33 },
                    { name: "宁波", value: 33 },
                    { name: "湛江", value: 33 },
                    { name: "揭阳", value: 34 },
                    { name: "荣成", value: 34 },
                    { name: "连云港", value: 35 },
                    { name: "葫芦岛", value: 35 },
                    { name: "常熟", value: 36 },
                    { name: "东莞", value: 36 },
                    { name: "河源", value: 36 },
                    { name: "淮安", value: 36 },
                    { name: "泰州", value: 36 },
                    { name: "南宁", value: 37 },
                    { name: "营口", value: 37 },
                    { name: "惠州", value: 37 },
                    { name: "江阴", value: 37 },
                    { name: "蓬莱", value: 37 },
                    { name: "韶关", value: 38 },
                    { name: "嘉峪关", value: 38 },
                    { name: "广州", value: 38 },
                    { name: "延安", value: 38 },
                    { name: "太原", value: 39 },
                    { name: "清远", value: 39 },
                    { name: "中山", value: 39 },
                    { name: "昆明", value: 39 },
                    { name: "寿光", value: 40 },
                    { name: "盘锦", value: 40 },
                    { name: "长治", value: 41 },
                    { name: "深圳", value: 41 },
                    { name: "珠海", value: 42 },
                    { name: "宿迁", value: 43 },
                    { name: "咸阳", value: 43 },
                    { name: "铜川", value: 44 },
                    { name: "平度", value: 44 },
                    { name: "佛山", value: 44 },
                    { name: "海口", value: 44 },
                    { name: "江门", value: 45 },
                    { name: "章丘", value: 45 },
                    { name: "肇庆", value: 46 },
                    { name: "大连", value: 47 },
                    { name: "临汾", value: 47 },
                    { name: "吴江", value: 47 },
                    { name: "石嘴山", value: 49 },
                    { name: "沈阳", value: 50 },
                    { name: "苏州", value: 50 },
                    { name: "茂名", value: 50 },
                    { name: "嘉兴", value: 51 },
                    { name: "长春", value: 51 },
                    { name: "胶州", value: 52 },
                    { name: "银川", value: 52 },
                    { name: "张家港", value: 52 },
                    { name: "三门峡", value: 53 },
                    { name: "锦州", value: 54 },
                    { name: "南昌", value: 54 },
                    { name: "柳州", value: 54 },
                    { name: "三亚", value: 54 },
                    { name: "自贡", value: 56 },
                    { name: "吉林", value: 56 },
                    { name: "阳江", value: 57 },
                    { name: "泸州", value: 57 },
                    { name: "西宁", value: 57 },
                    { name: "宜宾", value: 58 },
                    { name: "呼和浩特", value: 58 },
                    { name: "成都", value: 58 },
                    { name: "大同", value: 58 },
                    { name: "镇江", value: 59 },
                    { name: "桂林", value: 59 },
                    { name: "张家界", value: 59 },
                    { name: "宜兴", value: 59 },
                    { name: "北海", value: 60 },
                    { name: "西安", value: 61 },
                    { name: "金坛", value: 62 },
                    { name: "东营", value: 62 },
                    { name: "牡丹江", value: 63 },
                    { name: "遵义", value: 63 },
                    { name: "绍兴", value: 63 },
                    { name: "扬州", value: 64 },
                    { name: "常州", value: 64 },
                    { name: "潍坊", value: 65 },
                    { name: "重庆", value: 66 },
                    { name: "台州", value: 67 },
                    { name: "南京", value: 67 },
                    { name: "滨州", value: 70 },
                    { name: "贵阳", value: 71 },
                    { name: "无锡", value: 71 },
                    { name: "本溪", value: 71 },
                    { name: "克拉玛依", value: 72 },
                    { name: "渭南", value: 72 },
                    { name: "马鞍山", value: 72 },
                    { name: "宝鸡", value: 72 },
                    { name: "焦作", value: 75 },
                    { name: "句容", value: 75 },
                    { name: "北京", value: 79 },
                    { name: "徐州", value: 79 },
                    { name: "衡水", value: 80 },
                    { name: "包头", value: 80 },
                    { name: "绵阳", value: 80 },
                    { name: "乌鲁木齐", value: 84 },
                    { name: "枣庄", value: 84 },
                    { name: "杭州", value: 84 },
                    { name: "淄博", value: 85 },
                    { name: "鞍山", value: 86 },
                    { name: "溧阳", value: 86 },
                    { name: "库尔勒", value: 86 },
                    { name: "安阳", value: 90 },
                    { name: "开封", value: 90 },
                    { name: "济南", value: 92 },
                    { name: "德阳", value: 93 },
                    { name: "温州", value: 95 },
                    { name: "九江", value: 96 },
                    { name: "邯郸", value: 98 },
                    { name: "临安", value: 99 },
                    { name: "兰州", value: 99 },
                    { name: "沧州", value: 100 },
                    { name: "临沂", value: 103 },
                    { name: "南充", value: 104 },
                    { name: "天津", value: 105 },
                    { name: "富阳", value: 106 },
                    { name: "泰安", value: 112 },
                    { name: "诸暨", value: 112 },
                    { name: "郑州", value: 113 },
                    { name: "哈尔滨", value: 114 },
                    { name: "聊城", value: 116 },
                    { name: "芜湖", value: 117 },
                    { name: "唐山", value: 119 },
                    { name: "平顶山", value: 119 },
                    { name: "邢台", value: 119 },
                    { name: "德州", value: 120 },
                    { name: "济宁", value: 120 },
                    { name: "荆州", value: 127 },
                    { name: "宜昌", value: 130 },
                    { name: "义乌", value: 132 },
                    { name: "丽水", value: 133 },
                    { name: "洛阳", value: 134 },
                    { name: "秦皇岛", value: 136 },
                    { name: "株洲", value: 143 },
                    { name: "石家庄", value: 147 },
                    { name: "莱芜", value: 148 },
                    { name: "常德", value: 152 },
                    { name: "保定", value: 153 },
                    { name: "湘潭", value: 154 },
                    { name: "金华", value: 157 },
                    { name: "岳阳", value: 169 },
                    { name: "长沙", value: 175 },
                    { name: "衢州", value: 177 },
                    { name: "廊坊", value: 193 },
                    { name: "菏泽", value: 194 },
                    { name: "合肥", value: 229 },
                    { name: "武汉", value: 273 },
                    { name: "大庆", value: 279 }
                ]),
                symbolSize: 12,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    emphasis: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                }
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

//鼠标事件
function echart0201() {
    var myChart = echarts.init(document.getElementById('echart02'));
    myChart.clear();

    var option = {
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    myChart.setOption(option);
    // 处理点击事件并且弹出数据名称
    myChart.on('click', function (params) {
        alert(params.name);
    });
}

//组件交互的行为事件
function echart0202() {
    var myChart = echarts.init(document.getElementById('echart02'));
    myChart.clear();

    var option = {
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '直接访问',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    myChart.setOption(option);
    myChart.on('legendselectchanged', function (params) {
        // 获取点击图例的选中状态
        var isSelected = params.selected[params.name];
        // 在控制台中打印
        alert((isSelected ? '选中了' : '取消选中了') + '图例' + params.name);
        // 打印所有图例的状态
        console.log(params.selected);
        let option = this.getOption();
        let select_key = Object.keys(params.selected);
        if (!params.selected[params.name]) {
            select_key.map(res => {
                option.legend[0].selected[res] = !params.selected[res];
            });
        } else {
            select_key.map(res => {
                option.legend[0].selected[res] = false;
            });
            option.legend[0].selected[params.name] = true;
        }
        this.setOption(option)
    });
}

//代码触发 ECharts 中组件的行为
function echart0203() {
    var myChart = echarts.init(document.getElementById('echart02'));
    myChart.clear();

    var app = {};
    option = null;
    var option = {
        title: {
            text: '饼图程序调用高亮示例',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    { value: 335, name: '直接访问' },
                    { value: 310, name: '邮件营销' },
                    { value: 234, name: '联盟广告' },
                    { value: 135, name: '视频广告' },
                    { value: 1548, name: '搜索引擎' }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    app.currentIndex = -1;

    setInterval(function () {
        var dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: app.currentIndex
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: app.currentIndex
        });
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: app.currentIndex
        });
    }, 1000);
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

//旭日图
function echart0301() {
    var myChart = echarts.init(document.getElementById('echart03'));
    myChart.clear();

    var option = {
        series: {
            type: 'sunburst',
            data: [{
                name: 'A',
                value: 10,
                children: [{
                    value: 3,
                    name: 'Aa'
                }, {
                    value: 5,
                    name: 'Ab'
                }]
            }, {
                name: 'B',
                children: [{
                    name: 'Ba',
                    value: 4
                }, {
                    name: 'Bb',
                    value: 2
                }]
            }, {
                name: 'C',
                value: 3
            }]
        }
    };

    myChart.setOption(option);
}

//旭日图，颜色调整
function echart0302() {
    var myChart = echarts.init(document.getElementById('echart03'));
    myChart.clear();

    var option = {
        series: {
            type: 'sunburst',
            data: [{
                name: 'A',
                value: 10,
                children: [{
                    value: 3,
                    name: 'Aa',
                    itemStyle: {
                        color: 'red'
                    }
                }, {
                    value: 5,
                    name: 'Ab'
                }]
            }, {
                name: 'B',
                children: [{
                    name: 'Ba',
                    value: 4
                }, {
                    name: 'Bb',
                    value: 2
                }],
                itemStyle: {
                    color: 'red'
                }
            }, {
                name: 'C',
                value: 3
            }],
            itemStyle: {
                color: '#aaa'
            },
            levels: [{
                // 留给数据下钻的节点属性
            }, {
                itemStyle: {
                    color: 'blue'
                }
            }]
        }
    };

    myChart.setOption(option);
}

//旭日图，数据下钻
function echart0303() {
    var myChart = echarts.init(document.getElementById('echart03'));
    myChart.clear();

    var data = [{
        name: 'Grandpa',
        children: [{
            name: 'Uncle Leo',
            value: 15,
            children: [{
                name: 'Cousin Jack',
                value: 2
            }, {
                name: 'Cousin Mary',
                value: 5,
                children: [{
                    name: 'Jackson',
                    value: 2
                }]
            }, {
                name: 'Cousin Ben',
                value: 4
            }]
        }, {
            name: 'Father',
            value: 10,
            children: [{
                name: 'Me',
                value: 5
            }, {
                name: 'Brother Peter',
                value: 1
            }]
        }]
    }, {
        name: 'Nancy',
        children: [{
            name: 'Uncle Nike',
            children: [{
                name: 'Cousin Betty',
                value: 1
            }, {
                name: 'Cousin Jenny',
                value: 2
            }]
        }]
    }];

    option = {
        series: {
            type: 'sunburst',
            // highlightPolicy: 'ancestor',
            data: data,
            radius: [0, '90%'],
            label: {
                rotate: 'radial'
            }
        }
    };

    myChart.setOption(option);
}

//旭日图，高亮1
function echart0304() {
    var myChart = echarts.init(document.getElementById('echart03'));
    myChart.clear();

    option = {
        silent: true,
        series: {
            radius: ['15%', '95%'],
            center: ['50%', '60%'],
            type: 'sunburst',
            sort: null,
            highlightPolicy: 'descendant',
            data: [{
                value: 10,
                children: [{
                    name: 'target',
                    value: 4,
                    children: [{
                        value: 2,
                        children: [{
                            value: 1
                        }]
                    }, {
                        value: 1
                    }, {
                        value: 0.5
                    }]
                }, {
                    value: 2
                }]
            }, {
                value: 4,
                children: [{
                    children: [{
                        value: 2
                    }]
                }]
            }],
            label: {
                normal: {
                    rotate: 'none',
                    color: '#fff'
                }
            },
            levels: [],
            itemStyle: {
                color: 'yellow',
                borderWidth: 2
            },
            emphasis: {
                itemStyle: {
                    color: 'red'
                }
            },
            highlight: {
                itemStyle: {
                    color: 'orange'
                }
            },
            downplay: {
                itemStyle: {
                    color: '#ccc'
                }
            }
        }
    };

    setTimeout(function () {
        myChart.dispatchAction({
            type: 'sunburstHighlight',
            targetNodeId: 'target'
        });
    });

    myChart.setOption(option);
}

//旭日图，高亮2
function echart0305() {
    var myChart = echarts.init(document.getElementById('echart03'));
    myChart.clear();

    option = {
        silent: true,
        series: {
            radius: ['15%', '95%'],
            center: ['50%', '60%'],
            type: 'sunburst',
            sort: null,
            highlightPolicy: 'ancestor',
            data: [{
                value: 10,
                children: [{
                    value: 4,
                    children: [{
                        value: 2,
                        children: [{
                            name: 'target',
                            value: 1
                        }]
                    }, {
                        value: 1
                    }, {
                        value: 0.5
                    }]
                }, {
                    value: 2
                }]
            }, {
                value: 4,
                children: [{
                    children: [{
                        value: 2
                    }]
                }]
            }],
            label: {
                normal: {
                    rotate: 'none',
                    color: '#fff'
                }
            },
            levels: [],
            itemStyle: {
                color: 'yellow',
                borderWidth: 2
            },
            emphasis: {
                itemStyle: {
                    color: 'red'
                }
            },
            highlight: {
                itemStyle: {
                    color: 'orange'
                }
            },
            downplay: {
                itemStyle: {
                    color: '#ccc'
                }
            }
        }
    };

    setTimeout(function () {
        myChart.dispatchAction({
            type: 'sunburstHighlight',
            targetNodeId: 'target'
        });
    });

    myChart.setOption(option);
}

//旭日图，其他1
function echart0306() {
    var myChart = echarts.init(document.getElementById('echart03'));
    myChart.clear();

    var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
    var bgColor = '#2E2733';

    var itemStyle = {
        star5: {
            color: colors[0]
        },
        star4: {
            color: colors[1]
        },
        star3: {
            color: colors[2]
        },
        star2: {
            color: colors[3]
        }
    };

    var data = [{
        name: '虚构',
        itemStyle: {
            normal: {
                color: colors[1]
            }
        },
        children: [{
            name: '小说',
            children: [{
                name: '5☆',
                children: [{
                    name: '疼'
                }, {
                    name: '慈悲'
                }, {
                    name: '楼下的房客'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '虚无的十字架'
                }, {
                    name: '无声告白'
                }, {
                    name: '童年的终结'
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '疯癫老人日记'
                }]
            }]
        }, {
            name: '其他',
            children: [{
                name: '5☆',
                children: [{
                    name: '纳博科夫短篇小说全集'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '安魂曲'
                }, {
                    name: '人生拼图版'
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '比起爱你，我更需要你'
                }]
            }]
        }]
    }, {
        name: '非虚构',
        itemStyle: {
            color: colors[2]
        },
        children: [{
            name: '设计',
            children: [{
                name: '5☆',
                children: [{
                    name: '无界面交互'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '数字绘图的光照与渲染技术'
                }, {
                    name: '日本建筑解剖书'
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '奇幻世界艺术\n&RPG地图绘制讲座'
                }]
            }]
        }, {
            name: '社科',
            children: [{
                name: '5☆',
                children: [{
                    name: '痛点'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '卓有成效的管理者'
                }, {
                    name: '进化'
                }, {
                    name: '后物欲时代的来临',
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '疯癫与文明'
                }]
            }]
        }, {
            name: '心理',
            children: [{
                name: '5☆',
                children: [{
                    name: '我们时代的神经症人格'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '皮格马利翁效应'
                }, {
                    name: '受伤的人'
                }]
            }, {
                name: '3☆',
            }, {
                name: '2☆',
                children: [{
                    name: '迷恋'
                }]
            }]
        }, {
            name: '居家',
            children: [{
                name: '4☆',
                children: [{
                    name: '把房子住成家'
                }, {
                    name: '只过必要生活'
                }, {
                    name: '北欧简约风格'
                }]
            }]
        }, {
            name: '绘本',
            children: [{
                name: '5☆',
                children: [{
                    name: '设计诗'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '假如生活糊弄了你'
                }, {
                    name: '博物学家的神秘动物图鉴'
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '方向'
                }]
            }]
        }, {
            name: '哲学',
            children: [{
                name: '4☆',
                children: [{
                    name: '人生的智慧'
                }]
            }]
        }, {
            name: '技术',
            children: [{
                name: '5☆',
                children: [{
                    name: '代码整洁之道'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: 'Three.js 开发指南'
                }]
            }]
        }]
    }];

    for (var j = 0; j < data.length; ++j) {
        var level1 = data[j].children;
        for (var i = 0; i < level1.length; ++i) {
            var block = level1[i].children;
            var bookScore = [];
            var bookScoreId;
            for (var star = 0; star < block.length; ++star) {
                var style = (function (name) {
                    switch (name) {
                        case '5☆':
                            bookScoreId = 0;
                            return itemStyle.star5;
                        case '4☆':
                            bookScoreId = 1;
                            return itemStyle.star4;
                        case '3☆':
                            bookScoreId = 2;
                            return itemStyle.star3;
                        case '2☆':
                            bookScoreId = 3;
                            return itemStyle.star2;
                    }
                })(block[star].name);

                block[star].label = {
                    color: style.color,
                    downplay: {
                        opacity: 0.5
                    }
                };

                if (block[star].children) {
                    style = {
                        opacity: 1,
                        color: style.color
                    };
                    block[star].children.forEach(function (book) {
                        book.value = 1;
                        book.itemStyle = style;

                        book.label = {
                            color: style.color
                        };

                        var value = 1;
                        if (bookScoreId === 0 || bookScoreId === 3) {
                            value = 5;
                        }

                        if (bookScore[bookScoreId]) {
                            bookScore[bookScoreId].value += value;
                        }
                        else {
                            bookScore[bookScoreId] = {
                                color: colors[bookScoreId],
                                value: value
                            };
                        }
                    });
                }
            }

            level1[i].itemStyle = {
                color: data[j].itemStyle.color
            };
        }
    }

    option = {
        backgroundColor: bgColor,
        color: colors,
        series: [{
            type: 'sunburst',
            center: ['50%', '48%'],
            data: data,
            sort: function (a, b) {
                if (a.depth === 1) {
                    return b.getValue() - a.getValue();
                }
                else {
                    return a.dataIndex - b.dataIndex;
                }
            },
            label: {
                rotate: 'radial',
                color: bgColor
            },
            itemStyle: {
                borderColor: bgColor,
                borderWidth: 2
            },
            levels: [{}, {
                r0: 0,
                r: 40,
                label: {
                    rotate: 0
                }
            }, {
                r0: 40,
                r: 105
            }, {
                r0: 115,
                r: 140,
                itemStyle: {
                    shadowBlur: 2,
                    shadowColor: colors[2],
                    color: 'transparent'
                },
                label: {
                    rotate: 'tangential',
                    fontSize: 10,
                    color: colors[0]
                }
            }, {
                r0: 140,
                r: 145,
                itemStyle: {
                    shadowBlur: 80,
                    shadowColor: colors[0]
                },
                label: {
                    position: 'outside',
                    textShadowBlur: 5,
                    textShadowColor: '#333',
                },
                downplay: {
                    label: {
                        opacity: 0.5
                    }
                }
            }]
        }]
    };

    myChart.setOption(option);
}

//旭日图，其他2
function echart0307() {
    var myChart = echarts.init(document.getElementById('echart03'));
    myChart.clear();

    var data = [{
        name: 'Flora',
        itemStyle: {
            color: '#da0d68'
        },
        children: [{
            name: 'Black Tea',
            value: 1,
            itemStyle: {
                color: '#975e6d'
            }
        }, {
            name: 'Floral',
            itemStyle: {
                color: '#e0719c'
            },
            children: [{
                name: 'Chamomile',
                value: 1,
                itemStyle: {
                    color: '#f99e1c'
                }
            }, {
                name: 'Rose',
                value: 1,
                itemStyle: {
                    color: '#ef5a78'
                }
            }, {
                name: 'Jasmine',
                value: 1,
                itemStyle: {
                    color: '#f7f1bd'
                }
            }]
        }]
    }, {
        name: 'Fruity',
        itemStyle: {
            color: '#da1d23'
        },
        children: [{
            name: 'Berry',
            itemStyle: {
                color: '#dd4c51'
            },
            children: [{
                name: 'Blackberry',
                value: 1,
                itemStyle: {
                    color: '#3e0317'
                }
            }, {
                name: 'Raspberry',
                value: 1,
                itemStyle: {
                    color: '#e62969'
                }
            }, {
                name: 'Blueberry',
                value: 1,
                itemStyle: {
                    color: '#6569b0'
                }
            }, {
                name: 'Strawberry',
                value: 1,
                itemStyle: {
                    color: '#ef2d36'
                }
            }]
        }, {
            name: 'Dried Fruit',
            itemStyle: {
                color: '#c94a44'
            },
            children: [{
                name: 'Raisin',
                value: 1,
                itemStyle: {
                    color: '#b53b54'
                }
            }, {
                name: 'Prune',
                value: 1,
                itemStyle: {
                    color: '#a5446f'
                }
            }]
        }, {
            name: 'Other Fruit',
            itemStyle: {
                color: '#dd4c51'
            },
            children: [{
                name: 'Coconut',
                value: 1,
                itemStyle: {
                    color: '#f2684b'
                }
            }, {
                name: 'Cherry',
                value: 1,
                itemStyle: {
                    color: '#e73451'
                }
            }, {
                name: 'Pomegranate',
                value: 1,
                itemStyle: {
                    color: '#e65656'
                }
            }, {
                name: 'Pineapple',
                value: 1,
                itemStyle: {
                    color: '#f89a1c'
                }
            }, {
                name: 'Grape',
                value: 1,
                itemStyle: {
                    color: '#aeb92c'
                }
            }, {
                name: 'Apple',
                value: 1,
                itemStyle: {
                    color: '#4eb849'
                }
            }, {
                name: 'Peach',
                value: 1,
                itemStyle: {
                    color: '#f68a5c'
                }
            }, {
                name: 'Pear',
                value: 1,
                itemStyle: {
                    color: '#baa635'
                }
            }]
        }, {
            name: 'Citrus Fruit',
            itemStyle: {
                color: '#f7a128'
            },
            children: [{
                name: 'Grapefruit',
                value: 1,
                itemStyle: {
                    color: '#f26355'
                }
            }, {
                name: 'Orange',
                value: 1,
                itemStyle: {
                    color: '#e2631e'
                }
            }, {
                name: 'Lemon',
                value: 1,
                itemStyle: {
                    color: '#fde404'
                }
            }, {
                name: 'Lime',
                value: 1,
                itemStyle: {
                    color: '#7eb138'
                }
            }]
        }]
    }, {
        name: 'Sour/\nFermented',
        itemStyle: {
            color: '#ebb40f'
        },
        children: [{
            name: 'Sour',
            itemStyle: {
                color: '#e1c315'
            },
            children: [{
                name: 'Sour Aromatics',
                value: 1,
                itemStyle: {
                    color: '#9ea718'
                }
            }, {
                name: 'Acetic Acid',
                value: 1,
                itemStyle: {
                    color: '#94a76f'
                }
            }, {
                name: 'Butyric Acid',
                value: 1,
                itemStyle: {
                    color: '#d0b24f'
                }
            }, {
                name: 'Isovaleric Acid',
                value: 1,
                itemStyle: {
                    color: '#8eb646'
                }
            }, {
                name: 'Citric Acid',
                value: 1,
                itemStyle: {
                    color: '#faef07'
                }
            }, {
                name: 'Malic Acid',
                value: 1,
                itemStyle: {
                    color: '#c1ba07'
                }
            }]
        }, {
            name: 'Alcohol/\nFremented',
            itemStyle: {
                color: '#b09733'
            },
            children: [{
                name: 'Winey',
                value: 1,
                itemStyle: {
                    color: '#8f1c53'
                }
            }, {
                name: 'Whiskey',
                value: 1,
                itemStyle: {
                    color: '#b34039'
                }
            }, {
                name: 'Fremented',
                value: 1,
                itemStyle: {
                    color: '#ba9232'
                }
            }, {
                name: 'Overripe',
                value: 1,
                itemStyle: {
                    color: '#8b6439'
                }
            }]
        }]
    }, {
        name: 'Green/\nVegetative',
        itemStyle: {
            color: '#187a2f'
        },
        children: [{
            name: 'Olive Oil',
            value: 1,
            itemStyle: {
                color: '#a2b029'
            }
        }, {
            name: 'Raw',
            value: 1,
            itemStyle: {
                color: '#718933'
            }
        }, {
            name: 'Green/\nVegetative',
            itemStyle: {
                color: '#3aa255'
            },
            children: [{
                name: 'Under-ripe',
                value: 1,
                itemStyle: {
                    color: '#a2bb2b'
                }
            }, {
                name: 'Peapod',
                value: 1,
                itemStyle: {
                    color: '#62aa3c'
                }
            }, {
                name: 'Fresh',
                value: 1,
                itemStyle: {
                    color: '#03a653'
                }
            }, {
                name: 'Dark Green',
                value: 1,
                itemStyle: {
                    color: '#038549'
                }
            }, {
                name: 'Vegetative',
                value: 1,
                itemStyle: {
                    color: '#28b44b'
                }
            }, {
                name: 'Hay-like',
                value: 1,
                itemStyle: {
                    color: '#a3a830'
                }
            }, {
                name: 'Herb-like',
                value: 1,
                itemStyle: {
                    color: '#7ac141'
                }
            }]
        }, {
            name: 'Beany',
            value: 1,
            itemStyle: {
                color: '#5e9a80'
            }
        }]
    }, {
        name: 'Other',
        itemStyle: {
            color: '#0aa3b5'
        },
        children: [{
            name: 'Papery/Musty',
            itemStyle: {
                color: '#9db2b7'
            },
            children: [{
                name: 'Stale',
                value: 1,
                itemStyle: {
                    color: '#8b8c90'
                }
            }, {
                name: 'Cardboard',
                value: 1,
                itemStyle: {
                    color: '#beb276'
                }
            }, {
                name: 'Papery',
                value: 1,
                itemStyle: {
                    color: '#fefef4'
                }
            }, {
                name: 'Woody',
                value: 1,
                itemStyle: {
                    color: '#744e03'
                }
            }, {
                name: 'Moldy/Damp',
                value: 1,
                itemStyle: {
                    color: '#a3a36f'
                }
            }, {
                name: 'Musty/Dusty',
                value: 1,
                itemStyle: {
                    color: '#c9b583'
                }
            }, {
                name: 'Musty/Earthy',
                value: 1,
                itemStyle: {
                    color: '#978847'
                }
            }, {
                name: 'Animalic',
                value: 1,
                itemStyle: {
                    color: '#9d977f'
                }
            }, {
                name: 'Meaty Brothy',
                value: 1,
                itemStyle: {
                    color: '#cc7b6a'
                }
            }, {
                name: 'Phenolic',
                value: 1,
                itemStyle: {
                    color: '#db646a'
                }
            }]
        }, {
            name: 'Chemical',
            itemStyle: {
                color: '#76c0cb'
            },
            children: [{
                name: 'Bitter',
                value: 1,
                itemStyle: {
                    color: '#80a89d'
                }
            }, {
                name: 'Salty',
                value: 1,
                itemStyle: {
                    color: '#def2fd'
                }
            }, {
                name: 'Medicinal',
                value: 1,
                itemStyle: {
                    color: '#7a9bae'
                }
            }, {
                name: 'Petroleum',
                value: 1,
                itemStyle: {
                    color: '#039fb8'
                }
            }, {
                name: 'Skunky',
                value: 1,
                itemStyle: {
                    color: '#5e777b'
                }
            }, {
                name: 'Rubber',
                value: 1,
                itemStyle: {
                    color: '#120c0c'
                }
            }]
        }]
    }, {
        name: 'Roasted',
        itemStyle: {
            color: '#c94930'
        },
        children: [{
            name: 'Pipe Tobacco',
            value: 1,
            itemStyle: {
                color: '#caa465'
            }
        }, {
            name: 'Tobacco',
            value: 1,
            itemStyle: {
                color: '#dfbd7e'
            }
        }, {
            name: 'Burnt',
            itemStyle: {
                color: '#be8663'
            },
            children: [{
                name: 'Acrid',
                value: 1,
                itemStyle: {
                    color: '#b9a449'
                }
            }, {
                name: 'Ashy',
                value: 1,
                itemStyle: {
                    color: '#899893'
                }
            }, {
                name: 'Smoky',
                value: 1,
                itemStyle: {
                    color: '#a1743b'
                }
            }, {
                name: 'Brown, Roast',
                value: 1,
                itemStyle: {
                    color: '#894810'
                }
            }]
        }, {
            name: 'Cereal',
            itemStyle: {
                color: '#ddaf61'
            },
            children: [{
                name: 'Grain',
                value: 1,
                itemStyle: {
                    color: '#b7906f'
                }
            }, {
                name: 'Malt',
                value: 1,
                itemStyle: {
                    color: '#eb9d5f'
                }
            }]
        }]
    }, {
        name: 'Spices',
        itemStyle: {
            color: '#ad213e'
        },
        children: [{
            name: 'Pungent',
            value: 1,
            itemStyle: {
                color: '#794752'
            }
        }, {
            name: 'Pepper',
            value: 1,
            itemStyle: {
                color: '#cc3d41'
            }
        }, {
            name: 'Brown Spice',
            itemStyle: {
                color: '#b14d57'
            },
            children: [{
                name: 'Anise',
                value: 1,
                itemStyle: {
                    color: '#c78936'
                }
            }, {
                name: 'Nutmeg',
                value: 1,
                itemStyle: {
                    color: '#8c292c'
                }
            }, {
                name: 'Cinnamon',
                value: 1,
                itemStyle: {
                    color: '#e5762e'
                }
            }, {
                name: 'Clove',
                value: 1,
                itemStyle: {
                    color: '#a16c5a'
                }
            }]
        }]
    }, {
        name: 'Nutty/\nCocoa',
        itemStyle: {
            color: '#a87b64'
        },
        children: [{
            name: 'Nutty',
            itemStyle: {
                color: '#c78869'
            },
            children: [{
                name: 'Peanuts',
                value: 1,
                itemStyle: {
                    color: '#d4ad12'
                }
            }, {
                name: 'Hazelnut',
                value: 1,
                itemStyle: {
                    color: '#9d5433'
                }
            }, {
                name: 'Almond',
                value: 1,
                itemStyle: {
                    color: '#c89f83'
                }
            }]
        }, {
            name: 'Cocoa',
            itemStyle: {
                color: '#bb764c'
            },
            children: [{
                name: 'Chocolate',
                value: 1,
                itemStyle: {
                    color: '#692a19'
                }
            }, {
                name: 'Dark Chocolate',
                value: 1,
                itemStyle: {
                    color: '#470604'
                }
            }]
        }]
    }, {
        name: 'Sweet',
        itemStyle: {
            color: '#e65832'
        },
        children: [{
            name: 'Brown Sugar',
            itemStyle: {
                color: '#d45a59'
            },
            children: [{
                name: 'Molasses',
                value: 1,
                itemStyle: {
                    color: '#310d0f'
                }
            }, {
                name: 'Maple Syrup',
                value: 1,
                itemStyle: {
                    color: '#ae341f'
                }
            }, {
                name: 'Caramelized',
                value: 1,
                itemStyle: {
                    color: '#d78823'
                }
            }, {
                name: 'Honey',
                value: 1,
                itemStyle: {
                    color: '#da5c1f'
                }
            }]
        }, {
            name: 'Vanilla',
            value: 1,
            itemStyle: {
                color: '#f89a80'
            }
        }, {
            name: 'Vanillin',
            value: 1,
            itemStyle: {
                color: '#f37674'
            }
        }, {
            name: 'Overall Sweet',
            value: 1,
            itemStyle: {
                color: '#e75b68'
            }
        }, {
            name: 'Sweet Aromatics',
            value: 1,
            itemStyle: {
                color: '#d0545f'
            }
        }]
    }];

    option = {
        title: {
            text: 'WORLD COFFEE RESEARCH SENSORY LEXICON',
            subtext: 'Source: https://worldcoffeeresearch.org/work/sensory-lexicon/',
            textStyle: {
                fontSize: 14,
                align: 'center'
            },
            subtextStyle: {
                align: 'center'
            },
            sublink: 'https://worldcoffeeresearch.org/work/sensory-lexicon/'
        },
        series: {
            type: 'sunburst',
            highlightPolicy: 'ancestor',
            data: data,
            radius: [0, '95%'],
            sort: null,
            levels: [{}, {
                r0: '15%',
                r: '35%',
                itemStyle: {
                    borderWidth: 2
                },
                label: {
                    rotate: 'tangential'
                }
            }, {
                r0: '35%',
                r: '70%',
                label: {
                    align: 'right'
                }
            }, {
                r0: '70%',
                r: '72%',
                label: {
                    position: 'outside',
                    padding: 3,
                    silent: false
                },
                itemStyle: {
                    borderWidth: 3
                }
            }]
        }
    };

    myChart.setOption(option);
}

window.onload = () => {
    document.getElementById('echartbtn0101').onclick = echart0101;

    document.getElementById('echartbtn0201').onclick = echart0201;
    document.getElementById('echartbtn0202').onclick = echart0202;
    document.getElementById('echartbtn0203').onclick = echart0203;

    document.getElementById('echartbtn0301').onclick = echart0301;
    document.getElementById('echartbtn0302').onclick = echart0302;
    document.getElementById('echartbtn0303').onclick = echart0303;
    document.getElementById('echartbtn0304').onclick = echart0304;
    document.getElementById('echartbtn0305').onclick = echart0305;
    document.getElementById('echartbtn0306').onclick = echart0306;
    document.getElementById('echartbtn0307').onclick = echart0307;

    echart0101();
    echart0201();
    echart0301();
}