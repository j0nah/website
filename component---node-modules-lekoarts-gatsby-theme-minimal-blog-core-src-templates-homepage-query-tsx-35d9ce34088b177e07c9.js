"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[366],{8556:function(e,t,n){n.r(t),n.d(t,{Head:function(){return w},default:function(){return y}});var a=n(7294),r=n(8733),o=n(1883),l=n(6920),i=n(5221),s=n(4372);var c=e=>{let{children:t}=e;return(0,r.tZ)("section",{sx:{mb:[5,5,6],ul:{margin:0,padding:0},li:{listStyle:"none",mb:3,a:{variant:"links.listItem"}},variant:"section_bottom"}},t)},m=n(3494),u=n(4232),p=n(9706),g=n(8170),d=n(8871),h=n(1151);function E(e){const t=Object.assign({p:"p"},(0,h.ah)(),e.components),{Text:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Text",!0),a.createElement(a.Fragment,null,a.createElement(n,{children:"Hi.",sx:{fontSize:[4,5,6],fontWeight:"bold",color:"heading"}}),"\n",a.createElement(t.p,null,"I'm Jonah. I am an engineering manager who still likes to code in his free time. This blog is to save me some googles and maybe save you some googles too."))}var f=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,h.ah)(),e.components);return t?a.createElement(t,e,a.createElement(E,e)):E(e)};function Z(e){const t=Object.assign({ul:"ul",li:"li",a:"a"},(0,h.ah)(),e.components),{Title:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Title",!0),a.createElement(a.Fragment,null,a.createElement(n,{text:"Projects"}),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://www.brandbuilder.domains"},"Domain Name Generation with OpenAI")),"\n"))}var b=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,h.ah)(),e.components);return t?a.createElement(t,e,a.createElement(Z,e)):Z(e)};var v=e=>{let{posts:t}=e;const{basePath:n,blogPath:a}=(0,m.Z)(),{siteTitle:d}=(0,u.Z)();return(0,r.tZ)(l.Z,null,(0,r.tZ)("h1",{sx:g.j},d),(0,r.tZ)("section",{sx:{mb:[5,6,7],p:{fontSize:[1,2,3],mt:2},variant:"section_hero"}},(0,r.tZ)(f,null)),(0,r.tZ)(i.Z,{text:"Latest Posts"},(0,r.tZ)(o.Link,{to:(0,p.Z)("/"+n+"/"+a)},"Read all posts")),(0,r.tZ)(s.Z,{posts:t,showTags:!1}),(0,r.tZ)(c,null,(0,r.tZ)(b,null)))};const w=()=>(0,r.tZ)(d.Z,null);var y=function(e){let{...t}=e;const{data:{allPost:n}}=t;return a.createElement(v,Object.assign({posts:n.nodes},t))}},6799:function(e,t,n){var a=n(8733),r=n(7294),o=n(1883),l=n(3494),i=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:s}=(0,l.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(o.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.Z)("/"+s+"/"+n+"/"+e.slug)},e.name)))))}},4372:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(8733),r=n(7294),o=n(795),l=n(1883),i=n(6799);var s=e=>{let{post:t,showTags:n=!0}=e;return(0,a.tZ)(o.xu,{mb:4},(0,a.tZ)(l.Link,{to:t.slug,sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a,fontSize:[1,2,3],color:"text"}}},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&n&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(i.Z,{tags:t.tags}))))};var c=e=>{let{posts:t,className:n="",showTags:r=!0}=e;return(0,a.tZ)("section",{sx:{mb:[5,6,7]},className:n},t.map((e=>(0,a.tZ)(s,{key:e.slug,post:e,showTags:r}))))}},8871:function(e,t,n){var a=n(7294),r=n(1883),o=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:l="",image:i="",children:s=null,canonicalUrl:c=""}=e;const m=(0,o.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:d,siteImage:h,author:E,siteLanguage:f}=m,Z={title:t?t+" | "+u:p,description:n||d,url:""+g+(l||""),image:""+g+(i||h)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:f}),a.createElement("title",null,Z.title),a.createElement("meta",{name:"description",content:Z.description}),a.createElement("meta",{name:"image",content:Z.image}),a.createElement("meta",{property:"og:title",content:Z.title}),a.createElement("meta",{property:"og:url",content:Z.url}),a.createElement("meta",{property:"og:description",content:Z.description}),a.createElement("meta",{property:"og:image",content:Z.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:Z.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:Z.title}),a.createElement("meta",{name:"twitter:url",content:Z.url}),a.createElement("meta",{name:"twitter:description",content:Z.description}),a.createElement("meta",{name:"twitter:image",content:Z.image}),a.createElement("meta",{name:"twitter:image:alt",content:Z.description}),a.createElement("meta",{name:"twitter:creator",content:E}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),c?a.createElement("link",{rel:"canonical",href:c}):null,s)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-35d9ce34088b177e07c9.js.map