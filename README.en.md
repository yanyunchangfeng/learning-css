[简体中文](README.md) |  English  

<p align="center">
    <img width="300" src="https://cdn.jsdelivr.net/gh/yanyunchangfeng/cdn@1.0/assets/img/blog/yycf/yanyunchangfeng.png">
</p>

##  Description
Hello, I'm Xiao dong Xu. Pen name is [Yan Yun Chang feng](https://yanyunchangfeng.com), It was given by Da Mo Qiong qiu in 2019-03-16 21:22. 
Meaning：combined Li Bai's famous frontier poem to take [Yan Yun Chang feng] - Long winds of tens of thousands of miles, belowing Yumenguan.
##  Scss & Css future function  

[css-var-env](src/index.css)  

## Jest Unit 

### Install 
```
   npm install --save-dev jest typescript ts-jest @types/jest  or yarn add --dev jest typescript ts-jest @types/jest
```
### create a type of ts configuration file  called jest.config.js
```
   npx ts-jest config:init or  yarn ts-jest config:init
```
### Specific configuration parameter Please refer to the official website document
* https://jestjs.io/docs/en/configuration.html

### serve unit test
```
npm t  or yarn test
```

## cypress e2e test

### Install
```
  npm install cypress --save-dev or  yarn add cypress --dev
```
### Open cypress Test
```
   npx cypress open  or  yarn run cypress open
```
### Add npm script in package.json
```
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}

```

### creat a typescript test file called tsconfig.json in the folder cypree
```
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": "../node_modules",
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress"]
  },
  "include": [
    "**/*.ts"
  ]
}
```

### Create a test file in  the folder cypress/integration 
```
   touch {your_project}/cypress/integration/sample_spec.(j|t)s
```

### Serve e2e test and select the specified file to test
```
    npm run cypress:open
```

## Personal Blog  

* [Yan Yun Chang feng](https://yanyunchangfeng.com) 

## Series Project

1. [NiceFish]( https://gitee.com/mumu-osc/NiceFish)：Mermaid, this is a microblogging system with a front end based on Angular 7.0 + PrimeNG 7.1.0（GVIP  gitee most valuable open source project 3192 ☆)
2. [NiceFish-React](https://github.com/damoqiongqiu/NiceFish-React)：This is the implementation of the React version, the interface looks exactly the same. Using React Hooks version 16.8.3, TypeScript, Ant Design component library, and Bootstrap v4.2.1 development.  (7 ☆)
3. [OpenWMS-Frontend](https://gitee.com/mumu-osc/OpenWMS-Frontend)：OpenWMS project with a front end based on Angular 7.0 + PrimeNG 7.1.0。  (Recommended 200 ☆)
4. [nicefish-spring-cloud](https://gitee.com/mumu-osc/nicefish-spring-cloud)：This is the server code for NiceFish, based on SpringCloud. Some basic functions have been completed, such as SpringSecurity+OAuth2+JWT to implement SSO, paged queries for articles, users, comments, etc. If you need to interface with this backend code, check out the for-spring-cloud branch of the project. (Recommended 117 ☆) 

## Social Homepage 

1.  [Yan Yun Chang feng's Zhi Hu](https://zhihu.com/people/hbxyxuxiaodong)  
2.  [Yan Yun Chang feng's column of Zhi Hu](https://zhuanlan.zhihu.com/yanyunchangfeng) 
3.  [Yan Yun Chang feng's github](https://github.com/yanyunchangfeng)  
4.  [Yan Yun Chang feng's gitee](https://gitee.com/yanyunchangfeng)  
5.  [Yan Yun Chang feng's twitter](https://twitter.com/yanyunchangfeng)  
6.  [Yan Yun Chang feng's medium](https://medium.com/@yanyunchangfeng)  
7.  [Yan Yun Chang feng's facebook](https://facebook.com/yanyunchangfeng)  
8.  [Yan Yun Chang feng's stackoverflow](http://stackoverflow.com/users/11366314)  
9.  [Yan Yun Chang feng's npm](https://npmjs.com/~yanyunchangfeng)  
10. [Yan Yun Chang feng's linkedin](https://www.linkedin.com/in/yanyunchangfeng)  
11. [Yan Yun Chang feng's youtube](https://www.youtube.com/channel/UCaz2-l8Bd8tTBf1q-2ww7VA)  
12. [Yan Yun Chang feng's gmail](mailto:yanyunchangfeng@gamil.com)

## LICENSE

MIT