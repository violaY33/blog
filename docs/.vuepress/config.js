module.exports = {
    title: 'Viola\'s Blog',
    description: 'Welcome to my site',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }], 
    ],
    base: '/blog/',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        sidebarDepth: 2, 
        lastUpdated: 'Last Updated', 
        nav: [
            {
                text: '文章',
                link: '/article/'
            },
            {
                text: '笔记',
                link: '/note/'
            },
            {                
                text: '项目',
                link: '/project/'
                
            },
            {                
                text: '其他',
                items: [

                    {
                        text: '资源',
                        link: '/resource/'
                    }
                ]
                
            },
            {
                text: 'GitHub',
                link: 'https://github.com/violaY33'
            }
        ],
        sidebar: {
            // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
            '/article/': [
                {
                    title: '文章',
                    children: [
                        '/article/1',
                        '/article/2',
                        '/article/3',
                        '/article/4',
                        '/article/5',
                        '/article/6',
                        '/article/7',
                        '/article/8',
                        '/article/9',
                        '/article/10'
                    ]
                }
            ],
            '/note/': [
                {
                    title: '读书笔记',
                    children: [
                        '/note/1',
                        '/note/2',
                    ]
                }
            ]
        }
    }
};