// starting bell
console.log("Starting bot...");
// node api requirement that makes this work
var Twit = require('twit');
// api key requirement
var config = require('./config');
// api keys
var T = new Twit(config);
//requirement to execute processing through node
var exec = require('child_process').exec;
// filesystem node requirement
var fs = require('fs');
var Jimp = require("jimp");
// Tweet + interval
//tweetIt();
//setInterval(tweetIt, 1000*60*60*24);
//tweet execution random img every 2 hours
//function tweetIt() {
//  var cmd = 'processing-java --sketch=`pwd`/sketch1 --run';
//  exec(cmd, processing);
//
//  function processing() {
//    var filename = 'sketch1/output.png';
//    var params = {
//        encoding: 'base64'
//  };
//
//  var b64 = fs.readFileSync(filename, params);
//
//  T.post('media/upload', { media_data: b64 }, uploaded);
//
//  function uploaded(err, data, response) {
//    var r = Math.floor(Math.random()*1000000);
//    var id = data.media_id_string;
//
//    var tweet = {
//      status: 'Bi-hourly image is not working so here is the same image with a new ' + '#' + r,
//      media_ids: [id]
//    }
//
//    T.post('statuses/update', tweet, tweeted);
//  }
//  function tweeted(err, data, response) {
//    if (err) {
//  console.log("Something went wrong!");
//    } else {"it worked?"}
//}
//}
//}
  
//random number every hour + one post to get going.
  tweetIt2();
  setInterval(tweetIt2, 1000*60*60);
//tweet execution
function tweetIt2() {
  var r = Math.floor(Math.random()*10000000);
  var mm = Math.floor(Math.random()*1000);
  var nn = Math.floor(Math.random()*100);
  var oo = Math.floor(Math.random()*100);
  var tweet = {
    status: 'Here is an hourly random #' + r + ' #' + mm + '.' + nn + '.' + oo,
  }
  
  T.post('statuses/update', tweet, tweeted);
  
  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong!");
    } else {
      console.log("Great Scott! It worked!");
      console.log("Random number posted.");
      }
    }
}


// https://source.unsplash.com/random/
// https://source.unsplash.com/collection/578066/
// image creation and posting


tweetIt35();
  setInterval(tweetIt35, 1000*60*35);
  function tweetIt35() {
    var ranOne = Math.floor(Math.random()*200);
    var ranTwo = Math.floor(Math.random()*200);
    var ranThree = Math.floor(Math.random()*300);
    var ranFour = Math.floor(Math.random()*400);
    var ranLess = Math.random()*100+4;
    var image = new Jimp(1024, 1024, function (err, image) {
      Jimp.read("https://source.unsplash.com/collection/578066/800x600").then(function (imagetwo) {
        imagetwo.opacity(.6).scaleToFit(512, 512).contrast(.8).opaque();
        Jimp.read("https://source.unsplash.com/collection/578066/801x601").then(function (imageone) {
          imageone.composite(imagetwo, ranOne, ranThree).contrast(.8);
          imageone.composite(imageone, ranLess, ranFour);
          imageone.write("output2.jpg"); // save
          imageone.composite(imageone, ranLess, 120).fade(.4).contrast(-.8).scaleToFit(512,512)
          .blit(imagetwo, ranOne, ranOne, ranTwo, ranTwo, ranFour, ranFour )
          .write("output3.jpg");
        }).catch(function (err) {
              console.error(err);
          });
      });
    setInterval(image, 1000*60*20);
    });
  setInterval(image, 1000*60*20);
  var filePath = 'output3.jpg';
  var filePath2 = 'output2.jpg';

  T.postMediaChunked({ file_path: filePath, filePath2 }, function (err, data, response) {
    var b64 = fs.readFileSync('output3.jpg', 'base64');
    var b644 = fs.readFileSync('output2.jpg', 'base64');
    var r = Math.floor(Math.random()*10000000);
    T.post('media/upload', { media_data: b64 }, uploaded);
    T.post('media/upload', { media_data: b644 }, uploaded);
    function uploaded(err, data, response) {
      var id = data.media_id_string;
      var tweet = {
        status: 'Unsplash BiHourly BiPost Pink+Purple #' + r,
        media_ids: [id]
      }
      T.post('statuses/update', tweet, tweeted);
      }
      function tweeted(err, data, response) {
        if (err) {
          console.log("Something went wrong, image didn't post!");
        } else {console.log("One pink and purple inspired image posted!")}
      }
      console.log("Data received for Pink+Purple images.");
    })
  console.log("Working on pulling + processing pink n purple images..");
  }


tweetIt30();
setInterval(tweetIt30, 1000*60*30);
  function tweetIt30() {
    var ranOne = Math.floor(Math.random()*150+20);
    var ranTwo = Math.floor(Math.random()*250);
    var ranThree = Math.floor(Math.random()*300);
    var ranFour = Math.floor(Math.random()*400);
    var ranLess = Math.random()*10;
    var image = new Jimp(1024, 1024, function (err, image) {
          Jimp.read("https://source.unsplash.com/random/800x600").then(function (imagetwo) {
            imagetwo.opacity(.6).scaleToFit(512, 512).contrast(.8).opaque();
            Jimp.read("https://source.unsplash.com/random/801x601").then(function (imageone) {
              imageone.composite(imagetwo, ranOne, ranTwo).contrast(.8);
              imageone.composite(imageone, 0, ranFour);
              imageone.write("output4.jpg"); // save
              imageone.composite(imageone, ranTwo, 120).fade(.4).contrast(-.8).scaleToFit(512,512)
              .blit(imagetwo, ranOne, ranOne, ranTwo, ranTwo, 250, 190 )
              .write("output5.jpg");
            }).catch(function (err) {
                console.error(err);
              });
          });
      setInterval(image, 1000*60*20);
    });
    setInterval(image, 1000*60*20);
    var filePath = 'output4.jpg';
    var filePath2 = 'output5.jpg';
  
    T.postMediaChunked({ file_path: filePath, filePath2 }, function (err, data, response) {
      var b64 = fs.readFileSync('output4.jpg', 'base64');
      var b644 = fs.readFileSync('output5.jpg', 'base64');
      var r = Math.floor(Math.random()*10000000);
      T.post('media/upload', { media_data: b64 }, uploaded);
      T.post('media/upload', { media_data: b644 }, uploaded);
      function uploaded(err, data, response) {
        var id = data.media_id_string;
        var tweet = {
          status: 'Unsplash BiHourly BiPost Random. #' + r,
          media_ids: [id]
        }
        T.post('statuses/update', tweet, tweeted);
      }
      function tweeted(err, data, response) {
        if (err) {
          console.log("Something went wrong, an image didn't post!");
        } else {console.log("One randomly inspired image posted!")}
      }
      console.log("Data received for random images.");
    })
  console.log("Working on pulling + processing random images..");
  }













// Stream + Follow reply
// set up user stream
var stream = T.stream('user');
// when someone follows
stream.on('follow', followed);

// do this
function followed(event) {
  console.log("Follow Event!");
  var name = event.source.name;
  var screenName = event.source.screen_name;
  var r = Math.floor(Math.random()*1000000);
  var words = "Here's a rando num: " + r + " ";
  tweetIt3('. @' + screenName + ' Howdy! Thanks for following = ) ' + words)
  }
function tweetIt3(txt) {

  var tweet = {
    status: txt
  }
  
  T.post('statuses/update', tweet, tweeted);
  
  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong!");
    } else {
      console.log("Great Scott! It worked!");
      }
    }
}
