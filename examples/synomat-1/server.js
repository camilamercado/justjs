

var _ = require('underscore');
var options = require('./options.js');
var ntwitter = require('ntwitter');
var fs = require('fs');
var pages = require('./pages.js');
var tweeter = new ntwitter(options.twitter);

var me = options.twitter.username;

var currentPage = 'page_0';

var currentTime = Math.round(+new Date()/1000);

// var thesaurus = loadThesaurus();
bot();


function bot() {
  tweeter.verifyCredentials(function (err, data) {
    if (err) {
      console.log("Credentials bad. Bummer. Go check that in dev.twitter.com.");
    }
    console.log("Verified credentials");
  })
  .stream('user', { track: options.twitter.username }, function(stream) {
  // .stream('statuses/sample', function(stream) {
    console.log("Listening to tweets");
    stream.on('data', function (data) {

      if (!data.user)
      {
        // Not a tweet. For example I've received a list of friend ids
        // here for some reason
        return;
      }


      var them = data.user.screen_name;

      if (data.in_reply_to_screen_name.toLowerCase() === me.toLowerCase()) {
        var result = data.text.match(/ (\w+)\s*$/);

        if (result) {
          var word = result[1].toLowerCase(),
            isMatch=false;
        console.log(pages[currentPage]);
          _.each(pages[currentPage].decisions, function(decision, i){
            console.log(decision);
            if(word === decision.name.toLowerCase()){
              isMatch=true;
              currentPage = 'page_' + decision.page;
            }

          });
          console.log('ok');
          console.log(isMatch);
          if(isMatch) {
              // match
              var replyText = pages[currentPage].url + " To continue tweet back  " + pages[currentPage].opts + [currentTime],
                nextOpts = '';

              _.each(pages[currentPage].content, function(decision, i){

                if(i>0) {
                  nextOpts += " or";
                }

                nextOpts =  nextOpts + ' ' + decision.name;
              });

              replyText += nextOpts;

              console.log(replyText);
              reply(replyText);

          } else {
            // not a match
            // reply('')
          }


          // reply()
        } else {
          reply("just tweet me one word and I will tweet back answers.");
        }
      }
      function reply(msg)
      {
        tweeter.updateStatus("@" + them + " " + msg, function(err, data)
        {
          if (err)
          {
            console.log(err);
            // Not a big deal if a tweet fails. We could log something interesting though.
          }
        });
      }
    });
    stream.on('end', function (response) {
      // Handle a disconnection
      console.log('end event, listening again');
      setTimeout(1000, listen);
    });
    stream.on('destroy', function (response) {
      // Handle a 'silent' disconnection from Twitter, no end/error event fired
      console.log('destroy event, listening again');
      setTimeout(1000, listen);
    });
  });
}

