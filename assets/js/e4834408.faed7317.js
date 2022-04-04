"use strict";(self.webpackChunkbedework_guide=self.webpackChunkbedework_guide||[]).push([[953],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,h=c["".concat(u,".").concat(m)]||c[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4421:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={sidebar_position:9},u="Pixie Dust",d={unversionedId:"admin/pixie-dust",id:"admin/pixie-dust",title:"Pixie Dust",description:"Pixie Dust output lives here//events.library.nashville.org/3.10/pixieDust",source:"@site/docs/admin/pixie-dust.md",sourceDirName:"admin",slug:"/admin/pixie-dust",permalink:"/bedework-guide/docs/admin/pixie-dust",editUrl:"https://github.com/Nashville-Public-Library/bedework-guide/docs/admin/pixie-dust.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/bedework-guide/docs/admin/troubleshooting"}},s={},p=[{value:"Update Pixie Dust to new Quarter",id:"update-pixie-dust-to-new-quarter",level:2},{value:"Get to the right place as the right user",id:"get-to-the-right-place-as-the-right-user",level:3},{value:"Update scheduled job",id:"update-scheduled-job",level:3},{value:"Update data collection area",id:"update-data-collection-area",level:3}],c={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pixie-dust"},"Pixie Dust"),(0,i.kt)("p",null,"Pixie Dust output lives here: ",(0,i.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/3.10/pixieDust"},"https://events.library.nashville.org/3.10/pixieDust")),(0,i.kt)("p",null,"If you click on any of the files, it'll probably dump the results right in your browser window. Then you can do a save-as or a copy/paste to capture the contents."),(0,i.kt)("p",null,"How it works:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On the server, there is a family of scripts that cooperate to produce the results in /home/bedework/scripts/pixieDust. There's a Read.me text file in there which explains how everything works."),(0,i.kt)("li",{parentName:"ul"},"The whole process is driven by runall.sh in that directory. In takes two arguments -- start date and end date. It then loops through all the branches and dumps the results in the folder that corresponds to the above url."),(0,i.kt)("li",{parentName:"ul"},"Results are dumped into categories (below):"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"==Could not place. Missing Date and Time information==")," (lists events that could not be placed in one of the extract categories - something needs to be fixed in Bedework)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"==Every Day==")," (must have \u201cEvery Day\u201d in recurrence pattern field)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"==Monday== "),"(\u201cMonday\u201d or \u201cMondays\u201d must appear in the recurrence pattern field)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"==Tuesday==")," (\u201cTuesday\u201d or \u201cTuesdays\u201d must appear in the recurrence pattern field)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"==Wednesday==")," ( \u201cWednesday\u201d or \u201cWednesdays\u201d must appear in the recurrence pattern field)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"==Thursday==")," (\u201cThursday\u201d or \u201cThursdays\u201d must appear in the recurrence pattern field)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"==Friday==")," (\u201cFriday\u201d or \u201cFridays\u201d must appear in the recurrence pattern field)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"==Saturday==")," (\u201cSaturday\u201d or \u201cSaturdays\u201d must appear in the recurrence pattern field)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"==Sunday==")," (\u201cSunday\u201d or \u201cSundays\u201d must appear in the recurrence pattern field)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"==Others==")," (lists non-recurring events in date order)")),(0,i.kt)("h2",{id:"update-pixie-dust-to-new-quarter"},"Update Pixie Dust to new Quarter"),(0,i.kt)("h3",{id:"get-to-the-right-place-as-the-right-user"},"Get to the right place as the right user"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ssh")," into events ##.##.##.## steven ##.##.##.##"),(0,i.kt)("li",{parentName:"ol"},'Assume "bedework" identity: ',(0,i.kt)("inlineCode",{parentName:"li"},"sudo su - bedework")),(0,i.kt)("li",{parentName:"ol"},"Enter your password when prompted.")),(0,i.kt)("h3",{id:"update-scheduled-job"},"Update scheduled job"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Dump the current crontab into a backup file (and into a file you'll edit): ",(0,i.kt)("inlineCode",{parentName:"li"},"crontab -l > ~/crontab-yyyy.mm.dd")),(0,i.kt)("li",{parentName:"ol"},"Edit that file any way you can. If you don't know a UNIX editor, you can pull it back to your Workstation and edit there, then push the updated file back to the server.  Edit the last line, changing the two yyyymmdd dates to the new range.  Be sure to keep the closing paran at the end of the line."),(0,i.kt)("li",{parentName:"ol"},"Install the crontab: ",(0,i.kt)("inlineCode",{parentName:"li"},"crontab < crontab-yyyy.mm.dd")," accidentally mangled the file while editing, the system may complain that the file is invalid and refuse to install it."),(0,i.kt)("li",{parentName:"ol"},"Test update: ",(0,i.kt)("inlineCode",{parentName:"li"},"crontab -l."),"  You should see your updates in the terminal window.")),(0,i.kt)("p",null,"Current PixieDust is updated automatically at 00:00, 08:00, 11:00, 14:00, 17:00"),(0,i.kt)("h3",{id:"update-data-collection-area"},"Update data collection area"),(0,i.kt)("p",null,"Clear out old archive:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"cd ~/wwwDocRoot/pixieDust/LastQuarter")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"rm *"))),(0,i.kt)("p",null,"Move everything in PixieDust into archive:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"cd ..")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"mv *-* LastQuarter")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ls"),"  -- to check contents of PixieDust. Should now be empty except for LastQuarter subdirectory."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ls LastQuarter"),"  -- to check contents of LastQuarter. Should have all the files that were up in PixieDust directory.")))}m.isMDXComponent=!0}}]);