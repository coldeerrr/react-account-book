# react-account-book

### 项目结构

    |- src
    |  |- assets:  所有静态资源
    |  |  |- images: 存放所有 CSS 样式需要的背景图片
    |  |- components:  存放普通组件
    |  |  |- Details: Details界面下的普通組件
    |  |  |  |- Header: 头部的组件
    |  |  |  |- List: 账单列表组件
    |  |  |  |- MyLink: 封装的头部路由组件
    |  |  |- Nav: 下方的导航栏组件
    |  |  |  |- MyNavLink: 封装的Nav栏路由组件
    |  |- pages: 存放路由组件
    |  |  |- Chart: 统计(2)
    |  |  |- Details: 明细(1)
    |  |  |  |- Add: 添加账目
    |  |  |  |- Bill: 账单(1)
    |  |  |  |- Budget: 预算(2)
    |  |  |  |- Bulter: 资产管家(3)
    |  |  |  |- Knowldge: 理财知识(4)
    |  |  |  |- Cashback: 购物返现(5)
    |  |  |- My: 我的(3)
    |  |- App.jsx: 外壳组件
    |  |- index.js: 入口文件