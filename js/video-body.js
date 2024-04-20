var title = (findGetParameter("title"));
if ((title !== null) && (title != "")){
   $("#title").text(decodeURIComponent(atob(title)));
}

var description = (findGetParameter("description"));
if ((description !== null) && (description != "")){
   $("#description-text").text(atob(description));
}

var prev_button = (findGetParameter("prev_button"));
if ((prev_button !== null) && (prev_button != "")){
   document.getElementById("prev_button").href=atob(prev_button); 
}

var next_button = (findGetParameter("next_button"));
if ((next_button !== null) && (next_button != "")){
   document.getElementById("next_button").href=atob(next_button); 
}

var back_button = (findGetParameter("back_button"));
if ((back_button !== null) && (back_button != "")){
   document.getElementById("back_button").href=atob(back_button); 
}

var custom_logo = (findGetParameter("custom_logo"));
if ((custom_logo !== null) && (custom_logo != "")){
   document.getElementById("custom_logo").src=atob(custom_logo); 
   if ((back_button !== null) && (back_button != "")){
      document.getElementById("custom_logo").parentElement.href=atob(back_button); 
   }
}

var download = (findGetParameter("download"));
if ((download !== null) && (download != "")){
   document.getElementById("download").href=atob(download); 
}


var disqus_id = (findGetParameter("disqus_id"));
if ((disqus_id !== null) && (disqus_id != "")){
   var disqus_config = function () {
      this.page.identifier = atob(disqus_id);
      this.page.url  = 'https://synctogethr.com/disqus.html?disqus_id=' + (disqus_id);
      if ((title !== null) && (title != "")){
         this.page.title = decodeURIComponent(atob(title));
         this.page.url  = this.page.url + "&title=" + title;
      }
      if ((is_dark_theme !== null)){
         this.page.url  = this.page.url + "&is_dark_theme=" + findGetParameter("is_dark_theme");
      }
      if ((theme_color !== null)){
         this.page.url  = this.page.url + "&theme_color=" + findGetParameter("theme_color");
      }
   };

   function displayCommentCount(e){void 0!==e.counts[0]?document.getElementById("disqus").innerHTML="Show "+e.counts[0].comments+' Comments&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-heart-fill" viewBox="0 0 16 16" style="margin-top: 1px;"><path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"></path></svg>':document.getElementById("disqus").innerHTML='Show Comments&nbsp;&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-heart-fill" viewBox="0 0 16 16" style="margin-top: 1px;"><path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"></path></svg>'}
   var DISQUSWIDGETS={displayCount:displayCommentCount}

   var script = document.createElement('script');
   script.src = "https://synctogethr.disqus.com/count-data.js?1=" + atob(disqus_id);
   document.head.appendChild(script);

   $("#disqus").click(function() {
      $("#disqus").hide(200);

      (function() {
         var d = document, s = d.createElement('script');
         s.src = 'https://synctogethr.disqus.com/embed.js';
         s.setAttribute('data-timestamp', +new Date());
         (d.head || d.body).appendChild(s);
      })();

   });
}

$(document).ready(function() {
   if (urls_count > 1){
      select = document.getElementById('select_servers');
      Object.keys(urls).forEach(function(key) {
         urls_count += 1;
            var opt = document.createElement('option');
            opt.value = urls[key];
            opt.innerHTML = key.split("-")[0] + " server";
            select.appendChild(opt);
      });
   }
   $('select').niceSelect();
});

$('.nice-select ul li').click(function() {
      setTimeout(function() {
            $('.nice-select').removeClass( "open" );
      }, 10);
});

function changeTo(index){

   var key_to_select = "";
   var is_first_selector = 0;
   Object.keys(urls).forEach(function(key) {
      if (is_first_selector == index){
         key_to_select = key
      }
      is_first_selector += 1;
   });

   if (key_to_select == ""){
      return;
   }
   
   $("#embed-video").remove();
   $("#direct-video").remove();

   var mode = key_to_select.split("-")[1];
   if (mode == "direct"){
      createPlayer(urls[key_to_select], 0);
   }else if (mode == "directhls"){
      createPlayer(urls[key_to_select], 1);
   }else{
      $("#my-video").append('<iframe id="embed-video" src="' + urls[key_to_select] + '" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" style="width:100%;height:100%; position:absolute; top: 0; left: 0"></iframe>')
   }
  
  
}

changeTo(0);

/*
window.callbackFuncName = function (config, player) {
   window.AVplayer = player;
}

var importedvideoOR = document.createElement('script');
importedvideoOR['data-cfasync']= 'false';
importedvideoOR.setAttribute("data-player-api", "callbackFuncName");
importedvideoOR.src = 'https://tg1.aniview.com/api/adserver/spt?AV_TAGID=65294a81e46a2b94390aabfa&AV_PUBLISHERID=61bb50b4ad11e83d79154566';
document.head.appendChild(importedvideoOR);
$('.avp-title').css("display","none");
$('.avp-heading').css("display","none");

setTimeout(closePlayerTimeout, 120000);
function closePlayerTimeout() { AVplayer.closePlayer(); console.log("VideoAdsPlayerClosed"); }
*/
// analytics.js

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'G-T43FT72EJ1', 'auto');
ga('send', 'pageview');

 
function createPlayer(url, is_hls){
   $("#my-video").append('<div id="direct-video"></div>')

   var playerInstance = jwplayer("direct-video");
   jwplayer.debug = false;

   //,
   //      "advertising": {
   //         "client" : "vast",
   //         "schedule": [{
   //            "offset":"pre",
   //            "tag": "https://go.aniview.com/api/adserver/vast/?AV_PUBLISHERID=61bb50b4ad11e83d79154566&AV_CHANNELID=62b3359876e6c81cc1386da4&logo=false&vastretry=5&usevslot=true&hidecontrols=false&skip=true&skiptimer=6&close=true&closetimer=6"
   //         }, {
   //            "offset":600,
   //            "tag": "https://go.aniview.com/api/adserver/vast/?AV_PUBLISHERID=61bb50b4ad11e83d79154566&AV_CHANNELID=62b3359876e6c81cc1386da4&logo=false&vastretry=5&usevslot=true&hidecontrols=false&skip=true&skiptimer=6&close=true&closetimer=6"
   //         }, {
   //            "offset":1200,
   //            "tag": "https://go.aniview.com/api/adserver/vast/?AV_PUBLISHERID=61bb50b4ad11e83d79154566&AV_CHANNELID=62b3359876e6c81cc1386da4&logo=false&vastretry=5&usevslot=true&hidecontrols=false&skip=true&skiptimer=6&close=true&closetimer=6"
   //         }]
   //      }

   if (is_hls == 1){
 if (url.includes('.m3u8') || url.includes('.txt')) {
    playerInstance.setup({

        sources: [{
            file: url,
            label: 'HLS Stream',
            type: 'hls',
            width: "100%",
            aspectratio: "16:9"
        }],
       //     playbackRateControls: [0.5, 0.75, 1, 1.25, 1.5, 2],
            preload: "auto",
   //          advertising: {
  //          client : "vast",
   //         schedule: [{
    //           offset:"pre",
    //           tag: "https://cdn.theoplayer.com/demos/preroll.xml"
    //        }, {
      //         offset:"25%",
      //         tag: "https://cdn.theoplayer.com/demos/preroll.xml"
     //       }, {
     //          offset:"50%",
     //          tag: "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator="
     //       }, {
      //         offset:"75%",
      //         tag: "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator="
      //      }]
    //     }        
        });
    } else {

    $.ajax({
        url: url,
        method: 'GET',
        async: false, 
        success: function(data) {
            playerInstance.setup({
                sources: [{
                    file: data,
                    label: 'HLS Quality',
                    type: 'hls',
                    width: "100%",
                    aspectratio: "16:9"
                }],
       //     playbackRateControls: [0.5, 0.75, 1, 1.25, 1.5, 2],
            preload: "auto",
   //          advertising: {
  //          client : "vast",
   //         schedule: [{
    //           offset:"pre",
    //           tag: "https://cdn.theoplayer.com/demos/preroll.xml"
    //        }, {
      //         offset:"25%",
      //         tag: "https://cdn.theoplayer.com/demos/preroll.xml"
     //       }, {
     //          offset:"50%",
     //          tag: "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator="
     //       }, {
      //         offset:"75%",
      //         tag: "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator="
      //      }]
    //     }        
        });
        },
        error: function(xhr, status, error) {
            console.error('Error fetching HLS data:', error);
            // Handle errors
        }
    });
}
   }else{
      playerInstance.setup({
         sources:[{file: url, width : "100%", aspectratio : "16:9"}],
         playbackRateControls: [0.5, 0.75, 1, 1.25, 1.5, 2]
      });
   }

   //,
   //"advertising": {
   //   "client" : "vast",
   //   "schedule" : [
   //      {
   //         tag: ["https://go.aniview.com/api/adserver/vast/?AV_PUBLISHERID=61bb50b4ad11e83d79154566&AV_CHANNELID=62b3359876e6c81cc1386da4&logo=false&vastretry=5&usevslot=true&hidecontrols=false&skip=true&skiptimer=6&close=true&closetimer=6"]
   //      }
   //   ]
   //}

   countcheck = 0;
   playerInstance.on('error', function() {
      current_time = playerInstance.getPosition();
      if(countcheck < 3){
         playerInstance.load();
         playerInstance.play();
         playerInstance.seek(current_time);
         countcheck = countcheck + 1;		
      }else{
         if (urls_count > 1){
            countcheck = 0;
            playerInstance.remove();
            $('#select_servers option:selected').attr('selected', false)
            $('#select_servers option:selected').next().attr('selected', 'selected').trigger('change');
            $('select').niceSelect('update');

            var error_callback = (findGetParameter("error_callback"));
            if ((error_callback !== null) && (error_callback != "")){
               var script = document.createElement('script');
               script.src = atob(error_callback) + "&t=" + Date.now();
               document.head.appendChild(script);
            }
            
            
         }
      }
   });

   playerInstance.on('levelsChanged', function(event) {
         current_quality_index = event.currentQuality;
   });

   playerInstance.on('fullscreen', function(setupOverlayOFF) {
      if (jwplayer().getFullscreen()==0){
         console.log(10)
              $('body').attr('id', 'bodyid');
              $('#aniBox').css("position","");
              $('#aniBox').css("right","");
              $('#aniBox').css("bottom","");
              $('#aniBox').appendTo($('#bodyid'));
              //$('.avp-view').css("background-color","");
    
      }
    
   });
   

  playerInstance.on('fullscreen', function(setupOverlayON) {

      if (playerInstance.getFullscreen()==1){
         console.log(9)
            $('#aniBox').appendTo($('#direct-video'));
            $('#aniBox').css("position","absolute");
            $('#aniBox').css("right","0");
            $('#aniBox').css("bottom","0");
            //$('.avp-view').css("background-color","grey");
   
            setTimeout(closePlayerTimeout, 60000);
            function closePlayerTimeout() { AVplayer.closePlayer(); console.log("VideoAdsPlayerClosed"); }
      }

   });

   
  
  
  

}