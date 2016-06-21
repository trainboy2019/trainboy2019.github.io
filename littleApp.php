<!DOCTYPE html>
<html>
	<body>
<?php
echo "Derp";
require_once('TwitterAPIExchange.php');
/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
'oauth_access_token' => "2314606531-69Qn1ObAoRQ7E92Q5QoPG4WiloCkLGaTLjm2GP1",
'oauth_access_token_secret' => "weiOu31MNpdlMEag1rQQ2Gq96mlsZeoAEgZ7ufQMEkwBi",
'consumer_key' => "Ucg0uhsqu5ebRPU5NU8HzDhvg",
'consumer_secret' => "lyzAnP3VLekd4QSN6Wxh9g629o0NJZn150SUm6oGVMQDAhbBvx"
);
$url = "https://api.twitter.com/1.1/statuses/user_timeline.json";
$requestMethod = "GET";
if (isset($_GET['user'])) {$user = $_GET['user'];} else {$user = "trainboy2019";}
if (isset($_GET['count'])) {$count = $_GET['count'];} else {$count = 20;}
$getfield = "?screen_name=$user&count=$count";
$twitter = new TwitterAPIExchange($settings);
$string = json_decode($twitter->setGetfield($getfield)
->buildOauth($url, $requestMethod)
->performRequest(),$assoc = TRUE);
if($string["errors"][0]["message"] != "") {echo "<h3>Sorry, there was a problem.</h3><p>Twitter returned the following error message:</p><p><em>".$string[errors][0]["message"]."</em></p>";exit();}
foreach($string as $items)
    {
 //       echo "Time and Date of Tweet: ".$items['created_at']."<br />";
   //     echo "Tweet: ". $items['text']."<br />";
     //   echo "Tweeted by: ". $items['user']['name']."<br />";
       // echo "Screen name: ". $items['user']['screen_name']."<br />";
//        echo "Followers: ". $items['user']['followers_count']."<br />";
  //      echo "Friends: ". $items['user']['friends_count']."<br />";
    //    echo "Listed: ". $items['user']['listed_count']."<br /><hr />";
    
    }
        echo "$url";
        echo "$items";
?>
        </body>
</html>
