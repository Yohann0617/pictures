/******************************
*人人美剧解锁永久VIP
*主机名api.hujuvod.com
*TG频道∶https://t.me/iosrxwy/
*公众号∶iOS宝藏
*/

[rewrite_local]
^http[s]?:\/\/api.hujuvod.com\/user\/personal\/information url script-response-body https://raw.githubusercontent.com/Yohann0617/pictures/master/Yohann-rrsp.js
  
[mitm]
hostname = api.hujuvod.com

*************************************/

var body = $response.body.replace(/expiredTime":\d+/g,'expiredTime":253392455349000')
.replace(/valid":\w+/g,'valid":true')
.replace(/endTime":".*?"/g,'endTime":"9999-11-15 11:55:06"')
$done({ body });
