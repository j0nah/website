"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[587],{4765:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return g}});var a=n(7294),l=n(8733),r=n(795),i=n(6920),o=n(6799),s=n(8871);var c=e=>{let{post:t}=e;return null};const m=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,l.tZ)(i.Z,null,(0,l.tZ)(r.X6,{as:"h1",variant:"styles.h1"},t.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,t.date),t.tags&&(0,l.tZ)(a.Fragment,null," — ",(0,l.tZ)(o.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,l.tZ)("span",null,t.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:m.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,l.tZ)(c,{post:t}))};const u=e=>{var t,n,a;let{data:{post:r}}=e;return(0,l.tZ)(s.Z,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(t=r.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})};function g(e){let{...t}=e;return a.createElement(p,t)}},6799:function(e,t,n){var a=n(8733),l=n(7294),r=n(1883),i=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:s}=(0,i.Z)();return(0,a.tZ)(l.Fragment,null,t.map(((e,t)=>(0,a.tZ)(l.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(r.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+s+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var a=n(7294),l=n(1883),r=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:o="",children:s=null,canonicalUrl:c=""}=e;const m=(0,r.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:g,siteDescription:h,siteImage:d,author:E,siteLanguage:f}=m,y={title:t?t+" | "+p:u,description:n||h,url:""+g+(i||""),image:""+g+(o||d)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:f}),a.createElement("title",null,y.title),a.createElement("meta",{name:"description",content:y.description}),a.createElement("meta",{name:"image",content:y.image}),a.createElement("meta",{property:"og:title",content:y.title}),a.createElement("meta",{property:"og:url",content:y.url}),a.createElement("meta",{property:"og:description",content:y.description}),a.createElement("meta",{property:"og:image",content:y.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:y.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:y.title}),a.createElement("meta",{name:"twitter:url",content:y.url}),a.createElement("meta",{name:"twitter:description",content:y.description}),a.createElement("meta",{name:"twitter:image",content:y.image}),a.createElement("meta",{name:"twitter:image:alt",content:y.description}),a.createElement("meta",{name:"twitter:creator",content:E}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),c?a.createElement("link",{rel:"canonical",href:c}):null,s)}},8462:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return s}});var a=n(7294),l=n(1151);function r(e){const t=Object.assign({p:"p",span:"span",h2:"h2",code:"code",pre:"pre",a:"a"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"I am deploying Django applications to production for the first time with EBS and running into a host of challenges that keep giving me this lovely unhelpful error in the AWS console."),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 370px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 35%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA3ElEQVR42q2PTU/CQBRF+f+/w4U7N+7cSNIooFRBMTDTYpGoVE2/cNpaOj1Oh4hxbV9yX+57i5N7e3Q8vbqukf4j45sp84XEuRgivOX/gHGSWogQHr6/JNyEoDVNq8ZYs2q9V+u1/r1/fgdgu5qyoKm+uqncmITR6TEfJ0eoxR3ZqI96uOXTvSSfT9ntatx1Rt+LcPwI8aaYbbZcP6WMgsT8YlZRbmFtUJtwOzgnc86o3l9RkyGFnJHfu5SBJC8qXtKSyXNmIdIARai4WiVWgyBmHRd/gcburw4qfwPvax0M4KkOxQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Severe Warning"\n        title=""\n        src="/static/3ab630a2f51c681a03b3a52548d116f3/c9d3d/health-severe.png"\n        srcset="/static/3ab630a2f51c681a03b3a52548d116f3/5243c/health-severe.png 240w,\n/static/3ab630a2f51c681a03b3a52548d116f3/c9d3d/health-severe.png 370w"\n        sizes="(max-width: 370px) 100vw, 370px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.p,null,"This post should hopefully help prevent me (and maybe others) from making the same mistakes."),"\n",a.createElement(t.p,null,"24c0Lk8AIvkL"),"\n",a.createElement(t.h2,null,"Finding the logs (web.stdout.logs) on EC2"),"\n",a.createElement(t.p,null,"First things first was to find the logs. The errors in this case were clearly happening directly on start up. None of the configured logging locations existed or had any data in them so I just assumed the errors were happening when trying to start up. There's a file called ",a.createElement(t.code,null,"/var/log/web.stdout.log")," that allowed me to move forward in most of my initial configuration headaches. It seems to be where EBS is storing stdout on application start up."),"\n",a.createElement(t.h2,null,"Allowed Hosts Configuration"),"\n",a.createElement(t.p,null,"In your ",a.createElement(t.code,null,"settings.py")," file in your main Django app you need to set the allowed hosts correctly. On first deploy, I just set it to:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"ALLOWED_HOSTS = ['*']\n")),"\n",a.createElement(t.p,null,"and then after the ebs environment started I got the cname from running:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-sh"},"eb status\n")),"\n",a.createElement(t.p,null,"which gave me the new allowed hosts of"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"ALLOWED_HOSTS=['test-env-prod.us-west-2.elasticbeanstalk.com']\n")),"\n",a.createElement(t.h2,null,"Environment Configuration"),"\n",a.createElement(t.p,null,"Another start up failure. I found this in ",a.createElement(t.code,null,"/var/log/web.stdout.log"),"."),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,'File "/var/app/venv/staging-LQM1lest/lib64/python3.11/site-packages/environ/environ.py", line 387, in get_value\n    value = self.ENVIRON[var_name]\n            ~~~~~~~~~~~~^^^^^^^^^^\n  File "<frozen os>", line 679, in __getitem__\n KeyError: \'SECRET_KEY\'\n')),"\n",a.createElement(t.p,null,"Makes a lot of sense because my ",a.createElement(t.code,null,".env")," isn't checked into git thus it wouldn't have been copied to the server. This was fixed by (adding my environment variables to the EBS environment)[",a.createElement(t.a,{href:"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-softwaresettings.html"},"https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-softwaresettings.html"),"]."),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://medium.com/@Pybast/how-to-setup-http-to-https-redirection-for-a-django-application-on-aws-elastic-beanstalk-and-have-de44cf05565"},"https://medium.com/@Pybast/how-to-setup-http-to-https-redirection-for-a-django-application-on-aws-elastic-beanstalk-and-have-de44cf05565")),"\n",a.createElement(t.h2,null,'Django application is working and reachable but still in "Severe" status'),"\n",a.createElement(t.p,null,"I made sure it was reachable by setting the environment variable ",a.createElement(t.code,null,"DEBUG = True")," in the EBS environment. This is so I knew I could get the helpful Django debug pages. Sure enough, even though it says \"Severe,\" if I navigate to a page I know doesn't exist I get a great Django 404 page with a dump of all acceptable routes. So that's out of the way, I know the application is still running."),"\n",a.createElement(t.p,null,"I'm pretty sure this is some health check issue because I never configured a health check endpoint. Also, error says this"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"Process default has been unhealthy for 39 minutes (Target.ResponseCodeMismatch).\n")),"\n",a.createElement(t.p,null,"which in the documentation says this:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"Target.ResponseCodeMismatch - The health checks did not return an expected HTTP code. Applies only to Application Load Balancers and Gateway Load Balancers.\n")),"\n",a.createElement(t.p,null,"Triple confirmed in the nginx access logs"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-sh"},"tail -f /var/log/nginx/access.log\n")),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,'[30/Jul/2023:16:01:54 +0000] "GET / HTTP/1.1" 404 3283 "-" "ELB-HealthChecker/2.0" "-"\n[30/Jul/2023:16:02:06 +0000] "GET / HTTP/1.1" 404 3283 "-" "ELB-HealthChecker/2.0" "-"\n')))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},o=n(4765);function s(e){return a.createElement(o.Z,e,a.createElement(i,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-django-ebs-deployment-index-md-a82b12b18b7819a2dd68.js.map