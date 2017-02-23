<html>
<body>


Your Gravitar image is:<img src="https://www.gravatar.com/avatar/<?php $mail = md5( strtolower( trim( $_POST["email"] ) ) ); echo $mail;?>">
<?php $profileurl = "https://www.gravatar.com/".$mail.".php"; echo $profileurl;?>
<br />
<?php

 function curl_get_contents($url)
{
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);

    $data = curl_exec($ch);
    curl_close($ch);

    return $data;
}

$str = curl_get_contents( profileurl );
$profile = unserialize( $str );
if ( is_array( $profile ) && isset( $profile['entry'] ) )
    echo $profile['entry'][0]['displayName'];
echo $str;
 // echo "lol";
?>
<?php echo $profile;?>
</body>
</html>