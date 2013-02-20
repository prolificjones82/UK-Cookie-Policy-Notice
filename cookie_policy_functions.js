/*
 *
 *	Report all issues on the plugins GitHub page (https://github.com/prolificjones82/uk_cookie_policy_notice)
 *	or via email (mail@leejones.me.uk)
 *
*/


function setCookie(c_name,c_value,c_expiredays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+c_expiredays);
    document.cookie=c_name+ "=" +escape(c_value)+
    ((c_expiredays==null) ? "" : ";expires="+exdate.toGMTString());
    
    document.getElementById('cookie_container').style.visibility = 'hidden';
}


function getCookie(c_name) {
  var i,x,y,ARRcookies=document.cookie.split(";");
	
	for (i=0;i<ARRcookies.length;i++) {
  		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
 		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
 		x=x.replace(/^\s+|\s+$/g,"");
  		
  		if (x==c_name) {
    			document.getElementById('cookie_container').style.visibility = 'hidden';
    			return unescape(y);
    		} else {
    			document.getElementById('cookie_container').style.visibility = 'visible';
    		}
  	}
}
