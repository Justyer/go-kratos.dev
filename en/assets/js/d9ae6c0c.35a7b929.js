"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7964],{3905:function(t,e,r){r.d(e,{Zo:function(){return k},kt:function(){return c}});var a=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},k=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,s=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),u=p(r),c=o,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||n;return r?a.createElement(g,l(l({ref:e},k),{},{components:r})):a.createElement(g,l({ref:e},k))}));function c(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,l=new Array(n);l[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1077:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return k},default:function(){return u}});var a=r(3117),o=r(102),n=(r(7294),r(3905)),l=["components"],i={id:"design",title:"\u8bbe\u8ba1\u7406\u5ff5",description:"\u672c\u7bc7\u6587\u6863\u9610\u8ff0Kratos\u7684\u8bbe\u8ba1\u7406\u5ff5\uff0c\u4ecb\u7ecdKratos\u9879\u76ee\u7684\u6574\u4f53\u60c5\u51b5\u548c\u4e3b\u8981\u7ec4\u4ef6",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},s=void 0,p={unversionedId:"intro/design",id:"intro/design",title:"\u8bbe\u8ba1\u7406\u5ff5",description:"\u672c\u7bc7\u6587\u6863\u9610\u8ff0Kratos\u7684\u8bbe\u8ba1\u7406\u5ff5\uff0c\u4ecb\u7ecdKratos\u9879\u76ee\u7684\u6574\u4f53\u60c5\u51b5\u548c\u4e3b\u8981\u7ec4\u4ef6",source:"@site/docs/intro/02-design.md",sourceDirName:"intro",slug:"/intro/design",permalink:"/en/docs/intro/design",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/intro/02-design.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"design",title:"\u8bbe\u8ba1\u7406\u5ff5",description:"\u672c\u7bc7\u6587\u6863\u9610\u8ff0Kratos\u7684\u8bbe\u8ba1\u7406\u5ff5\uff0c\u4ecb\u7ecdKratos\u9879\u76ee\u7684\u6574\u4f53\u60c5\u51b5\u548c\u4e3b\u8981\u7ec4\u4ef6",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Overview",permalink:"/en/docs/"},next:{title:"FAQ",permalink:"/en/docs/intro/faq"}},k=[{value:"\u8bbe\u8ba1\u54f2\u5b66",id:"\u8bbe\u8ba1\u54f2\u5b66",children:[],level:2},{value:"\u4ed3\u5e93\u3001\u6587\u6863\u548c\u793e\u533a",id:"\u4ed3\u5e93\u6587\u6863\u548c\u793e\u533a",children:[],level:2},{value:"\u4e3a\u4ec0\u4e48v2\u5b8c\u5168\u91cd\u65b0\u8bbe\u8ba1",id:"\u4e3a\u4ec0\u4e48v2\u5b8c\u5168\u91cd\u65b0\u8bbe\u8ba1",children:[],level:2},{value:"\u6570\u636e\u5e93/\u7f13\u5b58/\u6d88\u606f\u961f\u5217/...",id:"\u6570\u636e\u5e93\u7f13\u5b58\u6d88\u606f\u961f\u5217",children:[],level:2},{value:"CLI\u5de5\u5177",id:"cli\u5de5\u5177",children:[],level:2},{value:"Protobuf\u5b9a\u4e49API",id:"protobuf\u5b9a\u4e49api",children:[],level:2},{value:"\u5143\u4fe1\u606f\u4f20\u9012",id:"\u5143\u4fe1\u606f\u4f20\u9012",children:[],level:2},{value:"\u9519\u8bef\u5904\u7406",id:"\u9519\u8bef\u5904\u7406",children:[],level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",children:[],level:2},{value:"\u670d\u52a1\u6ce8\u518c&amp;\u670d\u52a1\u53d1\u73b0",id:"\u670d\u52a1\u6ce8\u518c\u670d\u52a1\u53d1\u73b0",children:[],level:2},{value:"\u65e5\u5fd7",id:"\u65e5\u5fd7",children:[],level:2},{value:"\u76d1\u63a7",id:"\u76d1\u63a7",children:[],level:2},{value:"\u94fe\u8def\u8ffd\u8e2a",id:"\u94fe\u8def\u8ffd\u8e2a",children:[],level:2},{value:"\u8d1f\u8f7d\u5747\u8861",id:"\u8d1f\u8f7d\u5747\u8861",children:[],level:2},{value:"\u9650\u6d41\u7194\u65ad",id:"\u9650\u6d41\u7194\u65ad",children:[],level:2},{value:"\u4e2d\u95f4\u4ef6",id:"\u4e2d\u95f4\u4ef6",children:[],level:2},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",children:[],level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[],level:2}],m={toc:k};function u(t){var e=t.components,r=(0,o.Z)(t,l);return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u7bc7\u6587\u6863\u9610\u8ff0Kratos\u7684\u8bbe\u8ba1\u7406\u5ff5\uff0c\u4ecb\u7ecdKratos\u9879\u76ee\u7684\u6574\u4f53\u60c5\u51b5\u548c\u4e3b\u8981\u7ec4\u4ef6\u3002"),(0,n.kt)("h2",{id:"\u8bbe\u8ba1\u54f2\u5b66"},"\u8bbe\u8ba1\u54f2\u5b66"),(0,n.kt)("p",null,"Kratos\u662f\u4e00\u4e2aGo\u8bed\u8a00\u5b9e\u73b0\u7684\u5fae\u670d\u52a1\u6846\u67b6\uff0c\u8bf4\u5f97\u66f4\u51c6\u786e\u4e00\u70b9\uff0c\u5b83\u66f4\u7c7b\u4f3c\u4e8e\u4e00\u4e2a\u4f7f\u7528Go\u6784\u5efa\u5fae\u670d\u52a1\u7684\u5de5\u5177\u7bb1\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6309\u7167\u81ea\u5df1\u7684\u4e60\u60ef\u9009\u7528\u6216\u5b9a\u5236\u5176\u4e2d\u7684\u7684\u7ec4\u4ef6\uff0c\u6765\u6253\u9020\u81ea\u5df1\u7684\u5fae\u670d\u52a1\u3002\u4e5f\u6b63\u662f\u7531\u4e8e\u8fd9\u6837\u7684\u539f\u56e0\uff0cKratos\u5e76\u4e0d\u7ed1\u5b9a\u4e8e\u7279\u5b9a\u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u4e0d\u9650\u5b9a\u4e8e\u67d0\u79cd\u6ce8\u518c\u4e2d\u5fc3\uff0c\u6216\u6570\u636e\u5e93ORM\u7b49\uff0c\u6240\u4ee5\u60a8\u53ef\u4ee5\u5341\u5206\u8f7b\u677e\u5730\u5c06\u4efb\u610f\u5e93\u96c6\u6210\u8fdb\u9879\u76ee\u91cc\uff0c\u4e0eKratos\u5171\u540c\u8fd0\u4f5c\u3002"),(0,n.kt)("p",null,"\u56f4\u7ed5\u8fd9\u6837\u7684\u6838\u5fc3\u8bbe\u8ba1\u7406\u5ff5\uff0c\u6211\u4eec\u8bbe\u8ba1\u4e86\u5982\u4e0b\u7684\u9879\u76ee\u751f\u6001\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos"},"kratos")," Kratos\u6846\u67b6\u6838\u5fc3\uff0c\u4e3b\u8981\u5305\u542b\u4e86\u57fa\u7840\u7684CLI\u5de5\u5177\uff0c\u5185\u7f6e\u7684HTTP/gRPC\u63a5\u53e3\u751f\u6210\u548c\u670d\u52a1\u751f\u547d\u5468\u671f\u7ba1\u7406\uff0c\u63d0\u4f9b\u94fe\u8def\u8ffd\u8e2a\u3001\u914d\u7f6e\u6587\u4ef6\u3001\u65e5\u5fd7\u3001\u670d\u52a1\u53d1\u73b0\u3001\u76d1\u63a7\u7b49\u7ec4\u4ef6\u80fd\u529b\u548c\u76f8\u5173\u63a5\u53e3\u5b9a\u4e49\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib"},"contrib")," \u57fa\u4e8e\u4e0a\u8ff0\u6838\u5fc3\u5b9a\u4e49\u7684\u57fa\u7840\u63a5\u53e3\uff0c\u5bf9\u914d\u7f6e\u6587\u4ef6\u3001\u65e5\u5fd7\u3001\u670d\u52a1\u53d1\u73b0\u3001\u76d1\u63a7\u7b49\u670d\u52a1\u8fdb\u884c\u5177\u4f53\u5b9e\u73b0\u6240\u5f62\u6210\u7684\u4e00\u7cfb\u5217\u63d2\u4ef6\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5b83\u4eec\uff0c\u4e5f\u53ef\u4ee5\u53c2\u8003\u5b83\u4eec\u7684\u4ee3\u7801\uff0c\u505a\u60a8\u9700\u8981\u7684\u670d\u52a1\u7684\u9002\u914d\uff0c\u4ece\u800c\u96c6\u6210\u8fdbkratos\u9879\u76ee\u4e2d\u6765\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/aegis"},"aegis")," \u6211\u4eec\u5c06\u670d\u52a1\u53ef\u7528\u6027\u76f8\u5173\u7684\u7b97\u6cd5\uff1a\u5982\u9650\u6d41\u3001\u7194\u65ad\u7b49\u7b97\u6cd5\u653e\u5728\u4e86\u8fd9\u4e2a\u72ec\u7acb\u7684\u9879\u76ee\u91cc\uff0c\u51e0\u4e4e\u6ca1\u6709\u5916\u90e8\u4f9d\u8d56\uff0c\u5b83\u66f4\u4e0d\u4f9d\u8d56Kratos\uff0c\u60a8\u53ef\u4ee5\u5728\u76f4\u63a5\u5728\u4efb\u610f\u9879\u76ee\u4e2d\u4f7f\u7528\u3002\u60a8\u4e5f\u53ef\u4ee5\u8f7b\u677e\u5c06\u5b83\u96c6\u6210\u5230Kratos\u4e2d\u4f7f\u7528\uff0c\u63d0\u9ad8\u670d\u52a1\u7684\u53ef\u7528\u6027\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos-layout"},"layout")," \u6211\u4eec\u8bbe\u8ba1\u7684\u4e00\u4e2a\u9ed8\u8ba4\u7684\u9879\u76ee\u6a21\u677f\uff0c\u5b83\u5305\u542b\u4e00\u4e2a\u53c2\u8003\u4e86DDD\u548c\u7b80\u6d01\u67b6\u6784\u8bbe\u8ba1\u7684\u9879\u76ee\u7ed3\u6784\u3001Makefile\u811a\u672c\u548cDockerfile\u6587\u4ef6\u3002\u4f46\u8fd9\u4e2a\u9879\u76ee\u6a21\u677f\u4e0d\u662f\u5fc5\u9700\u7684\uff0c\u60a8\u53ef\u4ee5\u4efb\u610f\u4fee\u6539\u5b83\uff0c\u6216\u4f7f\u7528\u81ea\u5df1\u8bbe\u8ba1\u7684\u9879\u76ee\u7ed3\u6784\uff0cKratos\u4f9d\u7136\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u3002\u6846\u67b6\u672c\u8eab\u4e0d\u5bf9\u9879\u76ee\u7ed3\u6784\u505a\u4efb\u4f55\u5047\u8bbe\u548c\u9650\u5236\uff0c\u60a8\u53ef\u4ee5\u6309\u7167\u81ea\u5df1\u7684\u60f3\u6cd5\u6765\u4f7f\u7528\uff0c\u5177\u6709\u5f88\u5f3a\u7684\u53ef\u5b9a\u5236\u6027\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/gateway"},"gateway")," \u8fd9\u4e2a\u662f\u6211\u4eec\u521a\u521a\u8d77\u6b65\uff0c\u7528Go\u5f00\u53d1\u7684API Gateway\uff0c\u540e\u7eed\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u4f5c\u4e3a\u60a8Kratos\u5fae\u670d\u52a1\u7684\u7f51\u5173\uff0c\u7528\u4e8e\u5fae\u670d\u52a1API\u7684\u6cbb\u7406\uff0c\u9879\u76ee\u6b63\u5728\u65bd\u5de5\u4e2d\uff0c\u6b22\u8fce\u5173\u6ce8\u3002")),(0,n.kt)("h2",{id:"\u4ed3\u5e93\u6587\u6863\u548c\u793e\u533a"},"\u4ed3\u5e93\u3001\u6587\u6863\u548c\u793e\u533a"),(0,n.kt)("p",null,"GitHub\u4ed3\u5e93\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-kratos"},"https://github.com/go-kratos"),"\n\u6587\u6863\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://go-kratos.dev/"},"https://go-kratos.dev/"),"\n\u5fae\u4fe1\u7fa4\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/issues/682"},"go-kratos \u5b98\u65b9\u5fae\u4fe1\u7fa4"),"\nDiscord\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/invite/BWzJsUJ"},"go-kratos")),(0,n.kt)("h2",{id:"\u4e3a\u4ec0\u4e48v2\u5b8c\u5168\u91cd\u65b0\u8bbe\u8ba1"},"\u4e3a\u4ec0\u4e48v2\u5b8c\u5168\u91cd\u65b0\u8bbe\u8ba1"),(0,n.kt)("p",null,"\u4ee5\u524d\u5173\u6ce8\u8fc7kratos\u9879\u76ee\u7684\u53ef\u80fd\u77e5\u9053\uff0cKratos\u7684",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/tree/v1.0.x"},"v1"),"\u7248\u672c\u5df2\u7ecf\u5f00\u6e90\u4e86\u5f88\u4e45\uff0c\u4e5f\u662f\u4e2a\u8f83\u4e3a\u5b8c\u5584\u7684\u6846\u67b6\u3002\u90a3\u4e48\u4e3a\u4ec0\u4e48\u4e0d\u76f4\u63a5\u57fa\u4e8ev1\u7ee7\u7eed\u8fed\u4ee3\uff0c\u800c\u662f\u8981\u63a8\u5012\u91cd\u6765\uff0c\u63a8\u51fa\u5b8c\u5168\u91cd\u65b0\u8bbe\u8ba1\u7684v2\u5462\uff1f"),(0,n.kt)("p",null,"\u7ecf\u9a8c\u6e90\u81ea\u8e29\u5751\u3002"),(0,n.kt)("p",null,"\u5728\u4e1a\u52a1\u4e0d\u65ad\u8fed\u4ee3\u3001\u9879\u76ee\u4e0d\u65ad\u81a8\u80c0\u7684\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53d1\u73b0\uff0c\u8fc7\u53bb\u7684\u6846\u67b6\u548c\u9879\u76ee\u7ed3\u6784\u8bbe\u8ba1\uff0c\u5bfc\u81f4\u4ee3\u7801\u53d8\u66f4\u6210\u672c\u9010\u6e10\u5347\u9ad8\uff0c\u800c\u6ca1\u6709\u8fdb\u884c\u5408\u7406\u7684\u62bd\u8c61\uff0c\u5bfc\u81f4\u66f4\u96be\u8fdb\u884c\u6a21\u5757\u7684\u6d4b\u8bd5\uff0c\u4e5f\u66f4\u96be\u5bf9\u7b2c\u4e09\u65b9\u57fa\u7840\u5e93\u8fdb\u884c\u9002\u914d\u548c\u8fc1\u79fb\uff0c\u8fd9\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u62c9\u4f4e\u4e86\u751f\u4ea7\u529b\u3002"),(0,n.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u53c2\u8003\u4e86\u5927\u91cf\u7684DDD\u548cClean Architecture\u7b49\u4e1a\u754c\u5148\u8fdb\u8bbe\u8ba1\u7406\u5ff5\uff0c\u91cd\u65b0\u8bbe\u8ba1\u4e86\u5fae\u670d\u52a1\u7684\u9879\u76ee\u7ed3\u6784\uff0c\u5e76\u4e14\u8fd9\u4e2a\u7ed3\u6784\u968f\u7740\u6211\u4eec\u7684\u540e\u7eed\u7814\u7a76\uff0c\u4f1a\u8fdb\u4e00\u6b65\u8fdb\u884c\u8fed\u4ee3\uff0c\u8ba9\u5b83\u6210\u4e3a\u5fae\u670d\u52a1\u9879\u76ee\u7ed3\u6784\u7684\u6700\u4f73\u5b9e\u8df5\u3002"),(0,n.kt)("p",null,"\u6ca1\u9519\uff0c\u65b0\u7248\u672c\u7684\u662f\u4ecekratos-layout\u5f00\u59cb\u7684\u3002\u4e5f\u8bb8\u521a\u63a5\u89e6\u8fd9\u4e2a\u9879\u76ee\u7ed3\u6784\u65f6\u4f1a\u89c9\u5f97\u4e0d\u9002\u5e94\uff0c\u4f46\u968f\u7740\u9879\u76ee\u8fed\u4ee3\uff0c\u4ee3\u7801\u590d\u6742\u5ea6\u7684\u63d0\u9ad8\uff0c\u8fd9\u4e2a\u5b9a\u4e49\u826f\u597d\u7684\u7ed3\u6784\uff0c\u5c06\u4f7f\u9879\u76ee\u4fdd\u6301\u4f18\u79c0\u7684\u4ee3\u7801\u53ef\u8bfb\u6027\u3001\u53ef\u6d4b\u8bd5\u6027\uff0c\u4ee5\u53ca\u4ee4\u4eba\u6ee1\u610f\u7684\u5f00\u53d1\u6548\u7387\u548c\u53ef\u7ef4\u62a4\u6027\u3002"),(0,n.kt)("p",null,"\u66f4\u91cd\u8981\u7684\u4e00\u70b9\u662f\uff0c\u8fd9\u4e00\u6b21\u6211\u4eec\u60f3\u9762\u5411\u793e\u533a\u6765\u8bbe\u8ba1\u548c\u5f00\u53d1\u8fd9\u4e2a\u6846\u67b6\u3002\u8ba9\u66f4\u591a\u7684\u5f00\u53d1\u8005\u80fd\u591f\u4f7f\u7528\u6211\u4eec\u7684\u6846\u67b6\u6765\u63d0\u9ad8\u751f\u4ea7\u529b\uff0c\u540c\u65f6\u53c2\u4e0e\u5230\u6211\u4eec\u7684\u9879\u76ee\u4e2d\u6765\u3002"),(0,n.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u628a\u6574\u4e2a\u6846\u67b6\u8bbe\u8ba1\u6210\u4e3a\u4e00\u4e2a\u63d2\u5ea7\uff0c\u6211\u4eec\u5e0c\u671b\u6574\u4e2a\u6846\u67b6\u8f7b\u91cf\uff0c\u63d2\u4ef6\u5316\uff0c\u53ef\u5b9a\u5236\u3002\u5bf9\u4e8e\u51e0\u4e4e\u6bcf\u4e00\u4e2a\u5fae\u670d\u52a1\u76f8\u5173\u7684\u529f\u80fd\u6a21\u5757\uff0c\u6211\u4eec\u90fd\u8bbe\u8ba1\u4e86\u6807\u51c6\u5316\u63a5\u53e3\uff0c\u5bf9\u4e8e\u7b2c\u4e09\u65b9\u5e93\u8bbe\u8ba1\u4e3a\u63d2\u4ef6\uff0c\u8fd9\u6837\u5c31\u80fd\u8fc5\u901f\u628a\u4efb\u610f\u57fa\u7840\u8bbe\u65bd\u96c6\u6210\u5230\u4f7f\u7528Kratos\u7684\u9879\u76ee\u91cc\uff0c\u56e0\u6b64\uff0c\u65e0\u8bba\u60a8\u7684\u516c\u53f8\u4f7f\u7528\u4f55\u79cd\u57fa\u7840\u8bbe\u65bd\uff0c\u6709\u4f55\u79cd\u89c4\u8303\uff0c\u60a8\u90fd\u53ef\u4ee5\u8f7b\u677e\u5c06Kratos\u5b9a\u5236\u6210\u4e0e\u60a8\u7684\u5f00\u53d1\u3001\u751f\u4ea7\u73af\u5883\u76f8\u5339\u914d\u7684\u6837\u5b50\u3002"),(0,n.kt)("p",null,"\u4e0d\u7834\u4e0d\u7acb\uff0cv2\u662f\u4e00\u6b21\u4ece\u5185\u5230\u5916\u7684\u5f7b\u5e95\u9769\u65b0\uff0c\u6211\u4eec\u65e0\u6cd5\u5728\u65e7\u7248\u672c\u4e0a\u4fee\u4fee\u8865\u8865\uff0c\u800c\u662f\u9009\u62e9\u91cd\u65b0\u8bbe\u8ba1\u548c\u5f00\u53d1\u65b0\u7248\u672c\u3002\u800c\u76ee\u524dv2\u7248\u672c\u4e5f\u5df2\u7ecf\u5728\u5f88\u591a\u751f\u4ea7\u73af\u5883\u4f7f\u7528\uff0c\u6211\u4eec\u4e5f\u5c06\u6301\u7eed\u8fed\u4ee3\u548c\u5b8c\u5584\u8fd9\u4e2a\u6846\u67b6\uff0c\u540c\u65f6\u4e5f\u66f4\u6b22\u8fce\u5404\u4f4d\u5f00\u53d1\u8005\u53c2\u4e0e\u8fdb\u6765\uff0c\u4e00\u8d77\u8ba9\u5b83\u53d8\u5f97\u66f4\u597d\u3002"),(0,n.kt)("h2",{id:"\u6570\u636e\u5e93\u7f13\u5b58\u6d88\u606f\u961f\u5217"},"\u6570\u636e\u5e93/\u7f13\u5b58/\u6d88\u606f\u961f\u5217/..."),(0,n.kt)("p",null,"\u6b63\u5982\u524d\u6587\u63d0\u5230\u7684\uff0cKratos\u6846\u67b6\u4e0d\u9650\u5236\u60a8\u4f7f\u7528\u4efb\u4f55\u7b2c\u4e09\u65b9\u5e93\u6765\u8fdb\u884c\u9879\u76ee\u5f00\u53d1\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u6839\u636e\u559c\u597d\u6765\u9009\u62e9\u5e93\u8fdb\u884c\u96c6\u6210\u3002\u6211\u4eec\u4e5f\u4f1a\u9010\u6b65\u9488\u5bf9\u66f4\u591a\u88ab\u5e7f\u6cdb\u4f7f\u7528\u7684\u7b2c\u4e09\u65b9\u5e93\u5f00\u53d1\u63d2\u4ef6\u3002"),(0,n.kt)("p",null,"\u8fd9\u91cc\u7ed9\u51fa\u4e00\u4e9b\u88ab\u5e7f\u6cdb\u4f7f\u7528\u7684\u5e93\u4f9b\u53c2\u8003\uff1a"),(0,n.kt)("p",null,"\u6570\u636e\u5e93\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://pkg.go.dev/database/sql"},"database/sql")," \u5b98\u65b9\u5e93"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-gorm/gorm"},"gorm")," "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ent/ent"},"ent"))),(0,n.kt)("p",null,"\u7f13\u5b58\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-redis/redis"},"go-redis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gomodule/redigo"},"redigo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bradfitz/gomemcache"},"gomemcache"))),(0,n.kt)("p",null,"\u6d88\u606f\u961f\u5217\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Shopify/sarama"},"sarama")," kafka\u5ba2\u6237\u7aef"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/segmentio/kafka-go"},"kafka-go"))),(0,n.kt)("p",null,"\u5176\u5b83\u66f4\u591a\u7684\u4f18\u79c0go\u5e93\uff0c\u53ef\u4ee5\u5728",(0,n.kt)("a",{parentName:"p",href:"https://github.com/avelino/awesome-go"},"awesome-go"),"\u8fd9\u4e2a\u4ed3\u5e93\u4e2d\u627e\u627e\u3002"),(0,n.kt)("h2",{id:"cli\u5de5\u5177"},"CLI\u5de5\u5177"),(0,n.kt)("p",null,"kratos\u547d\u4ee4\u76ee\u524d\u4e3b\u8981\u7528\u4e8e\u4ece\u6a21\u677f\u521b\u5efa\u9879\u76ee\uff0c\u7ef4\u62a4\u4f9d\u8d56\u5305\u7248\u672c\u7b49\u3002\u5177\u4f53\u8bf7\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"https://go-kratos.dev/docs/getting-started/usage"},"\u6587\u6863")),(0,n.kt)("h2",{id:"protobuf\u5b9a\u4e49api"},"Protobuf\u5b9a\u4e49API"),(0,n.kt)("p",null,"Kratos\u4f7f\u7528Protobuf\u8fdb\u884cAPI\u5b9a\u4e49\u3002Protobuf\u662f\u7531Google\u5f00\u53d1\u7684\u4e00\u79cd\u8bed\u8a00\u4e2d\u7acb\u7684\u6570\u636e\u5e8f\u5217\u5316\u534f\u8bae\u3002\u5b83\u6709\u7ed3\u6784\u5b9a\u4e49\u6e05\u6670\u3001\u53ef\u6269\u5c55\u6027\u597d\u3001\u4f53\u79ef\u5c0f\u3001\u6027\u80fd\u4f18\u79c0\u7b49\u7279\u70b9\uff0c\u5728\u4f17\u591a\u516c\u53f8\u548c\u9879\u76ee\u88ab\u5e7f\u6cdb\u4f7f\u7528\u3002"),(0,n.kt)("p",null,"\u5728\u4f7f\u7528Kratos\u7684\u9879\u76ee\u4e2d\uff0c\u60a8\u5c06\u4f7f\u7528\u5982\u4e0b\u7684IDL\u8fdb\u884c\u60a8\u7684\u63a5\u53e3\u5b9a\u4e49\uff0c\u5e76\u4e14\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"protoc"),"\u5de5\u5177\u751f\u6210\u76f8\u5e94\u7684",(0,n.kt)("inlineCode",{parentName:"p"},".pb.go"),"\u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u542b\u6839\u636e\u5b9a\u4e49\u751f\u6210\u7684\u7684\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u4ee3\u7801\u3002\u968f\u540e\u60a8\u5c31\u53ef\u4ee5\u5728\u81ea\u5df1\u7684\u9879\u76ee\u5185\u90e8\u6ce8\u518c\u670d\u52a1\u7aef\u4ee3\u7801\u4f7f\u7528\uff0c\u6216\u5f15\u7528\u5ba2\u6237\u7aef\u4ee3\u7801\u8fdb\u884c\u8fdc\u7a0b\u8c03\u7528\u3002"),(0,n.kt)("p",null,"Kratos\u9ed8\u8ba4\u4ec5\u751f\u6210gRPC\u63a5\u53e3\u7684\u4ee3\u7801\uff0c\u5982\u679c\u9700\u8981\u751f\u6210HTTP\u4ee3\u7801\uff0c\u8bf7\u5728proto\u6587\u4ef6\u4e2d\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"option (google.api.http)"),"\u6765\u6dfb\u52a0HTTP\u90e8\u5206\u7684\u5b9a\u4e49\u540e\u518d\u8fdb\u884c\u751f\u6210\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHTTP\u63a5\u53e3\u5c06\u4f7f\u7528JSON\u4f5c\u4e3a\u5e8f\u5217\u5316\u683c\u5f0f\uff0c\u5982\u679c\u60f3\u4f7f\u7528\u5176\u5b83\u5e8f\u5217\u5316\u683c\u5f0f\uff08form\uff0cXML\u7b49\uff09\uff0c\u8bf7\u53c2\u8003\u6587\u6863",(0,n.kt)("a",{parentName:"p",href:"https://go-kratos.dev/docs/component/encoding"},"\u5e8f\u5217\u5316"),"\u8fdb\u884c\u76f8\u5e94\u7684\u914d\u7f6e\u5373\u53ef\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage helloworld.v1;\n\nimport "google/api/annotations.proto";\n\noption go_package = "github.com/go-kratos/kratos-layout/api/helloworld/v1;v1";\n\n// The greeting service definition.\nservice Greeter {\n  // Sends a greeting\n  rpc SayHello (HelloRequest) returns (HelloReply)  {\n        option (google.api.http) = {\n            get: "/helloworld/{name}"\n        };\n    }\n}\n\n// The request message containing the user\'s name.\nmessage HelloRequest {\n  string name = 1;\n}\n\n// The response message containing the greetings\nmessage HelloReply {\n  string message = 1;\n}\n')),(0,n.kt)("p",null,"\u9700\u8981\u6ce8\u610f\uff0c\u867d\u7136Protobuf\u5b9a\u4e49\u7684API\u7684\u53ef\u9760\u6027\u66f4\u5f3a\uff0c\u4f46\u5b57\u6bb5\u7ed3\u6784\u7075\u6d3b\u6027\u76f8\u5bf9JSON\u8981\u5f31\u4e00\u4e9b\uff0c\u56e0\u6b64\u5982\u679c\u60a8\u6709\u8bf8\u5982\u6587\u4ef6\u4e0a\u4f20\u63a5\u53e3\uff0c\u6216\u8005\u67d0\u4e9b\u65e0\u6cd5\u5bf9\u5e94\u5230proto\u7684JSON\u7ed3\u6784\u9700\u8981\u4f7f\u7528\uff0c\u6211\u95e8\u8fd8\u63d0\u4f9b\u4e86\u201c\u9003\u751f\u95e8\u201d\uff0c\u5728\u6211\u4eec\u7684Protobuf\u4f53\u7cfb\u4e4b\u5916\u5b9a\u4e49\u8fd9\u4e9b\u63a5\u53e3\uff0c\u5b9e\u73b0\u4e3a\u666e\u901a\u7684http.Handler\u5e76\u4e14\u6302\u8f7d\u5230\u8def\u7531\u4e0a\uff0c\u6216\u8005\u7528struct\u6765\u5b9a\u4e49\u60a8\u7684\u5b57\u6bb5\u3002\u53ef\u4ee5\u53c2\u8003\u6211\u4eec\u7684",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/main/examples/http/upload/main.go"},"upload\u4f8b\u5b50"),"\u8fdb\u884c\u5b9e\u73b0\u3002"),(0,n.kt)("h2",{id:"\u5143\u4fe1\u606f\u4f20\u9012"},"\u5143\u4fe1\u606f\u4f20\u9012"),(0,n.kt)("p",null,"\u670d\u52a1\u4e4b\u95f4\u7684API\u8c03\u7528\uff0c\u5982\u679c\u6709\u67d0\u4e9b\u5143\u4fe1\u606f\u9700\u8981\u4f20\u9012\u8fc7\u53bb\uff0c\u800c\u4e0d\u662f\u5199\u5728payload\u6d88\u606f\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528Metadata\u5305\u8fdb\u884c\u5b57\u6bb5\u8bbe\u7f6e\u548c\u63d0\u53d6\uff0c\u5177\u4f53\u7ec6\u8282\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"https://go-kratos.dev/docs/component/metadata"},"\u5143\u4fe1\u606f\u4f20\u9012\u6587\u6863")),(0,n.kt)("h2",{id:"\u9519\u8bef\u5904\u7406"},"\u9519\u8bef\u5904\u7406"),(0,n.kt)("p",null,"Kratos\u7684",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/tree/main/errors"},"errors"),"\u6a21\u5757\u63d0\u4f9b\u4e86error\u7684\u5c01\u88c5\u3002\u6846\u67b6\u4e5f\u9884\u5b9a\u4e49\u4e86\u4e00\u7cfb\u5217",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/main/errors/types.go"},"\u6807\u51c6\u9519\u8bef"),"\u4f9b\u4f7f\u7528\u3002"),(0,n.kt)("p",null,"\u9519\u8bef\u5904\u7406\u8fd9\u4e00\u5757\u7684\u8bbe\u8ba1\u4e5f\u7ecf\u8fc7\u4e86\u5f88\u4e45\u7684\u8ba8\u8bba\u624d\u5b9a\u4e0b\u6765\uff0c\u4e3b\u8981\u8bbe\u8ba1\u7406\u5ff5\u5982\u4e0b\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"code")," \u8bed\u4e49\u8fd1\u4f3cHTTP\u7684Status Code\uff08\u4f8b\u5982\u5ba2\u6237\u7aef\u4f20\u53c2\u6570\u9519\u8bef\u7528400\uff09\u540c\u65f6\u4e5f\u4f5c\u4e3a\u5927\u7c7b\u9519\u8bef\uff0c\u5728HTTP\u63a5\u53e3\u4e2d\u7684HTTP Code\u4f1a\u4f7f\u7528\u5b83\uff0c\u597d\u5904\u662f\u7f51\u5173\u5c42\u53ef\u4ee5\u6839\u636e\u8fd9\u4e2acode\u89e6\u53d1\u76f8\u5e94\u7b56\u7565\uff08\u91cd\u8bd5\u3001\u9650\u6d41\u3001\u7194\u65ad\u7b49\uff09\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"reason")," \u4e1a\u52a1\u7684\u5177\u4f53\u9519\u8bef\u7801\uff0c\u4e3a\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\uff0c\u80fd\u591f\u8868\u660e\uff0c\u5728\u540c\u4e00\u4e2a\u670d\u52a1\u4e2d\u5e94\u8be5\u552f\u4e00\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"message")," \u7528\u6237\u53ef\u8bfb\u7684\u4fe1\u606f\uff0c\u53ef\u4ee5\u5728\u5ba2\u6237\u7aef\uff08App\u3001\u6d4f\u89c8\u5668\u7b49\uff09\u8fdb\u884c\u76f8\u5e94\u7684\u5c55\u793a\u7ed9\u7528\u6237\u770b\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"metadata")," \u4e3a\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u8865\u5145\u4fe1\u606f\u4f7f\u7528\u3002")),(0,n.kt)("p",null,"\u5728API\u8fd4\u56de\u7684\u9519\u8bef\u4fe1\u606f\u4e2d\uff0c\u4ee5HTTP\u63a5\u53e3\u4e3a\u4f8b\uff0c\u6d88\u606f\u7ed3\u6784\u5927\u6982\u662f\u957f\u8fd9\u4e2a\u6837\u5b50\u7684\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // \u9519\u8bef\u7801\uff0c\u8ddf http-status \u4e00\u81f4\uff0c\u5e76\u4e14\u5728 grpc \u4e2d\u53ef\u4ee5\u8f6c\u6362\u6210 grpc-status\n    "code": 500,\n    // \u9519\u8bef\u539f\u56e0\uff0c\u5b9a\u4e49\u4e3a\u4e1a\u52a1\u5224\u5b9a\u9519\u8bef\u7801\n    "reason": "USER_NOT_FOUND",\n    // \u9519\u8bef\u4fe1\u606f\uff0c\u4e3a\u7528\u6237\u53ef\u8bfb\u7684\u4fe1\u606f\uff0c\u53ef\u4f5c\u4e3a\u7528\u6237\u63d0\u793a\u5185\u5bb9\n    "message": "invalid argument error",\n    // \u9519\u8bef\u5143\u4fe1\u606f\uff0c\u4e3a\u9519\u8bef\u6dfb\u52a0\u9644\u52a0\u53ef\u6269\u5c55\u4fe1\u606f\n    "metadata": {"some-key": "some-value"}\n}\n')),(0,n.kt)("p",null,"\u5728Kratos\u4e2d\u60a8\u53ef\u4ee5\u4f7f\u7528proto\u6587\u4ef6\u5b9a\u4e49\u60a8\u7684\u4e1a\u52a1\u9519\u8bef\uff0c\u5e76\u901a\u8fc7\u5de5\u5177\u751f\u6210\u5bf9\u5e94\u7684\u5904\u7406\u903b\u8f91\u548c\u65b9\u6cd5\u3002\uff08\u5982\u4f7f\u7528layout\u4e2d\u63d0\u4f9b\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"make errors"),"\u6307\u4ee4\u3002\uff09"),(0,n.kt)("p",null,"\u9519\u8bef\u5b9a\u4e49\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage api.blog.v1;\nimport "errors/errors.proto";\n\noption go_package = "github.com/go-kratos/kratos/examples/blog/api/v1;v1";\n\nenum ErrorReason {\n  // \u8bbe\u7f6e\u7f3a\u7701\u9519\u8bef\u7801\n  option (errors.default_code) = 500;\n  \n  // \u4e3a\u67d0\u4e2a\u679a\u4e3e\u5355\u72ec\u8bbe\u7f6e\u9519\u8bef\u7801\n  USER_NOT_FOUND = 0 [(errors.code) = 404];\n  CONTENT_MISSING = 1 [(errors.code) = 400];;\n}\n')),(0,n.kt)("p",null,"\u9519\u8bef\u521b\u5efa\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'// \u901a\u8fc7 errors.New() \u54cd\u5e94\u9519\u8bef\nerrors.New(500, "USER_NAME_EMPTY", "user name is empty")\n\n// \u901a\u8fc7 proto \u751f\u6210\u7684\u4ee3\u7801\u54cd\u5e94\u9519\u8bef\uff0c\u5e76\u4e14\u5305\u540d\u5e94\u66ff\u6362\u4e3a\u81ea\u5df1\u751f\u6210\u4ee3\u7801\u540e\u7684 package name\napi.ErrorUserNotFound("user %s not found", "kratos")\n\n// \u4f20\u9012metadata\nerr := errors.New(500, "USER_NAME_EMPTY", "user name is empty")\nerr = err.WithMetadata(map[string]string{\n    "foo": "bar",\n})\n')),(0,n.kt)("p",null,"\u9519\u8bef\u65ad\u8a00\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'err := wrong()\n\n// \u901a\u8fc7 errors.Is() \u65ad\u8a00\nif errors.Is(err,errors.BadRequest("USER_NAME_EMPTY","")) {\n    // do something\n}\n\n// \u901a\u8fc7\u5224\u65ad *Error.Reason \u548c *Error.Code\ne := errors.FromError(err)\nif  e.Reason == "USER_NAME_EMPTY" && e.Code == 500 {\n    // do something\n}\n\n// \u901a\u8fc7 proto \u751f\u6210\u7684\u4ee3\u7801\u65ad\u8a00\u9519\u8bef\uff0c\u5e76\u4e14\u5305\u540d\u5e94\u66ff\u6362\u4e3a\u81ea\u5df1\u751f\u6210\u4ee3\u7801\u540e\u7684 package name\nif api.IsUserNotFound(err) {\n        // do something\n})\n')),(0,n.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,n.kt)("p",null,"Kratos\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u63a5\u53e3\uff0c\u652f\u6301\u914d\u7f6e\u6587\u4ef6\u7684\u52a0\u8f7d\u548c\u53d8\u66f4\u8ba2\u9605\u3002"),(0,n.kt)("p",null,"\u901a\u8fc7\u5b9e\u73b0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/main/config/source.go"},"Source \u548c Watcher"),"\u5373\u53ef\u5b9e\u73b0\u4efb\u610f\u914d\u7f6e\u6e90\uff08\u672c\u5730\u6216\u8fdc\u7a0b\uff09\u7684\u914d\u7f6e\u6587\u4ef6\u52a0\u8f7d\u548c\u53d8\u66f4\u8ba2\u9605\u3002"),(0,n.kt)("p",null,"\u5df2\u7ecf\u5b9e\u73b0\u4e86\u4e0b\u5217\u63d2\u4ef6\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/blob/main/config/file/file.go"},"file")," \u672c\u5730\u6587\u4ef6\u52a0\u8f7d\uff0cKratos\u5185\u7f6e"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/config/apollo"},"apollo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/config/etcd"},"etcd")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/config/kubernetes"},"kubernetes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/config/nacos"},"nacos"))),(0,n.kt)("h2",{id:"\u670d\u52a1\u6ce8\u518c\u670d\u52a1\u53d1\u73b0"},"\u670d\u52a1\u6ce8\u518c&\u670d\u52a1\u53d1\u73b0"),(0,n.kt)("p",null,"Kratos\u5b9a\u4e49\u4e86\u7edf\u4e00\u7684\u6ce8\u518c\u63a5\u53e3\uff0c\u901a\u8fc7\u5b9e\u73b0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/main/registry/registry.go"},"Registrar\u548cDiscovery"),"\uff0c\u60a8\u53ef\u4ee5\u5f88\u8f7b\u677e\u5730\u5c06Kratos\u63a5\u5165\u5230\u60a8\u7684\u6ce8\u518c\u4e2d\u5fc3\u4e2d\u3002"),(0,n.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u6211\u4eec\u5df2\u7ecf\u5b9e\u73b0\u597d\u7684\u63d2\u4ef6\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/registry/consul"},"consul")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/registry/discovery"},"discovery")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/registry/etcd"},"etcd")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/registry/kubernetes"},"kubernetes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/registry/nacos"},"nacos")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/registry/zookeeper"},"zookeeper"))),(0,n.kt)("h2",{id:"\u65e5\u5fd7"},"\u65e5\u5fd7"),(0,n.kt)("p",null,"Kratos\u7684\u65e5\u5fd7\u6a21\u5757\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/blob/main/log/log.go"},"Logger"),"\uff1a\u5e95\u5c42\u65e5\u5fd7\u63a5\u53e3\uff0c\u7528\u4e8e\u5feb\u901f\u9002\u914d\u5404\u79cd\u65e5\u5fd7\u5e93\u5230\u6846\u67b6\u4e2d\u6765\uff0c\u4ec5\u63d0\u4f9b\u4e00\u4e2a\u6700\u7b80\u5355\u7684Log\u65b9\u6cd5\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/blob/main/log/helper.go"},"Helper"),"\uff1a\u9ad8\u7ea7\u65e5\u5fd7\u63a5\u53e3\uff0c\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u5e26\u6709\u65e5\u5fd7\u7b49\u7ea7\u548c\u683c\u5f0f\u5316\u65b9\u6cd5\u7684\u5e2e\u52a9\u51fd\u6570\uff0c\u901a\u5e38\u4e1a\u52a1\u903b\u8f91\u4e2d\u5efa\u8bae\u4f7f\u7528\u8fd9\u4e2a\uff0c\u80fd\u591f\u7b80\u5316\u65e5\u5fd7\u4ee3\u7801\u3002")),(0,n.kt)("p",null,"\u6211\u4eec\u5df2\u7ecf\u5b9e\u73b0\u597d\u7684\u63d2\u4ef6\u7528\u4e8e\u9002\u914d\u76ee\u524d\u4e00\u4e9b\u65e5\u5fd7\u5e93\uff0c\u60a8\u4e5f\u53ef\u4ee5\u53c2\u8003\u5b83\u4eec\u7684\u4ee3\u7801\u6765\u5b9e\u73b0\u81ea\u5df1\u9700\u8981\u7684\u65e5\u5fd7\u5e93\u7684\u9002\u914d\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/blob/main/log/std.go"},"std")," \u6807\u51c6\u8f93\u51fa\uff0cKratos\u5185\u7f6e"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/log/fluent"},"fluent")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/log/zap"},"zap"))),(0,n.kt)("h2",{id:"\u76d1\u63a7"},"\u76d1\u63a7"),(0,n.kt)("p",null,"\u76d1\u63a7\u544a\u8b66\u65b9\u9762\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/main/metrics/metrics.go"},"metrics\u76f8\u5173\u63a5\u53e3"),"\u5c06\u670d\u52a1\u7684\u7edf\u8ba1\u6570\u636e\u4e0a\u62a5\u7ed9\u76d1\u63a7\u5e73\u53f0\u3002"),(0,n.kt)("p",null,"\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u6211\u4eec\u5df2\u7ecf\u5b9e\u73b0\u597d\u7684\u63d2\u4ef6\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/metrics/datadog"},"datadog")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/go-kratos/kratos/tree/main/contrib/metrics/prometheus"},"prometheus"))),(0,n.kt)("h2",{id:"\u94fe\u8def\u8ffd\u8e2a"},"\u94fe\u8def\u8ffd\u8e2a"),(0,n.kt)("p",null,"Kratos\u4f7f\u7528",(0,n.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry"),"\u4f5c\u4e3a\u5206\u5e03\u5f0f\u94fe\u8def\u8ffd\u8e2a\u6240\u4f7f\u7528\u7684\u6807\u51c6\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5bf9client\u548cserver",(0,n.kt)("a",{parentName:"p",href:"https://go-kratos.dev/docs/component/middleware/tracing"},"\u914d\u7f6etracing"),"\u6765\u5c06\u670d\u52a1\u63a5\u5165\u5230\u94fe\u8def\u8ffd\u8e2a\u5e73\u53f0\uff08\u5982",(0,n.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"jaeger"),"\u7b49\uff09\uff0c\u4ece\u800c\u5bf9\u670d\u52a1\u7684\u63a5\u53e3\u8c03\u7528\u5173\u7cfb\uff0c\u8017\u65f6\uff0c\u9519\u8bef\u7b49\u8fdb\u884c\u8ffd\u8e2a\u3002"),(0,n.kt)("h2",{id:"\u8d1f\u8f7d\u5747\u8861"},"\u8d1f\u8f7d\u5747\u8861"),(0,n.kt)("p",null,"Kratos\u5185\u7f6e\u4e86\u82e5\u5e72\u79cd",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/tree/main/selector"},"\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5"),"\uff0c\u5982Weighted round robin\uff08\u9ed8\u8ba4\uff09\u3001P2C\uff0cRandom\u7b49\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,n.kt)("a",{parentName:"p",href:"https://go-kratos.dev/docs/component/selector"},"\u5728client\u521d\u59cb\u5316\u65f6\u914d\u7f6e"),"\u6765\u4f7f\u7528\u4ed6\u4eec\u3002"),(0,n.kt)("h2",{id:"\u9650\u6d41\u7194\u65ad"},"\u9650\u6d41\u7194\u65ad"),(0,n.kt)("p",null,"Kratos\u63d0\u4f9b\u4e86",(0,n.kt)("a",{parentName:"p",href:"https://go-kratos.dev/docs/component/middleware/ratelimit"},"\u9650\u6d41ratelimit"),"\u548c",(0,n.kt)("a",{parentName:"p",href:"https://go-kratos.dev/docs/component/middleware/circuitbreaker"},"\u7194\u65adcircuitbreaker"),"\u4e2d\u95f4\u4ef6\uff0c\u7528\u4e8e\u5fae\u670d\u52a1\u51fa\u73b0\u5f02\u5e38\u6545\u969c\u65f6\u81ea\u52a8\u5bf9\u6d41\u91cf\u8fdb\u884c\u9650\u5236\uff0c\u63d0\u5347\u670d\u52a1\u7684\u5065\u58ee\u6027\uff0c\u907f\u514d\u96ea\u5d29\u3002\u8fd9\u4e24\u4e2a\u4e2d\u95f4\u4ef6\u4f7f\u7528\u7684\u7b97\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u5728\u6211\u4eec\u7684\u53ef\u7528\u6027\u7b97\u6cd5\u4ed3\u5e93",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/aegis"},"aegis"),"\u4e2d\u627e\u5230\uff0c\u72ec\u7acb\u4e8eKratos\u76f4\u63a5\u4f7f\u7528\u3002"),(0,n.kt)("h2",{id:"\u4e2d\u95f4\u4ef6"},"\u4e2d\u95f4\u4ef6"),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7Kratos\u7684middleware\u673a\u5236\uff0c\u7edf\u4e00\u5fae\u670d\u52a1\u63a5\u53e3\u7684\u67d0\u4e9b\u5171\u540c\u903b\u8f91\u3002\u4e0a\u9762\u63d0\u5230\u7684\u529f\u80fd\u63d2\u4ef6\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5b9e\u73b0",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/main/middleware/middleware.go"},"Middleware"),"\u7f16\u5199Kratos\u80fd\u591f\u4f7f\u7528\u7684\u4e2d\u95f4\u4ef6\u3002"),(0,n.kt)("p",null,"\u540c\u65f6\u5728\u4ed3\u5e93\u7684",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/tree/main/middleware"},"middleware"),"\u76ee\u5f55\u4e0b\uff0c\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u4e2d\u95f4\u4ef6\u4f9b\u60a8\u4f7f\u7528\u3002"),(0,n.kt)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,n.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u63d0\u5230\u7684\u63d2\u4ef6\u5916\uff0c\u6211\u4eec\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5176\u5b83\u63d2\u4ef6\uff0c\u5b8c\u6574\u7684\u63d2\u4ef6\u5217\u8868\u8bf7\u53c2\u8003\u6587\u6863",(0,n.kt)("a",{parentName:"p",href:"https://go-kratos.dev/docs/getting-started/plugin"},"\u793e\u533a\u63d2\u4ef6")),(0,n.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u770b\u8fc7\u6587\u6863\u540e\uff0c\u5bf9\u67d0\u4e9b\u529f\u80fd\u7684\u4f7f\u7528\u4ecd\u6709\u7591\u60d1\uff0c\u6216\u8005\u662f\u5e0c\u671b\u5bfb\u627e\u4e00\u4e9b\u7528Kratos\u5199\u9879\u76ee\u7684\u7075\u611f\uff0c\u5728\u4ed3\u5e93\u7684",(0,n.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/tree/main/examples"},"examples"),"\u76ee\u5f55\u4e0b\u6211\u4eec\u63d0\u4f9b\u4e86\u5f88\u591a\u4ee3\u7801\u4f9b\u53c2\u8003\u3002"),(0,n.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6587\u6863\u4e2d\u7684",(0,n.kt)("a",{parentName:"p",href:"https://go-kratos.dev/docs/getting-started/examples"},"\u793a\u4f8b\u4ee3\u7801\u6e05\u5355"),"\u9875\u9762\u6765\u67e5\u9605\u6709\u54ea\u4e9b\u793a\u4f8b\u3002"))}u.isMDXComponent=!0}}]);