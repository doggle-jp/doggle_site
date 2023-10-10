"use strict";(self.webpackChunkrubydog=self.webpackChunkrubydog||[]).push([[365],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(t),b=o,f=m["".concat(s,".").concat(b)]||m[b]||l[b]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9784:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={sidebar_position:2},i="zsh",c={unversionedId:"memo/zsh",id:"memo/zsh",title:"zsh",description:"- .zshrc",source:"@site/tab_about/memo/zsh.md",sourceDirName:"memo",slug:"/memo/zsh",permalink:"/rubydog-site/en/about/memo/zsh",draft:!1,editUrl:"https://github.com/rubydog-jp/tab_about/memo/zsh.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"VSCode\u306e\u8a2d\u5b9a",permalink:"/rubydog-site/en/about/memo/vscode-settings"},next:{title:"Mac\u306e\u8a2d\u5b9a",permalink:"/rubydog-site/en/about/memo/mac-settings"}},s={},u=[],p={toc:u};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zsh"},"zsh"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},".zshrc")),(0,o.kt)("p",null,"$ open ~/.zshrc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-.zshrc"},'# Last Login \u8868\u793a\u3092\u6d88\u3059\n# touch .hushlogin\n# \u30bf\u30fc\u30df\u30ca\u30eb\u306e\u5de6\u5074\u3092\u3059\u3063\u304d\u308a\nexport PS1="%c $ "\n\n#\n# CUSTOM ENV\n#\n\nexport MAIN=$HOME/main\nexport SRC=$MAIN/src\n\n#\n# TOOL ENV\n#\n\nexport DENO_INSTALL="$HOME/.deno"\n\n#\n# PATH\n#\n\n# Flutter\nexport PATH=$PATH:$HOME/dev/flutter/bin\nexport PATH=$PATH:$HOME/dev/flutter/.pub-cache/bin\nexport PATH=$PATH:$HOME/.pub-cache/bin\n# Deno\nexport PATH=$PATH:$DENO_INSTALL/bin\n# node.js\nexport PATH=$PATH:$HOME/.nodebrew/current/bin\n# Rust\nexport PATH="$HOME/.cargo/bin:$PATH"\n\n#\n# functions\n#\n\n# src \u30d5\u30a9\u30eb\u30c0\u4e0a\u306b\u3044\u306a\u3051\u308c\u3070\u305d\u3053\u306b\u79fb\u52d5\nfunction cd_src () {\n  if [[ "$PWD" =~ "$MAIN/src" ]]; then\n    # DO NOTHING\n  else\n    cd $SRC\n  fi\n}\n\n# \u30ed\u30b0\u30a4\u30f3\u6642\u306b\u5b9f\u884c\ncd_src\n')))}l.isMDXComponent=!0}}]);