//第一个ECharts实例
function echart0101() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart01'));
    myChart.clear();  //先清空原有数据，这样就可以重复点击了

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '第一个 ECharts 实例'
        },
        tooltip: {},
        legend: {
            data: ['销量']
        },
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

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//饼图
function echart0201() {
    var myChart = echarts.init(document.getElementById('echart02'));
    myChart.clear();  //先清空原有数据，这样就可以重复点击了

    myChart.setOption({
        series: [
            {
                name: '访问来源',
                type: 'pie',    // 设置图表类型为饼图
                radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                data: [         // 数据数组，name 为数据项名称，value 为数据项值
                    { value: 235, name: '视频广告' },
                    { value: 274, name: '联盟广告' },
                    { value: 310, name: '邮件营销' },
                    { value: 335, name: '直接访问' },
                    { value: 400, name: '搜索引擎' }
                ]
            }
        ]
    })
}

//南丁格尔图
function echart0202() {
    var myChart = echarts.init(document.getElementById('echart02'));
    myChart.clear();  //先清空原有数据，这样就可以重复点击了

    var option = {
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                roseType: 'angle',
                data: [
                    { value: 235, name: '视频广告' },
                    { value: 274, name: '联盟广告' },
                    { value: 310, name: '邮件营销' },
                    { value: 335, name: '直接访问' },
                    { value: 400, name: '搜索引擎' }
                ]
            }
        ]
    };

    myChart.setOption(option);
}

//饼图阴影
function echart0203() {
    var myChart = echarts.init(document.getElementById('echart02'));
    myChart.clear();  //先清空原有数据，这样就可以重复点击了

    var option = {
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                data: [
                    { value: 235, name: '视频广告' },
                    { value: 274, name: '联盟广告' },
                    { value: 310, name: '邮件营销' },
                    { value: 335, name: '直接访问' },
                    { value: 400, name: '搜索引擎' }
                ],
                roseType: 'angle',
                itemStyle: {
                    normal: {
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    myChart.setOption(option);
}

//颜色主题，dark
function echart0301() {
    var myChart = echarts.init(document.getElementById('echart03'));
    myChart.dispose();  // 只有先将原先的“画布”释放掉，才可以重新设置主题
    var myChart = echarts.init(document.getElementById('echart03'), 'light');  // light 可尝试修改为 dark

    myChart.setOption({
        series: [
            {
                name: '访问来源',
                type: 'pie',    // 设置图表类型为饼图
                radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                data: [         // 数据数组，name 为数据项名称，value 为数据项值
                    { value: 235, name: '视频广告' },
                    { value: 274, name: '联盟广告' },
                    { value: 310, name: '邮件营销' },
                    { value: 335, name: '直接访问' },
                    { value: 400, name: '搜索引擎' }
                ]
            }
        ]
    })
}

//颜色主题，light
function echart0302() {
    var myChart = echarts.init(document.getElementById('echart03'));
    myChart.dispose();  // 只有先将原先的“画布”释放掉，才可以重新设置主题
    var myChart = echarts.init(document.getElementById('echart03'), 'dark');  // dark 可尝试修改为 light

    myChart.setOption({
        series: [
            {
                name: '访问来源',
                type: 'pie',    // 设置图表类型为饼图
                radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                data: [         // 数据数组，name 为数据项名称，value 为数据项值
                    { value: 235, name: '视频广告' },
                    { value: 274, name: '联盟广告' },
                    { value: 310, name: '邮件营销' },
                    { value: 335, name: '直接访问' },
                    { value: 400, name: '搜索引擎' }
                ]
            }
        ]
    })
}

//颜色主题，调色盘
function echart0303() {
    var myChart = echarts.init(document.getElementById('echart03'));
    myChart.clear();  //先清空原有数据，这样就可以重复点击了

    myChart.setOption({
        // 全局调色盘。
        color: ['#FF0000', '#00FF00', '#0000FF'],
        series: [
            {
                // 此系列自己的调色盘
                color: ['#00FFFF', '#FF00FF', '#FFFF00'],
                name: '访问来源',
                type: 'pie',    // 设置图表类型为饼图
                radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                data: [          // 数据数组，name 为数据项名称，value 为数据项值
                    { value: 235, name: '视频广告' },
                    { value: 274, name: '联盟广告' },
                    { value: 310, name: '邮件营销' },
                    { value: 335, name: '直接访问' },
                    { value: 400, name: '搜索引擎' }
                ]
            }
        ]
    })
}

//颜色主题，高亮样式
function echart0304() {
    var myChart = echarts.init(document.getElementById('echart03'));
    myChart.clear();  //先清空原有数据，这样就可以重复点击了

    myChart.setOption({
        series: [
            {
                name: '访问来源',
                type: 'pie',    // 设置图表类型为饼图
                radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                // 高亮样式。
                emphasis: {
                    itemStyle: {
                        // 高亮时点的颜色
                        color: 'red'
                    },
                    label: {
                        show: true,
                        // 高亮时标签的文字
                        formatter: '高亮时显示的标签内容'
                    }
                },
                data: [          // 数据数组，name 为数据项名称，value 为数据项值
                    { value: 235, name: '视频广告' },
                    { value: 274, name: '联盟广告' },
                    { value: 310, name: '邮件营销' },
                    { value: 335, name: '直接访问' },
                    { value: 400, name: '搜索引擎' }
                ]
            }
        ]
    })
}

//异步加载数据
function echart0401() {
    var myChart = echarts.init(document.getElementById('echart04'));
    myChart.clear();  //先清空原有数据，这样就可以重复点击了

    $.get('./data/echarts_test_data.json', function (data) {
        myChart.setOption({
            series: [
                {
                    name: '访问来源',
                    type: 'pie',    // 设置图表类型为饼图
                    radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                    data: data.data_pie
                }
            ]
        })
    }, 'json')
}

//异步加载数据，Loading
function echart0402() {
    var myChart = echarts.init(document.getElementById('echart04'));
    myChart.clear();  //先清空原有数据，这样就可以重复点击了
    myChart.showLoading();  // 开启 loading 效果

    $.get('./data/echarts_test_data.json', function (data) {
        alert("可以看到 loading 字样。"); // 测试代码，用于查看 loading 效果
        myChart.hideLoading();  // 隐藏 loading 效果
        myChart.setOption({
            series: [
                {
                    name: '访问来源',
                    type: 'pie',    // 设置图表类型为饼图
                    radius: '55%',  // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
                    data: data.data_pie
                }
            ]
        })
    }, 'json');
}

//异步加载数据，动态更新
function echart0403() {
    var myChart = echarts.init(document.getElementById('echart04'));
    myChart.clear();  //先清空原有数据，这样就可以重复点击了

    var base = +new Date(2014, 9, 3);
    var oneDay = 24 * 3600 * 1000;
    var date = [];

    var data = [Math.random() * 150];
    var now = new Date(base);

    function addData(shift) {
        now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
        date.push(now);
        data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);

        if (shift) {
            date.shift();
            data.shift();
        }

        now = new Date(+new Date(now) + oneDay);
    }

    for (var i = 1; i < 100; i++) {
        addData();
    }

    option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            boundaryGap: [0, '50%'],
            type: 'value'
        },
        series: [
            {
                name: '成交',
                type: 'line',
                smooth: true,
                symbol: 'none',
                stack: 'a',
                areaStyle: {
                    normal: {}
                },
                data: data
            }
        ]
    };

    setInterval(function () {
        addData(true);
        myChart.setOption({
            xAxis: {
                data: date
            },
            series: [{
                name: '成交',
                data: data
            }]
        });
    }, 500);

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart04'));
    myChart.setOption(option);
}

//数组数组
function echart0501() {
    var myChart = echarts.init(document.getElementById('echart05'));
    myChart.clear();  //先清空原有数据，这样就可以重复点击了

    // 指定图表的配置项和数据
    var option = {
        legend: {},
        tooltip: {},
        dataset: {
            // 提供一份数据。
            source: [
                ['product', '2015', '2016', '2017'],
                ['Matcha Latte', 43.3, 85.8, 93.7],
                ['Milk Tea', 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 86.4, 65.2, 82.5],
                ['Walnut Brownie', 72.4, 53.9, 39.1]
            ]
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: { type: 'category' },
        // 声明一个 Y 轴，数值轴。
        yAxis: {},
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [
            { type: 'bar' },
            { type: 'bar' },
            { type: 'bar' }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//对象数组
function echart0502() {
    var myChart = echarts.init(document.getElementById('echart05'));
    myChart.clear();  //先清空原有数据，这样就可以重复点击了

    // 指定图表的配置项和数据
    var option = {
        legend: {},
        tooltip: {},
        dataset: {
            // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
            // 如果不指定 dimensions，也可以通过指定 series.encode 完成映射，参见后文。
            dimensions: ['product', '2015', '2016', '2017'],
            source: [
                { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
                { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
                { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
                { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
            ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [
            { type: 'bar' },
            { type: 'bar' },
            { type: 'bar' }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//数据到图形的行列映射
function echart0503() {
    var myChart = echarts.init(document.getElementById('echart05'));
    myChart.clear();  //先清空原有数据，这样就可以重复点击了

    // 指定图表的配置项和数据
    var option = {
        legend: {},
        tooltip: {},
        dataset: {
            source: [
                ['product', '2012', '2013', '2014', '2015'],
                ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
                ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
                ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
            ]
        },
        xAxis: [
            { type: 'category', gridIndex: 0 },
            { type: 'category', gridIndex: 1 }
        ],
        yAxis: [
            { gridIndex: 0 },
            { gridIndex: 1 }
        ],
        grid: [
            { bottom: '55%' },
            { top: '55%' }
        ],
        series: [
            // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
            { type: 'bar', seriesLayoutBy: 'row' },
            { type: 'bar', seriesLayoutBy: 'row' },
            { type: 'bar', seriesLayoutBy: 'row' },
            // 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
            { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
            { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
            { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
            { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
        ]
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//数据到图形的行列映射2
function echart0504() {
    var myChart = echarts.init(document.getElementById('echart05'));
    myChart.clear();  //先清空原有数据，这样就可以重复点击了

    // 指定图表的配置项和数据
    var option = {
        dataset: {
            source: [
                ['score', 'amount', 'product'],
                [89.3, 58212, 'Matcha Latte'],
                [57.1, 78254, 'Milk Tea'],
                [74.4, 41032, 'Cheese Cocoa'],
                [50.1, 12755, 'Cheese Brownie'],
                [89.7, 20145, 'Matcha Cocoa'],
                [68.1, 79146, 'Tea'],
                [19.6, 91852, 'Orange Juice'],
                [10.6, 101852, 'Lemon Juice'],
                [32.7, 20112, 'Walnut Brownie']
            ]
        },
        grid: { containLabel: true },
        xAxis: {},
        yAxis: { type: 'category' },
        series: [
            {
                type: 'bar',
                encode: {
                    // 将 "amount" 列映射到 X 轴。
                    x: 'amount',
                    // 将 "product" 列映射到 Y 轴。
                    y: 'product'
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//数据到图形的行列映射3
function echart0505() {
    var myChart = echarts.init(document.getElementById('echart05'));
    myChart.clear();  //先清空原有数据，这样就可以重复点击了

    // 指定图表的配置项和数据
    $.get('./data/life-expectancy-table.json', function (data) {

        var sizeValue = '57%';
        var symbolSize = 2.5;
        option = {
            legend: {},
            tooltip: {},
            toolbox: {
                left: 'center',
                feature: {
                    dataZoom: {}
                }
            },
            grid: [
                { right: sizeValue, bottom: sizeValue },
                { left: sizeValue, bottom: sizeValue },
                { right: sizeValue, top: sizeValue },
                { left: sizeValue, top: sizeValue }
            ],
            xAxis: [
                { type: 'value', gridIndex: 0, name: 'Income', axisLabel: { rotate: 50, interval: 0 } },
                { type: 'category', gridIndex: 1, name: 'Country', boundaryGap: false, axisLabel: { rotate: 50, interval: 0 } },
                { type: 'value', gridIndex: 2, name: 'Income', axisLabel: { rotate: 50, interval: 0 } },
                { type: 'value', gridIndex: 3, name: 'Life Expectancy', axisLabel: { rotate: 50, interval: 0 } }
            ],
            yAxis: [
                { type: 'value', gridIndex: 0, name: 'Life Expectancy' },
                { type: 'value', gridIndex: 1, name: 'Income' },
                { type: 'value', gridIndex: 2, name: 'Population' },
                { type: 'value', gridIndex: 3, name: 'Population' }
            ],
            dataset: {
                dimensions: [
                    'Income',
                    'Life Expectancy',
                    'Population',
                    'Country',
                    { name: 'Year', type: 'ordinal' }
                ],
                source: data
            },
            series: [
                {
                    type: 'scatter',
                    symbolSize: symbolSize,
                    xAxisIndex: 0,
                    yAxisIndex: 0,
                    encode: {
                        x: 'Income',
                        y: 'Life Expectancy',
                        tooltip: [0, 1, 2, 3, 4]
                    }
                },
                {
                    type: 'scatter',
                    symbolSize: symbolSize,
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    encode: {
                        x: 'Country',
                        y: 'Income',
                        tooltip: [0, 1, 2, 3, 4]
                    }
                },
                {
                    type: 'scatter',
                    symbolSize: symbolSize,
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    encode: {
                        x: 'Income',
                        y: 'Population',
                        tooltip: [0, 1, 2, 3, 4]
                    }
                },
                {
                    type: 'scatter',
                    symbolSize: symbolSize,
                    xAxisIndex: 3,
                    yAxisIndex: 3,
                    encode: {
                        x: 'Life Expectancy',
                        y: 'Population',
                        tooltip: [0, 1, 2, 3, 4]
                    }
                }
            ]
        };

        myChart.setOption(option);
    });
}

//视觉映射
function echart0506() {
    var myChart = echarts.init(document.getElementById('echart05'));
    myChart.clear();  //先清空原有数据，这样就可以重复点击了

    var option = {
        dataset: {
            source: [
                ['score', 'amount', 'product'],
                [89.3, 58212, 'Matcha Latte'],
                [57.1, 78254, 'Milk Tea'],
                [74.4, 41032, 'Cheese Cocoa'],
                [50.1, 12755, 'Cheese Brownie'],
                [89.7, 20145, 'Matcha Cocoa'],
                [68.1, 79146, 'Tea'],
                [19.6, 91852, 'Orange Juice'],
                [10.6, 101852, 'Lemon Juice'],
                [32.7, 20112, 'Walnut Brownie']
            ]
        },
        grid: { containLabel: true },
        xAxis: { name: 'amount' },
        yAxis: { type: 'category' },
        visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: 10,
            max: 100,
            text: ['High Score', 'Low Score'],
            // Map the score column to color
            dimension: 0,
            inRange: {
                color: ['#D7DA8B', '#E15457']
            }
        },
        series: [
            {
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x: 'amount',
                    // Map the "product" column to Y axis
                    y: 'product'
                }
            }
        ]
    };

    myChart.setOption(option);
}

//交互联动
function echart0507() {
    var myChart = echarts.init(document.getElementById('echart05'));
    myChart.clear();  //先清空原有数据，这样就可以重复点击了

    setTimeout(function () {
        option = {
            legend: {},
            tooltip: {
                trigger: 'axis',
                showContent: false
            },
            dataset: {
                source: [
                    ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                    ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                    ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                    ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                    ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
                ]
            },
            xAxis: { type: 'category' },
            yAxis: { gridIndex: 0 },
            grid: { top: '55%' },
            series: [
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                { type: 'line', smooth: true, seriesLayoutBy: 'row' },
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['50%', '25%'],
                    label: {
                        formatter: '{b}: {@2012} ({d}%)'
                    },
                    encode: {
                        itemName: 'product',
                        value: '2012',
                        tooltip: '2012'
                    }
                }
            ]
        };

        myChart.on('updateAxisPointer', function (event) {
            var xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                myChart.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });
            }
        });

        myChart.setOption(option);
    });
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

    document.getElementById('echartbtn0401').onclick = echart0401;
    document.getElementById('echartbtn0402').onclick = echart0402;
    document.getElementById('echartbtn0403').onclick = echart0403;

    document.getElementById('echartbtn0501').onclick = echart0501;
    document.getElementById('echartbtn0502').onclick = echart0502;
    document.getElementById('echartbtn0503').onclick = echart0503;
    document.getElementById('echartbtn0504').onclick = echart0504;
    document.getElementById('echartbtn0505').onclick = echart0505;
    document.getElementById('echartbtn0506').onclick = echart0506;
    document.getElementById('echartbtn0507').onclick = echart0507;

    echart0101();
    echart0201();
    echart0301();
    echart0401();
    echart0501();
}