(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,a,t){"use strict";t.r(a);t(148);var n=t(0),l=t.n(n),m=t(156),c=t(145),r=(t(175),t(75),t(76),t(77),t(7)),s=t.n(r),i=(t(176),function(e){return function(a){function t(e){return a.call(this,e)||this}return s()(t,a),t.prototype.render=function(){return this.props.location.search.includes("showcase")?l.a.createElement("div",{className:"showcase","data-name":this.props.meta.name},l.a.createElement(e,this.props)):l.a.createElement(e,this.props)},t}(l.a.Component)}),o=(t(32),t(22)),d=t(177),u=t.n(d),E=function(e){return function(a){return l.a.createElement(o.Location,null,function(t){var n=t.location,m=t.navigate;return l.a.createElement(e,Object.assign({},a,{location:n,navigate:m,search:n.search?u.a.parse(n.search):{}}))})}},g=E(i(function(e){var a=e.meta,t=a.heading,n=a.html,m=a.btnTxt,r=a.btnUrl,s=e.elemId;return l.a.createElement("section",{className:"banner",id:s},l.a.createElement("div",{className:"banner__bg"},l.a.createElement("div",{className:"banner__bg__img"})),l.a.createElement("div",{className:"container fullscreen"},l.a.createElement("div",{className:"row fullscreen banner__wrapper"},l.a.createElement("div",{className:"banner__text col-lg-7"},l.a.createElement("h1",{className:"banner__text__heading"},t),l.a.createElement("div",{className:"banner__text__body",dangerouslySetInnerHTML:{__html:n}}),l.a.createElement(c.Link,{className:"primary-btn",to:r},m)))))})),v=(t(179),function(e){var a=e.html,t=e.icon;return l.a.createElement("div",{className:"single-offer d-flex flex-row"},l.a.createElement("div",{className:"icon"},l.a.createElement("img",{src:"images/"+t,alt:""})),l.a.createElement("div",{className:"desc"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))}),N=E(i(function(e){var a=e.meta,t=a.heading,n=a.description,m=a.tiles,c=e.elemId;return l.a.createElement("section",{className:"grid section-gap",id:c},l.a.createElement("div",{className:"grid__content container"},l.a.createElement("div",{className:"row d-flex justify-content-center"},l.a.createElement("div",{className:"menu-content pb-60 col-lg-10"},l.a.createElement("div",{className:"title text-center"},l.a.createElement("h1",{className:"mb-10"},t),l.a.createElement("p",null,n)))),l.a.createElement("div",{className:"row flex-wrap"},m.map(function(e,a){return l.a.createElement(v,{html:e.html,icon:e.icon,key:a})}))))})),h=(t(180),E(i(function(e){var a=e.meta,t=a.heading,n=a.html,m=a.btnTxt,r=a.image,s=e.elemId;return l.a.createElement("section",{id:s,className:"callto-action-area relative section-gap",style:{backgroundImage:"url(images/"+r+")"}},l.a.createElement("div",{className:"overlay overlay-bg"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row d-flex justify-content-center"},l.a.createElement("div",{className:"menu-content col-lg-9"},l.a.createElement("div",{className:"title text-center"},l.a.createElement("h1",{className:"mb-10 text-white"},t),l.a.createElement("p",{className:"text-white",dangerouslySetInnerHTML:{__html:n}}),l.a.createElement(c.Link,{to:"",className:"primary-btn",fragment:"contact"},m))))))}))),p=(t(78),t(52),t(189)),f=t(149),b=t(147),_=(t(185),E(i(function(e){var a=e.meta,t=a.heading,n=a.form,m=a.address,c=e.elemId;return l.a.createElement("section",{id:c,className:"contact"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"text-center pb-60"},t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("h4",{className:"pb-15"},n.title),l.a.createElement(p.a,{initialValues:{name:"",email:"",message:""},validate:function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",a},onSubmit:function(e,a){var t=a.setSubmitting;console.log(42),setTimeout(function(){alert(JSON.stringify(e,null,2)),t(!1)},400)}},function(e){var a=e.values,t=e.errors,m=e.touched,c=e.handleChange,r=e.handleSubmit,s=e.isSubmitting;return l.a.createElement("form",{onSubmit:r},l.a.createElement("div",{className:"mt-15"},l.a.createElement("input",{name:"name",type:"text",placeholder:n.namePlaceholder,maxLength:"120",className:"single-input",onChange:c,value:a.name}),t.name&&m.name,l.a.createElement("small",{className:"form-text text-muted"},"Please enter your name")),l.a.createElement("div",{className:"mt-15"},l.a.createElement("input",{type:"email",name:"email",placeholder:n.emailPlaceholder,maxLength:"120",className:"single-input",onChange:c,value:a.email}),t.email&&m.email&&t.email,l.a.createElement("small",{className:"form-text text-muted"},"Please enter an email address"),l.a.createElement("small",{className:"form-text text-muted"},"Please provide a valid email")),l.a.createElement("div",{className:"mt-15 pb-25"},l.a.createElement("textarea",{name:"message",placeholder:n.messagePlaceholder,maxLength:"1000",rows:"5",className:"single-textarea",onChange:c,value:a.message}),t.message&&m.message,l.a.createElement("small",{className:"form-text text-muted"},"Please enter a message to send")),l.a.createElement("button",{type:"submit",className:"primary-btn",disabled:s},n.submitBtnTxt))})),l.a.createElement("div",{className:"contact__address col-lg-6"},l.a.createElement("h4",{className:"pb-15"},m.title),l.a.createElement("div",{className:"d-flex pt-15"},l.a.createElement("div",{className:"contact__address__icon"},l.a.createElement(f.a,{icon:b.c})),l.a.createElement("div",{className:"pl-30"},l.a.createElement("div",{className:"pb-10"},m.line1),l.a.createElement("div",{className:"pb-10"},m.line2),l.a.createElement("div",{className:"pb-10"},m.country))),l.a.createElement("div",{className:"d-flex pt-15"},l.a.createElement("div",{className:"contact__address__icon"},l.a.createElement(f.a,{icon:b.b})),l.a.createElement("div",{className:"pl-30"},m.email))))))}))),x=(t(186),E(i(function(e){var a=e.meta,t=a.headline,n=a.heading,m=a.html,c=a.btnTxt,r=a.btnUrl,s=a.image,i=a.imagePosition,o=e.elemId;return l.a.createElement("section",{className:"left"===i?"image-text image-left section-gap":"image-text image-right section-gap",id:o},l.a.createElement("div",{className:"container m-auto"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"left"===i?"col-md-5 image-col":"col-md-5 image-col offset-md-1 order-md-2"},l.a.createElement("div",{className:"image-wrap inview"},l.a.createElement("div",{className:"image",style:{backgroundImage:"url(images/"+s+")"}}))),l.a.createElement("div",{className:"left"===i?"text-col col-md-6 offset-md-1":"text-col col-md-6"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"text-wrap"},l.a.createElement("h6",null,t),l.a.createElement("h2",null,n),l.a.createElement("div",{className:"pt-20 pb-20",dangerouslySetInnerHTML:{__html:m}}),c&&l.a.createElement("a",{className:"primary-btn",href:r,target:"_blank"},c)))))))}))),y=(t(187),function(e){var a=e.industry,t=e.heading,n=e.description,m=e.image,c=e.moreTxt;return l.a.createElement("a",{href:"/behavioral-analytics/",className:"card"},l.a.createElement("span",{className:"card__title"},a),l.a.createElement("h4",null,t),l.a.createElement("img",{src:"images/"+m,alt:""}),l.a.createElement("p",null,n),l.a.createElement("span",{className:"card__more"},c))}),w=E(i(function(e){var a=e.meta,t=a.headline,n=a.moreTxt,m=a.cards,c=e.elemId;return l.a.createElement("section",{className:"cards section-gap",id:c},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"cards__wrapper"},t&&l.a.createElement("div",{className:"cards__heading"},l.a.createElement("h1",null,t)),m.map(function(e,a){var t=e.industry,m=e.heading,c=e.image,r=e.description;return l.a.createElement(y,{industry:t,heading:m,image:c,description:r,moreTxt:n,key:a})}))))})),I=(t(188),E(i(function(e){var a=e.meta,t=a.heading,n=a.html,m=a.image,r=a.btnTxt,s=a.btnUrl,i=e.elemId;return l.a.createElement("section",{className:"hero",id:i},l.a.createElement("div",{className:"hero__bg"},l.a.createElement("div",{className:"hero__bg__img",style:{backgroundImage:"url(images/"+m+")"}})),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-center justify-content-center"},l.a.createElement("div",{className:"col-lg-10"},l.a.createElement("div",{className:"generic-banner-content"},l.a.createElement("h1",{className:"text-white"},t),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}),l.a.createElement(c.Link,{className:"primary-btn",to:s},r))))))})));a.default=function(e){var a=e.pageContext.components;return l.a.createElement(m.a,null,a.map(function(e,a){var t=e.name.toLowerCase();return function(e,a,t){var n;return(n={}).banner=l.a.createElement(g,{meta:e,elemId:a,key:t}),n.grid=l.a.createElement(N,{meta:e,elemId:a,key:t}),n.calltoaction=l.a.createElement(h,{meta:e,elemId:a,key:t}),n.contact=l.a.createElement(_,{meta:e,elemId:a,key:t}),n.imagetext=l.a.createElement(x,{meta:e,elemId:a,key:t}),n.cards=l.a.createElement(w,{meta:e,elemId:a,key:t}),n.hero=l.a.createElement(I,{meta:e,elemId:a,key:t}),n}(e,""+t+e.position,a)[t]}))}},175:function(e,a,t){},176:function(e,a,t){},179:function(e,a,t){},180:function(e,a,t){},185:function(e,a,t){},186:function(e,a,t){},187:function(e,a,t){},188:function(e,a,t){}}]);
//# sourceMappingURL=component---src-templates-default-js-1e30babb71bff009fb4c.js.map