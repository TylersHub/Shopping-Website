var setCookie=null;
var getCookie=null;
var delCookie=null;
var delAllCookies=null;

if (navigator.userAgent.indexOf("Firefox") >=0  ) 
{
    setCookie=function(name,value,days)
	{
		var d=new Date();
		d.setTime(d.getTime()+(24*60*60*1000*days));
		var expires="expires="+d.toUTCString();
		document.cookie=name+"="+value+"; "+expires+"; path=/";
	}
	getCookie=function(name)
	{
		var x=document.cookie.split("; ");
		for(var i=0;i<x.length;i++)
		{
			var y=x[i].split("=");
			if(y[0]==name) return y[1];
		}
		return null;
	}
	delCookie=function(name)
	{
		setCookie(name,"",-1);
	}
    delAllCookies=function()
	{
		let x=document.cookie.split("; ");
		for(var i=0;i<x.length;i++)
		{
			var y=x[i].split("=");
			delCookie(y[0]);
		}
	}
}
else 
{
	setCookie=function(name,value,days)
	{
		if(days<0) window.localStorage.removeItem(name);
		else window.localStorage.setItem(name,value);
	}
	getCookie=function(name)
	{
		return window.localStorage.getItem(name);
	}	
	delCookie=function(name)
	{
		window.localStorage.removeItem(name);
	}
	delAllCookies=function()
	{
		localStorage.clear();
	} 
}
