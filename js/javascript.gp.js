/**
 * Created by jeffery on 18/12/23.
 */
function geoplugin_request() { return '101.66.229.15';}
function geoplugin_status() { return '200';}
function geoplugin_credit() { return 'Some of the returned data includes GeoLite data created by MaxMind, available from <a href=\'http://www.maxmind.com\'>http://www.maxmind.com</a>.';}
function geoplugin_delay() { return '1ms';}
function geoplugin_city() { return 'Shanghai';}
function geoplugin_region() { return 'Shanghai';}
function geoplugin_regionCode() { return 'SH';}
function geoplugin_regionName() { return 'Shanghai';}
function geoplugin_areaCode() { return '';}
function geoplugin_dmaCode() { return '';}
function geoplugin_countryCode() { return 'CN';}
function geoplugin_countryName() { return 'China';}
function geoplugin_inEU() { return 0;}
function geoplugin_euVATrate() { return ;}
function geoplugin_continentCode() { return 'AS';}
function geoplugin_latitude() { return '31.0456';}
function geoplugin_longitude() { return '121.3997';}
function geoplugin_locationAccuracyRadius() { return '200';}
function geoplugin_timezone() { return 'Asia/Shanghai';}
function geoplugin_currencyCode() { return 'CNY';}
function geoplugin_currencySymbol() { return '&#20803;';}
function geoplugin_currencySymbol_UTF8() { return '元';}
function geoplugin_currencyConverter(amt, symbol) {
    if (!amt) { return false; }
    var converted = amt * 6.9064;
    if (converted <0) { return false; }
    if (symbol === false) { return Math.round(converted * 100)/100; }
    else { return '&#20803;'+(Math.round(converted * 100)/100);}
    return false;
} 