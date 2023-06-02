"use strict";(self.webpackChunkbedework_guide=self.webpackChunkbedework_guide||[]).push([[736],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),v=r,f=p["".concat(d,".").concat(v)]||p[v]||u[v]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8662:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:2},d="Cancel or Reschedule",s={unversionedId:"admin/cancel",id:"admin/cancel",title:"Cancel or Reschedule",description:"When event is sooner than two weeks, mark events canceled instead of deleting them. If event more than two weeks out, delete the listing. After you've made a change to calendar, email the requestor, and copy Bedework calendar administrator.",source:"@site/docs/admin/cancel.md",sourceDirName:"admin",slug:"/admin/cancel",permalink:"/bedework-guide/docs/admin/cancel",editUrl:"https://github.com/Nashville-Public-Library/bedework-guide/docs/admin/cancel.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Adding a Topical Area",permalink:"/bedework-guide/docs/admin/add-series"},next:{title:"Users and Passwords",permalink:"/bedework-guide/docs/admin/passwords"}},c={},u=[{value:"Canceling Events",id:"canceling-events",level:2},{value:"Deleting Events",id:"deleting-events",level:2},{value:"Rescheduled Events",id:"rescheduled-events",level:2},{value:"Extended Closure",id:"extended-closure",level:2},{value:"Cancel or Update",id:"cancel-or-update",level:2}],p={toc:u};function v(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cancel-or-reschedule"},"Cancel or Reschedule"),(0,l.kt)("p",null,"When event is sooner than two weeks, mark events canceled instead of deleting them. If event more than two weeks out, delete the listing. After you've made a change to calendar, email the requestor, and copy Bedework calendar administrator."),(0,l.kt)("h2",{id:"canceling-events"},"Canceling Events"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Select \u201ccanceled\u201d radio button."),(0,l.kt)("li",{parentName:"ul"},"Replace description with \u201cThis event is canceled\u201d or some other brief explanation.")),(0,l.kt)("h2",{id:"deleting-events"},"Deleting Events"),(0,l.kt)("p",null,"Delete events from the calendar if:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Duplicate entries - If an event listing is a duplicate, delete the extra instance."),(0,l.kt)("li",{parentName:"ul"},"Holidays / Closed Days"),(0,l.kt)("li",{parentName:"ul"},"Approving events - Approvers should delete all event listings that fall on holidays / closed days before approving.")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Do not")," delete an event if:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Event canceled, event publicized in print. Instead, mark the event canceled."),(0,l.kt)("li",{parentName:"ul"},"Event occurs in less than two weeks."),(0,l.kt)("li",{parentName:"ul"},"Closed day. - Even if the event falls on a holiday, if the event is published in print, leave the event in the calendar, and mark it canceled.")),(0,l.kt)("h2",{id:"rescheduled-events"},"Rescheduled Events"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If event was canceled and has been rescheduled, leave the original marked canceled. Create a new event, and note the new date/time in the description of the original.")),(0,l.kt)("h2",{id:"extended-closure"},"Extended Closure"),(0,l.kt)("p",null,"During the period when we are NOT offering any in-person events, we will do the following:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Delete in-person events from Bedework for the affected period. We will no longer mark these as canceled."),(0,l.kt)("li",{parentName:"ol"},"Add a single event to Bedework for each affected day. Event title will be \u201cCANCELED: In-Person Library Events Canceled\u201d"),(0,l.kt)("li",{parentName:"ol"},"Add virtual event offerings to Bedework. Staff should follow event listing guidelines that have been newly-added to NPL Style Guide and Bedework User Manual.\nDuring the period when we offer both in-person AND streaming events, we will do the following:"),(0,l.kt)("li",{parentName:"ol"},"Mark canceled in-person events in Bedework as \u201ccanceled.\u201d"),(0,l.kt)("li",{parentName:"ol"},"When canceling an event, put \u201cCanceled:\u201d at the start of the event title. This will ensure that patrons looking at calendar widgets will see that an event is canceled.")),(0,l.kt)("h2",{id:"cancel-or-update"},"Cancel or Update"),(0,l.kt)("p",null,"When do we mark an event canceled vs just updating the existing event listing with new info? No different than usual."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Room Change: If an event moves from in-person to online and date/time is the same, we\u2019ll update the existing event listing to add virtual event details so patrons can connect. Essentially, the \u201croom\u201d changed from IN to Facebook. For this to work, we need \u201conline\u201d or \u201cvirtual\u201d somewhere in the title."),(0,l.kt)("li",{parentName:"ul"},"Canceled: If the event is totally canceled and isn\u2019t just moving online, we\u2019ll mark the event canceled, or delete."),(0,l.kt)("li",{parentName:"ul"},"Time Change Only: If an event moves from in-person to online and the date is the same but the time changes, we update the existing event listing with new info."),(0,l.kt)("li",{parentName:"ul"},"Date Change (or Date/Time both change): If an event moves to a different dayIf an event moves from in-person to online and the date/time is different (or event moves to a different time or day).")))}v.isMDXComponent=!0}}]);