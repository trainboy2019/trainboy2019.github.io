<!DOCTYPE html>
<html>
	<body>
		<?php
            ini_set('display_errors', 1);
            require_once('TwitterAPIExchange.php');
            /** Set access tokens here - see: https://dev.twitter.com/apps/ **/
            $settings = array(
                'oauth_access_token' => "2314606531-69Qn1ObAoRQ7E92Q5QoPG4WiloCkLGaTLjm2GP1",
                'oauth_access_token_secret' => "weiOu31MNpdlMEag1rQQ2Gq96mlsZeoAEgZ7ufQMEkwBi",
                'consumer_key' => "Ucg0uhsqu5ebRPU5NU8HzDhvg",
                'consumer_secret' => "lyzAnP3VLekd4QSN6Wxh9g629o0NJZn150SUm6oGVMQDAhbBvx"
            );
            /** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
//            $url = 'https://api.twitter.com/1.1/blocks/create.json';
//            $requestMethod = 'POST';
            /** POST fields required by the URL above. See relevant docs as above **/
//            $postfields = array(
    //            'screen_name' => 'usernameToBlock', 
      //          'skip_status' => '1'
            );
            /** Perform a POST request and echo the response **/
            $twitter = new TwitterAPIExchange($settings);
            echo $twitter->buildOauth($url, $requestMethod)
                         ->setPostfields($postfields)
                         ->performRequest();
            /** Perform a GET request and echo the response **/
            /** Note: Set the GET field BEFORE calling buildOauth(); **/
            $url = 'https://api.twitter.com/1.1/friends/ids.json';
            $getfield = '?screen_name=trainboy2019';
            $requestMethod = 'GET';

            $twitter = new TwitterAPIExchange($settings);
            $response = $twitter->setGetfield($getfield)
                ->buildOauth($url, $requestMethod)
                ->performRequest();

            var_dump(json_decode($response));
            echo $response
        ?>
	</body>
</html>