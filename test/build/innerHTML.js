/*! (C) WebReflection Mit Style License */
// see https://github.com/WebReflection/document-register-element/issues/21#issuecomment-102020311
var innerHTML=function(e){var t=e.registerElement,n=e.createElement("div"),r="document-register-element",i=t.innerHTML,s,o;return i?i:(t.call(e,r,{prototype:Object.create(HTMLElement.prototype,{createdCallback:{value:Object}})}),n.innerHTML="<"+r+"></"+r+">","createdCallback"in n.querySelector(r)?t.innerHTML=function(e,t){return e.innerHTML=t,e}:(o=[],s=function(t){if("createdCallback"in t||"attachedCallback"in t||"detachedCallback"in t||"attributeChangedCallback"in t)return;e.createElement.innerHTMLHelper=!0;for(var n=t.parentNode,r=t.getAttribute("is"),i=t.nodeName,s=e.createElement.apply(e,r?[i,r]:[i]),o=t.attributes,u=0,a=o.length,f,l;u<a;u++)f=o[u],s.setAttribute(f.name,f.value);s.createdCallback&&(s.created=!0,s.createdCallback(),s.created=!1);while(l=t.firstChild)s.appendChild(l);e.createElement.innerHTMLHelper=!1,n&&n.replaceChild(s,t)},(e.registerElement=function(r,i){var s=(i.extends?i.extends+'[is="'+r+'"]':r).toLowerCase();return o.indexOf(s)<0&&o.push(s),t.apply(e,arguments)}).innerHTML=function(e,t){e.innerHTML=t;for(var n=e.querySelectorAll(o.join(",")),r=n.length;r--;s(n[r]));return e}))}(document);