$(function () {
    // 基于准备好的dom，初始化echarts实例
    var echarts_left = echarts.init(document.querySelector('.echarts-left'));

    // 指定图表的配置项和数据
    var option1 = {
        title: {
            text: '2017年注册人数'
        },
        tooltip: {},
        legend: {
            data: ['人数']
        },
        xAxis: {
            data: ["一月", "二月", "三月", "四月", "五月", "六月"]
        },
        yAxis: {},
        series: [{
            name: '人数',
            type: 'bar',
            data: [1000, 1500, 1300, 3000, 900, 2300]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    echarts_left.setOption(option1);

    // 基于准备好的dom，初始化echarts实例
    var echarts_right = echarts.init(document.querySelector('.echarts-right'));

    // 指定图表的配置项和数据
    var option2 = {
        title: {
            text: '热门品牌销售',
            subtext: '2018年12月',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['耐克', '阿迪', '乔丹', 'AJ', '李宁', '特步']
        },
        series: [
            {
                name: '热门品牌',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    { value: 1000, name: '耐克' },
                    { value: 1500, name: '阿迪' },
                    { value: 1300, name: '乔丹' },
                    { value: 3000, name: 'AJ' },
                    { value: 900, name: '李宁' },
                    { value: 1100, name: '特步' },
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

    // 使用刚指定的配置项和数据显示图表。
    echarts_right.setOption(option2);
})