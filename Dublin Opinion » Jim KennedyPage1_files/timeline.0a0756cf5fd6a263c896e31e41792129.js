var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

__twttrll([6],{172:function(e,t,i){function r(e){e.selectors({shareMenuOpener:".js-showShareMenu",shareMenu:".timeline-ShareMenu",shareMenuTimelineHeader:".timeline-Header",shareMenuTimelineFooter:".timeline-Footer"}),e.define("getHeaderHeight",function(){var e=this.selectOne("shareMenuTimelineHeader");return e?e.getBoundingClientRect().height:0}),e.define("getFooterHeight",function(){var e=this.selectOne("shareMenuTimelineFooter");return e?e.getBoundingClientRect().height:0}),e.define("getShareMenuPositionClass",function(e){var t=e.getBoundingClientRect(),i=t.top-this.getHeaderHeight(),r=this.sandbox.height-t.bottom-this.getFooterHeight();return r<i?l:d}),e.after("render",function(){this.on("click","shareMenuOpener",function(e,t){function i(){n.remove(d,r),l.el.removeEventListener("click",i,!1),a.removeEventListener("click",i,!1)}var r,l=this,d=s.closest(this.selectors.shareMenu,e.target,this.el);e.preventDefault(),d&&(r=this.getShareMenuPositionClass(t),n.add(d,r),o.async(function(){l.el.addEventListener("click",i,!1),a.addEventListener("click",i,!1)}))})})}var n=i(20),s=i(21),a=i(9),o=i(11),l="is-openedAbove",d="is-openedBelow";e.exports=r},199:function(e,t,i){var r=i(92);e.exports=r.build([i(200),i(204),i(155),i(156),i(107),i(168),i(103),i(205),i(206),i(145),i(146),i(140),i(144),i(209),i(210),i(211),i(213),i(215),i(172),i(154),i(218),i(220),i(147),i(148),i(158),i(222)],{pageForAudienceImpression:"timeline",productName:"embeddedtimeline",breakpoints:[330,430,550,660,820,970]})},200:function(e,t,i){function r(e){e.params({dataSource:{required:!0},lang:{required:!0,transform:m.matchLanguage,fallback:"en"},useLegacyDefaults:{required:!0,fallback:!1},width:{validate:f,transform:f},height:{validate:f,transform:f},theme:{fallback:[u(o.val,o,"widgets:theme")],validate:p},tweetLimit:{transform:l.asInt},partner:{fallback:u(o.val,o,"partner")},staticContent:{required:!1,transform:l.asBoolean}}),e.selectors({header:".timeline-Header",footer:".timeline-Footer",viewport:".timeline-Viewport",tweetList:".timeline-TweetList",tweetsInStream:".timeline-Tweet"}),e.around("scribeNamespace",function(e){return d.aug(e(),{page:"timeline"})}),e.around("scribeData",function(e){var t=this.params.dataSource.id;return d.aug(e(),{widget_id:l.isNumber(t)?t:void 0,widget_data_source:t,message:this.params.partner,query:this.el&&this.el.getAttribute("data-search-query"),profile_id:this.el&&this.el.getAttribute("data-profile-id")})}),e.around("widgetDataAttributes",function(e){return d.aug({"widget-id":this.params.dataSource.id,"user-id":this.el&&this.el.getAttribute("data-profile-id"),"search-query":this.el&&this.el.getAttribute("data-search-query")},e())}),e.define("updateViewportHeight",function(){var e,t=this.sandbox,i=this.selectOne("header"),r=this.selectOne("footer"),n=this.selectOne("viewport");return a.read(function(){e=t.height-2*y,e-=i?i.offsetHeight:0,e-=r?r.offsetHeight:0}),a.write(function(){n.style.height=e+"px"})}),e.define("adjustWidgetSize",function(){return this.isFullyExpanded?this.sandbox.matchHeightToContent():this.updateViewportHeight()}),e.define("reconfigureWithServerSideParams",function(e){e=e||{},this.params.linkColor=this.params.linkColor||e.linkColor,this.params.theme=this.params.theme||e.theme||"light",this.params.height=f(this.params.height||e.height),this.isFullyExpanded=this.isStaticTimeline||!this.params.useLegacyDefaults&&!this.params.height,this.isFullyExpanded||this.params.height||(this.params.height=I)}),e.define("scribeImpressionsForInitialTweetSet",function(){var e=h(this.select("tweetsInStream")),t=Object.keys(e),i=t.length?"results":"no_results",r=this.el.getAttribute("data-collection-id");r&&(t.push(r),e[r]={item_type:v.CUSTOM_TIMELINE}),this.scribe({component:"timeline",element:"initial",action:i},{item_ids:t,item_details:e})}),e.override("initialize",function(){this.params.width||(this.params.width=this.params.useLegacyDefaults?x:C),this.isStaticTimeline=this.params.staticContent||this.params.tweetLimit>0}),e.override("hydrate",function(){var e=this;return this.params.dataSource.fetch().then(function(t){e.html=t.html,e.reconfigureWithServerSideParams(t.config),g(e,t,b.INITIAL)})}),e.override("render",function(){var e,t=this;return this.el=this.sandbox.htmlToElement(this.html),this.el?(this.el.lang=this.params.lang,this.isFullyExpanded&&this.sandbox.addRootClass("var-fully-expanded"),this.isStaticTimeline&&this.sandbox.addRootClass("var-static"),e=s.timeline(this.params.lang,this.params.theme),n.all([this.sandbox.appendStyleSheet(e),this.sandbox.styleSelf({display:"inline-block",maxWidth:C,width:this.params.width,minWidth:w,marginTop:0,marginBottom:0})]).then(function(){return t.prepForInsertion(t.el),t.sandbox.injectWidgetEl(t.el)})):n.reject(new Error("unable to render"))}),e.override("show",function(){var e=this.sandbox,t=this;return this.sandbox.makeVisible().then(function(){return e.styleSelf({minHeight:t.isStaticTimeline?void 0:T,height:t.params.height})}).then(function(){return t.adjustWidgetSize()}).then(function(){return a.read(function(){t.scribeImpressionsForInitialTweetSet()})})}),e.last("resize",function(){return this.adjustWidgetSize()})}var n=i(2),s=i(97),a=i(35),o=i(40),l=i(25),d=i(11),c=i(92),u=i(13),h=i(108),f=i(139),m=i(98),p=i(201),g=i(202),v=i(109),b=i(203),w="180px",C="100%",T="200px",x="520px",I="600px",y=1;e.exports=c.couple(i(105),i(120),r)},201:function(e,t){function i(e){return r.test(e)}var r=/^(dark|light)$/;e.exports=i},202:function(e,t,i){function r(e,t,i){switch(e.cursors=e.cursors||{},e.pollInterval=t.pollInterval,i){case n.INITIAL:e.cursors.min=t.minCursorPosition,e.cursors.max=t.maxCursorPosition;break;case n.NEWER:e.cursors.max=t.maxCursorPosition||e.cursors.max;break;case n.OLDER:e.cursors.min=t.minCursorPosition||e.cursors.min}}var n=i(203);e.exports=r},203:function(e,t){e.exports={INITIAL:1,NEWER:2,OLDER:3}},204:function(e,t,i){function r(e){e.params({chrome:{transform:s,fallback:""}}),e.selectors({streamContainer:".timeline-Viewport",tweetStream:".timeline-TweetList"}),e.before("render",function(){this.params.chrome.transparent&&this.sandbox.addRootClass("var-chromeless"),this.params.chrome.hideBorder&&this.sandbox.addRootClass("var-borderless"),this.params.chrome.hideHeader&&this.sandbox.addRootClass("var-headerless"),this.params.chrome.hideFooter&&this.sandbox.addRootClass("var-footerless")}),e.after("render",function(){if(this.params.chrome.hideScrollBar)return this.hideScrollBar()}),e.after("resize",function(){if(this.params.chrome.hideScrollBar)return this.hideScrollBar()}),e.define("hideScrollBar",function(){var e=this.selectOne("streamContainer"),t=this.selectOne("tweetStream");return n.defer(function(){var i,r;e.style.width="",i=e.offsetWidth-t.offsetWidth,r=e.offsetWidth+i,e.style.width=r+"px"})})}var n=i(35),s=i(161);e.exports=r},205:function(e,t){function i(e){e.params({ariaLive:{fallback:""}}),e.selectors({newTweetsNotifier:".new-tweets-bar"}),e.after("render",function(){var e=this.selectOne("newTweetsNotifier");"assertive"===this.params.ariaLive&&e&&e.setAttribute("aria-live","assertive")})}e.exports=i},206:function(e,t,i){function r(e){e.selectors({fullTimestampToLocalize:".long-permalink time",relativeTimestampToLocalize:".permalink time"}),e.after("prepForInsertion",function(e){var t=o(this.el);t&&(this.select(e,"fullTimestampToLocalize").forEach(function(e){var i=e.getAttribute("datetime"),r=i&&t.localTimeStamp(i);r&&(e.innerHTML=r)}),this.select(e,"relativeTimestampToLocalize").forEach(function(e){var i=e.getAttribute("datetime"),r=i&&t.timeAgo(i);r&&(e.innerHTML=r)}))}),e.define("updateRelativeTimestamps",function(){var e,t=o(this.el);if(t)return e=this.select("relativeTimestampToLocalize").reduce(function(e,i){var r=i.getAttribute("datetime"),n=r&&t.timeAgo(r);return n&&e.push(function(){i.innerHTML=n}),e},[]),n.all(e.map(s.write))}),e.after("render",function(){var e=this;a.setInterval(function(){e.updateRelativeTimestamps()},l)})}var n=i(2),s=i(35),a=i(7),o=i(207),l=6e4;e.exports=r},207:function(e,t,i){function r(e){return new s(n.compact({months:(e.getAttribute("data-dt-months")||"").split("|"),phrases:{AM:e.getAttribute("data-dt-am"),PM:e.getAttribute("data-dt-pm"),now:e.getAttribute("data-dt-now"),s:e.getAttribute("data-dt-s"),m:e.getAttribute("data-dt-m"),h:e.getAttribute("data-dt-h"),second:e.getAttribute("data-dt-second"),seconds:e.getAttribute("data-dt-seconds"),minute:e.getAttribute("data-dt-minute"),minutes:e.getAttribute("data-dt-minutes"),hour:e.getAttribute("data-dt-hour"),hours:e.getAttribute("data-dt-hours")},formats:{full:e.getAttribute("data-dt-full"),explicit:e.getAttribute("data-dt-explicit-timestamp"),abbr:e.getAttribute("data-dt-abbr"),shortdate:e.getAttribute("data-dt-short"),longdate:e.getAttribute("data-dt-long")}}))}var n=i(11),s=i(208);e.exports=r},208:function(e,t){function i(e){return e<10?"0"+e:e}function r(e){function t(e,t){return n&&n[e]&&(e=n[e]),e.replace(/%\{([\w_]+)\}/g,function(e,i){return void 0!==t[i]?t[i]:e})}var n=e&&e.phrases,s=e&&e.months||o,a=e&&e.formats||l;this.timeAgo=function(e){var i,n,o,l=r.parseDate(e),m=+new Date,p=m-l;return l?isNaN(p)||p<2*d?t("now"):p<c?(i=Math.floor(p/d),t(a.abbr,{number:i,symbol:t(f,{abbr:t("s"),expanded:t(i>1?"seconds":"second")})})):p<u?(i=Math.floor(p/c),t(a.abbr,{number:i,symbol:t(f,{abbr:t("m"),expanded:t(i>1?"minutes":"minute")})})):p<h?(i=Math.floor(p/u),t(a.abbr,{number:i,symbol:t(f,{abbr:t("h"),expanded:t(i>1?"hours":"hour")})})):p<365*h?t(a.shortdate,{day:l.getDate(),month:t(s[l.getMonth()])}):a.explicit&&(n=a.explicit.split(" - "),o=n[1])?o:t(a.longdate,{day:l.getDate(),month:t(s[l.getMonth()]),year:l.getFullYear().toString().slice(2)}):""},this.localTimeStamp=function(e){var n,o;return a.explicit?a.explicit:(n=r.parseDate(e),o=n&&n.getHours(),n?t(a.full,{day:n.getDate(),month:t(s[n.getMonth()]),year:n.getFullYear(),hours24:i(o),hours12:o<13?o?o:"12":o-12,minutes:i(n.getMinutes()),seconds:i(n.getSeconds()),amPm:t(o<12?"AM":"PM")}):"")}}var n=/(\d{4})-?(\d{2})-?(\d{2})T(\d{2}):?(\d{2}):?(\d{2})(Z|[+-]\d{2}:?\d{2})/,s=/[a-z]{3,4} ([a-z]{3}) (\d{1,2}) (\d{1,2}):(\d{2}):(\d{2}) ([+-]\d{2}:?\d{2}) (\d{4})/i,a=/^\d+$/,o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],l={abbr:"%{number}%{symbol}",shortdate:"%{day} %{month}",longdate:"%{day} %{month} %{year}",full:"%{hours12}:%{minutes} %{amPm} - %{day} %{month} %{year}"},d=1e3,c=60*d,u=60*c,h=24*u,f='<abbr title="%{expanded}">%{abbr}</abbr>';r.parseDate=function(e){var t,i,r=e||"",l=r.toString();return!!(t=function(){var e;return a.test(l)?parseInt(l,10):(e=l.match(s))?Date.UTC(e[7],o.indexOf(e[1]),e[2],e[3],e[4],e[5]):(e=l.match(n),e?Date.UTC(e[1],e[2]-1,e[3],e[4],e[5],e[6]):void 0)}())&&(i=new Date(t),!isNaN(i.getTime())&&i)},e.exports=r},209:function(e,t,i){function r(e){e.selectors({followButton:".follow-button"}),e.define("handleFollowButtonClick",function(e,t){var i=s.intentForFollowURL(t.href),r=a.asBoolean(t.getAttribute("data-age-gate"));r||n.open(i,this.sandbox.sandboxEl,e)}),e.after("render",function(){this.on("click","followButton",function(e,t){this.handleFollowButtonClick(e,t)})})}var n=i(22),s=i(23),a=i(25);e.exports=r},210:function(e,t,i){function r(e){e.selectors({mediaCard:".MediaCard",mediaCardNsfwDismissalTarget:".MediaCard-dismissNsfw"}),e.define("dismissNsfwWarning",function(e,t){var i=n.closest(this.selectors.mediaCard,t,this.el);i&&s.remove(i,"is-nsfw")}),e.after("render",function(){this.on("click","mediaCardNsfwDismissalTarget",this.dismissNsfwWarning)})}var n=i(21),s=i(20);e.exports=r},211:function(e,t,i){function r(e){function t(e){var t=e.createElement("div");return t.className="MediaCard-mediaAsset",t}function i(e){return h.url(e,p)}e.params({lang:{required:!0,transform:c.matchLanguage,fallback:"en"},videoPlayerBorderRadius:{fallback:{}},videoPlayerBranding:{fallback:!0}}),e.selectors({mediaAsset:".MediaCard-mediaAsset",cardInterstitial:".js-cardPlayerInterstitial",wvpInterstitial:".js-playableMediaInterstitial",sourceIdInfo:".js-tweetIdInfo"}),e.define("videoPlayerOptions",function(){var e=(this.scribeData()||{}).widget_origin,t=this.scribeNamespace()||{};return{addBranding:this.params.videoPlayerBranding,borderRadius:this.params.videoPlayerBorderRadius,languageCode:this.params.lang,widgetOrigin:e,scribeContext:{page:t.page,client:t.client}}}),e.define("replaceInterstitialWithMedia",function(e,t){return m.all([this.restoreLastMediaInterstitial(),u.write(function(){n=e,s=e.parentNode,e.parentNode.replaceChild(t,e)})])}),e.define("restoreLastMediaInterstitial",function(){var e;return n&&s?(e=s.firstElementChild,f.remove(e),u.write(function(){s.replaceChild(n,e)})):m.resolve()}),e.define("playWebVideoPlayerMediaAsset",function(e,t){var i,r=d.closest(this.selectors.sourceIdInfo,t,this.el),n=r.getAttribute("data-tweet-id"),s=f.insertForTweet;return n||(n=r.getAttribute("data-event-id"),s=f.insertForEvent),n?(e.preventDefault(),i=this.selectOne(r,this.selectors.wvpInterstitial),this.getConsent(r,i).then(function(){this.displayWebVideoPlayerMediaAsset(r,n,s)}.bind(this))):m.reject(new Error("No source id found for player"))}),e.define("displayWebVideoPlayerMediaAsset",function(e,i,r){var n=this.selectOne(e,this.selectors.mediaAsset),s=t(this.sandbox),a=this.sandbox.createElement("div"),o=this.videoPlayerOptions();return a.className="wvp-player-container",s.appendChild(a),this.replaceInterstitialWithMedia(n,s).then(function(){return r.call(this,s,i,o)}).then(function(e){e&&e.on("ready",e.play)})}),e.define("displayIframeMediaAsset",function(e,r){var n,s,l=d.closest(this.selectors.mediaAsset,r,this.el),c=d.closest(this.selectors.cardInterstitial,r,this.el),h=c.getAttribute("data-player-src"),f=c.getAttribute("data-player-width"),p=c.getAttribute("data-player-height"),v=c.getAttribute("data-player-title");return h?(e.preventDefault(),h=i(h),n=t(this.sandbox),s=o({src:h,allowfullscreen:"true",width:f,height:p,title:v||""}),s.className="FilledIframe",n.appendChild(s),this.replaceInterstitialWithMedia(l,n).then(function(){s.focus(),u.write(function(){a.add(n,g),a.add(s,g)})})):m.reject(new Error("No Player frame source"))}),e.after("render",function(){var e=this.selectOne(this.selectors.wvpInterstitial);e&&a.remove(e,"u-hidden"),this.on("click","cardInterstitial",this.displayIframeMediaAsset),this.on("click","wvpInterstitial",this.playWebVideoPlayerMediaAsset)})}var n,s,a=i(20),o=i(44),l=i(92),d=i(21),c=i(98),u=i(35),h=i(24),f=i(150),m=i(2),p={autoplay:"1"},g="js-forceRedraw";e.exports=l.couple(i(212),r)},212:function(e,t,i){function r(e){e.selectors({cookieConsentButton:".js-cookieConsentButton",interstitial:".js-interstitial"}),e.define("getConsent",function(e,t){var i=this.selectOne(e,this.selectors.interstitial);return i?u.shouldObtainCookieConsent().catch(function(){return c.resolve(!0)}).then(function(e){var r,n;return e?(r=new a,n=function(){this.handleCookieConsentClick(t,i),r.resolve()}.bind(this),l.write(function(){this.scribe({component:"cookie_consent",action:"show"}),this.showConsentInterstitial(i,t),this.attachConsentListener(i,n)},this),r.promise):c.resolve()}.bind(this)):c.resolve()}),e.define("attachConsentListener",function(e,t){var i=this.selectOne(e,this.selectors.cookieConsentButton);i&&i.addEventListener("click",t,{once:!0})}),e.define("showConsentInterstitial",function(e,t){n.remove(e,"u-hidden"),t&&n.add(t,"is-backgrounded")}),e.define("hideConsentInterstitial",function(e,t){n.add(e,"u-hidden"),t&&n.remove(t,"is-backgrounded")}),e.define("setCookieConsentCookie",function(){return s.request(o.cookieConsent()).catch(function(e){throw new Error("CORS request failed: "+e)})}),e.define("handleCookieConsentClick",function(e,t){return d.allSettled([l.write(this.hideConsentInterstitial.bind(this,t,e)),this.setCookieConsentCookie()])})}var n=i(20),s=i(74),a=i(1),o=i(75),l=i(35),d=i(32),c=i(2),u=i(72);e.exports=r},213:function(e,t,i){function r(e){e.override("resizeSandboxDueToCardChange",function(){return this.isFullyExpanded?this.sandbox.matchHeightToContent():n.resolve()})}var n=i(2),s=i(92);e.exports=s.couple(i(214),r)},214:function(e,t,i){function r(e){var t,i="",r=Math.floor(e/h);for(t=r;t>0;t--)i+="w"+t*h+" ";return i}function n(e){e.selectors({prerenderedCard:".PrerenderedCard",periscopeVideo:".PlayerCard--video",rootCardEl:".TwitterCard .CardContent > *:first-child"}),e.define("scribeCardShown",function(e){var t=2;this.scribe({component:"card",action:"shown"},{items:[{card_name:e.getAttribute("data-card-name")}]},t)}),e.define("resizeSandboxDueToCardChange",function(){return this.sandbox.matchHeightToContent()}),e.define("markCardElAsLoaded",function(e){function t(){r&&i.resizeSandboxDueToCardChange()}var i=this,r=!1;return this.select(e,"img").forEach(function(e){e.addEventListener("load",t,!1)}),this.scribeCardShown(e),a.write(function(){s.add(e,p)}).then(function(){r=!0,i.resizeSandboxDueToCardChange()})}),e.define("updateCardWidthConstraints",function(){var e=this;return d.all(this.select("prerenderedCard").map(function(t){var i=e.selectOne(t,"rootCardEl");return a.defer(function(){var e,n=0;l.ios()?(s.remove(t,g),n=o(t.parentElement).width,t.style.maxWidth=n+"px"):n=o(t.parentElement).width,e=r(n),i.setAttribute(f,e),s.add(t,g)}).then(function(){return e.resizeSandboxDueToCardChange()})}))}),e.define("setCardTheme",function(e){var t=this.selectOne(e,"rootCardEl");this.params.theme&&t.setAttribute(m,this.params.theme)}),e.after("prepForInsertion",function(e){var t=this,i=this.select(e,"prerenderedCard").reduce(function(e,t){var i=t.getAttribute("data-css");return i&&(e[i]=e[i]||[],e[i].push(t)),e},{});c.forIn(i,function(e,i){t.sandbox.prependStyleSheet(e).then(function(){i.forEach(function(e){t.setCardTheme(e),t.markCardElAsLoaded(e)})})})}),e.after("show",function(){var e;return l.anyIE()&&(e=this.selectOne("periscopeVideo"),e&&(e.style.display="none")),this.updateCardWidthConstraints()}),e.after("resize",function(){return this.updateCardWidthConstraints()})}var s=i(20),a=i(35),o=i(68),l=i(8),d=i(2),c=i(11),u=i(92),h=50,f="data-card-breakpoints",m="data-theme",p="is-loaded",g="is-constrainedByMaxWidth";e.exports=u.couple(i(105),n)},215:function(e,t,i){function r(e,t,i){var r={};return e=e||{},i&&e.max?r.minPosition=e.max:!i&&e.min?r.maxPosition=e.min:i?r.sinceId=t:r.maxId=t,r}function n(e){e.params({dataSource:{required:!0},isPreviewTimeline:{required:!1,fallback:!1}}),e.selectors({timelineTweet:".timeline-Tweet",viewport:".timeline-Viewport",tweetList:".timeline-TweetList",tweetsInStream:".timeline-Tweet",newTweetsNotifier:".new-tweets-bar",loadMore:".timeline-LoadMore",loadMoreButton:".timeline-LoadMore-prompt"}),e.define("gcTweetsSync",function(){var e="custom"===this.el.getAttribute("data-timeline-type"),t=this.selectOne("tweetList");return e?a.resolve():void m(t,w)}),e.define("scribeImpressionsForDynamicTweetSet",function(e,t){var i=u.toRealArray(e.querySelectorAll(this.selectors.timelineTweet)),r=f(i),n=Object.keys(r),s=t?"newer":"older",a=t?v.CLIENT_SIDE_APP:v.CLIENT_SIDE_USER;this.scribe({component:"timeline",element:s,action:"results"},{item_ids:n,item_details:r,event_initiator:a})}),e.define("fetchTweets",function(e,t){function i(e){return"404"===e?s.pollInterval=null:"503"===e&&(s.pollInterval*=1.5),a.reject(e)}function n(i){var r,n,a=s.sandbox.createFragment(),o=s.sandbox.createElement("ol"),l=t?b.NEWER:b.OLDER;return p(s,i,l),o.innerHTML=i.html,r=o.firstElementChild,r&&(n=s.selectOne(r,"timelineTweet")),n&&"LI"===r.tagName?(n.getAttribute("data-tweet-id")===e&&o.removeChild(r),s.scribeImpressionsForDynamicTweetSet(o,t),s.prepForInsertion(o),u.toRealArray(o.children).forEach(function(e){a.appendChild(e)}),a):a}var s=this,o=r(this.cursors,e,t);return this.params.dataSource.poll(o,t).then(n,i)}),e.define("loadOldTweets",function(){var e=this,t=this.selectLast("tweetsInStream"),i=t&&t.getAttribute("data-tweet-id");return i?this.fetchTweets(i,!1).then(function(t){var i=e.selectOne("tweetList"),r=e.selectOne("loadMore");return l.write(function(){t.childNodes.length>0?i.appendChild(t):o.add(r,x)})}):a.reject(new Error("unable to load more"))}),e.after("loadOldTweets",function(){return g.trigger("timelineUpdated",{target:this.sandbox.sandboxEl,region:"older"}),this.resize()}),e.define("loadNewTweets",function(){var e=this,t=this.selectOne("tweetsInStream"),i=t&&t.getAttribute("data-tweet-id");return i?this.fetchTweets(i,!0).then(function(t){var i,r,n=e.selectOne("viewport"),s=e.selectOne("tweetList");if(0!==t.childNodes.length)return l.read(function(){i=n.scrollTop,r=n.scrollHeight}),l.defer(function(){var a;s.insertBefore(t,s.firstElementChild),a=i+n.scrollHeight-r,i>40||e.mouseIsOverWidget?(n.scrollTop=a,e.showNewTweetsNotifier()):(n.scrollTop=0,e.gcTweetsSync())})}):a.reject(new Error("unable to load new tweets"))}),e.after("loadNewTweets",function(){return g.trigger("timelineUpdated",{target:this.sandbox.sandboxEl,region:"newer"}),this.resize()}),e.define("showNewTweetsNotifier",function(){var e=this,t=this.selectOne("newTweetsNotifier"),i=t&&t.firstElementChild;return d.setTimeout(function(){e.hideNewTweetsNotifier()},C),l.write(function(){t.removeChild(i),t.appendChild(i),o.add(t,"is-displayed")}),l.defer(function(){o.add(t,"is-opaque")})}),e.define("hideNewTweetsNotifier",function(e){var t=new s,i=this.selectOne("newTweetsNotifier");return e=e||{},!e.force&&this.mouseIsOverNewTweetsNotifier?(t.resolve(),t.promise):(l.write(function(){o.remove(i,"is-opaque")}),d.setTimeout(function(){l.write(function(){o.remove(i,"is-displayed")}).then(t.resolve,t.reject)},T),t.promise)}),e.define("scrollToTopOfViewport",function(){var e=this.selectOne("viewport");return l.write(function(){e.scrollTop=0,e.focus()})}),e.define("schedulePolling",function(){function e(){i.isPollInProgress=!1}function t(){var n=r||i.pollInterval;n&&d.setTimeout(function(){i.isPollInProgress||(i.isPollInProgress=!0,i.loadNewTweets(i.sandbox).then(e,e)),t()},n)}var i=this,r=c.get("timeline.pollInterval");t()}),e.after("initialize",function(){this.isPollInProgress=!1,this.mouseIsOverWidget=!1,this.mouseIsOverNewTweetsNotifier=!1,this.cursors={},this.pollInterval=1e4}),e.after("render",function(){this.isStaticTimeline||this.params.isPreviewTimeline||(this.select("timelineTweet").length>0&&this.schedulePolling(),this.on("mouseover",function(){this.mouseIsOverWidget=!0}),this.on("mouseout",function(){this.mouseIsOverWidget=!1}),this.on("mouseover","newTweetsNotifier",function(){this.mouseIsOverNewTweetsNotifier=!0}),this.on("mouseout","newTweetsNotifier",function(){this.mouseIsOverNewTweetsNotifier=!1}),this.on("click","newTweetsNotifier",function(){this.scrollToTopOfViewport(),this.hideNewTweetsNotifier({force:!0})}),this.on("click","loadMoreButton",function(){this.loadOldTweets()}))})}var s=i(1),a=i(2),o=i(20),l=i(35),d=i(7),c=i(16),u=i(11),h=i(92),f=i(108),m=i(216),p=i(202),g=i(29),v=i(217),b=i(203),w=50,C=5e3,T=500,x="is-atEndOfTimeline";e.exports=h.couple(i(105),n)},216:function(e,t){function i(e,t){if(e)for(;e.children[t];)e.removeChild(e.children[t])}e.exports=i},217:function(e,t){e.exports={CLIENT_SIDE_USER:0,CLIENT_SIDE_APP:2}},218:function(e,t,i){function r(e){return l+"{border-color:"+e+";}"}function n(e){e.params({borderColor:{fallback:[o(s.val,s,"widgets:border-color")],validate:a}}),e.after("render",function(){var e=this.params.borderColor;e&&this.sandbox.appendCss(r(e))})}var s=i(40),a=i(219),o=i(13),l=".customisable-border";e.exports=n},219:function(e,t){function i(e){return r.test(e)}var r=/^#(?:[a-f\d]{3}){1,2}$/i;e.exports=i},220:function(e,t,i){function r(e){return e.join(",")}function n(e){var t=r(c),i=r(u);return[t+"{color:"+e+";}",i+"{color:"+o.lighten(e,.2)+";}"].join("")}function s(e){e.params({linkColor:{fallback:d(a.val,a,"widgets:link-color"),validate:l}}),e.after("render",function(){var e=this.params.linkColor;e&&this.sandbox.appendCss(n(e))})}var a=i(40),o=i(221),l=i(219),d=i(13),c=[".customisable",".customisable:link",".customisable:visited"],u=[".customisable:hover",".customisable:focus",".customisable:active",".customisable-highlight:hover",".customisable-highlight:focus","a:hover .customisable-highlight","a:focus .customisable-highlight"];e.exports=s},221:function(e,t,i){function r(e){return l.parseInt(e,16)}function n(e){return d.isType("string",e)?(e=e.replace(c,""),e+=3===e.length?e:""):null}function s(e,t){var i,s,a,o;if(e=n(e),t=t||0,e)return i=t<0?0:255,t=t<0?-Math.max(t,-1):Math.min(t,1),s=r(e.substring(0,2)),a=r(e.substring(2,4)),o=r(e.substring(4,6)),"#"+(16777216+65536*(Math.round((i-s)*t)+s)+256*(Math.round((i-a)*t)+a)+(Math.round((i-o)*t)+o)).toString(16).slice(1)}function a(e,t){return s(e,-t)}function o(e,t){return s(e,t)}var l=i(7),d=i(11),c=/^#/;e.exports={darken:a,lighten:o}},222:function(e,t,i){function r(e){e.after("render",function(){var e,t=this.sandbox.sandboxEl,i=t.tagName;if(s(t,"td "+i))return e=n.closest("td",t),this.sandbox.styleSelf({maxWidth:e.clientWidth+"px"})})}var n=i(21),s=i(87);e.exports=r}});

}
/*
     FILE ARCHIVED ON 20:26:59 Dec 22, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:08:49 Jan 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 202.621
  exclusion.robots: 0.063
  exclusion.robots.policy: 0.054
  cdx.remote: 0.058
  esindex: 0.011
  LoadShardBlock: 54.867 (3)
  PetaboxLoader3.datanode: 146.469 (5)
  load_resource: 332.829 (2)
  PetaboxLoader3.resolve: 214.71 (2)
*/