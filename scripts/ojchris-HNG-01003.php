<?php 
$myName = "Christian Okpada";
$myHngID = "HNG-01003";
$myEmail = "cokpada37@gmail.com";
$codeLang = "PHP";

$internDetails = collate_intern_details($myName, $myHngID, $myEmail, $codeLang);
echo $internDetails;

function collate_intern_details($name, $id, $email, $lang){
   $wordToPrint = "Hello World, this is " . $name . " with HNGi7 ID " . $id . " and email " . $email . " using " . $lang . " for stage 2 task";

   return $wordToPrint;
}
