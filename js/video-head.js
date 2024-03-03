function findGetParameter(parameterName) {
   var result = null,
      tmp = [];
   var url = location.toString().split("#");
   if (url[1] !== undefined){
      url[1]
      .split("&")
      .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
   }
   return result;
}

var style = document.createElement('style');
document.head.appendChild(style);

///////////// Theme Color ///////////////
var theme_color = atob(findGetParameter("theme_color"));
if ((theme_color !== null) && (theme_color.length === 6)){
   var hex = theme_color;
}else{
   var hex = "0F53FA";
}
style.sheet.insertRule('.btn-selector, .btn-blue-3:active, .btn-blue-3:hover, .btn-blue-3{background-color: #' + hex + ' !important; border-color: #' + hex + ' !important;}');
   style.sheet.insertRule('a:hover, a:active{color: #' + hex + ';}');
style.sheet.insertRule('a{color: #' + hex + ';}');
   /////////////////////////////////////////


///////////// Hide Logo And Dark Theme ///////////////
var is_hide_logo = parseInt(atob(findGetParameter("is_hide_logo")));
var is_dark_theme = parseInt(atob(findGetParameter("is_dark_theme")));
if ((is_dark_theme !== null) && (is_dark_theme === 1)){
   style.sheet.insertRule('body{background: #1d1d1d;}');
   style.sheet.insertRule('h3{color: #fff;}');
   style.sheet.insertRule('p{color: #f4f4f4;}');
   style.sheet.insertRule('#description, #instructions{background: rgb(255 255 255 / 0.04);}');
   if ((is_hide_logo !== null) && (is_hide_logo !== 1)){
      style.sheet.insertRule('.dark-version-logo{display:block;}');
   }
}else{
   style.sheet.insertRule('#instructions, #description{background: #EEEEEE;}');
   style.sheet.insertRule('body{background: #F7F7F7;}');
   style.sheet.insertRule('hr{border-top: 1px solid #C6C6C6;}');
   
   if ((is_hide_logo !== null) && (is_hide_logo !== 1)){
      style.sheet.insertRule('.light-version-logo{display:block;}');
   }
}
/////////////////////////////////////////


var is_hide_intructions = parseInt(atob(findGetParameter("is_hide_intructions")));
if ((is_hide_intructions !== null) && (is_hide_intructions === 1)){
   style.sheet.insertRule('#instructions{display:none;}');
}

var title = (findGetParameter("title"));
if ((title !== null) && (title != "")){
   style.sheet.insertRule('#title{display:block;}');
}

var description = (findGetParameter("description"));
if ((description !== null) && (description != "")){
   style.sheet.insertRule('#description{display:block;}');
}else{
   style.sheet.insertRule('#description{display:none;}');
}

var prev_button = (findGetParameter("prev_button"));
if ((prev_button !== null) && (prev_button != "")){
   style.sheet.insertRule('#prev_button{cursor:pointer;opacity:1;}');
}

var next_button = (findGetParameter("next_button"));
if ((next_button !== null) && (next_button != "")){
   style.sheet.insertRule('#next_button{cursor:pointer;opacity:1;}');
   style.sheet.insertRule('@media(max-width:450px){#prev_button {display: none !important;}}');
}

if ((!((prev_button !== null) && (prev_button != ""))) && (!((next_button !== null) && (next_button != "")))){
   style.sheet.insertRule('@media(max-width:450px){#prev_button, #next_button {display: none !important;} #bottom_buttons{justify-content: center;}}');
}

var back_button = (findGetParameter("back_button"));
if ((back_button !== null) && (back_button != "")){
   style.sheet.insertRule('#back_button{display:flex;}');
}

var custom_logo = (findGetParameter("custom_logo"));
if ((custom_logo !== null) && (custom_logo != "")){
   style.sheet.insertRule('#custom_logo{display:block;}');
   style.sheet.insertRule('.light-version-logo{display:none !important;}');
   style.sheet.insertRule('.dark-version-logo{display:none !important;}');            
}

var download = (findGetParameter("download"));
if ((download !== null) && (download != "")){
   style.sheet.insertRule('#download{display:flex;}');
}

var disqus_id = (findGetParameter("disqus_id"));
if ((disqus_id !== null) && (disqus_id != "")){
   style.sheet.insertRule('#disqus{display:flex;}');
}

urls_count = 0;
var urls = (findGetParameter("urls"));
if ((urls !== null) && (urls != "")){
   urls = JSON.parse(atob(urls));
   Object.keys(urls).forEach(function(key) {
      urls_count += 1;
   });
   if (urls_count < 2){
      style.sheet.insertRule('.select_servers{cursor:unset;opacity:0;}');
   }
}else{
   urls = [];
   urls["load-direct"] = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
   style.sheet.insertRule('.select_servers{cursor:unset;opacity:0;}');
}
