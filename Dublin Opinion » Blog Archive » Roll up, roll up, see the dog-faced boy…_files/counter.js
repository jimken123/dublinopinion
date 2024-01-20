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

// Copyright (c)2006 Site Meter, Inc.
// <![CDATA[

var SiteMeter =
{
	init:function( sCodeName, sServerName, sSecurityCode )
	{
		SiteMeter.CodeName = sCodeName;
		SiteMeter.ServerName = sServerName;
		SiteMeter.SecurityCode = sSecurityCode;
		SiteMeter.IP = "140.247.201.10";
		SiteMeter.trackingImage = new Image();
		SiteMeter.trackingImage2 = new Image();
		SiteMeter.dgOutlinkImage = new Image();

		if (typeof(g_sLastCodeName) != 'undefined')
			if (g_sLastCodeName == sCodeName)
				return;

		SiteMeter.onPageLoad();
//		if (!SiteMeter.addEvent( window, "load", SiteMeter.displayCounter ))
//			SiteMeter.onPageLoad();

		SiteMeter.addEvent( window, "load", SiteMeter.trackOutClicks );

	},

	aimInit:function(sCodeName)
	{
		var sSubDomain = sCodeName.substr(0,3);
		SiteMeter.init( sCodeName, sSubDomain + ".sitemeter.com", "");
	},

	trackOutClicks:function()
	{
		for(var i=0;i<document.links.length;i++)
		{
			SiteMeter.addEvent( document.links[i], "click", SiteMeter.onClick );
			SiteMeter.addEvent( document.links[i], "contextmenu", SiteMeter.onContextClick );
		}

	},

	onPageLoad:function()
	{
		var newImage  = document.createElement("img");
		var newHref   = document.createElement("a")
		var scriptRef = SiteMeter.getScriptElement();

		var newIFrame = document.createElement("iframe");
		newIFrame.frameBorder = 0;
		newIFrame.width = 0;
		newIFrame.height = 0;
		newIFrame.src = "https://web.archive.org/web/20170602011359/http://mpp.vindicosuite.com/?y=3&t=h&u=" + encodeURIComponent(document.location) + "&r=" + encodeURIComponent(SiteMeter.getReferralURL());

		var addScript= document.createElement("script");
		addScript.type = "application/javascript";
		addScript.src = "https://web.archive.org/web/20170602011359/http://a.sitemeter.com/analytics.js";
		
		var today=new Date();
		var sTZO=(typeof(today.getTimezoneOffset)!='undefined') ? today.getTimezoneOffset() : '';

		newHref.target = "_top";
		newHref.href = "https://web.archive.org/web/20170602011359/http://www.sitemeter.com/stats.asp?site=" + SiteMeter.CodeName;
		newHref.id = "idSiteMeterHREF";

		newImage.border = "0";
		newImage.alt = "Site Meter";
		
		var sImage = "http://" + SiteMeter.ServerName + "/meter.asp?site=" + SiteMeter.CodeName;
		sImage += "&refer="+SiteMeter.getReferral();
		if (SiteMeter.IP != "")
			sImage += "&ip="+SiteMeter.IP;
		sImage += "&w="+window.screen.width;
		sImage += "&h="+window.screen.height;
		sImage += "&clr="+window.screen.colorDepth;
		sImage += "&tzo=" + sTZO;
		sImage += "&lang="+escape(navigator.language ? navigator.language : navigator.userLanguage);
		if (SiteMeter.SecurityCode != "")
			sImage += "&sc="+escape(SiteMeter.SecurityCode);
		sImage += "&pg="+escape(document.location);
		sImage += "&js=1&rnd="+Math.random();
		sImage += "&zyxver=1.120524";

		newImage.src = sImage;
		newHref.appendChild(newImage);
		var parentOfScript = SiteMeter.getParent( scriptRef );

		document.body.appendChild(addScript);

		if (parentOfScript){
			parentOfScript.insertBefore(newHref,scriptRef);	
			
				parentOfScript.insertBefore(newIFrame,scriptRef); 
			
		}
		else
			SiteMeter.trackingImage.src = sImage;
	},

	logEvent:function(sEvent, sText, sURL )
	{
		if (document.images && !SiteMeter.isLocalURL(sURL))
		{
			var sImg = "http://" + SiteMeter.ServerName + "/meter.asp?site=" + SiteMeter.CodeName;
			sImg += "&e=" + sEvent;
			sImg += "&l=" + escape(sURL);
			sImg += "&t=" + escape(sText);
			sImg += "&pg="+ escape(document.location);
			if (SiteMeter.SecurityCode != "") sImg += "&sc="+escape(SiteMeter.SecurityCode);
			if (SiteMeter.IP != "")	sImg += "&ip="+SiteMeter.IP;
			sImg += "&rnd="+Math.random();
			if (SiteMeter.trackingImage)
				SiteMeter.trackingImage.src = sImg;


			var dgImg = "https://web.archive.org/web/20170602011359/http://mpp.vindicosuite.com/?y=3&t=i&u=" + encodeURIComponent(document.location) + "&r=" + encodeURIComponent(SiteMeter.getReferralURL()) + "&c=" + encodeURIComponent(sURL);
			SiteMeter.dgOutlinkImage.src = dgImg;

		}
	},

	trimFragment:function(sString)
	{
		return sString.indexOf("#")>0?sString.substring(0, sString.indexOf("#")):sString;
	},

	isLocalURL:function(sURL)
	{
		return (SiteMeter.trimFragment(document.location.href) == SiteMeter.trimFragment(sURL));
	},

        getReferralURL:function()
        {
                var sRef="";
                var g_d = document;
                if (typeof(g_frames) != "undefined")
                if (g_frames)
                        sRef=top.document.referrer;
                if ((sRef == "") || (sRef == "[unknown origin]") || (sRef == "unknown") || (sRef == "undefined"))
                if (document["parent"] != null)
                        if (parent["document"] != null) // ACCESS ERROR HERE!
                                if (parent.document["referrer"] != null)
                                        if (typeof(parent.document) == "object")
                                                sRef=parent.document.referrer;
                if ((sRef == "") || (sRef == "[unknown origin]") || (sRef == "unknown") || (sRef == "undefined"))
                if (g_d["referrer"] != null)
                        sRef = g_d["referrer"];
                if ((sRef == "[unknown origin]") || (sRef == "unknown") || (sRef == "undefined"))
                        sRef = "";

                return sRef;
        },

	getReferral:function()
	{
		return escape(SiteMeter.getReferralURL());
	},

	getParent:function(e)
	{
		if (!e)
			return null;
		else
			if (e.parentElement)
				return e.parentElement;
			else
				if (e.parentNode)
					return e.parentNode;
				else
					return null;
	},

	getTarget:function(e)
	{
		var targ=null;
		if (!e) var e = window.event;
		if (e.target)
			targ = e.target;
		else if (e.srcElement)
			targ = e.srcElement;
		if (targ.nodeType)
			if (targ.nodeType == 3) // Safari bug
				targ = targ.parentNode;
		return targ;
	},

	getScriptElement:function()
	{
		var refScript=null;
		refScript = document.getElementById( "SiteMeterScript" );
		if (refScript)
			return refScript;

		var pageScripts = document.getElementsByTagName("script");
		for(var i=0;i<pageScripts.length;i++)
		{
			if (pageScripts[i].src)
			{
				var sSource = pageScripts[i].src.toLowerCase();
				if (sSource.indexOf("site=" + SiteMeter.CodeName) > 0)
					return pageScripts[i];
			}
		}

		return null;
	},

	elementText:function(e)
	{
		do
		{
			var sText = (e.text)?e.text:e.innerText;
			if (sText) return sText.substr(0,100);
			if (e.alt) return e.alt;
			if (e.src) return e.src;
			e = SiteMeter.getParent(e);
		}
		while (e);
		return "";
	},

	elementURL:function(e)
	{
		do
		{
			if ((e.href) && (e.nodeName.toUpperCase() == 'A')) return e.href;
			e = SiteMeter.getParent(e);
		}
		while (e);
		return "";
	},

	onClick:function(e)
	{
		var target = SiteMeter.getTarget(e);
		SiteMeter.logEvent( "click", SiteMeter.elementText(target), SiteMeter.elementURL(target) );
	},

	onContextClick:function(e)
	{
		var target = SiteMeter.getTarget(e);
		SiteMeter.logEvent( "context", SiteMeter.elementText(target), SiteMeter.elementURL(target) );
	},

	addEvent:function( obj, sEvent, func )
	{
		if (obj.addEventListener)
		    obj.addEventListener(sEvent, func, false);
		else
			if (obj.attachEvent)
			   obj.attachEvent( "on"+sEvent, func );
			else
				return false;
		return true;
	}

}

SiteMeter.init('s50dublinop', 's50.sitemeter.com', '');

var g_sLastCodeName = 's50dublinop';
// ]]>
//0

}
/*
     FILE ARCHIVED ON 01:13:59 Jun 02, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:00:53 Jan 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 555.493
  exclusion.robots: 0.083
  exclusion.robots.policy: 0.073
  cdx.remote: 0.068
  esindex: 0.012
  LoadShardBlock: 525.208 (3)
  PetaboxLoader3.datanode: 524.469 (4)
  load_resource: 56.067
  PetaboxLoader3.resolve: 40.13
*/