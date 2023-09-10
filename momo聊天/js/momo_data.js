// 图片所在目录
let imgPath = 'images/'

// 用户信息
let info = {
    toolImg: 'bottom_tool.png', // 底部输入框和工具按钮图片
    headMe: 'head1.png', // 自己头像
    headHe: 'head2.png', // 对方头像
    nameHe: '瑶瑶好可爱',    // 对方网名
    date: '09-09 15:46', // 聊天日期
    distance: '1348km',      // 聊天距离
    newsNum: '',               // 返回消息
    meColor: '#E0E8FB'       // 聊天内容背景颜色
}

// 聊天的数据 id为1 表示对方， 为2表示自己。msg为内容，pic为图片
let dataList = [
    {
        id: 1,
        msg: '瑶瑶好可爱&姐',
    },
    {
        id: 2,
        msg: '教教我每次一节食一吃又胖向向向',
    },
    {
        id: 2,
        msg: '又胖向向向',
    },
    {
        id: 1,
        msg: '瑶瑶好可爱&姐妹们这个暑假胖到快',
        pic: 'pic.png',

    },
    {
        id: 1,
        msg: '瑶妹们这个暑假胖到警吃又胖向向向',
    },
    {
        id: 2,
        msg: '瑶瑶好可一百三警你们有没有减肥的秘诀，教一吃又胖向向向',
    },
    {
        id: 2,
        pic: 'pic.png' ,
    }
]