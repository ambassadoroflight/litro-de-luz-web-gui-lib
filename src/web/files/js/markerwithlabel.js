function inherits(e,t){function a(){}a.prototype=t.prototype,e.superClass_=t.prototype,e.prototype=new a,e.prototype.constructor=e}function MarkerLabel_(e,t,a,r){this.marker_=t,this.handCursorURL_=t.handCursorURL,this.labelDiv_=document.createElement("div"),void 0!==e&&(this.labelDiv_.id=e),this.labelDiv_.style.cssText="position: absolute; overflow: hidden;",this.crossDiv_=MarkerLabel_.getSharedCross(a)}function MarkerWithLabel(e){(e=e||{}).labelContent=e.labelContent||"",e.labelAnchor=e.labelAnchor||new google.maps.Point(0,0),e.labelClass=e.labelClass||"markerLabels",e.labelStyle=e.labelStyle||{},e.labelInBackground=e.labelInBackground||!1,void 0===e.labelVisible&&(e.labelVisible=!0),void 0===e.raiseOnDrag&&(e.raiseOnDrag=!0),void 0===e.clickable&&(e.clickable=!0),void 0===e.draggable&&(e.draggable=!1),void 0===e.optimized&&(e.optimized=!1),e.crossImage=e.crossImage||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png",e.handCursor=e.handCursor||"http"+("https:"===document.location.protocol?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur",e.optimized=!1,this.label=new MarkerLabel_(e.id,this,e.crossImage,e.handCursor),google.maps.Marker.apply(this,arguments)}inherits(MarkerLabel_,google.maps.OverlayView),MarkerLabel_.getSharedCross=function(e){var t;return void 0===MarkerLabel_.getSharedCross.crossDiv&&((t=document.createElement("img")).style.cssText="position: absolute; z-index: 1000002; display: none;",t.style.marginLeft="-8px",t.style.marginTop="-9px",t.src=e,MarkerLabel_.getSharedCross.crossDiv=t),MarkerLabel_.getSharedCross.crossDiv},MarkerLabel_.prototype.onAdd=function(){var e,t,a,r,s,i,o,l=this,n=!1,g=!1,m="url("+this.handCursorURL_+")",p=function(e){e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()},d=function(){l.marker_.setAnimation(null)};this.getPanes().overlayMouseTarget.appendChild(this.labelDiv_),void 0===MarkerLabel_.getSharedCross.processed&&(this.getPanes().overlayMouseTarget.appendChild(this.crossDiv_),MarkerLabel_.getSharedCross.processed=!0),this.listeners_=[google.maps.event.addDomListener(this.labelDiv_,"mouseover",function(e){(l.marker_.getDraggable()||l.marker_.getClickable())&&(this.style.cursor="pointer",google.maps.event.trigger(l.marker_,"mouseover",e))}),google.maps.event.addDomListener(this.labelDiv_,"mouseout",function(e){!l.marker_.getDraggable()&&!l.marker_.getClickable()||g||(this.style.cursor=l.marker_.getCursor(),google.maps.event.trigger(l.marker_,"mouseout",e))}),google.maps.event.addDomListener(this.labelDiv_,"mousedown",function(e){g=!1,l.marker_.getDraggable()&&(n=!0,this.style.cursor=m),(l.marker_.getDraggable()||l.marker_.getClickable())&&(google.maps.event.trigger(l.marker_,"mousedown",e),p(e))}),google.maps.event.addDomListener(document,"mouseup",function(t){var a;if(n&&(n=!1,l.eventDiv_.style.cursor="pointer",google.maps.event.trigger(l.marker_,"mouseup",t)),g){if(s){(a=l.getProjection().fromLatLngToDivPixel(l.marker_.getPosition())).y+=20,l.marker_.setPosition(l.getProjection().fromDivPixelToLatLng(a));try{l.marker_.setAnimation(google.maps.Animation.BOUNCE),setTimeout(d,1406)}catch(e){}}l.crossDiv_.style.display="none",l.marker_.setZIndex(e),r=!0,g=!1,t.latLng=l.marker_.getPosition(),google.maps.event.trigger(l.marker_,"dragend",t)}}),google.maps.event.addListener(l.marker_.getMap(),"mousemove",function(r){var m;n&&(g?(r.latLng=new google.maps.LatLng(r.latLng.lat()-t,r.latLng.lng()-a),m=l.getProjection().fromLatLngToDivPixel(r.latLng),s&&(l.crossDiv_.style.left=m.x+"px",l.crossDiv_.style.top=m.y+"px",l.crossDiv_.style.display="",m.y-=20),l.marker_.setPosition(l.getProjection().fromDivPixelToLatLng(m)),s&&(l.eventDiv_.style.top=m.y+20+"px"),google.maps.event.trigger(l.marker_,"drag",r)):(t=r.latLng.lat()-l.marker_.getPosition().lat(),a=r.latLng.lng()-l.marker_.getPosition().lng(),e=l.marker_.getZIndex(),i=l.marker_.getPosition(),o=l.marker_.getMap().getCenter(),s=l.marker_.get("raiseOnDrag"),g=!0,l.marker_.setZIndex(1e6),r.latLng=l.marker_.getPosition(),google.maps.event.trigger(l.marker_,"dragstart",r)))}),google.maps.event.addDomListener(document,"keydown",function(e){g&&27===e.keyCode&&(s=!1,l.marker_.setPosition(i),l.marker_.getMap().setCenter(o),google.maps.event.trigger(document,"mouseup",e))}),google.maps.event.addDomListener(this.labelDiv_,"click",function(e){(l.marker_.getDraggable()||l.marker_.getClickable())&&(r?r=!1:(google.maps.event.trigger(l.marker_,"click",e),p(e)))}),google.maps.event.addDomListener(this.labelDiv_,"dblclick",function(e){(l.marker_.getDraggable()||l.marker_.getClickable())&&(google.maps.event.trigger(l.marker_,"dblclick",e),p(e))}),google.maps.event.addListener(this.marker_,"dragstart",function(e){g||(s=this.get("raiseOnDrag"))}),google.maps.event.addListener(this.marker_,"drag",function(e){g||s&&(l.setPosition(20),l.labelDiv_.style.zIndex=1e6+(this.get("labelInBackground")?-1:1))}),google.maps.event.addListener(this.marker_,"dragend",function(e){g||s&&l.setPosition(0)}),google.maps.event.addListener(this.marker_,"position_changed",function(){l.setPosition()}),google.maps.event.addListener(this.marker_,"zindex_changed",function(){l.setZIndex()}),google.maps.event.addListener(this.marker_,"visible_changed",function(){l.setVisible()}),google.maps.event.addListener(this.marker_,"labelvisible_changed",function(){l.setVisible()}),google.maps.event.addListener(this.marker_,"title_changed",function(){l.setTitle()}),google.maps.event.addListener(this.marker_,"labelcontent_changed",function(){l.setContent()}),google.maps.event.addListener(this.marker_,"labelanchor_changed",function(){l.setAnchor()}),google.maps.event.addListener(this.marker_,"labelclass_changed",function(){l.setStyles()}),google.maps.event.addListener(this.marker_,"labelstyle_changed",function(){l.setStyles()})]},MarkerLabel_.prototype.onRemove=function(){var e;for(this.labelDiv_.parentNode.removeChild(this.labelDiv_),e=0;e<this.listeners_.length;e++)google.maps.event.removeListener(this.listeners_[e])},MarkerLabel_.prototype.draw=function(){this.setContent(),this.setTitle(),this.setStyles()},MarkerLabel_.prototype.setContent=function(){var e=this.marker_.get("labelContent");void 0===e.nodeType?this.labelDiv_.innerHTML=e:(this.labelDiv_.innerHTML="",this.labelDiv_.appendChild(e))},MarkerLabel_.prototype.setTitle=function(){this.labelDiv_.title=this.marker_.getTitle()||""},MarkerLabel_.prototype.setStyles=function(){var e,t;this.labelDiv_.className=this.marker_.get("labelClass"),this.labelDiv_.style.cssText="",t=this.marker_.get("labelStyle");for(e in t)t.hasOwnProperty(e)&&(this.labelDiv_.style[e]=t[e]);this.setMandatoryStyles()},MarkerLabel_.prototype.setMandatoryStyles=function(){this.labelDiv_.style.position="absolute",this.labelDiv_.style.overflow="hidden",void 0!==this.labelDiv_.style.opacity&&""!==this.labelDiv_.style.opacity&&(this.labelDiv_.style.MsFilter='"progid:DXImageTransform.Microsoft.Alpha(opacity='+100*this.labelDiv_.style.opacity+')"',this.labelDiv_.style.filter="alpha(opacity="+100*this.labelDiv_.style.opacity+")"),this.setAnchor(),this.setPosition(),this.setVisible()},MarkerLabel_.prototype.setAnchor=function(){var e=this.marker_.get("labelAnchor");this.labelDiv_.style.marginLeft=-e.x+"px",this.labelDiv_.style.marginTop=-e.y+"px"},MarkerLabel_.prototype.setPosition=function(e){var t=this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());void 0===e&&(e=0),this.labelDiv_.style.left=Math.round(t.x)+"px",this.labelDiv_.style.top=Math.round(t.y-e)+"px",this.setZIndex()},MarkerLabel_.prototype.setZIndex=function(){var e=this.marker_.get("labelInBackground")?-1:1;void 0===this.marker_.getZIndex()?this.labelDiv_.style.zIndex=parseInt(this.labelDiv_.style.top,10)+e:this.labelDiv_.style.zIndex=this.marker_.getZIndex()+e},MarkerLabel_.prototype.setVisible=function(){this.marker_.get("labelVisible")?this.labelDiv_.style.display=this.marker_.getVisible()?"block":"none":this.labelDiv_.style.display="none"},inherits(MarkerWithLabel,google.maps.Marker),MarkerWithLabel.prototype.setMap=function(e){google.maps.Marker.prototype.setMap.apply(this,arguments),this.label.setMap(e)};