// Garden Gnome Software - Skin
// Pano2VR 6.1.13/18080
// Filename: tourvirtual final deltodo.ggsk
// Generated 2022-12-17T05:41:42

function pano2vrSkin(player,base) {
	player.addVariable('opt_3d_preview', 2, false);
	player.addVariable('category_visible', 2, false);
	player.addVariable('node_visible', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.preloadImages=function() {
		var preLoadImg=new Image();
		preLoadImg.src=basePath + 'images/casa__o.png';
		preLoadImg.src=basePath + 'images/button_1__o.png';
		preLoadImg.src=basePath + 'images/button_3__o.png';
		preLoadImg.src=basePath + 'images/button_2__o.png';
		preLoadImg.src=basePath + 'images/button_4__o.png';
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._jardinesn52_1=document.createElement('div');
		me._jardinesn52_1.seekbars = [];
		me._jardinesn52_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._jardinesn52_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._jardinesn52_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._jardinesn52_1.hasChildNodes()) {
				me._jardinesn52_1.removeChild(me._jardinesn52_1.lastChild);
			}
			if (me._jardinesn52_1__vid) {
				me._jardinesn52_1__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._jardinesn52_1.ggVideoNotLoaded ==false && me._jardinesn52_1.ggDeactivate) { me._jardinesn52_1.ggDeactivate(); }
				me._jardinesn52_1.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('jardinesn52_1');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._jardinesn52_1.ggVideoNotLoaded = false;
			me._jardinesn52_1__vid=document.createElement('video');
			me._jardinesn52_1__vid.className='ggskin ggskin_video';
			me._jardinesn52_1__vid.setAttribute('width', '100%');
			me._jardinesn52_1__vid.setAttribute('height', '100%');
			me._jardinesn52_1__vid.setAttribute('controlsList', 'nodownload');
			me._jardinesn52_1__vid.setAttribute('oncontextmenu', 'return false;');
			me._jardinesn52_1__source=document.createElement('source');
			me._jardinesn52_1__vid.setAttribute('poster', 'media/urbanizacion.jpeg');
			me._jardinesn52_1__source.setAttribute('src', media);
			me._jardinesn52_1__vid.setAttribute('playsinline', 'playsinline');
			me._jardinesn52_1__vid.setAttribute('style', ';');
			me._jardinesn52_1__vid.style.outline = 'none';
			me._jardinesn52_1__vid.appendChild(me._jardinesn52_1__source);
			me._jardinesn52_1.appendChild(me._jardinesn52_1__vid);
			var videoEl = player.registerVideoElement('jardinesn52_1', me._jardinesn52_1__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			if (me._jardinesn52_1.ggMediaEnded) {
				me._jardinesn52_1__vid.addEventListener('ended', me._jardinesn52_1.ggMediaEnded);
			}
			me._jardinesn52_1.ggVideoSource = media;
		}
		el.ggId="jardinesn52_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._jardinesn52_1.ggIsActive=function() {
			if (me._jardinesn52_1__vid != null) {
				return (me._jardinesn52_1__vid.paused == false && me._jardinesn52_1__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._jardinesn52_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._jardinesn52_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._jardinesn52_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._jardinesn52_1.style[domTransition]='';
				if (me._jardinesn52_1.ggCurrentLogicStateVisible == 0) {
					me._jardinesn52_1.style.visibility=(Number(me._jardinesn52_1.style.opacity)>0||!me._jardinesn52_1.style.opacity)?'inherit':'hidden';
					if (me._jardinesn52_1.ggVideoNotLoaded) {
						me._jardinesn52_1.ggInitMedia(me._jardinesn52_1.ggVideoSource);
					}
					me._jardinesn52_1.ggVisible=true;
				}
				else {
					me._jardinesn52_1.style.visibility="hidden";
					me._jardinesn52_1.ggInitMedia('');
					me._jardinesn52_1.ggVisible=false;
				}
			}
		}
		me._jardinesn52_1.ggMediaEnded=function () {
			player.openNext("{node82}","");
		}
		me._jardinesn52_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._jardinesn52_1);
		el=me._jardinesn44_1=document.createElement('div');
		me._jardinesn44_1.seekbars = [];
		me._jardinesn44_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._jardinesn44_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._jardinesn44_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._jardinesn44_1.hasChildNodes()) {
				me._jardinesn44_1.removeChild(me._jardinesn44_1.lastChild);
			}
			if (me._jardinesn44_1__vid) {
				me._jardinesn44_1__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._jardinesn44_1.ggVideoNotLoaded ==false && me._jardinesn44_1.ggDeactivate) { me._jardinesn44_1.ggDeactivate(); }
				me._jardinesn44_1.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('jardinesn44_1');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._jardinesn44_1.ggVideoNotLoaded = false;
			me._jardinesn44_1__vid=document.createElement('video');
			me._jardinesn44_1__vid.className='ggskin ggskin_video';
			me._jardinesn44_1__vid.setAttribute('width', '100%');
			me._jardinesn44_1__vid.setAttribute('height', '100%');
			me._jardinesn44_1__vid.setAttribute('controlsList', 'nodownload');
			me._jardinesn44_1__vid.setAttribute('oncontextmenu', 'return false;');
			me._jardinesn44_1__source=document.createElement('source');
			me._jardinesn44_1__vid.setAttribute('poster', 'media/urbanizacion.jpeg');
			me._jardinesn44_1__source.setAttribute('src', media);
			me._jardinesn44_1__vid.setAttribute('playsinline', 'playsinline');
			me._jardinesn44_1__vid.setAttribute('style', ';');
			me._jardinesn44_1__vid.style.outline = 'none';
			me._jardinesn44_1__vid.appendChild(me._jardinesn44_1__source);
			me._jardinesn44_1.appendChild(me._jardinesn44_1__vid);
			var videoEl = player.registerVideoElement('jardinesn44_1', me._jardinesn44_1__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			if (me._jardinesn44_1.ggMediaEnded) {
				me._jardinesn44_1__vid.addEventListener('ended', me._jardinesn44_1.ggMediaEnded);
			}
			me._jardinesn44_1.ggVideoSource = media;
		}
		el.ggId="jardinesn44_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._jardinesn44_1.ggIsActive=function() {
			if (me._jardinesn44_1__vid != null) {
				return (me._jardinesn44_1__vid.paused == false && me._jardinesn44_1__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._jardinesn44_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._jardinesn44_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._jardinesn44_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._jardinesn44_1.style[domTransition]='';
				if (me._jardinesn44_1.ggCurrentLogicStateVisible == 0) {
					me._jardinesn44_1.style.visibility=(Number(me._jardinesn44_1.style.opacity)>0||!me._jardinesn44_1.style.opacity)?'inherit':'hidden';
					if (me._jardinesn44_1.ggVideoNotLoaded) {
						me._jardinesn44_1.ggInitMedia(me._jardinesn44_1.ggVideoSource);
					}
					me._jardinesn44_1.ggVisible=true;
				}
				else {
					me._jardinesn44_1.style.visibility="hidden";
					me._jardinesn44_1.ggInitMedia('');
					me._jardinesn44_1.ggVisible=false;
				}
			}
		}
		me._jardinesn44_1.ggMediaEnded=function () {
			player.openNext("{node37}","180\/0\/0");
		}
		me._jardinesn44_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._jardinesn44_1);
		el=me._jardinesn36_1=document.createElement('div');
		me._jardinesn36_1.seekbars = [];
		me._jardinesn36_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._jardinesn36_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._jardinesn36_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._jardinesn36_1.hasChildNodes()) {
				me._jardinesn36_1.removeChild(me._jardinesn36_1.lastChild);
			}
			if (me._jardinesn36_1__vid) {
				me._jardinesn36_1__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._jardinesn36_1.ggVideoNotLoaded ==false && me._jardinesn36_1.ggDeactivate) { me._jardinesn36_1.ggDeactivate(); }
				me._jardinesn36_1.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('jardinesn36_1');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._jardinesn36_1.ggVideoNotLoaded = false;
			me._jardinesn36_1__vid=document.createElement('video');
			me._jardinesn36_1__vid.className='ggskin ggskin_video';
			me._jardinesn36_1__vid.setAttribute('width', '100%');
			me._jardinesn36_1__vid.setAttribute('height', '100%');
			me._jardinesn36_1__vid.setAttribute('controlsList', 'nodownload');
			me._jardinesn36_1__vid.setAttribute('oncontextmenu', 'return false;');
			me._jardinesn36_1__source=document.createElement('source');
			me._jardinesn36_1__vid.setAttribute('poster', 'media/urbanizacion.jpeg');
			me._jardinesn36_1__source.setAttribute('src', media);
			me._jardinesn36_1__vid.setAttribute('playsinline', 'playsinline');
			me._jardinesn36_1__vid.setAttribute('style', ';');
			me._jardinesn36_1__vid.style.outline = 'none';
			me._jardinesn36_1__vid.appendChild(me._jardinesn36_1__source);
			me._jardinesn36_1.appendChild(me._jardinesn36_1__vid);
			var videoEl = player.registerVideoElement('jardinesn36_1', me._jardinesn36_1__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			if (me._jardinesn36_1.ggMediaEnded) {
				me._jardinesn36_1__vid.addEventListener('ended', me._jardinesn36_1.ggMediaEnded);
			}
			me._jardinesn36_1.ggVideoSource = media;
		}
		el.ggId="jardinesn36_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._jardinesn36_1.ggIsActive=function() {
			if (me._jardinesn36_1__vid != null) {
				return (me._jardinesn36_1__vid.paused == false && me._jardinesn36_1__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._jardinesn36_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._jardinesn36_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._jardinesn36_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._jardinesn36_1.style[domTransition]='';
				if (me._jardinesn36_1.ggCurrentLogicStateVisible == 0) {
					me._jardinesn36_1.style.visibility=(Number(me._jardinesn36_1.style.opacity)>0||!me._jardinesn36_1.style.opacity)?'inherit':'hidden';
					if (me._jardinesn36_1.ggVideoNotLoaded) {
						me._jardinesn36_1.ggInitMedia(me._jardinesn36_1.ggVideoSource);
					}
					me._jardinesn36_1.ggVisible=true;
				}
				else {
					me._jardinesn36_1.style.visibility="hidden";
					me._jardinesn36_1.ggInitMedia('');
					me._jardinesn36_1.ggVisible=false;
				}
			}
		}
		me._jardinesn36_1.ggMediaEnded=function () {
			player.openNext("{node106}","290\/0\/0");
		}
		me._jardinesn36_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._jardinesn36_1);
		el=me._casa_1=document.createElement('div');
		me._casa_1.seekbars = [];
		me._casa_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._casa_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._casa_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._casa_1.hasChildNodes()) {
				me._casa_1.removeChild(me._casa_1.lastChild);
			}
			if (me._casa_1__vid) {
				me._casa_1__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._casa_1.ggVideoNotLoaded ==false && me._casa_1.ggDeactivate) { me._casa_1.ggDeactivate(); }
				me._casa_1.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('casa_1');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._casa_1.ggVideoNotLoaded = false;
			me._casa_1__vid=document.createElement('video');
			me._casa_1__vid.className='ggskin ggskin_video';
			me._casa_1__vid.setAttribute('width', '100%');
			me._casa_1__vid.setAttribute('height', '100%');
			me._casa_1__vid.setAttribute('controlsList', 'nodownload');
			me._casa_1__vid.setAttribute('oncontextmenu', 'return false;');
			me._casa_1__source=document.createElement('source');
			me._casa_1__vid.setAttribute('poster', 'media/urbanizacion.jpeg');
			me._casa_1__source.setAttribute('src', media);
			me._casa_1__vid.setAttribute('playsinline', 'playsinline');
			me._casa_1__vid.setAttribute('style', ';');
			me._casa_1__vid.style.outline = 'none';
			me._casa_1__vid.appendChild(me._casa_1__source);
			me._casa_1.appendChild(me._casa_1__vid);
			var videoEl = player.registerVideoElement('casa_1', me._casa_1__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			if (me._casa_1.ggMediaEnded) {
				me._casa_1__vid.addEventListener('ended', me._casa_1.ggMediaEnded);
			}
			me._casa_1.ggVideoSource = media;
		}
		el.ggId="casa_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._casa_1.ggIsActive=function() {
			if (me._casa_1__vid != null) {
				return (me._casa_1__vid.paused == false && me._casa_1__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._casa_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._casa_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._casa_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._casa_1.style[domTransition]='';
				if (me._casa_1.ggCurrentLogicStateVisible == 0) {
					me._casa_1.style.visibility=(Number(me._casa_1.style.opacity)>0||!me._casa_1.style.opacity)?'inherit':'hidden';
					if (me._casa_1.ggVideoNotLoaded) {
						me._casa_1.ggInitMedia(me._casa_1.ggVideoSource);
					}
					me._casa_1.ggVisible=true;
				}
				else {
					me._casa_1.style.visibility="hidden";
					me._casa_1.ggInitMedia('');
					me._casa_1.ggVisible=false;
				}
			}
		}
		me._casa_1.ggMediaEnded=function () {
			player.openNext("{node77}","175\/0\/0");
		}
		me._casa_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._casa_1);
		el=me._jardinesn52=document.createElement('div');
		els=me._jardinesn52__img=document.createElement('img');
		els.className='ggskin ggskin_jardinesn52';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._jardinesn52__img.ggOverSrc=hs;
		el.ggId="jardinesn52";
		el.ggDx=-17.57;
		el.ggDy=40.19;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 29px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._jardinesn52.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._jardinesn52.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._jardinesn52.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._jardinesn52.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._jardinesn52.style[domTransition]='';
				if (me._jardinesn52.ggCurrentLogicStateVisible == 0) {
					me._jardinesn52.style.visibility=(Number(me._jardinesn52.style.opacity)>0||!me._jardinesn52.style.opacity)?'inherit':'hidden';
					me._jardinesn52.ggVisible=true;
				}
				else {
					me._jardinesn52.style.visibility="hidden";
					me._jardinesn52.ggVisible=false;
				}
			}
		}
		me._jardinesn52.onclick=function (e) {
			if (me._jardinesn52_1.ggApiPlayer) {
				if (me._jardinesn52_1.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._jardinesn52_1.ggApiPlayer.playVideo();
					};
					if (me._jardinesn52_1.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._jardinesn52_1.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._jardinesn52_1.ggApiPlayerType == 'vimeo') {
					me._jardinesn52_1.ggApiPlayer.play();
				}
			} else {
				player.playSound("jardinesn52_1","1");
			}
			me._jardinesn52.style[domTransition]='none';
			me._jardinesn52.style.visibility='hidden';
			me._jardinesn52.ggVisible=false;
			me._casa.style[domTransition]='none';
			me._casa.style.visibility='hidden';
			me._casa.ggVisible=false;
			me._jardinesn36.style[domTransition]='none';
			me._jardinesn36.style.visibility='hidden';
			me._jardinesn36.ggVisible=false;
			me._jardinesn44.style[domTransition]='none';
			me._jardinesn44.style.visibility='hidden';
			me._jardinesn44.ggVisible=false;
			me._casa_1.ggInitMedia('');
			me._casa_1.style[domTransition]='none';
			me._casa_1.style.visibility='hidden';
			me._casa_1.ggVisible=false;
			me._jardinesn36_1.ggInitMedia('');
			me._jardinesn36_1.style[domTransition]='none';
			me._jardinesn36_1.style.visibility='hidden';
			me._jardinesn36_1.ggVisible=false;
			me._jardinesn44_1.ggInitMedia('');
			me._jardinesn44_1.style[domTransition]='none';
			me._jardinesn44_1.style.visibility='hidden';
			me._jardinesn44_1.ggVisible=false;
		}
		me._jardinesn52.onmouseover=function (e) {
			me._jardinesn52__img.src=me._jardinesn52__img.ggOverSrc;
		}
		me._jardinesn52.onmouseout=function (e) {
			me._jardinesn52__img.src=me._jardinesn52__img.ggNormalSrc;
		}
		me._jardinesn52.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._jardinesn52);
		el=me._jardinesn44=document.createElement('div');
		els=me._jardinesn44__img=document.createElement('img');
		els.className='ggskin ggskin_jardinesn44';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._jardinesn44__img.ggOverSrc=hs;
		el.ggId="jardinesn44";
		el.ggDx=-8.05;
		el.ggDy=39.66;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 29px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._jardinesn44.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._jardinesn44.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._jardinesn44.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._jardinesn44.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._jardinesn44.style[domTransition]='';
				if (me._jardinesn44.ggCurrentLogicStateVisible == 0) {
					me._jardinesn44.style.visibility=(Number(me._jardinesn44.style.opacity)>0||!me._jardinesn44.style.opacity)?'inherit':'hidden';
					me._jardinesn44.ggVisible=true;
				}
				else {
					me._jardinesn44.style.visibility="hidden";
					me._jardinesn44.ggVisible=false;
				}
			}
		}
		me._jardinesn44.onclick=function (e) {
			if (me._jardinesn44_1.ggApiPlayer) {
				if (me._jardinesn44_1.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._jardinesn44_1.ggApiPlayer.playVideo();
					};
					if (me._jardinesn44_1.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._jardinesn44_1.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._jardinesn44_1.ggApiPlayerType == 'vimeo') {
					me._jardinesn44_1.ggApiPlayer.play();
				}
			} else {
				player.playSound("jardinesn44_1","1");
			}
			me._jardinesn44.style[domTransition]='none';
			me._jardinesn44.style.visibility='hidden';
			me._jardinesn44.ggVisible=false;
			me._casa.style[domTransition]='none';
			me._casa.style.visibility='hidden';
			me._casa.ggVisible=false;
			me._jardinesn36.style[domTransition]='none';
			me._jardinesn36.style.visibility='hidden';
			me._jardinesn36.ggVisible=false;
			me._jardinesn52.style[domTransition]='none';
			me._jardinesn52.style.visibility='hidden';
			me._jardinesn52.ggVisible=false;
			me._casa_1.ggInitMedia('');
			me._casa_1.style[domTransition]='none';
			me._casa_1.style.visibility='hidden';
			me._casa_1.ggVisible=false;
			me._jardinesn36_1.ggInitMedia('');
			me._jardinesn36_1.style[domTransition]='none';
			me._jardinesn36_1.style.visibility='hidden';
			me._jardinesn36_1.ggVisible=false;
			me._jardinesn52_1.ggInitMedia('');
			me._jardinesn52_1.style[domTransition]='none';
			me._jardinesn52_1.style.visibility='hidden';
			me._jardinesn52_1.ggVisible=false;
		}
		me._jardinesn44.onmouseover=function (e) {
			me._jardinesn44__img.src=me._jardinesn44__img.ggOverSrc;
		}
		me._jardinesn44.onmouseout=function (e) {
			me._jardinesn44__img.src=me._jardinesn44__img.ggNormalSrc;
		}
		me._jardinesn44.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._jardinesn44);
		el=me._jardinesn36=document.createElement('div');
		els=me._jardinesn36__img=document.createElement('img');
		els.className='ggskin ggskin_jardinesn36';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._jardinesn36__img.ggOverSrc=hs;
		el.ggId="jardinesn36";
		el.ggDx=36.48;
		el.ggDy=20.53;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 47px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 29px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._jardinesn36.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._jardinesn36.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._jardinesn36.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._jardinesn36.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._jardinesn36.style[domTransition]='';
				if (me._jardinesn36.ggCurrentLogicStateVisible == 0) {
					me._jardinesn36.style.visibility=(Number(me._jardinesn36.style.opacity)>0||!me._jardinesn36.style.opacity)?'inherit':'hidden';
					me._jardinesn36.ggVisible=true;
				}
				else {
					me._jardinesn36.style.visibility="hidden";
					me._jardinesn36.ggVisible=false;
				}
			}
		}
		me._jardinesn36.onclick=function (e) {
			if (me._jardinesn36_1.ggApiPlayer) {
				if (me._jardinesn36_1.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._jardinesn36_1.ggApiPlayer.playVideo();
					};
					if (me._jardinesn36_1.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._jardinesn36_1.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._jardinesn36_1.ggApiPlayerType == 'vimeo') {
					me._jardinesn36_1.ggApiPlayer.play();
				}
			} else {
				player.playSound("jardinesn36_1","1");
			}
			me._jardinesn36.style[domTransition]='none';
			me._jardinesn36.style.visibility='hidden';
			me._jardinesn36.ggVisible=false;
			me._casa.style[domTransition]='none';
			me._casa.style.visibility='hidden';
			me._casa.ggVisible=false;
			me._jardinesn44.style[domTransition]='none';
			me._jardinesn44.style.visibility='hidden';
			me._jardinesn44.ggVisible=false;
			me._jardinesn52.style[domTransition]='none';
			me._jardinesn52.style.visibility='hidden';
			me._jardinesn52.ggVisible=false;
			me._casa_1.ggInitMedia('');
			me._casa_1.style[domTransition]='none';
			me._casa_1.style.visibility='hidden';
			me._casa_1.ggVisible=false;
			me._jardinesn44_1.ggInitMedia('');
			me._jardinesn44_1.style[domTransition]='none';
			me._jardinesn44_1.style.visibility='hidden';
			me._jardinesn44_1.ggVisible=false;
			me._jardinesn52_1.ggInitMedia('');
			me._jardinesn52_1.style[domTransition]='none';
			me._jardinesn52_1.style.visibility='hidden';
			me._jardinesn52_1.ggVisible=false;
		}
		me._jardinesn36.onmouseover=function (e) {
			me._jardinesn36__img.src=me._jardinesn36__img.ggOverSrc;
		}
		me._jardinesn36.onmouseout=function (e) {
			me._jardinesn36__img.src=me._jardinesn36__img.ggNormalSrc;
		}
		me._jardinesn36.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._jardinesn36);
		el=me._casa=document.createElement('div');
		els=me._casa__img=document.createElement('img');
		els.className='ggskin ggskin_casa';
		hs=basePath + 'images/casa.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/casa__o.png';
		me._casa__img.ggOverSrc=hs;
		el.ggId="casa";
		el.ggDx=-7.49;
		el.ggDy=12.82;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 88px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 88px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._casa.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._casa.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node2"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._casa.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._casa.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._casa.style[domTransition]='';
				if (me._casa.ggCurrentLogicStateVisible == 0) {
					me._casa.style.visibility=(Number(me._casa.style.opacity)>0||!me._casa.style.opacity)?'inherit':'hidden';
					me._casa.ggVisible=true;
				}
				else {
					me._casa.style.visibility="hidden";
					me._casa.ggVisible=false;
				}
			}
		}
		me._casa.onclick=function (e) {
			if (me._casa_1.ggApiPlayer) {
				if (me._casa_1.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._casa_1.ggApiPlayer.playVideo();
					};
					if (me._casa_1.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._casa_1.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._casa_1.ggApiPlayerType == 'vimeo') {
					me._casa_1.ggApiPlayer.play();
				}
			} else {
				player.playSound("casa_1","1");
			}
			me._casa.style[domTransition]='none';
			me._casa.style.visibility='hidden';
			me._casa.ggVisible=false;
			me._jardinesn36.style[domTransition]='none';
			me._jardinesn36.style.visibility='hidden';
			me._jardinesn36.ggVisible=false;
			me._jardinesn44.style[domTransition]='none';
			me._jardinesn44.style.visibility='hidden';
			me._jardinesn44.ggVisible=false;
			me._jardinesn52.style[domTransition]='none';
			me._jardinesn52.style.visibility='hidden';
			me._jardinesn52.ggVisible=false;
			me._jardinesn36_1.ggInitMedia('');
			me._jardinesn36_1.style[domTransition]='none';
			me._jardinesn36_1.style.visibility='hidden';
			me._jardinesn36_1.ggVisible=false;
			me._jardinesn44_1.ggInitMedia('');
			me._jardinesn44_1.style[domTransition]='none';
			me._jardinesn44_1.style.visibility='hidden';
			me._jardinesn44_1.ggVisible=false;
			me._jardinesn52_1.ggInitMedia('');
			me._jardinesn52_1.style[domTransition]='none';
			me._jardinesn52_1.style.visibility='hidden';
			me._jardinesn52_1.ggVisible=false;
		}
		me._casa.onmouseover=function (e) {
			me._casa__img.src=me._casa__img.ggOverSrc;
		}
		me._casa.onmouseout=function (e) {
			me._casa__img.src=me._casa__img.ggNormalSrc;
		}
		me._casa.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._casa);
		el=me._volar=document.createElement('div');
		me._volar.seekbars = [];
		me._volar.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._volar.seekbars.length; i++) {
					var seekbar = me.findElements(me._volar.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._volar.hasChildNodes()) {
				me._volar.removeChild(me._volar.lastChild);
			}
			if (me._volar__vid) {
				me._volar__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._volar.ggVideoNotLoaded ==false && me._volar.ggDeactivate) { me._volar.ggDeactivate(); }
				me._volar.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('volar');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._volar.ggVideoNotLoaded = false;
			me._volar__vid=document.createElement('video');
			me._volar__vid.className='ggskin ggskin_video';
			me._volar__vid.setAttribute('width', '100%');
			me._volar__vid.setAttribute('height', '100%');
			me._volar__vid.setAttribute('controlsList', 'nodownload');
			me._volar__vid.setAttribute('oncontextmenu', 'return false;');
			me._volar__source=document.createElement('source');
			me._volar__vid.setAttribute('poster', 'media/tierra.jpg');
			me._volar__source.setAttribute('src', media);
			me._volar__vid.setAttribute('playsinline', 'playsinline');
			me._volar__vid.setAttribute('style', ';');
			me._volar__vid.style.outline = 'none';
			me._volar__vid.appendChild(me._volar__source);
			me._volar.appendChild(me._volar__vid);
			var videoEl = player.registerVideoElement('volar', me._volar__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			if (me._volar.ggMediaEnded) {
				me._volar__vid.addEventListener('ended', me._volar.ggMediaEnded);
			}
			me._volar.ggVideoSource = media;
		}
		el.ggId="volar";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._volar.ggIsActive=function() {
			if (me._volar__vid != null) {
				return (me._volar__vid.paused == false && me._volar__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._volar.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._volar.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._volar.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._volar.style[domTransition]='';
				if (me._volar.ggCurrentLogicStateVisible == 0) {
					me._volar.style.visibility=(Number(me._volar.style.opacity)>0||!me._volar.style.opacity)?'inherit':'hidden';
					if (me._volar.ggVideoNotLoaded) {
						me._volar.ggInitMedia(me._volar.ggVideoSource);
					}
					me._volar.ggVisible=true;
				}
				else {
					me._volar.style.visibility="hidden";
					me._volar.ggInitMedia('');
					me._volar.ggVisible=false;
				}
			}
		}
		me._volar.ggMediaEnded=function () {
			me._volar.ggInitMedia('');
			me._volar.style[domTransition]='none';
			me._volar.style.visibility='hidden';
			me._volar.ggVisible=false;
			player.openNext("{node2}","");
		}
		me._volar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._volar);
		el=me._button_1=document.createElement('div');
		els=me._button_1__img=document.createElement('img');
		els.className='ggskin ggskin_button_1';
		hs=basePath + 'images/button_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/button_1__o.png';
		me._button_1__img.ggOverSrc=hs;
		el.ggId="Button 1";
		el.ggDx=29.75;
		el.ggDy=31.86;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 190px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 270px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node1"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_1.style[domTransition]='';
				if (me._button_1.ggCurrentLogicStateVisible == 0) {
					me._button_1.style.visibility=(Number(me._button_1.style.opacity)>0||!me._button_1.style.opacity)?'inherit':'hidden';
					me._button_1.ggVisible=true;
				}
				else {
					me._button_1.style.visibility="hidden";
					me._button_1.ggVisible=false;
				}
			}
		}
		me._button_1.onclick=function (e) {
			me._button_1.style[domTransition]='none';
			me._button_1.style.visibility='hidden';
			me._button_1.ggVisible=false;
			player.enterFullscreen();
			if (me._volar.ggApiPlayer) {
				if (me._volar.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._volar.ggApiPlayer.playVideo();
					};
					if (me._volar.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._volar.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._volar.ggApiPlayerType == 'vimeo') {
					me._volar.ggApiPlayer.play();
				}
			} else {
				player.playSound("volar","1");
			}
		}
		me._button_1.onmouseover=function (e) {
			me._button_1__img.src=me._button_1__img.ggOverSrc;
		}
		me._button_1.onmouseout=function (e) {
			me._button_1__img.src=me._button_1__img.ggNormalSrc;
		}
		me._button_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._button_1);
		el=me._button_zoom=document.createElement('div');
		el.ggId="button_zoom";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 230px;';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_zoom.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_zoom.ggUpdatePosition=function (useTransition) {
		}
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8cGF0aCBkPS'+
			'JNLTE0My4yLDM4Ny41YzEuMSwwLDEuNiwwLjUsMS42LDEuOHYxNS41YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTYzLjUmI3hkOyYjeGE7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjVjMC0xLjMsMC41LTEuOCwxLjYtMS44SC0xNDMuMnoiIGZpbGw9IiNGRkZGRkYiLz4KIDxwYXRoIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2LjEsNTYuMXM1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45eiYjeGQ7JiN4YTsmI3g5OyBN'+
			'LTE0MS42LDQwNC43YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTYzLjVjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjUmI3hkOyYjeGE7JiN4OTtjMC0xLjMsMC41LTEuOCwxLjYtMS44aDYzLjVjMS4xLDAsMS42LDAuNSwxLjYsMS44VjQwNC43eiIgZmlsbD0iIzAwMDAwMCIvPgo8L3N2Zz4K';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8cGF0aCBkPS'+
			'JNLTEzOS43LDM4Ni40YzEuMiwwLDEuOCwwLjYsMS44LDJ2MTcuMmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtNzAuNiYjeGQ7JiN4YTsmI3g5O2MtMC40LDAtMC44LTAuMi0xLjItMC42Yy0wLjQtMC40LTAuNi0wLjgtMC42LTEuNHYtMTcuMmMwLTEuNCwwLjYtMiwxLjgtMkgtMTM5Ljd6IiBmaWxsPSIjRkZGRkZGIi8+CiA8cGF0aCBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6JiN4ZDsmI3hhOyYjeDk7IE0tMTM3'+
			'LjksNDA1LjZjMCwwLjYtMC4yLDEtMC42LDEuNGMtMC40LDAuNC0wLjgsMC42LTEuMiwwLjZoLTcwLjZjLTAuNCwwLTAuOC0wLjItMS4yLTAuNnMtMC42LTAuOC0wLjYtMS40di0xNy4yJiN4ZDsmI3hhOyYjeDk7YzAtMS40LDAuNi0yLDEuOC0yaDcwLjZjMS4yLDAsMS44LDAuNiwxLjgsMlY0MDUuNnoiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+Cg==';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
		}
		me._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		me._button_zoom.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xNDEuNiw0MDQuN2MwLDAuNS0wLjIsMC45LTAuNSwxLjNjLTAuNCwwLjQtMC43LDAuNS0xLjEsMC41aC0yMi4zdjIyLjFjMCwwLjUtMC4yLDAuOS0wLjUsMS4zYy0wLjQsMC40LTAuNywwLjUtMS4xLDAuNWgtMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjVjLTAuNC0wLjQtMC41LTAuNy0wLjUtMS4zdi0y'+
			'Mi4xaC0yMi4zYy0wLjQsMC0wLjctMC4yLTEuMS0wLjVjLTAuNC0wLjQtMC41LTAuNy0wLjUtMS4zdi0xNS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjMsMC41LTEuOCwxLjYtMS44aDIyLjN2LTIyLjFjMC0xLjMsMC41LTEuOCwxLjYtMS44aDE1LjdjMS4xLDAsMS42LDAuNSwxLjYsMS44djIyLjFoMjIuM2MxLjEsMCwxLjYsMC41LDEuNiwxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTQxLjYsMzg5LjMtMTQxLjYsNDA0LjctMTQxLjYsNDA0Ljd6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNjUuNSwzODcuNWgyMi4zYzEuMSwwLDEuNi'+
			'wwLjUsMS42LDEuOHYxNS41YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTIyLjN2MjIuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTE1LjdjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTIyLjFoLTIyLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC43LTAuMi0xLjEtMC41Yy0wLjQtMC40LTAuNS0wLjctMC41LTEuM3YtMTUuNWMwLTEuMywwLjUtMS44LDEuNi0xLjhoMjIuM3YtMjIuMWMwLTEuMywwLjUtMS44LDEuNi0xLjho'+
			'MTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMSwwLDEuNiwwLjUsMS42LDEuOFYzODcuNXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTM3LjksNDA1LjZjMCwwLjYtMC4yLDEtMC42LDEuNGMtMC40LDAuNC0wLjgsMC42LTEuMiwwLjZoLTI0Ljh2MjQuNmMwLDAuNi0wLjIsMS0wLjYsMS40cy0wLjgsMC42LTEuMiwwLjZoLTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC44LTAuMi0xLjItMC42Yy0wLjQtMC40LTAuNi0wLjgtMC42LTEuNHYtMjQuNmgtMjQu'+
			'OGMtMC40LDAtMC44LTAuMi0xLjItMC42cy0wLjYtMC44LTAuNi0xLjR2LTE3LjJjMC0xLjQsMC42LTIsMS44LTImI3hkOyYjeGE7JiN4OTsmI3g5O2gyNC44di0yNC42YzAtMS40LDAuNi0yLDEuOC0yaDE3LjRjMS4yLDAsMS44LDAuNiwxLjgsMnYyNC42aDI0LjhjMS4yLDAsMS44LDAuNiwxLjgsMkMtMTM3LjksMzg4LjQtMTM3LjksNDA1LjYtMTM3LjksNDA1LjZ6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNjQuNSwzODYuNGgyNC44YzEuMiwwLDEuOCwwLjYsMS44LDJ2MTcuMmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOC'+
			'wwLjYtMS4yLDAuNmgtMjQuOHYyNC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjYtMC4yLDEtMC42LDEuNHMtMC44LDAuNi0xLjIsMC42aC0xNy40Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZjLTAuNC0wLjQtMC42LTAuOC0wLjYtMS40di0yNC42aC0yNC44Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjYmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC42LTAuOC0wLjYtMS40di0xNy4yYzAtMS40LDAuNi0yLDEuOC0yaDI0Ljh2LTI0LjZjMC0xLjQsMC42LTIsMS44LTJoMTcuNGMxLjIsMCwxLjgsMC42LDEuOCwyVjM4Ni40eiIgZmlsbD0iI0ZGRkZGRiIvPgogPC9nPgo8L3N2Zz4K';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
		}
		me._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		me._button_zoom.appendChild(me._zoomin);
		me.divSkin.appendChild(me._button_zoom);
		el=me._button_auto_rotate=document.createElement('div');
		el.ggId="button_auto_rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 192px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_auto_rotate.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_auto_rotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._button_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._stop_rotate_image=document.createElement('div');
		els=me._stop_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFTLTE0NCwzNDAuOS0xNzUsMzQwLjl6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xOTYuMSwzNzAuNGM1LjgtNC42LDEzLjEtNy40LDIxLjEtNy40YzcuNywwLDE0LjksMi42LDIwLjYsN2wtNi40LDYuNGMtNC0yLjgtOC45LTQuNC0xNC4yLTQuNGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNiwwLjUtMS40LDAuNC0yLTAuMmMtMC41LTAuNS0zLjEtMy41LTQtNC40Qy0xOTYuOSwzNzIt'+
			'MTk2LjgsMzcxLTE5Ni4xLDM3MC40eiBNLTIxNy4yLDM5N2MtMC41LDAtMC44LTAuMi0xLjEtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMy0wLjUtMC4yLTEsMC4xLTEuM2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZjMC40LDAsMC43LDAuMiwxLDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNS0wLjYsMC43LTEuMSwwLjdoLTcuNmgtMC42YzAsNS4yLDEuNywxMC4xLDQuNSwxNC4xbC02LjQsNi40Yy00LjQtNS43LTctMTIuOC03LjEtMjAuNWgtMC41SC0yMTcuMnogTS0yMDcuMiw0MzIuMyYjeGQ7JiN4YT'+
			'smI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NmMwLjMtMC4zLDAuNy0wLjQsMS4xLTAuNHMwLjgsMC4xLDEuMSwwLjRsMS43LDEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZDLTIwNi40LDQzMi4yLTIwNi44LDQzMi4zLTIwNy4yLDQzMi4zeiBNLTE1My45LDQyMy4zYy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTcuNywwLTE0LjgtMi42LTIwLjUtNi45bDYuNC02LjRjNCwyLjcsOC44LDQuMywxNCw0LjNjNS44LDAsMTEuMS0yLDE1'+
			'LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTUzLjEsNDIxLjgtMTUzLjIsNDIyLjgtMTUzLjksNDIzLjN6IE0tMTQ0LjUsNDE2LjljLTAuMywwLjQtMC42LDAuNi0xLjEsMC42Yy0wLjQsMC0wLjctMC4yLTEtMC42bC0xMi44LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNC0wLjQtMC45LTAuMS0xLjNjMC4zLTAuNSwwLjYtMC43LDEuMS0wLjdoNy42aDAuN2MwLTUuMy0xLjYtMTAuMS00LjQtMTQuMmw2LjQtNi40YzQuNCw1LjcsNywxMi45LDcsMjAuNmgwLjVoNy43JiN4ZDsmI3hhOyYjeDk7JiN4OT'+
			'tjMC41LDAsMC44LDAuMiwxLjEsMC43YzAuMywwLjUsMC4yLDEtMC4xLDEuM0wtMTQ0LjUsNDE2Ljl6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNDIuOCwzNjEuN2MwLjQsMCwwLjgsMC4xLDEuMSwwLjRsMS43LDEuN2MwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTY2LDY2Yy0wLjMsMC4zLTAuNywwLjQtMS4xLDAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NkMtMTQzLjYsMzYxLjgtMTQzLjIsMzYxLjctMTQyLjgsMzYxLjciIGZpbGw9IiNG'+
			'RkZGRkYiLz4KICA8Zz4KICAgPHBhdGggZD0iTS0xOTIuMywzNzcuMWMwLjYsMC42LDEuNCwwLjYsMiwwLjJjNC4yLTMuMyw5LjUtNS4zLDE1LjMtNS4zYzUuMywwLDEwLjEsMS42LDE0LjIsNC40bDYuNC02LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy01LjctNC40LTEyLjktNy0yMC42LTdjLTgsMC0xNS4zLDIuOC0yMS4xLDcuNGMtMC43LDAuNS0wLjgsMS42LTAuMSwyLjNDLTE5NS40LDM3My43LTE5Mi44LDM3Ni42LTE5Mi4zLDM3Ny4xeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTEzMS43LDM5Ny43Yy0wLjMtMC41LTAuNi0wLjctMS4xLTAuN2gtNy43aC0wLjVjMC03Lj'+
			'ctMi42LTE0LjktNy0yMC42bC02LjQsNi40YzIuOCw0LDQuNCw4LjksNC40LDE0LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aC0wLjdoLTcuNmMtMC41LDAtMC44LDAuMi0xLjEsMC43Yy0wLjMsMC41LTAuMiwxLDAuMSwxLjNsMTIuOCwxNy44YzAuMywwLjQsMC42LDAuNiwxLDAuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjZsMTIuNy0xNy44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTMxLjUsMzk4LjYtMTMxLjQsMzk4LjItMTMxLjcsMzk3Ljd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNLTIwOSwzOTdjMC4xLDcuNywyLjcsMTQuOCw3LjEsMjAuNWw2'+
			'LjQtNi40Yy0yLjgtNC00LjUtOC44LTQuNS0xNC4xaDAuNmg3LjZjMC41LDAsMC44LTAuMiwxLjEtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMtMC41LDAuMi0xLTAuMS0xLjNsLTEyLjgtMTcuOGMtMC4zLTAuNC0wLjYtMC42LTEtMC42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywwLjUsMC42LDAuNywxLjEsMC43aDcuN0gtMjA5eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE1Ny43LDQxNi42Yy0wLjYtMC42LTEuNC0wLjYtMi0wLjJjLTQuMiwzLjMtOS'+
			'41LDUuMy0xNS4zLDUuM2MtNS4yLDAtMTAtMS42LTE0LTQuM2wtNi40LDYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNS43LDQuMywxMi44LDYuOSwyMC41LDYuOWM4LDAsMTUuMy0yLjgsMjEuMS03LjRjMC43LTAuNSwwLjgtMS42LDAuMS0yLjNDLTE1NC42LDQyMC4xLTE1Ny4yLDQxNy4xLTE1Ny43LDQxNi42eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._stop_rotate_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stop_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTk4LjUsMzY3LjVjNi40LTUuMSwxNC42LTguMiwyMy41LTguMmM4LjYsMCwxNi41LDIuOSwyMi45LDcuOGwtNy4yLDcuMmMtNC41LTMuMS05LjktNC45LTE1LjctNC45Yy02LjQsMC0xMi4zLDIuMi0xNyw1LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LDAuNS0xLjYsMC40LTIuMi0wLjJjLTAuNi0wLjYtMy41LTMuOC00LjQtNC45'+
			'Qy0xOTkuMywzNjkuMi0xOTkuMywzNjguMS0xOTguNSwzNjcuNXogTS0yMjEuOSwzOTdjLTAuNSwwLTAuOS0wLjItMS4yLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC41LTAuMi0xLjEsMC4xLTEuNWwxNC4xLTE5LjhjMC4zLTAuNCwwLjYtMC42LDEuMi0wLjZjMC40LDAsMC43LDAuMiwxLjEsMC42bDE0LjIsMTkuOGMwLjMsMC40LDAuNCwxLDAuMSwxLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNS0wLjYsMC43LTEuMiwwLjdoLTguNWgtMC43YzAuMSw1LjgsMS45LDExLjIsNSwxNS42bC03LjEsNy4xYy00LjktNi4zLTcuOC0xNC4yLTcuOS0yMi44aC0wLjZILTIyMS45eiBNLT'+
			'IxMC43LDQzNi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40bDczLjMtNzMuM2MwLjMtMC4zLDAuOC0wLjUsMS4yLTAuNXMwLjksMC4yLDEuMiwwLjVsMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zQy0yMDkuOSw0MzYuMS0yMTAuMyw0MzYuMy0yMTAuNyw0MzYuM3ogTS0xNTEuNSw0MjYuM2MtNi40LDUuMS0xNC42LDguMi0yMy41LDguMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy04LjUsMC0xNi40LTIuOS0yMi44LTcuN2w3LjItNy4yYzQuNCwzLDku'+
			'OCw0LjgsMTUuNiw0LjhjNi40LDAsMTIuMy0yLjIsMTctNS45YzAuNy0wLjUsMS42LTAuNCwyLjIsMC4yYzAuNiwwLjYsMy41LDMuOCw0LjQsNC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE1MC43LDQyNC41LTE1MC43LDQyNS43LTE1MS41LDQyNi4zeiBNLTE0MS4xLDQxOS4xYy0wLjMsMC40LTAuNiwwLjYtMS4yLDAuNmMtMC40LDAtMC43LTAuMi0xLjEtMC42bC0xNC4yLTE5LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNC0wLjQtMS0wLjEtMS41YzAuMy0wLjUsMC42LTAuNywxLjItMC43aDguNGgwLjdjMC01LjgtMS44LTExLjMtNC45LTE1LjdsNy4yLTcuMmM0LjksNi40LDcuOCwxNC'+
			'4zLDcuOCwyMi45aDAuNmg4LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjUsMCwwLjksMC4yLDEuMiwwLjdjMC4zLDAuNSwwLjIsMS4xLTAuMSwxLjVMLTE0MS4xLDQxOS4xeiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTM5LjMsMzU3LjdjMC40LDAsMC45LDAuMiwxLjIsMC41bDEuOCwxLjhjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjNjLTAuMywwLjMtMC44LDAuNS0xLjIsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40bDczLjMtNzMuM0MtMTQw'+
			'LjEsMzU3LjktMTM5LjcsMzU3LjctMTM5LjMsMzU3LjciIGZpbGw9IiNGRkZGRkYiLz4KICA8Zz4KICAgPHBhdGggZD0iTS0xOTQuMiwzNzQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWM1LjgsMCwxMS4zLDEuOCwxNS43LDQuOWw3LjItNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNi40LTQuOS0xNC4zLTcuOC0yMi45LTcuOGMtOC45LDAtMTcsMy4xLTIzLjUsOC4yYy0wLjgsMC42LTAuOCwxLjgtMC4yLDIuNkMtMTk3LjcsMzcxLjEtMTk0LjgsMzc0LjQtMTk0LjIsMzc0Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTI2Lj'+
			'ksMzk3LjdjLTAuMy0wLjUtMC42LTAuNy0xLjItMC43aC04LjZoLTAuNmMwLTguNi0yLjktMTYuNS03LjgtMjIuOWwtNy4yLDcuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMy4xLDQuNSw0LjksOS45LDQuOSwxNS43aC0wLjdoLTguNGMtMC41LDAtMC45LDAuMi0xLjIsMC43Yy0wLjMsMC41LTAuMiwxLjEsMC4xLDEuNWwxNC4yLDE5LjhjMC4zLDAuNCwwLjYsMC42LDEuMSwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNSwwLDAuOS0wLjIsMS4yLTAuNmwxNC4xLTE5LjhDLTEyNi43LDM5OC44LTEyNi42LDM5OC4zLTEyNi45LDM5Ny43eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4K'+
			'ICA8Zz4KICAgPHBhdGggZD0iTS0yMTIuNywzOTdjMC4xLDguNiwzLDE2LjUsNy45LDIyLjhsNy4xLTcuMWMtMy4xLTQuNC01LTkuOC01LTE1LjZoMC43aDguNWMwLjUsMCwwLjktMC4yLDEuMi0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMy0wLjUsMC4yLTEuMS0wLjEtMS41bC0xNC4yLTE5LjhjLTAuMy0wLjQtMC42LTAuNi0xLjEtMC42Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjZsLTE0LjEsMTkuOGMtMC4zLDAuNC0wLjQsMS0wLjEsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMsMC41LDAuNiwwLjcsMS4yLDAuN2g4LjZILTIxMi43eiIgZmlsbD0iI0ZGRkZGRiIvPgogIC'+
			'A8cGF0aCBkPSJNLTE1NS44LDQxOC44Yy0wLjYtMC42LTEuNS0wLjctMi4yLTAuMmMtNC43LDMuNy0xMC42LDUuOS0xNyw1LjljLTUuOCwwLTExLjEtMS44LTE1LjYtNC44bC03LjIsNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M2LjMsNC44LDE0LjIsNy43LDIyLjgsNy43YzguOSwwLDE3LTMuMSwyMy41LTguMmMwLjgtMC42LDAuOC0xLjgsMC4yLTIuNkMtMTUyLjMsNDIyLjYtMTU1LjIsNDE5LjQtMTU1LjgsNDE4Ljh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._stop_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="stop_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stop_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stop_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stop_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stop_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stop_rotate_image.style[domTransition]='';
				if (me._stop_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._stop_rotate_image.style.visibility=(Number(me._stop_rotate_image.style.opacity)>0||!me._stop_rotate_image.style.opacity)?'inherit':'hidden';
					me._stop_rotate_image.ggVisible=true;
				}
				else {
					me._stop_rotate_image.style.visibility="hidden";
					me._stop_rotate_image.ggVisible=false;
				}
			}
		}
		me._stop_rotate_image.onmouseover=function (e) {
			me._stop_rotate_image__img.style.visibility='hidden';
			me._stop_rotate_image__imgo.style.visibility='inherit';
		}
		me._stop_rotate_image.onmouseout=function (e) {
			me._stop_rotate_image__img.style.visibility='inherit';
			me._stop_rotate_image__imgo.style.visibility='hidden';
		}
		me._stop_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._stop_rotate_image);
		el=me._start_rotate_image=document.createElement('div');
		els=me._start_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE1My45LDQyMy42Yy01LjgsNC42LTEzLjEsNy40LTIxLjEsNy40aDBjLTE4LjcsMC0zNC0xNS4yLTM0LTM0aC0wLjVoLTcuN2MtMC41LDAtMC44LTAuMi0xLjEtMC43Yy0wLjMtMC41LTAuMi0xLDAuMS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxMi43LTE3LjhjMC4zLTAuNCwwLjYtMC42LDEuMS0wLjZjMC40LDAsMC43LDAuMiwx'+
			'LDAuNmwxMi44LDE3LjhjMC4zLDAuNCwwLjQsMC45LDAuMSwxLjNjLTAuMywwLjUtMC42LDAuNy0xLjEsMC43aC03LjZoLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMTMuOCwxMS4yLDI1LDI1LDI1aDBjNS44LDAsMTEuMS0yLDE1LjMtNS4zYzAuNi0wLjUsMS40LTAuNCwyLDAuMmMwLjUsMC41LDMuMSwzLjUsNCw0LjRDLTE1My4xLDQyMi0xNTMuMiw0MjMuMS0xNTMuOSw0MjMuNnomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE3OSwzOTdjMC0yLjIsMS44LTQsNC00YzIuMiwwLDQsMS44LDQsNGMwLDIuMi0xLjgsNC00LDRDLTE3Ny4yLDQwMS0xNzksMzk5LjItMTc5LDM5N3ogTS0xNDQuNSw0MT'+
			'YuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC40LTAuNiwwLjYtMS4xLDAuNmMtMC40LDAtMC43LTAuMi0xLTAuNmwtMTIuOC0xNy44Yy0wLjMtMC40LTAuNC0wLjktMC4xLTEuM2MwLjMtMC41LDAuNi0wLjcsMS4xLTAuN2g3LjZoMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xMy44LTExLjItMjUtMjUtMjVoMGMtNS44LDAtMTEuMSwyLTE1LjMsNS4zYy0wLjYsMC41LTEuNCwwLjQtMi0wLjJjLTAuNS0wLjUtMy4xLTMuNS00LTQuNGMtMC42LTAuNy0wLjYtMS44LDAuMS0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2M1LjgtNC42LDEzLjEtNy40LDIxLjEtNy40aDBjMTguNywwLDM0LDE1LjIs'+
			'MzQsMzRoMC41aDcuN2MwLjUsMCwwLjgsMC4yLDEuMSwwLjdjMC4zLDAuNSwwLjIsMS0wLjEsMS4zTC0xNDQuNSw0MTYuOXoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE1My43LDQyMS4zYy0wLjgtMC45LTMuNS0zLjktNC00LjRjLTAuNi0wLjYtMS40LTAuNi0yLTAuMmMtNC4yLDMuMy05LjUsNS4zLTE1LjMsNS4zaDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMTMuOCwwLTI1LTExLjItMjUtMjVoMC43aDcuNmMwLjUsMCwwLjgtMC4yLDEuMS0wLjdjMC4zLTAuNSwwLjItMS0wLjEtMS4zbC0xMi44LTE3LjhjLTAuMy0wLjQtMC42LTAuNi0xLT'+
			'AuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjZsLTEyLjcsMTcuOGMtMC4zLDAuNC0wLjQsMC45LTAuMSwxLjNjMC4zLDAuNSwwLjYsMC43LDEuMSwwLjdoNy43aDAuNWMwLDE4LjcsMTUuMiwzNCwzNCwzNGgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjOCwwLDE1LjMtMi44LDIxLjEtNy40Qy0xNTMuMiw0MjMuMS0xNTMuMSw0MjItMTUzLjcsNDIxLjN6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPHBhdGggZD0iTS0xMzEuNywzOTcuN2MtMC4zLTAuNS0wLjYtMC43LTEuMS0wLjdoLTcuN2gtMC41YzAtMTguNy0xNS4yLTM0LTM0LTM0aDBjLTgsMC0xNS4zLDIuOC0yMS4xLDcu'+
			'NCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjcsMC41LTAuOCwxLjYtMC4xLDIuM2MwLjgsMC45LDMuNSwzLjksNCw0LjRjMC42LDAuNiwxLjQsMC42LDIsMC4yYzQuMi0zLjMsOS41LTUuMywxNS4zLTUuM2gwYzEzLjgsMCwyNSwxMS4yLDI1LDI1aC0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2gtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMxLjUsMzk4LjctMTMxLjQsMzk4LjItMTMxLjcsMzk3Ljd6Ii'+
			'BmaWxsPSIjRkZGRkZGIi8+CiAgPGNpcmNsZSBjeT0iMzk3IiBmaWxsPSIjRkZGRkZGIiBjeD0iLTE3NSIgcj0iNCIvPgogPC9nPgo8L3N2Zz4K';
		me._start_rotate_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjdjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjctMTc1LDMzNC43eiBNLTE1MS41LDQyNi42Yy02LjQsNS4xLTE0LjYsOC4yLTIzLjUsOC4yaDBjLTIwLjgsMC0zNy43LTE2LjktMzcuNy0zNy43aC0wLjZoLTguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4yLTEuMi0wLjdjLTAuMy0wLjUtMC4yLTEuMSwwLjEtMS41bDE0LjEtMTkuOGMwLjMtMC40LDAuNi0wLjYsMS4yLTAuNmMw'+
			'LjQsMCwwLjcsMC4yLDEuMSwwLjZsMTQuMiwxOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuNCwwLjQsMSwwLjEsMS41Yy0wLjMsMC41LTAuNiwwLjctMS4yLDAuN2gtOC40aC0wLjdjMCwxNS4zLDEyLjQsMjcuNywyNy43LDI3LjdoMGM2LjQsMCwxMi4zLTIuMiwxNy01LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjctMC41LDEuNi0wLjQsMi4yLDAuMmMwLjYsMC42LDMuNSwzLjgsNC40LDQuOUMtMTUwLjcsNDI0LjgtMTUwLjcsNDI2LTE1MS41LDQyNi42eiBNLTE3OS40LDM5N2MwLTIuNCwyLTQuNCw0LjQtNC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi40LDAsNC40LDIsNC40LDQuNGMwLD'+
			'IuNC0yLDQuNC00LjQsNC40Qy0xNzcuNCw0MDEuNC0xNzkuNCwzOTkuNS0xNzkuNCwzOTd6IE0tMTQxLjEsNDE5LjFjLTAuMywwLjQtMC42LDAuNi0xLjIsMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNmwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNC0xLTAuMS0xLjVjMC4zLTAuNSwwLjYtMC43LDEuMi0wLjdoOC40aDAuN2MwLTE1LjMtMTIuNC0yNy43LTI3LjctMjcuN2gwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYuNCwwLTEyLjMsMi4yLTE3LDUuOWMtMC43LDAuNS0xLjYsMC40LTIuMi0wLjJjLTAuNi0wLjYtMy41LTMuOC00LjQtNC45Yy0wLjctMC44LTAuNi0y'+
			'LDAuMi0yLjZjNi40LTUuMSwxNC42LTguMiwyMy41LTguMmgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMjAuOCwwLDM3LjcsMTYuOSwzNy43LDM3LjdoMC42aDguNmMwLjUsMCwwLjksMC4yLDEuMiwwLjdjMC4zLDAuNSwwLjIsMS4xLTAuMSwxLjVMLTE0MS4xLDQxOS4xeiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTUxLjQsNDI0Yy0wLjktMS0zLjktNC4zLTQuNC00LjljLTAuNi0wLjYtMS41LTAuNy0yLjItMC4yYy00LjcsMy43LTEwLjYsNS45LTE3LDUuOWgwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTE1LjMsMC0yNy43LTEyLjQtMjcuNy0yNy'+
			'43aDAuN2g4LjRjMC41LDAsMC45LTAuMiwxLjItMC43czAuMi0xLjEtMC4xLTEuNWwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNi0wLjYtMS4xLTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjZsLTE0LjEsMTkuOGMtMC4zLDAuNC0wLjQsMS0wLjEsMS41YzAuMywwLjUsMC42LDAuNywxLjIsMC43aDguNmgwLjZjMCwyMC44LDE2LjksMzcuNywzNy43LDM3LjdoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzguOSwwLDE3LTMuMSwyMy41LTguMkMtMTUwLjcsNDI2LTE1MC43LDQyNC44LTE1MS40LDQyNHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8cGF0aCBkPSJNLTEyNi45LDM5'+
			'Ny44Yy0wLjMtMC41LTAuNi0wLjctMS4yLTAuN2gtOC42aC0wLjZjMC0yMC44LTE2LjktMzcuNy0zNy43LTM3LjdoMGMtOC45LDAtMTcsMy4xLTIzLjUsOC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42YzAuOSwxLDMuOSw0LjMsNC40LDQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWgwYzE1LjMsMCwyNy43LDEyLjQsMjcuNywyNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTtoLTAuN2gtOC40Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjdjLTAuMywwLjUtMC4yLDEuMSwwLjEsMS41bDE0LjIsMTkuOGMwLjMsMC40LDAuNiwwLj'+
			'YsMS4xLDAuNmMwLjUsMCwwLjktMC4yLDEuMi0wLjZsMTQuMS0xOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEyNi43LDM5OC45LTEyNi42LDM5OC4zLTEyNi45LDM5Ny44eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDxjaXJjbGUgY3k9IjM5NyIgZmlsbD0iI0ZGRkZGRiIgY3g9Ii0xNzUiIHI9IjQuNCIvPgogPC9nPgo8L3N2Zz4K';
		me._start_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="start_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._start_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_rotate_image.style[domTransition]='';
				if (me._start_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._start_rotate_image.style.visibility="hidden";
					me._start_rotate_image.ggVisible=false;
				}
				else {
					me._start_rotate_image.style.visibility=(Number(me._start_rotate_image.style.opacity)>0||!me._start_rotate_image.style.opacity)?'inherit':'hidden';
					me._start_rotate_image.ggVisible=true;
				}
			}
		}
		me._start_rotate_image.onmouseover=function (e) {
			me._start_rotate_image__img.style.visibility='hidden';
			me._start_rotate_image__imgo.style.visibility='inherit';
		}
		me._start_rotate_image.onmouseout=function (e) {
			me._start_rotate_image__img.style.visibility='inherit';
			me._start_rotate_image__imgo.style.visibility='hidden';
		}
		me._start_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._start_rotate_image);
		me.divSkin.appendChild(me._button_auto_rotate);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 162px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHg9Ii0yMDYuMiIgd2lkdGg9IjMyLjEiIGhlaWdodD0iMjIuMiIgeT0iMzk3IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExOC45LDM2Ni0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE2OC42LDQyMC4zYzAsMi4zLTEuOSw0LjItNC4yLDQuMmgtMzQuNWMtMi4zLDAtNC4yLTEuOS00LjItNC4ydi0yNC41YzAtMi4zLDEuOS00LjIsNC4yLTQu'+
			'MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtoMzQuNWMyLjMsMCw0LjIsMS45LDQuMiw0LjJMLTE2OC42LDQyMC4zTC0xNjguNiw0MjAuM3ogTS0xMzYuOCwzNzIuNmwtMTcuNSwxMi42Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsMC43LDAuOWwzLjMsNC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjIsMC4zLDAuMiwwLjUsMC4xLDAuOWMtMC4yLDAuNC0wLjUsMC41LTAuOCwwLjVsLTE2LjIsMC4xYy0wLjQsMC0wLjYtMC4xLTAuOC0wLjRjLTAuMi0wLjItMC4yLTAuNS0wLjEtMC44bDUuMi0xNS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjEtMC4zLDAuNC0wLjYsMC44LTAuNmMwLj'+
			'QsMCwwLjcsMC4xLDAuOSwwLjNsMy4zLDQuNmwwLjYsMC44YzAsMCwwLjEtMC4xLDAuMS0wLjFsMTcuNS0xMi42YzAuNy0wLjUsMS42LTAuMywyLjEsMC40bDEuNCwxLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzUuOSwzNzEuMi0xMzYuMSwzNzIuMS0xMzYuOCwzNzIuNnoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTM2LjQsMzcwLjVsLTEuNC0xLjljLTAuNS0wLjctMS41LTAuOC0yLjEtMC40bC0xNy41LDEyLjZjLTAuMSwwLTAuMSwwLjEtMC4xLDAuMWwtMC42LTAuOGwtMy4zLTQuNiYjeGQ7JiN4YTsm'+
			'I3g5OyYjeDk7JiN4OTtjLTAuMi0wLjMtMC40LTAuNC0wLjktMC4zYy0wLjQsMC0wLjcsMC4zLTAuOCwwLjZsLTUuMiwxNS40Yy0wLjEsMC4zLTAuMSwwLjYsMC4xLDAuOGMwLjIsMC4zLDAuNCwwLjQsMC44LDAuNGwxNi4yLTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC43LTAuMSwwLjgtMC41YzAuMi0wLjQsMC4yLTAuNi0wLjEtMC45bC0zLjMtNC43bC0wLjctMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxNy41LTEyLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzYuMSwzNzIuMS0xMzUuOSwzNzEuMi0xMzYuNCwzNzAuNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPH'+
			'BhdGggZD0iTS0xNzIuOCwzOTEuNmgtMzQuNWMtMi4zLDAtNC4yLDEuOS00LjIsNC4ydjI0LjVjMCwyLjMsMS45LDQuMiw0LjIsNC4yaDM0LjVjMi4zLDAsNC4yLTEuOSw0LjItNC4ydi0yNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTY4LjYsMzkzLjUtMTcwLjUsMzkxLjYtMTcyLjgsMzkxLjZ6IE0tMTc0LDQxOS4yaC0zMi4xVjM5N2gzMi4xVjQxOS4yeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHg9Ii0yMDkuNiIgd2lkdGg9IjM1LjciIGhlaWdodD0iMjQuNiIgeT0iMzk3IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTExMi42LDM2Mi42LTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xNjcuOSw0MjIuOWMwLDIuNi0yLjEsNC43LTQuNyw0LjdoLTM4LjNjLTIuNiwwLTQuNy0yLjEtNC43LTQuN3YtMjcuMiYjeGQ7JiN4YTsm'+
			'I3g5OyYjeDk7JiN4OTtjMC0yLjYsMi4xLTQuNyw0LjctNC43aDM4LjNjMi42LDAsNC43LDIuMSw0LjcsNC43TC0xNjcuOSw0MjIuOUwtMTY3LjksNDIyLjl6IE0tMTMyLjUsMzY5LjlsLTE5LjUsMTRjLTAuMSwwLTAuMSwwLjEtMC4yLDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMC43LDFsMy43LDUuMmMwLjIsMC4zLDAuMiwwLjYsMC4xLDFjLTAuMiwwLjQtMC41LDAuNi0wLjksMC42bC0xOCwwLjFjLTAuNCwwLTAuNy0wLjEtMC45LTAuNGMtMC4yLTAuMy0wLjItMC41LTAuMS0wLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDUuOC0xNy4xYzAuMS0wLjQsMC40LTAuNywwLjgtMC43Yz'+
			'AuNSwwLDAuNywwLjEsMSwwLjRsMy42LDUuMWwwLjcsMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxOS41LTE0YzAuOC0wLjUsMS44LTAuNCwyLjQsMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wxLjUsMi4xQy0xMzEuNiwzNjguMy0xMzEuOCwzNjkuNC0xMzIuNSwzNjkuOXoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTMyLjEsMzY3LjVsLTEuNS0yLjFjLTAuNS0wLjgtMS42LTAuOS0yLjQtMC40bC0xOS41LDE0Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsLTAuNy0wLjlsLTMuNi01LjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5OyYjeDk7Yy0wLjItMC4zLTAuNS0wLjQtMS0wLjRjLTAuNSwwLTAuNywwLjMtMC44LDAuN2wtNS44LDE3LjFjLTAuMSwwLjQtMC4xLDAuNywwLjEsMC45YzAuMiwwLjMsMC41LDAuNCwwLjksMC40bDE4LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC44LTAuMiwwLjktMC42YzAuMi0wLjQsMC4yLTAuNy0wLjEtMWwtMy43LTUuMmwtMC43LTFjMC4xLDAsMC4xLTAuMSwwLjItMC4xbDE5LjUtMTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzEuOCwzNjkuNC0xMzEuNiwzNjguMy0xMzIuMSwzNjcuNXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNz'+
			'IuNiwzOTFoLTM4LjNjLTIuNiwwLTQuNywyLjEtNC43LDQuN3YyNy4yYzAsMi42LDIuMSw0LjcsNC43LDQuN2gzOC4zYzIuNiwwLDQuNy0yLjEsNC43LTQuN3YtMjcuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE2Ny45LDM5My4xLTE3MCwzOTEtMTcyLjYsMzkxeiBNLTE3My45LDQyMS42aC0zNS43VjM5N2gzNS43VjQyMS42eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.onmouseover=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
		}
		me._button_image_normalscreen.onmouseout=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMjA2LjIsNDE5LjJoNjIuM3YtNDQuM2gtNjIuM1Y0MTkuMnogTS0xNzguOSwzOTcuM2MwLDAsMTcuNy0xMi43LDE3LjctMTIuN2wtNC01LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjItMC4zLTAuMi0wLjUtMC4xLTAuOWMwLjItMC40LDAuNS0wLjUsMC44LTAuNWwxNi4yLTAuMWMwLjQsMCwwLjYsMC4xLDAuOCwwLjRjMC4yLDAuMiwwLjIsMC41LDAuMSwwLjhsLTUuMiwxNS40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xLDAuMy0wLjQsMC42LTAuOCwwLjZjLTAuNCwwLTAuNy0wLjEtMC45LTAuM2wtMy45LTUuNGMwLDAt'+
			'MTcuNywxMi43LTE3LjcsMTIuN2MtMC43LDAuNS0xLjYsMC4zLTIuMS0wLjRsLTEuNC0xLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNzkuNywzOTguOC0xNzkuNSwzOTcuOC0xNzguOSwzOTcuM3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtTLTE0NCwzNDAuOS0xNzUsMzQwLjl6IE0tMTM4LjQsNDIwLjNjMCwyLjMtMS45LDQuMi00LjIsNC4yaC02NC43Yy0yLjMsMC00LjItMS45LTQuMi'+
			'00LjJ2LTQ2LjdjMC0yLjMsMS45LTQuMiw0LjItNC4yaDY0LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuMywwLDQuMiwxLjksNC4yLDQuMlY0MjAuM3oiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNDcuNCwzNzcuOWMtMC4yLTAuMy0wLjQtMC40LTAuOC0wLjRsLTE2LjIsMC4xYy0wLjQsMC0wLjcsMC4xLTAuOCwwLjVjLTAuMiwwLjQtMC4yLDAuNiwwLjEsMC45bDQsNS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwwLTE3LjcsMTIuNy0xNy43LDEyLjdjLTAuNywwLjUtMC44LDEuNS0wLjQsMi4xbDEuNCwxLjljMC41'+
			'LDAuNywxLjUsMC44LDIuMSwwLjRjMCwwLDE3LjYtMTIuNywxNy43LTEyLjdsMy45LDUuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMiwwLjMsMC40LDAuNCwwLjksMC4zYzAuNCwwLDAuNy0wLjMsMC44LTAuNmw1LjItMTUuNEMtMTQ3LjIsMzc4LjQtMTQ3LjIsMzc4LjEtMTQ3LjQsMzc3Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPHBhdGggZD0iTS0xNDIuNyw0MjQuNmgtNjQuN2MtMi4zLDAtNC4yLTEuOS00LjItNC4ydi00Ni43YzAtMi4zLDEuOS00LjIsNC4yLTQuMmg2NC43YzIuMywwLDQuMiwxLjksNC4yLDQuMnY0Ni43JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEzOC40LDQyMi43LTE0MC4zLD'+
			'QyNC42LTE0Mi43LDQyNC42eiBNLTIwNi4yLDQxOS4yaDYyLjN2LTQ0LjNoLTYyLjNWNDE5LjJ6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnogTS0xNzkuMywzOTcuNGMwLDAsMTkuNi0xNC4xLDE5LjctMTQuMWwtNC41LTYuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMi0wLjMtMC4yLTAuNi0wLjEtMWMwLjItMC40LDAuNS0wLjYsMC45LTAuNmwxOC0wLjFjMC40LDAsMC43LDAuMSwwLjksMC40YzAuMiwwLjMsMC4yLDAuNSwwLjEsMC45bC01LjgsMTcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMSwwLjQtMC40LDAuNy0wLjgsMC43Yy0wLjUsMC0wLjctMC4xLTEtMC40bC00LjMtNmMtMC4xLDAuMS0x'+
			'OS43LDE0LjEtMTkuNywxNC4xYy0wLjgsMC41LTEuOCwwLjQtMi40LTAuNGwtMS41LTIuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4MC4yLDM5OS0xODAsMzk3LjktMTc5LjMsMzk3LjR6IiBmaWxsPSIjMDAwMDAwIi8+CiAgIDxwYXRoIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNHMyNy45LDYyLjQsNjIuNCw2Mi40YzM0LjQsMCw2Mi40LTI3LjksNjIuNC02Mi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTEzNC40LDQyMi45YzAsMi42LTIuMSw0LjctNC43LDQuN2gtNzEuOGMtMi42LDAtNC43LTIuMS00Lj'+
			'ctNC43di01MS44YzAtMi42LDIuMS00LjcsNC43LTQuN2g3MS44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjYsMCw0LjcsMi4xLDQuNyw0LjdWNDIyLjl6IiBmaWxsPSIjMDAwMDAwIi8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTQ0LjMsMzc1LjhjLTAuMi0wLjMtMC41LTAuNC0wLjktMC40bC0xOCwwLjFjLTAuNCwwLTAuOCwwLjItMC45LDAuNmMtMC4yLDAuNC0wLjIsMC43LDAuMSwxbDQuNSw2LjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4xLDAtMTkuNywxNC4xLTE5LjcsMTQuMWMtMC44LDAuNS0wLjksMS42LTAuNCwyLjRsMS41LDIuMWMwLjUs'+
			'MC44LDEuNiwwLjksMi40LDAuNGMwLDAsMTkuNi0xNC4xLDE5LjctMTQuMWw0LjMsNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMiwwLjMsMC41LDAuNCwxLDAuNGMwLjUsMCwwLjctMC4zLDAuOC0wLjdsNS44LTE3LjFDLTE0NC4xLDM3Ni4zLTE0NC4xLDM3Ni0xNDQuMywzNzUuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8cGF0aCBkPSJNLTEzOS4xLDQyNy42aC03MS44Yy0yLjYsMC00LjctMi4xLTQuNy00Ljd2LTUxLjhjMC0yLjYsMi4xLTQuNyw0LjctNC43aDcxLjhjMi42LDAsNC43LDIuMSw0LjcsNC43djUxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTM0LjQsNDI1LjUtMTM2LjUsNDI3LjYtMT'+
			'M5LjEsNDI3LjZ6IE0tMjA5LjYsNDIxLjZoNjkuM3YtNDkuM2gtNjkuM1Y0MjEuNnoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.onmouseover=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
		}
		me._button_image_fullscreen.onmouseout=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		me.divSkin.appendChild(me._button_fullscreen);
		el=me._button_mute=document.createElement('div');
		el.ggId="button_mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 10px;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 132px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_mute.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_mute.ggUpdatePosition=function (useTransition) {
		}
		el=me._unmute=document.createElement('div');
		els=me._unmute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE3Mi4zLDQyMi45YzAsMS41LTEsMi4xLTIuMywxLjJsLTI1LjMtMTcuNmgtMTQuNGMtMC44LDAtMS41LTAuNy0xLjUtMS41di0xNS44YzAtMC44LDAuNy0xLjUsMS41LTEuNWgxNC40bDI1LjMtMTcuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMy0wLjksMi4zLTAuMywyLjMsMS4yQy0xNzIuMywzNzEuMS0xNzIuMyw0MjIuOS0xNzIu'+
			'Myw0MjIuOXogTS0xNTUsMzk3YzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjQsMC0yLjJjMi4yLTIuNywzLjItNiwzLjItOS4yaDBjMC0zLjMtMS4xLTYuNS0zLjItOS4yYy0wLjYtMC43LTAuNi0xLjYsMC0yLjJsMS43LTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNi0wLjYsMS42LTAuNiwyLjIsMEMtMTU2LjYsMzg3LjctMTU1LDM5Mi4zLTE1NSwzOTdMLTE1NSwzOTd6IE0tMTQwLjksMzk3YzAsOC4zLTMsMTYuNS04LjksMjNjLTAuNiwwLjYtMS42LDAuNi0yLjEsMCYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7bC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMTIuMyw3LjMtMTkuMmgwYzAtNi45LTIuNC0xMy44LTcuMy0xOS4yYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMS43LTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNi0wLjYsMS41LTAuNiwyLjEsMEMtMTQzLjksMzgwLjUtMTQwLjksMzg4LjctMTQwLjksMzk3TC0xNDAuOSwzOTd6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZD0iTS0xNzQuNiwzNjkuOWwtMjUuMywxNy42aC0xNC40Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTUuOGMwLDAuOCww'+
			'LjcsMS41LDEuNSwxLjVoMTQuNGwyNS4zLDE3LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjMsMC45LDIuMywwLjMsMi4zLTEuMnYtNTEuOEMtMTcyLjMsMzY5LjYtMTczLjMsMzY5LTE3NC42LDM2OS45eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDxnPgogICA8cGF0aCBkPSJNLTE0OS45LDM3NGMtMC42LTAuNi0xLjYtMC42LTIuMSwwbC0xLjcsMS43Yy0wLjYsMC42LTAuNiwxLjYsMCwyLjJjNC45LDUuNCw3LjMsMTIuMyw3LjMsMTkuMmgwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDYuOS0yLjQsMTMuOC03LjMsMTkuMmMtMC42LDAuNi0wLjYsMS42LDAsMi4ybDEuNywxLjdjMC42LDAuNiwxLj'+
			'UsMC42LDIuMSwwYzUuOS02LjUsOC45LTE0LjgsOC45LTIzaDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNDAuOSwzODguNy0xNDMuOSwzODAuNS0xNDkuOSwzNzR6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTYyLDM4NGwtMS43LDEuN2MtMC42LDAuNi0wLjYsMS40LDAsMi4yYzIuMiwyLjcsMy4yLDYsMy4yLDkuMmgwYzAsMy4zLTEuMSw2LjUtMy4yLDkuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNiwwLjctMC42LDEuNiwwLDIuMmwxLjcsMS43YzAuNiwwLjYsMS42LDAuNiwyLjIsMGMzLjItMy43LDQuOC04LjQsNC44LTEzLjFoMGMwLTQuNy0xLjYtOS4zLTQu'+
			'OC0xMy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTYwLjQsMzgzLjQtMTYxLjQsMzgzLjQtMTYyLDM4NHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._unmute__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._unmute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3Miw0MjUuOGMwLDEuNy0xLjEsMi4zLTIuNiwxLjNsLTI4LjEtMTkuNmgtMTZjLTAuOSwwLTEuNy0wLjgtMS43LTEuN3YtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2gxNmwyOC4xLTE5LjZjMS40LTEsMi42LTAuNCwyLjYsMS4zQy0xNzIsMzY4LjItMTcyLDQyNS44LTE3Miw0MjUu'+
			'OHogTS0xNTIuNywzOTdjMCw1LjItMS44LDEwLjQtNS4zLDE0LjVjLTAuNywwLjYtMS44LDAuNi0yLjQsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjYsMC0yLjRjMi40LTMsMy42LTYuNiwzLjYtMTAuM2gwYzAtMy42LTEuMi03LjMtMy42LTEwLjNjLTAuNy0wLjgtMC43LTEuNywwLTIuNGwxLjgtMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LTAuNiwxLjgtMC42LDIuNCwwQy0xNTQuNSwzODYuNi0xNTIuNywzOTEuOC0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2'+
			'MtMC43LDAuNi0xLjcsMC42LTIuNCwwbC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRjNS40LTYsOC4yLTEzLjcsOC4yLTIxLjNoMGMwLTcuNi0yLjctMTUuMy04LjItMjEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMS44LTEuOGMwLjctMC43LDEuNy0wLjcsMi40LDBDLTE0MC41LDM3OC42LTEzNy4xLDM4Ny44LTEzNy4xLDM5N0wtMTM3LjEsMzk3eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTc0LjUsMzY2LjlsLTI4LjEsMTkuNmgtMTZjLTAuOSwwLTEuNywwLjgtMS43LDEuN3YxNy42YzAs'+
			'MC45LDAuOCwxLjcsMS43LDEuN2gxNmwyOC4xLDE5LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjQsMSwyLjYsMC40LDIuNi0xLjN2LTU3LjVDLTE3MiwzNjYuNS0xNzMuMSwzNjUuOS0xNzQuNSwzNjYuOXoiIGZpbGw9IiNGRkZGRkYiLz4KICA8Zz4KICAgPHBhdGggZD0iTS0xNDcuMSwzNzEuNGMtMC43LTAuNi0xLjctMC42LTIuNCwwbC0xLjgsMS44Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRjNS40LDYsOC4yLDEzLjcsOC4yLDIxLjNoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCw3LjYtMi43LDE1LjMtOC4yLDIxLjNjLTAuNywwLjctMC43LDEuNywwLDIuNGwxLjgsMS44YzAuNywwLjcsMS'+
			'43LDAuNywyLjQsMGM2LjYtNy4yLDkuOS0xNi40LDkuOS0yNS42aDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzcuMSwzODcuOC0xNDAuNSwzNzguNi0xNDcuMSwzNzEuNHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNjAuNSwzODIuNWwtMS44LDEuOGMtMC43LDAuNy0wLjcsMS42LDAsMi40YzIuNCwzLDMuNiw2LjYsMy42LDEwLjNoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC43LDAuOC0wLjcsMS43LDAsMi40bDEuOCwxLjhjMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1LjMtMTQuNWgwYzAtNS4y'+
			'LTEuOC0xMC40LTUuMy0xNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTU4LjcsMzgxLjktMTU5LjksMzgxLjktMTYwLjUsMzgyLjV6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._unmute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="unmute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._unmute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unmute.onclick=function (e) {
			player.setVolume("_main",1);
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility='hidden';
			me._unmute.ggVisible=false;
			me._mute.style[domTransition]='none';
			me._mute.style.visibility=(Number(me._mute.style.opacity)>0||!me._mute.style.opacity)?'inherit':'hidden';
			me._mute.ggVisible=true;
		}
		me._unmute.onmouseover=function (e) {
			me._unmute__img.style.visibility='hidden';
			me._unmute__imgo.style.visibility='inherit';
		}
		me._unmute.onmouseout=function (e) {
			me._unmute__img.style.visibility='inherit';
			me._unmute__imgo.style.visibility='hidden';
		}
		me._unmute.ggUpdatePosition=function (useTransition) {
		}
		me._button_mute.appendChild(me._unmute);
		el=me._mute=document.createElement('div');
		els=me._mute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTIxNS44LDQwNC45di0xNS44YzAtMC44LDAuNy0xLjUsMS41LTEuNWgxNC40bDI1LjMtMTcuNmMxLjMtMC45LDIuMy0wLjMsMi4zLDEuMlYzODhsLTIyLjIsMjIuMmwtNS40LTMuN2gtMTQuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0yMTUuMSw0MDYuNC0yMTUuOCw0MDUuOC0yMTUuOCw0MDQuOXogTS0xNzIuMyw0MjIuOWMwLDEuNS0x'+
			'LDIuMS0yLjMsMS4ybC0xMi40LTguN2wxNC43LTE0LjdWNDIyLjl6IE0tMTU1LDM5NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS40LDAtMi4yYzIuMi0yLjcsMy4yLTYsMy4yLTkuMmgwYzAtMi4zLTAuNS00LjUtMS42LTYuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7bDQtNEMtMTU2LDM4OS42LTE1NSwzOTMuMy0xNTUsMzk3TC0xNTUsMzk3eiBNLTE0MC45LDM5N2MwLDguMy0zLDE2LjUtOC45LDIzYy0wLjYsMC42LTEuNiwwLjYtMi4xLDBsLTEuNy0xLjcmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5O2MtMC42LTAuNi0wLjYtMS42LDAtMi4yYzQuOS01LjQsNy4zLTEyLjMsNy4zLTE5LjJoMGMwLTUuOS0xLjgtMTEuOC01LjQtMTYuOGwzLjgtMy44Qy0xNDMuMiwzODIuNC0xNDAuOSwzODkuNy0xNDAuOSwzOTcmI3hkOyYjeGE7JiN4OTsmI3g5O0wtMTQwLjksMzk3eiBNLTE0MC4xLDM2NmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40czAuOCwwLjEsMS4xLDAuNGwxLjcsMS43Qy0xMzkuNSwzNjQu'+
			'NC0xMzkuNSwzNjUuNC0xNDAuMSwzNjZ6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTQwLjEsMzYzLjhsLTEuNy0xLjdjLTAuMy0wLjMtMC43LTAuNC0xLjEtMC40Yy0wLjQsMC0wLjgsMC4xLTEuMSwwLjRsLTY2LDY2Yy0wLjYsMC42LTAuNiwxLjYsMCwyLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDEuNywxLjdjMC4zLDAuMywwLjcsMC40LDEuMSwwLjRjMC40LDAsMC44LTAuMSwxLjEtMC40bDY2LTY2Qy0xMzkuNSwzNjUuNC0xMzkuNSwzNjQuNC0xNDAuMSwzNjMuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD'+
			'0iTS0xNzQuNiw0MjQuMWMxLjMsMC45LDIuMywwLjMsMi4zLTEuMnYtMjIuMmwtMTQuNywxNC43TC0xNzQuNiw0MjQuMXoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xOTQuNSw0MTAuMmwyMi4yLTIyLjJ2LTE2LjljMC0xLjUtMS0yLjEtMi4zLTEuMmwtMjUuMywxNy42aC0xNC40Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTUuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCwwLjgsMC43LDEuNSwxLjUsMS41aDE0LjRMLTE5NC41LDQxMC4yeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE2MS45LDM5MC40YzEsMi4xLDEuNiw0LjMsMS42LDYuNmgwYzAsMy4zLTEu'+
			'MSw2LjUtMy4yLDkuMmMtMC42LDAuNy0wLjYsMS42LDAsMi4ybDEuNywxLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNiwwLjYsMS42LDAuNiwyLjIsMGMzLjItMy43LDQuOC04LjQsNC44LTEzLjFoMGMwLTMuNy0xLTcuNC0zLTEwLjZMLTE2MS45LDM5MC40eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE1MS43LDM4MC4yYzMuNiw1LDUuNCwxMC45LDUuNCwxNi44aDBjMCw2LjktMi40LDEzLjgtNy4zLDE5LjJjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwxLjcsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjYsMC42LDEuNSwwLjYsMi4xLDBjNS45LTYuNSw4LjktMT'+
			'QuOCw4LjktMjNoMGMwLTcuMy0yLjMtMTQuNi03LTIwLjdMLTE1MS43LDM4MC4yeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._mute__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._mute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgYmFzZVByb2ZpbGU9InRpbnkiIHg9IjBweCIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTIyMC4zLDQwNS44di0xNy42YzAtMC45LDAuOC0xLjcsMS43LTEuN2gxNmwyOC4xLTE5LjZjMS40LTEsMi42LTAuNCwyLjYsMS4zVjM4N2wtMjQuNywyNC43bC02LTQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7aC0xNkMtMjE5LjUsNDA3LjUtMjIwLjMsNDA2LjctMjIwLjMsNDA1Ljh6IE0tMTcyLDQyNS44YzAsMS43LTEuMiwy'+
			'LjMtMi42LDEuM2wtMTMuOC05LjZsMTYuMy0xNi4zVjQyNS44eiBNLTE1Mi43LDM5NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsNS4yLTEuOCwxMC40LTUuMywxNC41Yy0wLjcsMC42LTEuOCwwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0yLjUtMC42LTUtMS43LTcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDQuNC00LjRDLTE1My45LDM4OC44LTE1Mi43LDM5Mi45LTE1Mi43LDM5N0wtMTUyLjcsMzk3eiBNLTEzNy4xLDM5N2MwLDkuMi0zLjMsMTguNC05LjksMjUuNmMtMC43LDAuNi0xLjcsMC42LTIuNCwwbC0xLjgtMS44Ji'+
			'N4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNy0wLjctMC43LTEuNywwLTIuNGM1LjQtNiw4LjItMTMuNyw4LjItMjEuM2gwYzAtNi42LTItMTMuMS02LTE4LjdsNC4zLTQuM0MtMTM5LjcsMzgwLjgtMTM3LjEsMzg4LjktMTM3LjEsMzk3TC0xMzcuMSwzOTd6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xMzYuMiwzNjIuNmwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVjMC40LDAsMC45LDAuMiwx'+
			'LjIsMC41bDEuOCwxLjhDLTEzNS42LDM2MC44LTEzNS42LDM2MS45LTEzNi4yLDM2Mi42eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTEzNi4yLDM2MC4ybC0xLjgtMS44Yy0wLjMtMC4zLTAuOC0wLjUtMS4yLTAuNXMtMC45LDAuMi0xLjIsMC41bC03My4zLDczLjNjLTAuNywwLjctMC43LDEuNywwLDIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS44LDEuOGMwLjMsMC4zLDAuOCwwLjUsMS4yLDAuNWMwLjQsMCwwLjktMC4yLDEuMi0wLjVsNzMuMy03My4zQy0xMzUuNiwzNjEuOS0xMzUuNiwzNjAuOC0xMzYuMiwzNjAuMn'+
			'oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNzQuNSw0MjcuMWMxLjQsMSwyLjYsMC40LDIuNi0xLjN2LTI0LjZsLTE2LjMsMTYuM0wtMTc0LjUsNDI3LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTk2LjYsNDExLjdMLTE3MiwzODd2LTE4LjhjMC0xLjctMS4yLTIuMy0yLjYtMS4zbC0yOC4xLDE5LjZoLTE2Yy0wLjksMC0xLjcsMC44LTEuNywxLjd2MTcuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCwwLjksMC44LDEuNywxLjcsMS43aDE2TC0xOTYuNiw0MTEuN3oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNjAuNSwzODkuNmMxLjIsMi4z'+
			'LDEuNyw0LjgsMS43LDcuNGgwYzAsMy42LTEuMiw3LjMtMy42LDEwLjNjLTAuNywwLjgtMC43LDEuNywwLDIuNGwxLjgsMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjYsMC42LDEuOCwwLjYsMi40LDBjMy42LTQuMiw1LjMtOS4zLDUuMy0xNC41aDBjMC00LjEtMS4xLTguMi0zLjMtMTEuOEwtMTYwLjUsMzg5LjZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRoIGQ9Ik0tMTQ5LjEsMzc4LjNjNCw1LjYsNiwxMi4xLDYsMTguN2gwYzAsNy42LTIuNywxNS4zLTguMiwyMS4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC43LDAuNy'+
			'wxLjcsMC43LDIuNCwwYzYuNi03LjIsOS45LTE2LjQsOS45LTI1LjZoMGMwLTguMS0yLjYtMTYuMi03LjctMjNMLTE0OS4xLDM3OC4zeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._mute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mute.onclick=function (e) {
			player.setVolume("_main",0);
			me._mute.style[domTransition]='none';
			me._mute.style.visibility='hidden';
			me._mute.ggVisible=false;
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility=(Number(me._unmute.style.opacity)>0||!me._unmute.style.opacity)?'inherit':'hidden';
			me._unmute.ggVisible=true;
		}
		me._mute.onmouseover=function (e) {
			me._mute__img.style.visibility='hidden';
			me._mute__imgo.style.visibility='inherit';
		}
		me._mute.onmouseout=function (e) {
			me._mute__img.style.visibility='inherit';
			me._mute__imgo.style.visibility='hidden';
		}
		me._mute.ggUpdatePosition=function (useTransition) {
		}
		me._button_mute.appendChild(me._mute);
		me.divSkin.appendChild(me._button_mute);
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzAgMTMwOyIgdmlld0JveD0iMCAwID'+
			'EzMCAxMzAiPgogPGcgaWQ9IkViZW5lXzEiPgogIDxnPgogICA8cGF0aCBkPSJNODcuNSw0NC44SDQyLjVjLTYuNywwLTEwLjQsMS4yLTEyLjQsNGMtMi4zLDMuMi0yLjQsOC40LTIuNCwxNi41YzAsMTEuMSwyLDE2LjYsMy45LDE4LjFjMi44LDIuMSwzLjUsMi41LDgsMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M0LDAsNS44LTAuOCw4LjEtMS43YzMuMi0xLjMsNy4yLTMsMTcuNC0zYzEwLjQsMCwxNC4zLDEuNywxNy41LDNjMi4yLDAuOSw0LDEuNyw3LjksMS43YzQuNSwwLDUuMi0wLjMsOC0yLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuOS0xLjQsMy45LTYuOSwzLjktMTguMWMw'+
			'LTguMi0wLjItMTMuNC0yLjQtMTYuNUM5Ny45LDQ2LDk0LjIsNDQuOCw4Ny41LDQ0Ljh6IE00Ni45LDczLjNjLTUuMywwLTkuNi00LjMtOS42LTkuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC01LjMsNC4zLTkuNiw5LjYtOS42YzUuMywwLDkuNiw0LjMsOS42LDkuNlM1Mi4xLDczLjMsNDYuOSw3My4zeiBNODAuOCw3My4zYy01LjMsMC05LjYtNC4zLTkuNi05LjZjMC01LjMsNC4zLTkuNiw5LjYtOS42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M1LjMsMCw5LjYsNC4zLDkuNiw5LjZTODYuMSw3My4zLDgwLjgsNzMuM3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTTY1LDlDMz'+
			'QsOSw4LjksMzQuMSw4LjksNjUuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMUMxMjEuMSwzNC4xLDk2LDksNjUsOXogTTU2LjksMjUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0wLjQsMC4yLTAuOCwwLjYtMS4yYzAuNC0wLjQsMC44LTAuNiwxLjQtMC42aDEyLjNjMS40LDAsMiwwLjYsMiwxLjh2MTJINTYuOVYyNS43eiBNMTAxLjgsODcuN2MtMy45LDMtNS44LDMuNi0xMS4zLDMuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTUsMC03LjYtMS4xLTEwLTIuMWMtMi45LTEuMi02LjEtMi42LTE1LjQtMi42Yy05LjEsMC0xMi40LDEuNC0xNS4zLDIu'+
			'NmMtMi41LDEtNS4xLDIuMS0xMC4yLDIuMWMtNS42LDAtNy41LTAuNi0xMS4zLTMuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTQuOS0zLjgtNi0xNC4yLTYtMjIuM2MwLTkuMywwLjItMTUuMiwzLjQtMTkuN2MzLjktNS41LDExLTYuMiwxNi44LTYuMmg0NS4xYzUuNywwLDEyLjgsMC43LDE2LjgsNi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MzLjIsNC41LDMuNSwxMC40LDMuNSwxOS43QzEwNy43LDczLjQsMTA2LjcsODMuOSwxMDEuOCw4Ny43eiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0iTTEwNC4zLDQ1LjZjLTMuOS01LjUtMTEtNi4yLTE2LjgtNi'+
			'4ySDQyLjVjLTUuNywwLTEyLjgsMC43LTE2LjgsNi4yYy0zLjIsNC41LTMuNCwxMC40LTMuNCwxOS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDguMSwxLDE4LjUsNiwyMi4zYzMuOSwzLDUuOCwzLjYsMTEuMywzLjZjNS4xLDAsNy42LTEuMSwxMC4yLTIuMWMyLjktMS4yLDYuMi0yLjYsMTUuMy0yLjZjOS4zLDAsMTIuNSwxLjQsMTUuNCwyLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNSwxLDUsMi4xLDEwLDIuMWM1LjYsMCw3LjUtMC42LDExLjMtMy42YzQuOS0zLjgsNi0xNC4yLDYtMjIuM0MxMDcuNyw1Ni4xLDEwNy41LDUwLjEsMTA0LjMsNDUuNnogTTk4LjUsODMuNCYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTIuOCwyLjEtMy41LDIuNS04LDIuNWMtMy45LDAtNS43LTAuNy03LjktMS43Yy0zLjItMS4zLTcuMS0zLTE3LjUtM2MtMTAuMSwwLTE0LjEsMS43LTE3LjQsM2MtMi4zLDEtNC4xLDEuNy04LjEsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNC41LDAtNS4yLTAuMy04LTIuNWMtMS45LTEuNC0zLjktNi45LTMuOS0xOC4xYzAtOC4yLDAuMi0xMy40LDIuNC0xNi41YzItMi44LDUuNy00LDEyLjQtNGg0NS4xYzYuNywwLDEwLjQsMS4yLDEyLjQsNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi4zLDMuMiwyLjQsOC40LDIuNCwxNi41QzEwMi4zLDc2Lj'+
			'QsMTAwLjMsODEuOSw5OC41LDgzLjR6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxjaXJjbGUgY3k9IjYzLjgiIGZpbGw9IiNGRkZGRkYiIGN4PSI0Ni45IiByPSI5LjYiLz4KICAgPGNpcmNsZSBjeT0iNjMuOCIgZmlsbD0iI0ZGRkZGRiIgY3g9IjgwLjgiIHI9IjkuNiIvPgogICA8cGF0aCBkPSJNNzMuMSwyNS43YzAtMS4yLTAuNi0xLjgtMi0xLjhINTguOWMtMC42LDAtMSwwLjItMS40LDAuNmMtMC40LDAuNC0wLjYsMC44LTAuNiwxLjJ2MTJoMTYuMkw3My4xLDI1LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TDczLjEsMjUuN3oiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3Zn'+
			'Pgo=';
		me._enter_vr__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._enter_vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeD0iMHB4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMzAgMTMwIiB4bWxuczp4PSJodHRwOi8vbnMuYW'+
			'RvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgd2lkdGg9IjEzMHB4IiBoZWlnaHQ9IjEzMHB4IiB5PSIwcHgiIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iIHZpZXdCb3g9IjAgMCAxMzAgMTMwIj4KIDxnIGlkPSJMYXll'+
			'cl8xIi8+CiA8ZyBpZD0iTGF5ZXJfMiIvPgogPGcgaWQ9IkViZW5lXzEiPgogIDxnPgogICA8cGF0aCBkPSJNOTAuMDI4LDQyLjU3MUgzOS45NzFjLTcuNDM1LDAtMTEuNTQ3LDEuMzE2LTEzLjc1Myw0LjRjLTIuNTI4LDMuNTM0LTIuNzExLDkuMzAyLTIuNzExLDE4LjM4MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCwxMi4zNTUsMi4yMjQsMTguNDY5LDQuMzA1LDIwLjA3YzMuMDk3LDIuMzg0LDMuODc0LDIuNzI3LDguOTE3LDIuNzI3YzQuNDE2LDAsNi40MzEtMC44MzcsOC45ODEtMS44OTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzMuNTczLTEuNDg2LDguMDIxLTMuMzM1LDE5LjI5LT'+
			'MuMzM1YzExLjUyOCwwLDE1LjkzLDEuODYzLDE5LjQ2NiwzLjM2MWMyLjQ3MiwxLjA0Niw0LjQyMywxLjg3Myw4LjgwMiwxLjg3MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNS4wNDQsMCw1LjgyMS0wLjM0Myw4LjkxOS0yLjcyN2MyLjA4Mi0xLjYwMiw0LjMwNy03LjcxNiw0LjMwNy0yMC4wN2MwLTkuMDc4LTAuMTgzLTE0Ljg0NC0yLjcxNC0xOC4zODEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzEwMS41NzIsNDMuODg3LDk3LjQ2LDQyLjU3MSw5MC4wMjgsNDIuNTcxeiBNNDQuODQsNzQuMjQ2Yy01Ljg3MSwwLTEwLjYyNy00Ljc1Ni0xMC42MjctMTAuNjI2JiN4ZDsmI3hhOyYjeDk7JiN4'+
			'OTsmI3g5O2MwLTUuODY5LDQuNzU2LTEwLjYyNiwxMC42MjctMTAuNjI2YzUuODY5LDAsMTAuNjI1LDQuNzU3LDEwLjYyNSwxMC42MjZDNTUuNDY1LDY5LjQ4OSw1MC43MDksNzQuMjQ2LDQ0Ljg0LDc0LjI0NnomI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IE04Mi41NTEsNzQuMjQ2Yy01Ljg3LDAtMTAuNjI2LTQuNzU2LTEwLjYyNi0xMC42MjZjMC01Ljg2OSw0Ljc1Ni0xMC42MjYsMTAuNjI2LTEwLjYyNmM1Ljg2OSwwLDEwLjYyNiw0Ljc1NywxMC42MjYsMTAuNjI2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M5My4xNzcsNjkuNDg5LDg4LjQyLDc0LjI0Niw4Mi41NTEsNzQuMjQ2eiIgZmlsbD'+
			'0iIzAwMDAwMCIvPgogICA8cGF0aCBkPSJNNjQuOTk5LDIuNzM3QzMwLjU1OCwyLjczNywyLjYzOCwzMC42NTYsMi42MzgsNjUuMWMwLDM0LjQ0MSwyNy45Miw2Mi4zNjIsNjIuMzYxLDYyLjM2MnM2Mi4zNjMtMjcuOTIsNjIuMzYzLTYyLjM2MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTI3LjM2MiwzMC42NTYsOTkuNDQsMi43MzcsNjQuOTk5LDIuNzM3eiBNNTUuOTc0LDIxLjI4NWMwLTAuNDQsMC4yMi0wLjg4LDAuNjU5LTEuMzIxYzAuNDQxLTAuNDQsMC44ODItMC42NiwxLjU0MS0wLjY2aDEzLjY1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjU0LDAsMi4yMDEsMC42NiwyLjIwMSwx'+
			'Ljk4djEzLjI4Nkg1NS45NzRWMjEuMjg1eiBNMTA1Ljg0Niw5MC4xNzhjLTQuMjkyLDMuMzA0LTYuNDA4LDMuOTcyLTEyLjU3OCwzLjk3MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTUuNTk3LDAtOC40MTUtMS4xOTMtMTEuMTQxLTIuMzQ3Qzc4LjkzMiw5MC40NSw3NS4zMSw4OC45MTcsNjUsODguOTE3Yy0xMC4wNzEsMC0xMy43NDUsMS41MjgtMTYuOTg2LDIuODc1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMi43ODgsMS4xNTktNS42NzEsMi4zNTgtMTEuMjg1LDIuMzU4Yy02LjE3LDAtOC4yODUtMC42NjgtMTIuNTc3LTMuOTczYy01LjQ5Mi00LjIyNy02LjY0NS0xNS44MzMtNi42ND'+
			'UtMjQuODI1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLTEwLjI3OCwwLjI1OC0xNi44NzksMy44MzEtMjEuODczYzQuMzgtNi4xMjQsMTIuMjU5LTYuOTA5LDE4LjYzMy02LjkwOWg1MC4wNThjNi4zNzIsMCwxNC4yNDgsMC43ODUsMTguNjMsNi45MDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzMuNTc3LDQuOTk4LDMuODM1LDExLjU5NywzLjgzNSwyMS44NzNDMTEyLjQ5Myw3NC4zNDUsMTExLjM0LDg1Ljk1MSwxMDUuODQ2LDkwLjE3OHoiIGZpbGw9IiMwMDAwMDAiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMDguNjU4LDQzLjQ4Yy00LjM4Mi02LjEyNC0xMi4yNTgtNi45MDkt'+
			'MTguNjMtNi45MDlIMzkuOTcxYy02LjM3NCwwLTE0LjI1MywwLjc4NS0xOC42MzMsNi45MDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLjU3Myw0Ljk5NC0zLjgzMSwxMS41OTUtMy44MzEsMjEuODczYzAsOC45OTIsMS4xNTIsMjAuNTk4LDYuNjQ1LDI0LjgyNWM0LjI5MiwzLjMwNCw2LjQwNywzLjk3MywxMi41NzcsMy45NzMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzUuNjE0LDAsOC40OTctMS4xOTksMTEuMjg1LTIuMzU4YzMuMjQxLTEuMzQ4LDYuOTE1LTIuODc1LDE2Ljk4Ni0yLjg3NWMxMC4zMSwwLDEzLjkzMiwxLjUzMywxNy4xMjcsMi44ODYmI3hkOyYjeGE7JiN4OTsmI3g5Oy'+
			'YjeDk7YzIuNzI2LDEuMTU0LDUuNTQ0LDIuMzQ3LDExLjE0MSwyLjM0N2M2LjE3LDAsOC4yODYtMC42NjgsMTIuNTc4LTMuOTcyYzUuNDk0LTQuMjI4LDYuNjQ3LTE1LjgzMyw2LjY0Ny0yNC44MjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzExMi40OTMsNTUuMDc3LDExMi4yMzUsNDguNDc4LDEwOC42NTgsNDMuNDh6IE0xMDIuMTg3LDg1LjQyM2MtMy4wOTgsMi4zODQtMy44NzUsMi43MjctOC45MTksMi43MjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy00LjM3OSwwLTYuMzMtMC44MjYtOC44MDItMS44NzNDODAuOTMsODQuNzgsNzYuNTI4LDgyLjkxNyw2NSw4Mi45MTdjLTExLjI3LDAt'+
			'MTUuNzE3LDEuODUtMTkuMjksMy4zMzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0yLjU1MSwxLjA2MS00LjU2NSwxLjg5OC04Ljk4MSwxLjg5OGMtNS4wNDMsMC01LjgyLTAuMzQzLTguOTE3LTIuNzI3Yy0yLjA4MS0xLjYwMi00LjMwNS03LjcxNS00LjMwNS0yMC4wNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC05LjA4LDAuMTgzLTE0Ljg0OCwyLjcxMS0xOC4zODJjMi4yMDYtMy4wODQsNi4zMTgtNC40LDEzLjc1My00LjRoNTAuMDU4YzcuNDMyLDAsMTEuNTQ0LDEuMzE2LDEzLjc1MSw0LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNTMxLDMuNTM3LDIuNzE0LDkuMzA0LDIuNz'+
			'E0LDE4LjM4MUMxMDYuNDkzLDc3LjcwOCwxMDQuMjY5LDgzLjgyMSwxMDIuMTg3LDg1LjQyM3oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPGNpcmNsZSBjeT0iNjMuNjE5IiBmaWxsPSIjRkZGRkZGIiBjeD0iNDQuODQiIHI9IjEwLjYyNiIvPgogICA8Y2lyY2xlIGN5PSI2My42MTkiIGZpbGw9IiNGRkZGRkYiIGN4PSI4Mi41NTEiIHI9IjEwLjYyNiIvPgogICA8cGF0aCBkPSJNNzQuMDI1LDIxLjI4NWMwLTEuMzIxLTAuNjYxLTEuOTgtMi4yMDEtMS45OGgtMTMuNjVjLTAuNjU5LDAtMS4xLDAuMjE5LTEuNTQxLDAuNjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQzOSwwLjQ0MS0wLjY1OSww'+
			'Ljg4LTAuNjU5LDEuMzIxdjEzLjI4NmgxOC4wNTJWMjEuMjg1eiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._enter_vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="enter_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 102px;';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._enter_vr.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._enter_vr.onclick=function (e) {
			player.enterVR();
		}
		me._enter_vr.onmouseover=function (e) {
			me._enter_vr__img.style.visibility='hidden';
			me._enter_vr__imgo.style.visibility='inherit';
		}
		me._enter_vr.onmouseout=function (e) {
			me._enter_vr__img.style.visibility='inherit';
			me._enter_vr__imgo.style.visibility='hidden';
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._enter_vr);
		el=me._button_3=document.createElement('div');
		els=me._button_3__img=document.createElement('img');
		els.className='ggskin ggskin_button_3';
		hs=basePath + 'images/button_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/button_3__o.png';
		me._button_3__img.ggOverSrc=hs;
		el.ggId="Button 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 4px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 62px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_3.onclick=function (e) {
			me._button_auto_rotate.style[domTransition]='none';
			me._button_auto_rotate.style.visibility='hidden';
			me._button_auto_rotate.ggVisible=false;
			me._button_mute.style[domTransition]='none';
			me._button_mute.style.visibility='hidden';
			me._button_mute.ggVisible=false;
			me._enter_vr.style[domTransition]='none';
			me._enter_vr.style.visibility='hidden';
			me._enter_vr.ggVisible=false;
			me._button_fullscreen.style[domTransition]='none';
			me._button_fullscreen.style.visibility='hidden';
			me._button_fullscreen.ggVisible=false;
			me._button_zoom.style[domTransition]='none';
			me._button_zoom.style.visibility='hidden';
			me._button_zoom.ggVisible=false;
			me._button_3.style[domTransition]='none';
			me._button_3.style.visibility='hidden';
			me._button_3.ggVisible=false;
			me._button_2.style[domTransition]='none';
			me._button_2.style.visibility=(Number(me._button_2.style.opacity)>0||!me._button_2.style.opacity)?'inherit':'hidden';
			me._button_2.ggVisible=true;
		}
		me._button_3.onmouseover=function (e) {
			me._button_3__img.src=me._button_3__img.ggOverSrc;
		}
		me._button_3.onmouseout=function (e) {
			me._button_3__img.src=me._button_3__img.ggNormalSrc;
		}
		me._button_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_3);
		el=me._button_2=document.createElement('div');
		els=me._button_2__img=document.createElement('img');
		els.className='ggskin ggskin_button_2';
		hs=basePath + 'images/button_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/button_2__o.png';
		me._button_2__img.ggOverSrc=hs;
		el.ggId="Button 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : 65px;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_2.onclick=function (e) {
			me._button_auto_rotate.style[domTransition]='none';
			me._button_auto_rotate.style.visibility=(Number(me._button_auto_rotate.style.opacity)>0||!me._button_auto_rotate.style.opacity)?'inherit':'hidden';
			me._button_auto_rotate.ggVisible=true;
			me._button_mute.style[domTransition]='none';
			me._button_mute.style.visibility=(Number(me._button_mute.style.opacity)>0||!me._button_mute.style.opacity)?'inherit':'hidden';
			me._button_mute.ggVisible=true;
			me._enter_vr.style[domTransition]='none';
			me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
			me._enter_vr.ggVisible=true;
			me._button_fullscreen.style[domTransition]='none';
			me._button_fullscreen.style.visibility=(Number(me._button_fullscreen.style.opacity)>0||!me._button_fullscreen.style.opacity)?'inherit':'hidden';
			me._button_fullscreen.ggVisible=true;
			me._button_zoom.style[domTransition]='none';
			me._button_zoom.style.visibility=(Number(me._button_zoom.style.opacity)>0||!me._button_zoom.style.opacity)?'inherit':'hidden';
			me._button_zoom.ggVisible=true;
			me._button_2.style[domTransition]='none';
			me._button_2.style.visibility='hidden';
			me._button_2.ggVisible=false;
			me._button_3.style[domTransition]='none';
			me._button_3.style.visibility=(Number(me._button_3.style.opacity)>0||!me._button_3.style.opacity)?'inherit':'hidden';
			me._button_3.ggVisible=true;
		}
		me._button_2.onmouseover=function (e) {
			me._button_2__img.src=me._button_2__img.ggOverSrc;
		}
		me._button_2.onmouseout=function (e) {
			me._button_2__img.src=me._button_2__img.ggNormalSrc;
		}
		me._button_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_2);
		el=me._button_5=document.createElement('div');
		els=me._button_5__img=document.createElement('img');
		els.className='ggskin ggskin_button_5';
		hs=basePath + 'images/button_5.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 7px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 31px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_5.onclick=function (e) {
			me._button_5.style[domTransition]='none';
			me._button_5.style.visibility='hidden';
			me._button_5.ggVisible=false;
			me._button_4.style[domTransition]='none';
			me._button_4.style.visibility=(Number(me._button_4.style.opacity)>0||!me._button_4.style.opacity)?'inherit':'hidden';
			me._button_4.ggVisible=true;
			me._map_1.ggClearMap();
			me._map_1.style[domTransition]='none';
			me._map_1.style.visibility='hidden';
			me._map_1.ggVisible=false;
		}
		me._button_5.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_5);
		el=me._button_4=document.createElement('div');
		els=me._button_4__img=document.createElement('img');
		els.className='ggskin ggskin_button_4';
		hs=basePath + 'images/button_4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/button_4__o.png';
		me._button_4__img.ggOverSrc=hs;
		el.ggId="Button 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 6px;';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 34px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_4.onclick=function (e) {
			me._button_4.style[domTransition]='none';
			me._button_4.style.visibility='hidden';
			me._button_4.ggVisible=false;
			me._button_5.style[domTransition]='none';
			me._button_5.style.visibility=(Number(me._button_5.style.opacity)>0||!me._button_5.style.opacity)?'inherit':'hidden';
			me._button_5.ggVisible=true;
			if (me._map_1.ggMapNotLoaded) {
				me._map_1.ggInitMap(false);
				me._map_1.ggInitMapMarkers(true);
			}
			me._map_1.style[domTransition]='none';
			me._map_1.style.visibility=(Number(me._map_1.style.opacity)>0||!me._map_1.style.opacity)?'inherit':'hidden';
			me._map_1.ggVisible=true;
		}
		me._button_4.onmouseover=function (e) {
			me._button_4__img.src=me._button_4__img.ggOverSrc;
		}
		me._button_4.onmouseout=function (e) {
			me._button_4__img.src=me._button_4__img.ggNormalSrc;
		}
		me._button_4.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_4);
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggId="Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='height : 700px;';
		hs+='opacity : 0.39999;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 227px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_1.onmouseover=function (e) {
			var flag=me._map_1.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._map_1.style[domTransition]='none';
			} else {
				me._map_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			if (flag) {
				me._map_1.style.opacity='0.39999';
				me._map_1.style.visibility=me._map_1.ggVisible?'inherit':'hidden';
			} else {
				me._map_1.style.opacity='1';
				me._map_1.style.visibility=me._map_1.ggVisible?'inherit':'hidden';
			}
			me._map_1.ggOpacitiyActive=!flag;
		}
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!(mapDetails.hasOwnProperty('title'))) return;
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdateConditionTimer=function () {
			me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			me._map_1.ggUpdateConditionResize();
		}
		me._map_1.ggNodeChange=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!(mapDetails.hasOwnProperty('title'))) return;
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
		}
		me.divSkin.appendChild(me._map_1);
		el=me._menu_background=document.createElement('div');
		el.ggId="menu_background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.501961);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_background.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_background.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('category_visible') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_background.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_background.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_background.style[domTransition]='opacity 500ms ease 0ms';
				if (me._menu_background.ggCurrentLogicStateAlpha == 0) {
					me._menu_background.style.visibility=me._menu_background.ggVisible?'inherit':'hidden';
					me._menu_background.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu_background.style.opacity == 0.0) { me._menu_background.style.visibility="hidden"; } }, 505);
					me._menu_background.style.opacity=0;
				}
			}
		}
		me._menu_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_scroller=document.createElement('div');
		els=me._node_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 99px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 149.5px;';
		hs+="";
		els.setAttribute('style',hs);
		me._node_scroller.ggScrollByX = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosX = (me._node_scroller__horScrollFg.offsetLeft + diffX);
			me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
			me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosX / (me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__content.style.left = -(Math.round((me._node_scroller.ggContentWidth * (1.0 - me._node_scroller.ggHPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
		}
		me._node_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._node_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._node_scroller.ggScrollPosX >= me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth)) {
					me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._node_scroller.ggScrollPosX <= 0)) {
					me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosX / (me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__content.style.left = -(Math.round((me._node_scroller.ggContentWidth * (1.0 - me._node_scroller.ggHPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._node_scroller.ggScrollByY = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosY = (me._node_scroller__vertScrollFg.offsetTop + diffY);
			me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
			me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
		}
		me._node_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._node_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._node_scroller.ggScrollPosY >= me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight)) {
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._node_scroller.ggScrollPosY <= 0)) {
					me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._node_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._node_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._node_scroller.clientWidth - (me._node_scroller.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._node_scroller.clientWidth - (me._node_scroller.ggVertScrollVisible ? 15 : 0))) * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._node_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._node_scroller.clientHeight - (me._node_scroller.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._node_scroller.clientHeight - (me._node_scroller.ggHorScrollVisible ? 15 : 0))) * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._node_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._node_scroller__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaX *= 0.65;
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByX(me._node_scroller.ggDragInertiaX);
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._node_scroller__content.ontouchend = null;
				me._node_scroller__content.ontouchmove = null;
				me._node_scroller__content.onpointerup = null;
				me._node_scroller__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._node_scroller__content.onpointerup = me._node_scroller__content.ontouchend;
		}
			me._node_scroller__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._node_scroller.ggDragLastX) * me._node_scroller.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._node_scroller.ggDragLastY) * me._node_scroller.ggVPercentVisible;
				me._node_scroller.ggDragInertiaX = -diffX;
				me._node_scroller.ggDragInertiaY = -diffY;
				me._node_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._node_scroller.ggScrollByX(-diffX);
				me._node_scroller.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._node_scroller__content.onpointermove = me._node_scroller__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elVertScrollBg = me._node_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 1080px; background-color: rgba(0,0,0,0.12549); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._node_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 1080px; background-color: rgba(255,255,255,0.25098); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._node_scroller.ggScrollPosY = 0;
		me._node_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._node_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = e.clientY;
				me._node_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._node_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._node_scroller.ggScrollHeight;
			if (e.offsetY < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._node_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._node_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._node_scroller.ggScrollByYSmooth(30 * me._node_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._node_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="node_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100%  -  50px);';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_scroller.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('category_visible') == true)) && 
				((player.getVariableValue('node_visible') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._node_scroller.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._node_scroller.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._node_scroller.style[domTransition]='opacity 500ms ease 0ms';
				if (me._node_scroller.ggCurrentLogicStateAlpha == 0) {
					me._node_scroller.style.visibility=me._node_scroller.ggVisible?'inherit':'hidden';
					me._node_scroller.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._node_scroller.style.opacity == 0.0) { me._node_scroller.style.visibility="hidden"; } }, 505);
					me._node_scroller.style.opacity=0;
				}
			}
		}
		me._node_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContentWidth = contentWidth;
				this.ggContentHeight = contentHeight;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._node_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._node_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._node_scroller__vertScrollBg.style.visibility = 'inherit';
					me._node_scroller__vertScrollFg.style.visibility = 'inherit';
					me._node_scroller.ggVertScrollVisible = true;
				} else {
					me._node_scroller__vertScrollBg.style.visibility = 'hidden';
					me._node_scroller__vertScrollFg.style.visibility = 'hidden';
					me._node_scroller.ggVertScrollVisible = false;
				}
				if(me._node_scroller.ggVertScrollVisible) {
					me._node_scroller.ggAvailableWidth = me._node_scroller.clientWidth - 15;
					if (me._node_scroller.ggHorScrollVisible) {
						me._node_scroller.ggAvailableHeight = me._node_scroller.clientHeight - 15;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height - me._node_scroller__vertScrollBg.getBoundingClientRect().width;
						me._node_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._node_scroller.ggAvailableHeight = me._node_scroller.clientHeight;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height;
						me._node_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._node_scroller__vertScrollBg.style.height = me._node_scroller.ggAvailableHeight + 'px';
					me._node_scroller.ggVPercentVisible = contentHeight != 0 ? me._node_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._node_scroller.ggVPercentVisible > 1.0) me._node_scroller.ggVPercentVisible = 1.0;
					me._node_scroller.ggScrollHeight =  Math.round(me._node_scroller__vertScrollBg.offsetHeight * me._node_scroller.ggVPercentVisible);
					me._node_scroller__vertScrollFg.style.height = me._node_scroller.ggScrollHeight + 'px';
					me._node_scroller.ggScrollPosY = me._node_scroller.ggScrollPosYPercent * me._node_scroller.ggAvailableHeight;
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
					if (me._node_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
						me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._node_scroller.ggAvailableWidth = me._node_scroller.clientWidth;
					me._node_scroller.ggScrollPosY = 0;
					me._node_scroller.ggScrollPosYPercent = 0.0;
					me._node_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._node_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._node_scroller.ggHorScrollVisible || vertScrollWasVisible != me._node_scroller.ggVertScrollVisible) {
					me.updateSize(me._node_scroller);
					me._node_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner=document.createElement('div');
		el.ggPermeable=false;
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 140;
		el.ggHeight = 100;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._node_cloner.callChildLogicBlocks_changenode = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_active = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			curNumCols = me._node_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._node_cloner.ggHeight) + 'px';
				parameter.left=(column * me._node_cloner.ggWidth) + 'px';
				parameter.width=me._node_cloner.ggWidth + 'px';
				parameter.height=me._node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._node_cloner.callChildLogicBlocks_changenode();
			me._node_cloner.callChildLogicBlocks_mouseover();
			me._node_cloner.callChildLogicBlocks_active();
			me._node_cloner.callChildLogicBlocks_changevisitednodes();
			me._node_cloner.callChildLogicBlocks_activehotspotchanged();
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nop_";
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 10px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
				me._node_cloner.ggUpdate();
		}
		me._node_cloner.ggNodeChange=function () {
			me._node_cloner.ggUpdateConditionNodeChange();
		}
		me._node_scroller__content.appendChild(me._node_cloner);
		me._menu_background.appendChild(me._node_scroller);
		el=me._category_scroller=document.createElement('div');
		els=me._category_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 149px;';
		hs+="";
		els.setAttribute('style',hs);
		me._category_scroller.ggScrollByX = function(diffX) {
			if(!me._category_scroller.ggHorScrollVisible || diffX == 0 || me._category_scroller.ggHPercentVisible >= 1.0) return;
			me._category_scroller.ggScrollPosX = (me._category_scroller__horScrollFg.offsetLeft + diffX);
			me._category_scroller.ggScrollPosX = Math.max(me._category_scroller.ggScrollPosX, 0);
			me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
			me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._category_scroller.ggScrollPosX / (me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
			me._category_scroller__content.style.left = -(Math.round((me._category_scroller.ggContentWidth * (1.0 - me._category_scroller.ggHPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentLeftOffset + 'px';
			me._category_scroller.ggScrollPosXPercent = (me._category_scroller__horScrollFg.offsetLeft / me._category_scroller__horScrollBg.offsetWidth);
		}
		me._category_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._category_scroller.ggHorScrollVisible || diffX == 0 || me._category_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._category_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._category_scroller.ggScrollPosX >= me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth)) {
					me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._category_scroller.ggScrollPosX <= 0)) {
					me._category_scroller.ggScrollPosX = Math.max(me._category_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._category_scroller.ggScrollPosX / (me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
			me._category_scroller__content.style.left = -(Math.round((me._category_scroller.ggContentWidth * (1.0 - me._category_scroller.ggHPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentLeftOffset + 'px';
			me._category_scroller.ggScrollPosXPercent = (me._category_scroller__horScrollFg.offsetLeft / me._category_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._category_scroller.ggScrollByY = function(diffY) {
			if(!me._category_scroller.ggVertScrollVisible || diffY == 0 || me._category_scroller.ggVPercentVisible >= 1.0) return;
			me._category_scroller.ggScrollPosY = (me._category_scroller__vertScrollFg.offsetTop + diffY);
			me._category_scroller.ggScrollPosY = Math.max(me._category_scroller.ggScrollPosY, 0);
			me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
			me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._category_scroller.ggScrollPosY / (me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
			me._category_scroller__content.style.top = -(Math.round((me._category_scroller.ggContentHeight * (1.0 - me._category_scroller.ggVPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentTopOffset + 'px';
			me._category_scroller.ggScrollPosYPercent = (me._category_scroller__vertScrollFg.offsetTop / me._category_scroller__vertScrollBg.offsetHeight);
		}
		me._category_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._category_scroller.ggVertScrollVisible || diffY == 0 || me._category_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._category_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._category_scroller.ggScrollPosY >= me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight)) {
					me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._category_scroller.ggScrollPosY <= 0)) {
					me._category_scroller.ggScrollPosY = Math.max(me._category_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._category_scroller.ggScrollPosY / (me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
			me._category_scroller__content.style.top = -(Math.round((me._category_scroller.ggContentHeight * (1.0 - me._category_scroller.ggVPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentTopOffset + 'px';
			me._category_scroller.ggScrollPosYPercent = (me._category_scroller__vertScrollFg.offsetTop / me._category_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._category_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._category_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._category_scroller.ggHPercentVisible);
					me._category_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._category_scroller.clientWidth - (me._category_scroller.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._category_scroller.clientWidth - (me._category_scroller.ggVertScrollVisible ? 15 : 0))) * me._category_scroller.ggHPercentVisible);
					me._category_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._category_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._category_scroller.ggVPercentVisible);
					me._category_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._category_scroller.clientHeight - (me._category_scroller.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._category_scroller.clientHeight - (me._category_scroller.ggHorScrollVisible ? 15 : 0))) * me._category_scroller.ggVPercentVisible);
					me._category_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._category_scroller__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaX *= 0.65;
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByX(me._category_scroller.ggDragInertiaX);
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._category_scroller__content.ontouchend = null;
				me._category_scroller__content.ontouchmove = null;
				me._category_scroller__content.onpointerup = null;
				me._category_scroller__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._category_scroller__content.onpointerup = me._category_scroller__content.ontouchend;
		}
			me._category_scroller__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._category_scroller.ggDragLastX) * me._category_scroller.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._category_scroller.ggDragLastY) * me._category_scroller.ggVPercentVisible;
				me._category_scroller.ggDragInertiaX = -diffX;
				me._category_scroller.ggDragInertiaY = -diffY;
				me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._category_scroller.ggScrollByX(-diffX);
				me._category_scroller.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._category_scroller__content.onpointermove = me._category_scroller__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elHorScrollBg = me._category_scroller__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 178px; height: 15px; background-color: rgba(128,128,128,0.752941); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._category_scroller__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 178px; height: 15px; background-color: rgba(192,192,192,0.752941); pointer-events: auto;');
		me._category_scroller.ggScrollPosX = 0;
		me._category_scroller.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._category_scroller.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaX *= 0.65;
					me._category_scroller.ggScrollByX(me._category_scroller.ggDragInertiaX);
					if (Math.abs(me._category_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._category_scroller.ggDragLastX;
				me._category_scroller.ggDragInertiaX = diffX;
				me._category_scroller.ggDragLastX = e.clientX;
				me._category_scroller.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaX *= 0.65;
					me._category_scroller.ggScrollByX(me._category_scroller.ggDragInertiaX);
					if (Math.abs(me._category_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._category_scroller.ggDragLastX;
				me._category_scroller.ggDragInertiaX = diffX;
				me._category_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._category_scroller.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._category_scroller.ggScrollWidth;
			if (e.offsetX < me._category_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._category_scroller.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._category_scroller__horScrollBg.getBoundingClientRect();
			var diffX = me._category_scroller.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._category_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._category_scroller.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._category_scroller.ggScrollByXSmooth(30 * me._category_scroller.ggHPercentVisible * wheelDelta);
		});
		elVertScrollBg = me._category_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 480px; background-color: rgba(128,128,128,0.752941); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._category_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 480px; background-color: rgba(192,192,192,0.752941); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._category_scroller.ggScrollPosY = 0;
		me._category_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._category_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragInertiaY = diffY;
				me._category_scroller.ggDragLastY = e.clientY;
				me._category_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._category_scroller.ggDragInertiaY *= 0.65;
					me._category_scroller.ggScrollByY(me._category_scroller.ggDragInertiaY);
					if (Math.abs(me._category_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._category_scroller.ggDragLastY;
				me._category_scroller.ggDragInertiaY = diffY;
				me._category_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._category_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._category_scroller.ggScrollHeight;
			if (e.offsetY < me._category_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._category_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._category_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._category_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._category_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._category_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._category_scroller.ggScrollByYSmooth(30 * me._category_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._category_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="category_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100%  -  50px);';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._category_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_scroller.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('node_visible') == true)) || 
				((player.getVariableValue('category_visible') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._category_scroller.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._category_scroller.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._category_scroller.style[domTransition]='opacity 500ms ease 0ms';
				if (me._category_scroller.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._category_scroller.style.opacity == 0.0) { me._category_scroller.style.visibility="hidden"; } }, 505);
					me._category_scroller.style.opacity=0;
				}
				else {
					me._category_scroller.style.visibility=me._category_scroller.ggVisible?'inherit':'hidden';
					me._category_scroller.style.opacity=1;
				}
			}
		}
		me._category_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContentWidth = contentWidth;
				this.ggContentHeight = contentHeight;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = -(Math.round(me._category_scroller.ggScrollPosX / me._category_scroller.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._category_scroller.ggScrollPosY / me._category_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._category_scroller__horScrollBg.style.visibility = 'inherit';
					me._category_scroller__horScrollFg.style.visibility = 'inherit';
					me._category_scroller.ggHorScrollVisible = true;
				} else {
					me._category_scroller__horScrollBg.style.visibility = 'hidden';
					me._category_scroller__horScrollFg.style.visibility = 'hidden';
					me._category_scroller.ggHorScrollVisible = false;
				}
				if ((me._category_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._category_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._category_scroller__vertScrollBg.style.visibility = 'inherit';
					me._category_scroller__vertScrollFg.style.visibility = 'inherit';
					me._category_scroller.ggVertScrollVisible = true;
					if (!me._category_scroller.ggHorScrollVisible && (contentWidth > offsetWidthWithScale - me._category_scroller__vertScrollBg.getBoundingClientRect().width)) {
						me._category_scroller__horScrollBg.style.visibility = 'inherit';
						me._category_scroller__horScrollFg.style.visibility = 'inherit';
						me._category_scroller.ggHorScrollVisible = true;
					}
				} else {
					me._category_scroller__vertScrollBg.style.visibility = 'hidden';
					me._category_scroller__vertScrollFg.style.visibility = 'hidden';
					me._category_scroller.ggVertScrollVisible = false;
				}
				if(me._category_scroller.ggHorScrollVisible) {
					me._category_scroller.ggAvailableHeight = me._category_scroller.clientHeight - 15;
					if (me._category_scroller.ggVertScrollVisible) {
						me._category_scroller.ggAvailableWidth = me._category_scroller.clientWidth - 15;
						me._category_scroller.ggAvailableWidthWithScale = me._category_scroller.getBoundingClientRect().width - me._category_scroller__horScrollBg.getBoundingClientRect().height;
					} else {
						me._category_scroller.ggAvailableWidth = me._category_scroller.clientWidth;
						me._category_scroller.ggAvailableWidthWithScale = me._category_scroller.getBoundingClientRect().width;
					}
					me._category_scroller__horScrollBg.style.width = me._category_scroller.ggAvailableWidth + 'px';
					me._category_scroller.ggHPercentVisible = contentWidth != 0 ? me._category_scroller.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._category_scroller.ggHPercentVisible > 1.0) me._category_scroller.ggHPercentVisible = 1.0;
					me._category_scroller.ggScrollWidth = Math.round(me._category_scroller__horScrollBg.offsetWidth * me._category_scroller.ggHPercentVisible);
					me._category_scroller__horScrollFg.style.width = me._category_scroller.ggScrollWidth + 'px';
					me._category_scroller.ggScrollPosX = me._category_scroller.ggScrollPosXPercent * me._category_scroller.ggAvailableWidth;
					me._category_scroller.ggScrollPosX = Math.min(me._category_scroller.ggScrollPosX, me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
					me._category_scroller__horScrollFg.style.left = me._category_scroller.ggScrollPosX + 'px';
					if (me._category_scroller.ggHPercentVisible < 1.0) {
						let percentScrolled = me._category_scroller.ggScrollPosX / (me._category_scroller__horScrollBg.offsetWidth - me._category_scroller__horScrollFg.offsetWidth);
						me._category_scroller__content.style.left = -(Math.round((me._category_scroller.ggContentWidth * (1.0 - me._category_scroller.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._category_scroller.ggAvailableHeight = me._category_scroller.clientHeight;
					me._category_scroller.ggScrollPosX = 0;
					me._category_scroller.ggScrollPosXPercent = 0.0;
					me._category_scroller__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(me._category_scroller.ggVertScrollVisible) {
					me._category_scroller.ggAvailableWidth = me._category_scroller.clientWidth - 15;
					if (me._category_scroller.ggHorScrollVisible) {
						me._category_scroller.ggAvailableHeight = me._category_scroller.clientHeight - 15;
						me._category_scroller.ggAvailableHeightWithScale = me._category_scroller.getBoundingClientRect().height - me._category_scroller__vertScrollBg.getBoundingClientRect().width;
						me._category_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._category_scroller.ggAvailableHeight = me._category_scroller.clientHeight;
						me._category_scroller.ggAvailableHeightWithScale = me._category_scroller.getBoundingClientRect().height;
						me._category_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._category_scroller__vertScrollBg.style.height = me._category_scroller.ggAvailableHeight + 'px';
					me._category_scroller.ggVPercentVisible = contentHeight != 0 ? me._category_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._category_scroller.ggVPercentVisible > 1.0) me._category_scroller.ggVPercentVisible = 1.0;
					me._category_scroller.ggScrollHeight =  Math.round(me._category_scroller__vertScrollBg.offsetHeight * me._category_scroller.ggVPercentVisible);
					me._category_scroller__vertScrollFg.style.height = me._category_scroller.ggScrollHeight + 'px';
					me._category_scroller.ggScrollPosY = me._category_scroller.ggScrollPosYPercent * me._category_scroller.ggAvailableHeight;
					me._category_scroller.ggScrollPosY = Math.min(me._category_scroller.ggScrollPosY, me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
					me._category_scroller__vertScrollFg.style.top = me._category_scroller.ggScrollPosY + 'px';
					if (me._category_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._category_scroller.ggScrollPosY / (me._category_scroller__vertScrollBg.offsetHeight - me._category_scroller__vertScrollFg.offsetHeight);
						me._category_scroller__content.style.top = -(Math.round((me._category_scroller.ggContentHeight * (1.0 - me._category_scroller.ggVPercentVisible)) * percentScrolled)) + me._category_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._category_scroller.ggAvailableWidth = me._category_scroller.clientWidth;
					me._category_scroller.ggScrollPosY = 0;
					me._category_scroller.ggScrollPosYPercent = 0.0;
					me._category_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._category_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._category_scroller.ggHorScrollVisible || vertScrollWasVisible != me._category_scroller.ggVertScrollVisible) {
					me.updateSize(me._category_scroller);
					me._category_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._category_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 140;
		el.ggHeight = 37;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		el.ggUpdate = function(filter) {
			if(me._category_cloner.ggUpdating == true) return;
			me._category_cloner.ggUpdating = true;
			var el=me._category_cloner;
			var curNumCols = 0;
			curNumCols = me._category_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._category_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var firstNode;
			for (var i=0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k]) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				var parameter={};
				parameter.top=(row * me._category_cloner.ggHeight) + 'px';
				parameter.left=(column * me._category_cloner.ggWidth) + 'px';
				parameter.width=me._category_cloner.ggWidth + 'px';
				parameter.height=me._category_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_category_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._category_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._category_cloner.parentNode.classList.contains('ggskin_subelement') && me._category_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._category_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			{tag:"videos",title:"1.Inicio"},
			{tag:"garaje",title:"Garaje"},
			{tag:"jardines n36",title:"Jardines n36"},
			{tag:"jardines n44",title:"Jardines n44"},
			{tag:"jardines n52",title:"Jardines n52"},
			{tag:"portal",title:"Portal"},
			];
		el.ggId="category_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 10px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._category_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._category_cloner.childNodes.length; i++) {
				var child=me._category_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._category_cloner.ggUpdatePosition=function (useTransition) {
				me._category_cloner.ggUpdate();
		}
		me._category_cloner.ggNodeChange=function () {
			me._category_cloner.ggUpdateConditionNodeChange();
		}
		me._category_scroller__content.appendChild(me._category_cloner);
		me._menu_background.appendChild(me._category_scroller);
		me.divSkin.appendChild(me._menu_background);
		el=me._menu_open=document.createElement('div');
		els=me._menu_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBmaWxsLW9wYWNpdHk9IjEiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bm'+
			'V3IDAgMCAzMiAzMjsiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiA8cGF0aCBkPSJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnoiLz4KPC9zdmc+Cg==';
		me._menu_open__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_open.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('category_visible') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_open.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu_open.ggCurrentLogicStatePosition == 0) {
					me._menu_open.style.left='130px';
					me._menu_open.style.top='5px';
				}
				else {
					me._menu_open.style.left='5px';
					me._menu_open.style.top='5px';
				}
			}
		}
		me._menu_open.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['menu_open'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('category_visible') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_open.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_open.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_open.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu_open.ggCurrentLogicStateAlpha == 0) {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=1;
				}
				else if (me._menu_open.ggCurrentLogicStateAlpha == 1) {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=0.6;
				}
				else {
					me._menu_open.style.visibility=me._menu_open.ggVisible?'inherit':'hidden';
					me._menu_open.style.opacity=1;
				}
			}
		}
		me._menu_open.onclick=function (e) {
			if (
				(
					((player.getVariableValue('node_visible') == false))
				)
			) {
				player.setVariableValue('category_visible', !player.getVariableValue('category_visible'));
			}
			player.setVariableValue('node_visible', false);
		}
		me._menu_open.onmouseover=function (e) {
			me.elementMouseOver['menu_open']=true;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.onmouseout=function (e) {
			me.elementMouseOver['menu_open']=false;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.ontouchend=function (e) {
			me.elementMouseOver['menu_open']=false;
			me._menu_open.logicBlock_alpha();
		}
		me._menu_open.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._menu_open);
		me._jardinesn52_1.ggVideoSource = 'media/jardin3cielo-30fps3840.mp4';
		me._jardinesn52_1.ggVideoNotLoaded = true;
		me._jardinesn44_1.ggVideoSource = 'media/jardin2cielo-30fps3840.mp4';
		me._jardinesn44_1.ggVideoNotLoaded = true;
		me._jardinesn36_1.ggVideoSource = 'media/jardin1cielo-30fps3840.mp4';
		me._jardinesn36_1.ggVideoNotLoaded = true;
		me._casa_1.ggVideoSource = 'media/casacielo-30fps3840.mp4';
		me._casa_1.ggVideoNotLoaded = true;
		me._volar.ggVideoSource = 'media/volar-cielo30fps3840.mp4';
		me._volar.ggVideoNotLoaded = true;
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggMapId = 'FloorPlan01';
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',300);
				radar.radarElement.setAttributeNS(null,'height',300);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 300 300');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 150 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 150 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 150 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 150 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 150;
				arcY1 += 150;
				arcX2 += 150;
				arcY2 += 150;
				var radarPathString = 'M150,150 L' + arcX1 + ',' + arcY1 + ' A 150 150 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#ff0000');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#ff0000');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 150;
				var radarYPos = activeMarker.radarYPos - 150;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			me._map_1.ggMapNotLoaded = false;
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap();
				me._map_1.ggInitMapMarkers();
			}
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 20;
					me._map_1.ggVMarkerAnchorOffset = 40;
					var marker = document.createElement('img');
					marker.setAttribute('src', basePath + 'images/_ggMapPin.png');
					marker.setAttribute('title', player.getNodeTitle(id));
					marker.style['width'] = '40px';
					marker.style['width'] = '40px';
					marker.style['cursor'] = 'pointer';
					marker.ggId = id;
					marker.onclick = function() {
						player.openNext('{' + this.ggId + '}');
					}
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		this.preloadImages();
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			if (me._map_1.ggMapNotLoaded == false) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap(false);
				me._map_1.ggInitMapMarkers(true);
			}
			me._node_cloner.ggUpdate();
			me._category_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._node_scroller.ggUpdatePosition();
			me._category_scroller.ggUpdatePosition();
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_active = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_visited && hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changevisitednodes = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_visited && hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_visited.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['zoomout']) {
			player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomin']) {
			player.changeFovLog(-0.5,true);
		}
		me._map_1.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='bottom : 0%;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("videos") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style[domTransition]='';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
				else {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,"$(cur)");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMCIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAwIDEwMDA7IiB2aWV3Qm94PSIwID'+
			'AgMTAwMCAxMDAwIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_lower__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white_lower.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateVisible == 0) {
					me._chevron_white_lower.style.visibility="hidden";
					me._chevron_white_lower.ggVisible=false;
				}
				else {
					me._chevron_white_lower.style.visibility=(Number(me._chevron_white_lower.style.opacity)>0||!me._chevron_white_lower.style.opacity)?'inherit':'hidden';
					me._chevron_white_lower.ggVisible=true;
				}
			}
		}
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMCIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAwIDEwMDA7IiB2aWV3Qm94PSIwID'+
			'AgMTAwMCAxMDAwIj4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcmI3hhOyYjeDk7JiN4OTtjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_black.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateVisible == 0) {
					me._chevron_black.style.visibility="hidden";
					me._chevron_black.ggVisible=false;
				}
				else {
					me._chevron_black.style.visibility=(Number(me._chevron_black.style.opacity)>0||!me._chevron_black.style.opacity)?'inherit':'hidden';
					me._chevron_black.ggVisible=true;
				}
			}
		}
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMCIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAwIDEwMDA7IiB2aWV3Qm94PSIwID'+
			'AgMTAwMCAxMDAwIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
					me._chevron_white.style.visibility="hidden";
					me._chevron_white.ggVisible=false;
				}
				else {
					me._chevron_white.style.visibility=(Number(me._chevron_white.style.opacity)>0||!me._chevron_white.style.opacity)?'inherit':'hidden';
					me._chevron_white.ggVisible=true;
				}
			}
		}
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.6;
				}
			}
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #000000; transform:translate3d(0px,0px,90px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style[domTransition]='opacity 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image.style.opacity == 0.0) { me._hs_preview_image.style.visibility="hidden"; } }, 505);
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.196078);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style[domTransition]='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		el=me._hs_visited=document.createElement('div');
		els=me._hs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC0yNDAgMzMyIDEzMCAxMzA7IiB2aWV3Qm94PS'+
			'ItMjQwIDMzMiAxMzAgMTMwIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._hs_visited__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._hs_visited.ggIsActive() == true)) || 
				((player.nodeVisited(me._hs_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_visited.style[domTransition]='';
				if (me._hs_visited.ggCurrentLogicStateVisible == 0) {
					me._hs_visited.style.visibility=(Number(me._hs_visited.style.opacity)>0||!me._hs_visited.style.opacity)?'inherit':'hidden';
					me._hs_visited.ggVisible=true;
				}
				else {
					me._hs_visited.style.visibility="hidden";
					me._hs_visited.ggVisible=false;
				}
			}
		}
		me._hs_visited.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._hs_visited);
		me._ht_node.appendChild(me._hs_preview_image);
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'translate3d(0px,0px,-1000px) perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__code);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); font-size: 15px; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 1px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((me.hotspot.title != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style[domTransition]='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((142-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style[domTransition]='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage__img.src = '';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_active();;
			me.callChildLogicBlocksHotspot_ht_node_changevisitednodes();;
			me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_node_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 140px; height: 100px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_image_cloner=document.createElement('div');
		els=me._node_image_cloner__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_Image_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_image_cloner.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image_cloner.onclick=function (e) {
			if (
				(
					((me._node_image_cloner.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._node_image_cloner.onmouseover=function (e) {
			me.elementMouseOver['node_image_cloner']=true;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.onmouseout=function (e) {
			me.elementMouseOver['node_image_cloner']=false;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.ontouchend=function (e) {
			me.elementMouseOver['node_image_cloner']=false;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 1px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 136px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 136px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style[domTransition]='';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
				else {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
			}
		}
		me._node_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._node_image_cloner.appendChild(me._node_title);
		el=me._node_visited=document.createElement('div');
		el.ggId="node_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 87px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_visited.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['node_image_cloner'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me._node_visited.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else if (
				((player.nodeVisited(me._node_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateBorderColor = 2;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._node_visited.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._node_visited.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._node_visited.style[domTransition]='border-color 0s';
				if (me._node_visited.ggCurrentLogicStateBorderColor == 0) {
					me._node_visited.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 1) {
					me._node_visited.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 2) {
					me._node_visited.style.borderColor="rgba(209,209,209,1)";
				}
				else {
					me._node_visited.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._node_visited.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_image_cloner.appendChild(me._node_visited);
		me.__div.appendChild(me._node_image_cloner);
	};
	function SkinCloner_category_cloner_Class(item, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 140px; height: 37px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			var tags = player.userdata.tags;
			if (tags.indexOf(me.ggTag) == -1) return false;
			for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
				if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
			}
			return true;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._category_text=document.createElement('div');
		els=me._category_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 140px;';
		hs+='height: 35px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggTitle+" ("+me.ggNodeCount+")";
		el.appendChild(els);
		me._category_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_text.onclick=function (e) {
			skin._node_cloner.ggText=me.ggTag;
			if (skin._node_cloner.ggText=='') {
				skin._node_cloner.ggUpdate([]);
			} else {
				skin._node_cloner.ggUpdate(skin._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
			player.setVariableValue('node_visible', true);
		}
		me._category_text.ggActivate=function () {
			skin._node_cloner.ggText=me.ggTag;
			if (skin._node_cloner.ggText=='') {
				skin._node_cloner.ggUpdate([]);
			} else {
				skin._node_cloner.ggUpdate(skin._node_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
		}
		me._category_text.ggUpdatePosition=function (useTransition) {
		}
		me._category_text.ggNodeChange=function () {
			if (me._category_text.ggLastIsActive!=me._category_text.ggIsActive()) {
				me._category_text.ggLastIsActive=me._category_text.ggIsActive();
				if (me._category_text.ggIsActive()) {
					if (me._category_text.ggActivate) me._category_text.ggActivate();
				} else {
					if (me._category_text.ggDeactivate) me._category_text.ggDeactivate();
				}
			}
		}
		me.__div.appendChild(me._category_text);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._button_image_normalscreen.logicBlock_visible();
	me._button_image_fullscreen.logicBlock_visible();
	me._jardinesn52_1.logicBlock_visible();
	me._jardinesn44_1.logicBlock_visible();
	me._jardinesn36_1.logicBlock_visible();
	me._casa_1.logicBlock_visible();
	me._jardinesn52.logicBlock_visible();
	me._jardinesn44.logicBlock_visible();
	me._jardinesn36.logicBlock_visible();
	me._casa.logicBlock_visible();
	me._volar.logicBlock_visible();
	me._button_1.logicBlock_visible();
	me._stop_rotate_image.logicBlock_visible();
	me._start_rotate_image.logicBlock_visible();
	me._menu_background.logicBlock_alpha();
	me._node_scroller.logicBlock_alpha();
	me._category_scroller.logicBlock_alpha();
	me._menu_open.logicBlock_position();
	me._menu_open.logicBlock_alpha();
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me._jardinesn52_1.logicBlock_visible();me._jardinesn44_1.logicBlock_visible();me._jardinesn36_1.logicBlock_visible();me._casa_1.logicBlock_visible();me._jardinesn52.logicBlock_visible();me._jardinesn44.logicBlock_visible();me._jardinesn36.logicBlock_visible();me._casa.logicBlock_visible();me._volar.logicBlock_visible();me._button_1.logicBlock_visible();me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible();me._menu_background.logicBlock_alpha();me._node_scroller.logicBlock_alpha();me._category_scroller.logicBlock_alpha();me._menu_open.logicBlock_position();me._menu_open.logicBlock_alpha(); });
	player.addListener('autorotatechanged', function(args) { me._stop_rotate_image.logicBlock_visible();me._start_rotate_image.logicBlock_visible(); });
	player.addListener('varchanged_category_visible', function(args) { me._menu_background.logicBlock_alpha();me._node_scroller.logicBlock_alpha();me._category_scroller.logicBlock_alpha();me._menu_open.logicBlock_position();me._menu_open.logicBlock_alpha(); });
	player.addListener('varchanged_node_visible', function(args) { me._node_scroller.logicBlock_alpha();me._category_scroller.logicBlock_alpha(); });
	player.addListener('changenode', function(args) { me._node_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._node_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._node_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._node_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me._node_cloner.callChildLogicBlocks_activehotspotchanged(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_node_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_active(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_ht_node_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged(); });
	player.addListener('varchanged_opt_3d_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};