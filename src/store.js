export default {
    name: 'EACO',
    slog: '完成计划，冲呀',
    missions:[
        {
            body:'完成比赛'
        },
        {
            body:'做2018考研英语阅读'
        },
    ],
    forgets:[
        {
            body:'买返校车票'
        },
        {
            body:'带狗去体检'
        }
    ],
    recents:[
        {
            body:'UI比赛作品提交',
            ddl:'7.23'
        },
        {
            body:'计算机网络期末复习',
            ddl:'8.20'
        }
    ],
    unchecked:[
        {
            body:'各位同学，RSE PT 考试已经恢复，已经清空前面有问题的测试，新测试截止时间为7月15日23:00\
            （仅RSE PT, RSE Chapter还是7月10日23:00）',
        }
    ],
    longTerm:[
        {
            deadline: {
                year: 2020,
                month: 8,
                date: 10,
                hour: 23,
                minute: 0,
            },
            status: false,
            title: 'Java大实验',
            todos: [
              {
                text: '实现函数： bubble_so.',
                time: '2020.4.30' 
              },
              {
                text: '实现函数： bubble_so..',
                time: '2020.5.1' 
              },
              {
                text: '实现函数： bubble_so...',
                time: '2020.5.2' 
              }
            ],
        },
        {
            deadline: {
                year: 2020,
                month: 7,
                date: 10,
                hour: 23,
                minute: 0,
            },
            status: true,
            title: '形势与政策作业',
            todos: [
            {
                text: '听课',
                time: '2020.5.30' 
            },
            {
                text: '写报告',
                time: '2020.6.20' 
            },
            ]
        },
        {
            deadline: {
                year: 2020,
                month: 8,
                date: 20,
                hour: 23,
                minute: 0,
            },
            status: false,
            title: '综合课程设计',
            todos: [
            {
                text: '完成b树相关代码',
                time: '2020.5.30' 
            },
            {
                text: '完成b+树相关代码',
                time: '2020.6.15' 
            },
            {
                text: '组装测试',
                time: '2020.8.15' 
            }
            ],
        }
    ]
}