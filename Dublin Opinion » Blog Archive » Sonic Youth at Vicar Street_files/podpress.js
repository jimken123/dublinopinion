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

	if(!self.getHTTPObject) {
		function getHTTPObject() {
			var xmlhttp;
	    var container;
		  if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
			  try {
				  xmlhttp = new XMLHttpRequest();
	      } catch (e) {
		      xmlhttp = false;
				}
	    } else {
		    try {
			    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
	        try {
		        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			    } catch (E) {
				    xmlhttp = false;
					}
	      }
			}		
			return xmlhttp;
	  }
	}

	var podPressHttp = getHTTPObject();

	function podPressShowVideoPreview (strPlayerDiv, strMediaFile, numWidth, numHeight, strPreviewImg) {
		var refPlayerDiv = document.getElementById('podPressPlayerSpace_'+strPlayerDiv);
		if(refPlayerDiv == undefined) {
			return false;
		} 
		refPlayerDiv.innerHTML = podPressGenerateVideoPreview (strPlayerDiv, strMediaFile, numWidth, numHeight, strPreviewImg);
	}

	function podPressGenerateVideoPreview (strPlayerDiv, strMediaFile, numWidth, numHeight, strPreviewImg, bPreviewOnly) {
		if (typeof numWidth == 'undefined') {
			numWidth = 320;
		}
		if (typeof numHeight == 'undefined') {
			numHeight = 240;
		}
		if (typeof strPreviewImg == 'undefined') {
			strPreviewImg = podPressDefaultPreviewImage;
		}
		if (typeof bPreviewOnly == 'undefined') {
			bPreviewOnly = false;
		}

		if(numHeight < 80) {
			strPreviewImg = podPressBackendURL+'images/vpreview_center_text.png';
		}

		var strTopBgWidth = numWidth-14;
		var strBottomBgWidth = numWidth - 126;
		var strTableWidth = numWidth+14;
		var strDimensions = numWidth+':'+numHeight;

		var strResult = '';

		strResult += '<table class="podPress_previewImage" style="width: '+strTableWidth+'px;" cellpadding="0" cellspacing="0">';
		strResult += '<tr class="podPress_previewImage">';
		strResult += '<td class="podPress_previewImage" style="height: 27px; width: 7px; text-align: left;"><img class="podPress_previewImage" width="7" height="27" src="'+podPressBackendURL+'images/vpreview_top_left.png" border="0" alt="."/></td>';
		strResult += '<td class="podPress_previewImage" colspan="3" style="height: 27px; width: '+strTopBgWidth+'px; text-align: center; background: url(\''+podPressBackendURL+'images/vpreview_top_background.png\'); background-repeat: repeat-x;"><img width="119" height="27" class="podPress_previewImage" src="'+podPressBackendURL+'images/vpreview_top_middle.png" border="0" alt="."/></td>';
		strResult += '<td class="podPress_previewImage" style="height: 27px; width: 7px; text-align: right;"><img class="podPress_previewImage" width="7" height="27"  src="'+podPressBackendURL+'images/vpreview_top_right.png" border="0" alt="."/></td>';
		strResult += '</tr>';
		strResult += '<tr class="podPress_previewImage">';
		strResult += '<td class="podPress_previewImage" style="width: 7px; background: url(\''+podPressBackendURL+'images/vpreview_left_background.png\'); background-repeat: repeat-y;">&nbsp;</td>';
		strResult += '<td class="podPress_previewImage" colspan="3" style="width: '+numWidth+'px;">';
		strResult += '<img class="#podPress_previewImage" src="'+strPreviewImg+'" border="0" width="'+numWidth+'" height="'+numHeight+'" alt="previewImg"  id="podPress_previewImageIMG_'+strPlayerDiv+'"';
		if(!bPreviewOnly) {
			strResult += ' onclick="javascript: podPressShowHidePlayer('+strPlayerDiv+', \''+strMediaFile+'\', '+numWidth+', '+numHeight+', \'force\'); return false;"';
		}
		strResult += '/>';
		strResult += '</td>';
		strResult += '<td class="podPress_previewImage" style="width: 7px; background: url(\''+podPressBackendURL+'images/vpreview_right_background.png\'); background-repeat: repeat-y;">&nbsp;</td>';
		strResult += '</tr>';
		strResult += '<tr class="podPress_previewImage">';
		strResult += '<td class="podPress_previewImage" style="height: 23px; width: 7px;"><img class="podPress_previewImage" width="7" height="23" src="'+podPressBackendURL+'images/vpreview_bottom_left.png" border="0" alt="."/></td>';
		strResult += '<td class="podPress_previewImage" style="height: 23px; text-align: left; background: url(\''+podPressBackendURL+'images/vpreview_bottom_background.png\'); background-repeat: repeat-x;"><img class="podPress_previewImage" width="56" height="23" src="'+podPressBackendURL+'images/vpreview_bottom_middle_left.png" border="0"  alt="."/></td>';
		strResult += '<td class="podPress_previewImage" style="height: 23px; width: '+strBottomBgWidth+'px; background: url(\''+podPressBackendURL+'images/vpreview_bottom_background.png\'); background-repeat: repeat-x;">&nbsp;</td>';
		strResult += '<td class="podPress_previewImage" style="height: 23px; text-align: right; background: url(\''+podPressBackendURL+'images/vpreview_bottom_background.png\'); background-repeat: repeat-x;"><img class="podPress_previewImage" width="56" height="23" src="'+podPressBackendURL+'images/vpreview_bottom_middle_right.png" border="0"  alt="."/></td>';
		strResult += '<td class="podPress_previewImage" style="height: 23px; width: 7px;"><img class="podPress_previewImage" width="7" height="23" src="'+podPressBackendURL+'images/vpreview_bottom_right.png" border="0" alt="."/></td>';
		strResult += '</tr>';
		strResult += '</table>';
		return strResult;
	}

	function podPressGeneratePlayer(strPlayerDiv, strMediaFile, numWidth, numHeight, strAutoStart, strPreviewImg) {
		if (typeof numWidth == 'undefined' || numWidth == '') {
			numWidth = 320;
		}
		if (typeof numHeight == 'undefined' || numHeight == '') {
			numHeight = 240;
		}

		if (typeof strAutoStart == 'undefined') {
			strAutoStart = 'false';
		}
		if(strAutoStart == 'nopreview') {
			return '';
		}

		var	pos = strMediaFile.lastIndexOf('\.');
		pos = pos+1;
		var strExt = strMediaFile.substring(pos);
		strExt = strExt.toLowerCase();
		if(strExt != 'mp3' && strExt != 'flv' && strAutoStart == 'false') {
			return podPressGenerateVideoPreview (strPlayerDiv, strMediaFile, numWidth, numHeight, strPreviewImg);
		}
		switch (strExt) {
			case 'm4v':
			case 'm4a':
			case 'avi':
			case 'mpeg':
			case 'mpg':
			case 'mp4':
			case 'qt':
			case 'mov':
				switch (strExt) {
					case 'm4v':
						var strMimeType = 'video/x-m4v';
						break;
					case 'm4a':
						var strMimeType = 'audio/x-m4a';
						break;
					case 'avi':
						var strMimeType = 'video/avi';
						break;
					case 'mpeg':
					case 'mpg':
						var strMimeType = 'video/mpeg';
						break;
					case 'mp4':
						var strMimeType = 'audio/mpeg';
						break;
					case 'qt':
					case 'mov':
						var strMimeType = 'video/quicktime';
						break;
				}
				strResult = '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" width="'+numWidth+'" height="'+numHeight+'" codebase="https://web.archive.org/web/20171221233440/http://www.apple.com/qtactivex/qtplugin.cab">';
				strResult += '	<param name="src" value="'+strMediaFile+'" />';
				strResult += '	<param name="href" value="'+strMediaFile+'" />';
				strResult += '	<param name="scale" value="aspect" />';
				strResult += '	<param name="controller" value="true" />';
				strResult += '	<param name="autoplay" value="'+strAutoStart+'" />';
				strResult += '	<param name="bgcolor" value="000000" />';
				strResult += '	<param name="pluginspage" value="https://web.archive.org/web/20171221233440/http://www.apple.com/quicktime/download/" />';
				strResult += '	<embed src="'+strMediaFile+'" width="'+numWidth+'" height="'+numHeight+'" scale="aspect" cache="true" bgcolor="000000" autoplay="'+strAutoStart+'" controller="true" src="'+strMediaFile+'" type="'+strMimeType+'" pluginspage="https://web.archive.org/web/20171221233440/http://www.apple.com/quicktime/download/"></embed>';
				strResult += '</object><br/><br/>';
				break;
			case 'wma':
			case 'wmv':
			case 'asf':
				strResult = '<object id="winplayer" classid="clsid:6BF52A52-394A-11d3-B153-00C04F79FAA6" width="'+numWidth+'" height="'+numHeight+'" standby="Media is loading..." type="application/x-oleobject">';
				strResult += '	<param name="url" value="'+strMediaFile+'" />';
				strResult += '	<param name="AutoStart" value="'+strAutoStart+'" />';
				strResult += '	<param name="AutoSize" value="true" />';
				strResult += '	<param name="AllowChangeDisplaySize" value="true" />';
				strResult += '	<param name="standby" value="Media is loading..." />';
				strResult += '	<param name="AnimationAtStart" value="true" />';
				strResult += '	<param name="scale" value="aspect" />';
				strResult += '	<param name="ShowControls" value="true" />';
				strResult += '	<param name="ShowCaptioning" value="false" />';
				strResult += '	<param name="ShowDisplay" value="false" />';
				strResult += '	<param name="ShowStatusBar" value="false" />';
				strResult += '	<embed type="application/x-mplayer2" src="'+strMediaFile+'" width="'+numWidth+'" height="'+numHeight+'" scale="aspect" AutoStart="'+strAutoStart+'" ShowDisplay="0" ShowStatusBar="0" AutoSize="1" AnimationAtStart="1" AllowChangeDisplaySize="1" ShowControls="1"></embed>';
				strResult += '</object><br/><br/>';
				break;
			case 'swf':
				if(strAutoStart == 'true') {
					strAutoStart = '';
				} else {
					strAutoStart = ' play="false"';
				}
			
				strResult = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://web.archive.org/web/20171221233440/http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0"'+strAutoStart+' width="'+numWidth+'" height="'+numHeight+'" menu="true">';
				strResult += '	<param name="movie" value="'+strMediaFile+'" />';
				strResult += '	<param name="quality" value="high" />';
				strResult += '	<param name="menu" value="true" />';
				strResult += '	<param name="scale" value="noorder" />';
				strResult += '	<param name="quality" value="high" />';
				strResult += '	<embed src="'+strMediaFile+'" quality="high" pluginspage="https://web.archive.org/web/20171221233440/http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"'+strAutoStart+' width="'+numWidth+'" height="'+numHeight+'" menu="true"></embed>';
				strResult += '</object>';
				break;
			case 'flv':
				if(strAutoStart == 'true') {
					strAutoStart = '';
				} else {
					strAutoStart = '&autoStart=false';
				}
				strResult = '<object type="application/x-shockwave-flash" width="'+numWidth+'" height="'+numHeight+'" wmode="transparent" data="'+podPressBackendURL+'players/flvplayer.swf?file='+encodeURI(strMediaFile)+strAutoStart+'">';
				strResult += '  <param name="movie" value="'+podPressBackendURL+'players/flvplayer.swf?file='+encodeURI(strMediaFile)+strAutoStart+'" />';
				strResult += '  <param name="wmode" value="transparent" />';
				strResult += '</object><br/><br/>';
				break;
			case '.rm':
				strResult = '<object id="realplayer" classid="clsid:cfcdaa03-8be4-11cf-b84b-0020afbbccfa" width="'+numWidth+'" height="'+numHeight+'">';
				strResult += '	<param name="src" value="'+strMediaFile+'" />';
				strResult += '	<param name="autostart" value="'+strAutoStart+'" />';
				strResult += '	<param name="controls" value="imagewindow,controlpanel" />';
				strResult += '	<embed src="'+strMediaFile+'" width="'+numWidth+'" height="'+numHeight+'" autostart="'+strAutoStart+'" controls="imagewindow,controlpanel" type="audio/x-pn-realaudio-plugin"></embed>';
				strResult += '</object><br/><br/>';
				break;
			case 'ogg':
				if(strAutoStart == 'true') {
					strAutoStart = 'yes';
				} else {
					strAutoStart = 'no';
				}
				numWidth = '290';
				numHeight = '65';
				strResult = '<object classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93" width="'+numWidth+'" height="'+numHeight+'" align="center" codebase="https://web.archive.org/web/20171221233440/http://java.sun.com/products/plugin/1.3/jinstall-13-win32.cab#Version=1,3,0,0">';
				strResult += '	<param name="java_codebase" VALUE="'+podPressBackendURL+'players/" />';
				strResult += '	<param name="java_code" VALUE="JOrbisPlayer.class" />';
				strResult += '	<param name="archive" VALUE="JOrbisPlayer.jar,jogg.jar,jorbis.jar" />';
				strResult += '	<param name="jorbis.player.play.0" VALUE="'+strMediaFile+'" />';
				strResult += '	<param name="jorbis.player.icestats" VALUE="no" />';
				strResult += '	<param name="jorbis.player.playonstartup" VALUE="'+strAutoStart+'" />';
				strResult += '	<param name="type" VALUE="application/x-java-applet;version=1.3" />';
				strResult += '	<comment><embed type="application/x-java-applet;version=1.3" width="'+numWidth+'" height="'+numHeight+'" java_codebase="'+podPressBackendURL+'players/" java_code="JOrbisPlayer.class" archive="JOrbisPlayer.jar,jogg.jar,jorbis.jar" jorbis.player.play.0="'+strMediaFile+'" jorbis.player.icestats="no" jorbis.player.playonstartup="'+strAutoStart+'" pluginspage="https://web.archive.org/web/20171221233440/http://java.sun.com/products/plugin/1.3/plugin-install.html"></embed></comment>';
				strResult += '</object><br/><br/>';
				break;
			case 'mp3':
			default:
				if(strAutoStart == 'true') {
					var localCopyPlayerOptions = podPressMP3PlayerOptions+'autostart=yes&amp;'; 
				} else {
					var localCopyPlayerOptions = podPressMP3PlayerOptions+''; 
				}
				strResult = '';
				if(podPressMP3PlayerWrapper) {
					strResult += '<table width="342" height="40" cellpadding="0" cellspacing="0" background="'+podPressBackendURL+'images/listen_wrapper.gif"><tr><td width="45">&nbsp</td><td style="vertical-align: middle;">';
				}
				strResult += '<object type="application/x-shockwave-flash" data="'+podPressBackendURL+'players/player.swf" width="290" height="24" id="audioplayer'+strPlayerDiv+'">';
				strResult += '	<param name="movie" value="'+podPressBackendURL+'players/player.swf" />';
				strResult += '	<param name="FlashVars" value="playerID='+strPlayerDiv+localCopyPlayerOptions+'soundFile='+encodeURI(strMediaFile)+'" />';
				strResult += '	<param name="quality" value="high" />';
				strResult += '	<param name="menu" value="false" />';
				strResult += '	<param name="wmode" value="transparent" />';
				strResult += '</object>';
				if(podPressMP3PlayerWrapper) {
					strResult += '</td></tr></table>';
				}
				break;
		}
		return strResult;
	}

	function podPressShowHidePlayer(strPlayerDiv, strMediaFile, numWidth, numHeight, strAutoStart, strPreviewImg) {
		var refPlayerDiv = document.getElementById('podPressPlayerSpace_'+strPlayerDiv);
		var refPlayerDivLink = document.getElementById('podPressPlayerSpace_'+strPlayerDiv+'_PlayLink');

		if(refPlayerDiv == undefined) {
			return false;
		}

		if (strAutoStart == 'force') {
			strAutoStart = 'true';
			bForceShow = true;
		} else {
			bForceShow = false;
		}

		if(bForceShow) {
			refPlayerDivLink.innerHTML=podPressText_HidePlayer;
			refPlayerDivLink.parentNode.onclick = function(){ podPressShowHidePlayer(strPlayerDiv, strMediaFile, numWidth, numHeight, 'true'); return false; };
			refPlayerDiv.style.display='block';
		} else {
			if(refPlayerDivLink.innerHTML == podPressText_PlayNow) {
				refPlayerDivLink.innerHTML=podPressText_HidePlayer;
				refPlayerDiv.style.display='block';
			} else {
				refPlayerDivLink.innerHTML=podPressText_PlayNow;
				refPlayerDiv.style.display='none';
				if(document.getElementById('winplayer') != undefined) {
					if(document.getElementById('winplayer').controls) {
						document.getElementById('winplayer').controls.stop();
					}
				} else {
					refPlayerDiv.innerHTML='';
				}
				bForceShow = true;
				refPlayerDivLink.parentNode.onclick = function(){ podPressShowHidePlayer(strPlayerDiv, strMediaFile, numWidth, numHeight, 'force'); return false; };
				return true;
			}
		}

		if(strAutoStart == 'nopreview') {
			refPlayerDivLink.innerHTML=podPressText_PlayNow;
			refPlayerDiv.style.display='none';
		}

		var	pos = strMediaFile.lastIndexOf('\.');
		pos = pos+1;
		var strExt = strMediaFile.substring(pos);
		strExt = strExt.toLowerCase();
		if(strExt == 'mp3') {
			ap_stopAll();
		}

		refPlayerDiv.innerHTML=podPressGeneratePlayer(strPlayerDiv, strMediaFile, numWidth, numHeight, strAutoStart, strPreviewImg);
	}

	function podPressPopupPlayer(strPlayerDiv, strMediaFile, numWidth, numHeight) {
		var refPlayerDiv = document.getElementById('podPressPlayerSpace_'+strPlayerDiv);
		var refPlayerDivLink = document.getElementById('podPressPlayerSpace_'+strPlayerDiv+'_PlayLink');

		if(refPlayerDiv != undefined) {
			refPlayerDivLink.innerHTML=podPressText_PlayNow;
			refPlayerDiv.style.display='none';
			if(document.getElementById('winplayer') != undefined) {
				if(document.getElementById('winplayer').controls) {
					document.getElementById('winplayer').controls.stop();
				}
			} else {
				refPlayerDiv.innerHTML='';
			}
			refPlayerDivLink.parentNode.onclick = function(){ podPressShowHidePlayer(strPlayerDiv, strMediaFile, numWidth, numHeight, 'force'); return false; };
		}

		var strResult = '<HTML>\n';
		strResult += '<HEAD>\n';
		strResult += '<TITLE>podPress Popup Player</TITLE>\n';
		strResult += '</HEAD>\n';
		strResult += '<BODY>\n';
		strResult += podPressGeneratePlayer(1, strMediaFile, numWidth, numHeight, 'true');
		strResult += '</BODY>\n';
		strResult += '</HTML>';

		if (typeof numWidth == 'undefined' || numWidth == '') {
			numWidth = 320;
		}
		if (typeof numHeight == 'undefined' || numHeight == '') {
			numHeight = 240;
		}

		if(podPressMP3PlayerWrapper) {
			numWidth = numWidth + 50;
		} else {
			numWidth = numWidth + 10;
		}

		numHeight = numHeight + 50;
		
		newwindow=window.open('', 'podPressPlayer', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width='+numWidth+',height='+numHeight);
		newdocument=newwindow.document;
		newdocument.write(strResult);
		newdocument.close();
	}
	
if(ap_instances == undefined) {
	function ap_registerPlayers() {
		var objectID;
		var objectTags = document.getElementsByTagName('object');
		for(var i=0;i<objectTags.length;i++) {
			objectID = objectTags[i].id;
		if(objectID.indexOf('audioplayer') == 0) {
				ap_instances[i] = objectID.substring(11, objectID.length);
			}
		}
	}

	function ap_stopAll(playerID) {
		for(var i = 0;i<ap_instances.length;i++) {
			try {
				if(ap_instances[i] != playerID) { 
					document.getElementById('audioplayer' + ap_instances[i].toString()).SetVariable('closePlayer', 1);
				}	else {
					document.getElementById('audioplayer' + ap_instances[i].toString()).SetVariable('closePlayer', 0);
				}
			} catch( errorObject ) {
				// stop any errors
			}
		}
	}
	var ap_instances = new Array();
	var ap_clearID = setInterval( ap_registerPlayers, 100 );
}


function podPressShowRecorder() {
	document.getElementById('podPress_audioCommentStatus').innerHTML = '<img src="https://web.archive.org/web/20171221233440/http://podpress.mobatalk.com/images/mobatalk-bullet.jpg" width="16" height="16" border="0" alt="mobatalk-bullet" /> Recording Audio Comment';
	document.getElementById('podPress_audioRecorder').style.display = 'block';
	document.getElementById('podPress_audioRecorder').src = 'https://web.archive.org/web/20171221233440/http://podpress.mobatalk.com/recorder/record_app_JS.asp?code='+podPressMobatalkID+'&retpath='+podPressBackendURL+'mobatalk_audio_comment.php';
}

function podPressAttachAudioComment(argURL, argSize, argDuration) {
	document.getElementById('podPress_audioRecorder').style.display = 'none';
	document.getElementById('podPress_audioCommentURL').value = argURL;
	document.getElementById('podPress_audioCommentSize').value = argSize;
	document.getElementById('podPress_audioCommentDuration').value = argDuration;
	document.getElementById('podPress_audioCommentStatus').innerHTML = '<img src="https://web.archive.org/web/20171221233440/http://podpress.mobatalk.com/images/mobatalk-bullet.jpg" width="16" height="16"  alt="mobatalk-bullet" border="0" /> <font color="green"><b>Audio Comment Attached</b></font><br><object type="application/x-shockwave-flash" data="'+podPressBackendURL+'players/player.swf" width="290" height="24" id="audioplayerNEWCOMMENT"><param name="movie" value="'+podPressBackendURL+'players/player.swf" /><param name="FlashVars" value="playerID=NEWCOMMENT&amp;bg=0xF8F8F8&amp;leftbg=0xEEEEEE&amp;text=0x666666&amp;lefticon=0x666666&amp;rightbg=0xCCCCCC&amp;rightbghover=0x999999&amp;righticon=0x666666&amp;righticonhover=0xFFFFFF&amp;slider=0x666666&amp;track=0xFFFFFF&amp;loader=0x9FFFB8&amp;border=0x666666&amp;soundFile=' + argURL + '" /><param name="quality" value="high" /><param name="menu" value="false" /><param name="wmode" value="transparent" /></object>';
}



}
/*
     FILE ARCHIVED ON 23:34:40 Dec 21, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:08:33 Jan 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 64.433
  exclusion.robots: 0.076
  exclusion.robots.policy: 0.066
  cdx.remote: 0.072
  esindex: 0.01
  LoadShardBlock: 34.706 (3)
  PetaboxLoader3.datanode: 53.631 (5)
  load_resource: 103.048 (2)
  PetaboxLoader3.resolve: 77.234 (2)
*/