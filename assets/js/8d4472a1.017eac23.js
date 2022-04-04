"use strict";(self.webpackChunkbedework_guide=self.webpackChunkbedework_guide||[]).push([[90],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9232:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:6},s="Theme",c={unversionedId:"admin/theming",id:"admin/theming",title:"Theme",description:"Language settings / wording",source:"@site/docs/admin/theming.md",sourceDirName:"admin",slug:"/admin/theming",permalink:"/bedework-guide/docs/admin/theming",editUrl:"https://github.com/Nashville-Public-Library/bedework-guide/docs/admin/theming.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Clear Notifications",permalink:"/bedework-guide/docs/admin/notifications"},next:{title:"Add Topical Areas",permalink:"/bedework-guide/docs/admin/add-series"}},u={},d=[{value:"Language settings / wording",id:"language-settings--wording",level:2},{value:"Change the Featured Images",id:"change-the-featured-images",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"theme"},"Theme"),(0,i.kt)("h2",{id:"language-settings--wording"},"Language settings / wording"),(0,i.kt)("p",null,"To change wording / labels / longer text, go to: ",(0,i.kt)("inlineCode",{parentName:"p"},".../wwwDocRoot/3.10/calrsrc.MainCampus/default/strings.xsl")),(0,i.kt)("p",null,"Examples of what the strings file solves:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Find the correct place to change the text for \u201ctoday\u201d and \u201cupcoming\u201d (or \u201creset date\u201d and \u201cgrid view\u201d)"),(0,i.kt)("li",{parentName:"ul"},"Find the correct place to change the text ONGOING to EXHIBITS")),(0,i.kt)("p",null,"About the Bedework 3.10 theme files (where stuff lives)\nShare and Download icons for each event live in three places (I think, based on Bedework Vendor\u2019s feedback):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"widgetEventList.xsl"),(0,i.kt)("li",{parentName:"ul"},"events.xsl"),(0,i.kt)("li",{parentName:"ul"},"eventListRange.xsl")),(0,i.kt)("h2",{id:"change-the-featured-images"},"Change the Featured Images"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Cyberduck"),(0,i.kt)("li",{parentName:"ol"},"Double click on Bedework."),(0,i.kt)("li",{parentName:"ol"},"If an \u201cunknown host key\u201d or \u201cunknown fingerprint\u201d message appears, click Allow."),(0,i.kt)("li",{parentName:"ol"},"The file to update is ",(0,i.kt)("inlineCode",{parentName:"li"},"/opt/bedework/3.12/quickstart-latestVersion/bw-calendar-xsl/content/calrsrc.MainCampus/themes/nashville/featuredEvents.xsl"),"."),(0,i.kt)("li",{parentName:"ol"},"Once updated, you need to type this in the browser to activate it:  ",(0,i.kt)("a",{parentName:"li",href:"https://events.library.nashville.org/cal/main/showEventList.rdo?refreshXslt=yes"},"https://events.library.nashville.org/cal/main/showEventList.rdo?refreshXslt=yes"))))}m.isMDXComponent=!0}}]);