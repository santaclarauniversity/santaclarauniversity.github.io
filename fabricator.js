/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var _this=this;__webpack_require__(1);/**
	 * Global `fabricator` object
	 * @namespace
	 */var fabricator=window.fabricator={};/**
	 * Default options
	 * @type {Object}
	 */fabricator.options={toggles:{labels:!0,notes:!0,code:!1},menu:!1,mq:'(min-width: 60em)'},fabricator.options.menu=window.matchMedia(fabricator.options.mq).matches,fabricator.test={},fabricator.test.sessionStorage=(()=>{const a='_f';try{return sessionStorage.setItem(a,a),sessionStorage.removeItem(a),!0}catch(b){return!1}})(),fabricator.test.sessionStorage&&(sessionStorage.fabricator=sessionStorage.fabricator||JSON.stringify(fabricator.options)),fabricator.dom={root:document.querySelector('html'),primaryMenu:document.querySelector('.f-menu'),menuItems:document.querySelectorAll('.f-menu li a'),menuToggle:document.querySelector('.f-menu-toggle')},fabricator.getOptions=()=>{return fabricator.test.sessionStorage?JSON.parse(sessionStorage.fabricator):fabricator.options},fabricator.buildColorChips=()=>{const a=document.querySelectorAll('.f-color-chip');for(let b=a.length-1;0<=b;b--){const c=a[b].querySelector('.f-color-chip__color').innerHTML;a[b].style.borderTopColor=c,a[b].style.borderBottomColor=c}return fabricator},fabricator.setActiveItem=()=>{/**
	   * Match the window location with the menu item, set menu item as active
	   */const a=()=>{// get current file and hash without first slash
	const b=window.location.pathname+window.location.hash,c=b.replace(/(^\/)([^#]+)?(#[\w\-\.]+)?$/ig,(d,f,g,h)=>{return g+h.split('.')[0]})||'index.html';// find the current section in the items array
	for(let d=fabricator.dom.menuItems.length-1;0<=d;d--){const f=fabricator.dom.menuItems[d],g=f.getAttribute('href').replace(/^\//g,'');// get item href without first slash
	g===c?f.classList.add('f-active'):f.classList.remove('f-active')}};return window.addEventListener('hashchange',a),a(),fabricator},fabricator.menuToggle=()=>{// shortcut menu DOM
	const a=fabricator.dom.menuToggle,b=fabricator.getOptions(),c=()=>{b.menu=!fabricator.dom.root.classList.contains('f-menu-active'),fabricator.dom.root.classList.toggle('f-menu-active'),fabricator.test.sessionStorage&&sessionStorage.setItem('fabricator',JSON.stringify(b))};// toggle classes on certain elements
	// toggle classes on ctrl + m press
	document.onkeydown=f=>{f.ctrlKey&&f.keyCode==='M'.charCodeAt(0)&&c()},a.addEventListener('click',()=>{c()});// close menu when clicking on item (for collapsed menu view)
	const d=()=>{window.matchMedia(fabricator.options.mq).matches||c()};for(let f=0;f<fabricator.dom.menuItems.length;f++)fabricator.dom.menuItems[f].addEventListener('click',d);return fabricator},fabricator.allItemsToggles=()=>{const a={labels:document.querySelectorAll('[data-f-toggle="labels"]'),notes:document.querySelectorAll('[data-f-toggle="notes"]'),code:document.querySelectorAll('[data-f-toggle="code"]')},b=document.querySelectorAll('.f-controls [data-f-toggle-control]'),c=fabricator.getOptions(),d=(f,g)=>{const h=document.querySelector(`.f-controls [data-f-toggle-control=${f}]`),j=a[f];for(let k=0;k<j.length;k++)g?j[k].classList.remove('f-item-hidden'):j[k].classList.add('f-item-hidden');// toggle styles
	g?h.classList.add('f-active'):h.classList.remove('f-active'),c.toggles[f]=g,fabricator.test.sessionStorage&&sessionStorage.setItem('fabricator',JSON.stringify(c))};// toggle all
	for(let f=0;f<b.length;f++)b[f].addEventListener('click',g=>{// extract info from target node
	const h=g.currentTarget.getAttribute('data-f-toggle-control'),j=0>g.currentTarget.className.indexOf('f-active');d(h,j)});// persist toggle options from page to page
	return Object.keys(c.toggles).forEach(f=>{d(f,c.toggles[f])}),fabricator},fabricator.singleItemToggle=()=>{const a=document.querySelectorAll('.f-item-group [data-f-toggle-control]'),b=c=>{const d=c.currentTarget.parentNode.parentNode.parentNode,f=c.currentTarget.getAttribute('data-f-toggle-control');d.querySelector(`[data-f-toggle=${f}]`).classList.toggle('f-item-hidden')};// toggle single
	for(let c=0;c<a.length;c++)a[c].addEventListener('click',b);return fabricator},fabricator.bindCodeAutoSelect=()=>{const a=document.querySelectorAll('.f-item-code'),b=c=>{const d=window.getSelection(),f=document.createRange();f.selectNodeContents(c.querySelector('code')),d.removeAllRanges(),d.addRange(f)};for(let c=a.length-1;0<=c;c--)a[c].addEventListener('click',b.bind(_this,a[c]))},fabricator.setInitialMenuState=()=>{// root element
	const a=document.querySelector('html'),b=window.matchMedia(fabricator.options.mq),c=d=>{d.matches?fabricator.getOptions().menu?a.classList.add('f-menu-active'):a.classList.remove('f-menu-active'):a.classList.remove('f-menu-active')};// if small screen
	return b.addListener(c),c(b),fabricator},fabricator.setInitialMenuState().menuToggle().allItemsToggles().singleItemToggle().buildColorChips().setActiveItem().bindCodeAutoSelect();

/***/ },
/* 1 */
/***/ function(module, exports) {

	self='undefined'==typeof window?// if in browser
	'undefined'!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self// if in worker
	:{}// if in node js
	:window;/**
	 * Prism: Lightweight, robust, elegant syntax highlighting
	 * MIT license http://www.opensource.org/licenses/mit-license.php/
	 * @author Lea Verou http://lea.verou.me
	 */var Prism=function(){// Private helper vars
	var a=/\blang(?:uage)?-(?!\*)(\w+)\b/i,b=self.Prism={util:{encode:function(e){return e instanceof c?new c(e.type,b.util.encode(e.content),e.alias):'Array'===b.util.type(e)?e.map(b.util.encode):e.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\u00a0/g,' ')},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},// Deep clone a language definition (e.g. to extend it)
	clone:function(e){var f=b.util.type(e);switch(f){case'Object':var g={};for(var h in e)e.hasOwnProperty(h)&&(g[h]=b.util.clone(e[h]));return g;case'Array':return e.map(function(k){return b.util.clone(k)});}return e}},languages:{extend:function(e,f){var g=b.util.clone(b.languages[e]);for(var h in f)g[h]=f[h];return g},/**
	       * Insert a token before another token in a language literal
	       * As this needs to recreate the object (we cannot actually insert before keys in object literals),
	       * we cannot just provide an object, we need anobject and a key.
	       * @param inside The key (or language id) of the parent
	       * @param before The key to insert before. If not provided, the function appends instead.
	       * @param insert Object with the key/value pairs to insert
	       * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
	       */insertBefore:function(e,f,g,h){h=h||b.languages;var k=h[e];if(2==arguments.length){for(var l in g=arguments[1],g)g.hasOwnProperty(l)&&(k[l]=g[l]);return k}var m={};for(var n in k)if(k.hasOwnProperty(n)){if(n==f)for(var l in g)g.hasOwnProperty(l)&&(m[l]=g[l]);m[n]=k[n]}// Update references in other language definitions
	return b.languages.DFS(b.languages,function(p,q){q===h[e]&&p!=e&&(this[p]=m)}),h[e]=m},// Traverse a language definition with Depth First Search
	DFS:function(e,f,g){for(var h in e)e.hasOwnProperty(h)&&(f.call(e,h,e[h],g||h),'Object'===b.util.type(e[h])?b.languages.DFS(e[h],f):'Array'===b.util.type(e[h])&&b.languages.DFS(e[h],f,h))}},highlightAll:function(e,f){var g=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');for(var k,h=0;k=g[h++];)b.highlightElement(k,!0===e,f)},highlightElement:function(e,f,g){for(// Find language
	var h,k,l=e;l&&!a.test(l.className);)l=l.parentNode;if(l&&(h=(l.className.match(a)||[,''])[1],k=b.languages[h]),!!k){e.className=e.className.replace(a,'').replace(/\s+/g,' ')+' language-'+h,l=e.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(a,'').replace(/\s+/g,' ')+' language-'+h);var m=e.textContent;if(m){m=m.replace(/^(?:\r?\n|\r)/,'');var n={element:e,language:h,grammar:k,code:m};if(b.hooks.run('before-highlight',n),f&&self.Worker){var p=new Worker(b.filename);p.onmessage=function(q){n.highlightedCode=c.stringify(JSON.parse(q.data),h),b.hooks.run('before-insert',n),n.element.innerHTML=n.highlightedCode,g&&g.call(n.element),b.hooks.run('after-highlight',n)},p.postMessage(JSON.stringify({language:n.language,code:n.code}))}else n.highlightedCode=b.highlight(n.code,n.grammar,n.language),b.hooks.run('before-insert',n),n.element.innerHTML=n.highlightedCode,g&&g.call(e),b.hooks.run('after-highlight',n)}}// Set language on the element, if not present
	},highlight:function(e,f,g){var h=b.tokenize(e,f);return c.stringify(b.util.encode(h),g)},tokenize:function(e,f,g){var h=b.Token,k=[e],l=f.rest;if(l){for(var m in l)f[m]=l[m];delete f.rest}tokenloop:for(var m in f)if(f.hasOwnProperty(m)&&f[m]){var n=f[m];n='Array'===b.util.type(n)?n:[n];for(var p=0;p<n.length;++p){var q=n[p],r=q.inside,s=!!q.lookbehind,t=0,u=q.alias;q=q.pattern||q;for(var w=0;w<k.length;w++){// Don’t cache length as it changes during the loop
	var x=k[w];if(k.length>e.length)// Something went terribly wrong, ABORT, ABORT!
	break tokenloop;if(!(x instanceof h)){q.lastIndex=0;var y=q.exec(x);if(y){s&&(t=y[1].length);var z=y.index-1+t,y=y[0].slice(t),A=y.length,B=x.slice(0,z+1),C=x.slice(z+A+1),D=[w,1];B&&D.push(B);var E=new h(m,r?b.tokenize(y,r):y,u);D.push(E),C&&D.push(C),Array.prototype.splice.apply(k,D)}}}}}return k},hooks:{all:{},add:function(e,f){var g=b.hooks.all;g[e]=g[e]||[],g[e].push(f)},run:function(e,f){var g=b.hooks.all[e];if(g&&g.length)for(var k,h=0;k=g[h++];)k(f)}}},c=b.Token=function(e,f,g){this.type=e,this.content=f,this.alias=g};if(c.stringify=function(e,f,g){if('string'==typeof e)return e;if('Array'===b.util.type(e))return e.map(function(n){return c.stringify(n,f,e)}).join('');var h={type:e.type,content:c.stringify(e.content,f,g),tag:'span',classes:['token',e.type],attributes:{},language:f,parent:g};if('comment'==h.type&&(h.attributes.spellcheck='true'),e.alias){var k='Array'===b.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(h.classes,k)}b.hooks.run('wrap',h);var l='';for(var m in h.attributes)l+=m+'="'+h.attributes[m]+'"';return'<'+h.tag+' class="'+h.classes.join(' ')+'" '+l+'>'+h.content+'</'+h.tag+'>'},!self.document)return self.addEventListener?(self.addEventListener('message',function(e){var f=JSON.parse(e.data),g=f.language,h=f.code;self.postMessage(JSON.stringify(b.util.encode(b.tokenize(h,b.languages[g])))),self.close()},!1),self.Prism):self.Prism;// In worker
	// Get current script and highlight
	var d=document.getElementsByTagName('script');return d=d[d.length-1],d&&(b.filename=d.src,document.addEventListener&&!d.hasAttribute('data-manual')&&document.addEventListener('DOMContentLoaded',b.highlightAll)),self.Prism}();'undefined'!=typeof module&&module.exports&&(module.exports=Prism);;Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},'attr-value':{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/=|>|"/}},punctuation:/\/?>/,'attr-name':{pattern:/[\w:-]+/,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add('wrap',function(a){'entity'===a.type&&(a.attributes.title=a.content.replace(/&amp;/,'&'))});;Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{punctuation:/[;:]/}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/,string:/("|')(\\\n|\\?.)*?\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,punctuation:/[\{\};:]/,'function':/[-a-z0-9]+(?=\()/i},Prism.languages.markup&&(Prism.languages.insertBefore('markup','tag',{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css},alias:'language-css'}}),Prism.languages.insertBefore('inside','attr-value',{'style-attr':{pattern:/\s*style=("|').*?\1/i,inside:{'attr-name':{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,'attr-value':{pattern:/.+/i,inside:Prism.languages.css}},alias:'language-css'}},Prism.languages.markup.tag));;Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.+/,lookbehind:!0}],string:/("|')(\\\n|\\?.)*?\1/,'class-name':{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,'function':{pattern:/[a-z0-9_]+\(/i,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,ignore:/&(lt|gt|amp);/i,punctuation:/[{}[\];(),.:]/};;Prism.languages.javascript=Prism.languages.extend('clike',{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,'function':/(?!\d)[a-z0-9_$]+(?=\()/i}),Prism.languages.insertBefore('javascript','keyword',{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore('markup','tag',{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript},alias:'language-javascript'}});;

/***/ }
/******/ ]);
//# sourceMappingURL=fabricator.js.map