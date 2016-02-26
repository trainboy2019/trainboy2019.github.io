<?php
$ipaddress = $_SERVER[‘REMOTE_ADDR’];
$page = “http://{$_SERVER[‘HTTP_HOST’]}{$_SERVER[‘PHP_SELF’]}”;
$page .= iif(!empty($_SERVER[‘QUERY_STRING’]), “?{$_SERVER[‘QUERY_STRING’]}”, “”);
$referrer = $_SERVER[‘HTTP_REFERER’];
$datetime = mktime();
$useragent = $_SERVER[‘HTTP_USER_AGENT’];
$remotehost = @getHostByAddr($ipaddress);


$logline = $ipaddress . ‘|’ . $referrer . ‘|’ . $datetime . ‘|’ . $useragent . ‘|’ . $remotehost . ‘|’ . $page . “\n”;


$logfile = ‘files/log.txt’;

if (!$handle = fopen($logfile, ‘a+’)) {
die(“Failed to open log file”);
}

if (fwrite($handle, $logline) === FALSE) {
die(“Failed to write to log file”);
}

fclose($handle);
?>