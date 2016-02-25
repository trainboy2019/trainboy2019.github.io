<?php
//open up the log file
$file = fopen(‘log.html’, ‘a’);

//write the time of access

$time = date(‘H:i dS F’);
fwrite($file, ‘<b>Time:</b> $time<br/>’ );

//write the users IP address
fwrite( $file, ‘<b>Ip Address:</b> $REMOTE_ADDR<br/>’);

//write out the page that sent them here
fwrite($file, ‘<b>Referer:</b> $HTTP_REFFERER<br/>’);

//write the users browser details

fwrite( $file, ‘<b>Browser:</b> $HTTP_USER_AGENT<hr/>’);

//and finial, close the log file
fclose( $file );

?>