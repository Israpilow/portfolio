<?php

/* https://api.telegram.org/botxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - botning tokeni botfaherdan olasiz */

$contacts = $_POST['contacts'];
$comments = $_POST['comments'];
$token = "5084073493:AAEmHKP3_YCnNf69tb1Q8ehdV0_8WmaCmlY";
$chat_id = "-761234215";
$arr = array(
  'Номер телефона ? : ' => $contacts,
  'Задача:' => $comments
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.php');
} else {
  echo "Error";
}
?>