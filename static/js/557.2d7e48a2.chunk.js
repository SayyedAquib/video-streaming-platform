"use strict";(self.webpackChunkyoutube_clone=self.webpackChunkyoutube_clone||[]).push([[557],{557:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var l=n(4165),s=n(5861),i=n(9439),r=n(2791),a=n(9434),o=n(1087),d=n(8499),c=n(3585),u=n(184);function v(e){return new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}var m=function(e){var t,n,l,s,i,r,a,o,d,c,m,x,p=e.data;return(0,u.jsxs)("div",{className:"flex shadow-sm dark:bg-gray-800 text-white ml-4 p-4 rounded-lg my-4 w-[950px]",children:[(0,u.jsx)("div",{className:"w-12 h-12 mr-4",children:(0,u.jsx)("img",{className:"object-cover rounded-full",src:null===p||void 0===p||null===(t=p.snippet)||void 0===t||null===(n=t.topLevelComment)||void 0===n||null===(l=n.snippet)||void 0===l?void 0:l.authorProfileImageUrl,alt:"User Profile"})}),(0,u.jsxs)("div",{className:"flex-1",children:[(0,u.jsxs)("div",{className:"flex items-center mb-2",children:[(0,u.jsx)("p",{className:"font-bold text-lg mr-2 dark:text-gray-300 text-black",children:null===p||void 0===p||null===(s=p.snippet)||void 0===s||null===(i=s.topLevelComment)||void 0===i||null===(r=i.snippet)||void 0===r?void 0:r.authorDisplayName}),(0,u.jsx)("span",{className:"text-sm dark:text-gray-500 text-gray-600",children:v(null===p||void 0===p||null===(a=p.snippet)||void 0===a||null===(o=a.topLevelComment)||void 0===o||null===(d=o.snippet)||void 0===d?void 0:d.publishedAt)})]}),(0,u.jsx)("p",{className:"dark:text-gray-300 text-gray-800 line-clamp-2",children:null===p||void 0===p||null===(c=p.snippet)||void 0===c||null===(m=c.topLevelComment)||void 0===m||null===(x=m.snippet)||void 0===x?void 0:x.textDisplay})]})]})};var x=function(e){var t=e.videoId,n=(0,r.useState)([]),a=(0,i.Z)(n,2),o=a[0],d=a[1];(0,r.useEffect)((function(){v()}),[]);var v=function(){var e=(0,s.Z)((0,l.Z)().mark((function e(){var n,s;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(c.TA+t);case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,d(s.items);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.jsxs)("div",{children:[(0,u.jsxs)("h1",{className:"font-bold text-xl ml-5",children:[o.length," Comments "]}),o.map((function(e){return(0,u.jsx)(m,{data:e},e.id)}))]})};var p=function(e){var t,n=e.info;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(o.rU,{to:"/watch?v="+(null===n||void 0===n?void 0:n.videoId),children:(0,u.jsxs)("div",{className:"my-2 w-full shadow-lg rounded-lg p-1 flex",children:[(0,u.jsx)("img",{className:"rounded-lg object-contain",alt:"thumbnail",src:null===n||void 0===n||null===(t=n.thumbnail[0])||void 0===t?void 0:t.url}),(0,u.jsxs)("ul",{className:"mx-2",children:[(0,u.jsx)("li",{className:"font-bold text-sm line-clamp-2 mb-2",children:null===n||void 0===n?void 0:n.title}),(0,u.jsx)("li",{className:"text-gray-500 text-sm ",children:null===n||void 0===n?void 0:n.channelTitle}),(0,u.jsxs)("li",{className:"text-gray-500 text-sm ",children:[null===n||void 0===n?void 0:n.viewCount," views | ",null===n||void 0===n?void 0:n.publishedTimeText]})]})]})})})};var h=function(){var e=(0,o.lr)(),t=(0,i.Z)(e,1)[0],n=(0,r.useState)([]),a=(0,i.Z)(n,2),d=a[0],c=a[1],v=t.get("v");(0,r.useEffect)((function(){m()}),[]);var m=function(){var e=(0,s.Z)((0,l.Z)().mark((function e(){var t,n,s,i;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://yt-api.p.rapidapi.com/related?id="+v,n={method:"GET",headers:{"X-RapidAPI-Key":"0da373d051msh8d50bc31e9973dfp13a316jsn6e0ef3194b93","X-RapidAPI-Host":"yt-api.p.rapidapi.com"}},e.prev=2,e.next=5,fetch(t,n);case 5:return s=e.sent,e.next=8,s.json();case 8:i=e.sent,c(i.data),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return(0,u.jsx)("div",{children:d.map((function(e){return(0,u.jsx)(p,{info:e},e.videoId)}))})},f=function(){var e,t,n,v,m,p,f,j,w,g,b,y,N,k,Z=(0,o.lr)(),C=(0,i.Z)(Z,1)[0],L=(0,r.useState)(""),I=(0,i.Z)(L,2),T=I[0],A=I[1],S=(0,a.I0)();(0,r.useEffect)((function(){S((0,d.Wj)()),D()}),[]);var D=function(){var e=(0,s.Z)((0,l.Z)().mark((function e(){var t,n;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(c.Ac+C.get("v")+c.BO);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n.items),A(n.items);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.jsxs)("div",{className:"flex ml-16 w-full mt-16",children:[(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"m-5 max-w-[950px] mx-auto",children:[(0,u.jsx)("div",{className:"rounded-lg overflow-hidden",children:(0,u.jsx)("iframe",{className:"w-full h-64 md:h-96",src:"https://www.youtube.com/embed/".concat(C.get("v")),title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),(0,u.jsxs)("div",{className:"mt-4",children:[(0,u.jsx)("p",{className:"font-bold text-xl line-clamp-2 my-2",children:null===(e=T[0])||void 0===e||null===(t=e.snippet)||void 0===t?void 0:t.title}),(0,u.jsxs)("div",{className:"flex mb-2 justify-between",children:[(0,u.jsxs)("div",{className:"flex",children:[(0,u.jsx)("p",{className:"text-lg text-gray-600 my-2 mr-2",children:null===(n=T[0])||void 0===n||null===(v=n.snippet)||void 0===v?void 0:v.channelTitle}),(0,u.jsx)("button",{className:"bg-red-500 text-white px-4 py-2 rounded-full",children:"Subscribe"})]}),(0,u.jsxs)("div",{className:"flex items-center my-2",children:[(0,u.jsxs)("button",{className:"mr-2 flex items-center text-gray-600",children:[(0,u.jsx)("svg",{className:"w-5 h-5 mr-1 text-blue-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}),null===(m=T[0])||void 0===m||null===(p=m.statistics)||void 0===p?void 0:p.likeCount]}),(0,u.jsxs)("button",{className:"mr-2 flex items-center text-gray-600",children:[(0,u.jsx)("svg",{className:"w-5 h-5 mr-1 text-red-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 6l12 12M6 18L18 6"})}),null===(f=T[0])||void 0===f||null===(j=f.statistics)||void 0===j?void 0:j.dislikeCount]})]})]}),(0,u.jsxs)("div",{className:"p-3 bg-gray-100 rounded-lg",children:[(0,u.jsxs)("span",{className:"mr-2 font-bold",children:[null===(w=T[0])||void 0===w||null===(g=w.statistics)||void 0===g?void 0:g.viewCount," views"]}),(0,u.jsx)("span",{children:null===(b=T[0])||void 0===b||null===(y=b.snippet)||void 0===y?void 0:y.publishedAt}),(0,u.jsx)("p",{className:"line-clamp-3 text-sm",children:null===(N=T[0])||void 0===N||null===(k=N.snippet)||void 0===k?void 0:k.description})]})]})]}),(0,u.jsx)(x,{videoId:C.get("v")})]}),(0,u.jsx)(h,{})]})}}}]);
//# sourceMappingURL=557.2d7e48a2.chunk.js.map