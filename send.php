<?php
$to = 'nikita.elagin2012@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
$subject = 'Обратный звонок'; //Загаловок сообщения
if ($_POST['name']){
	$name = "<p>Имя: ".$_POST['name']."</p>";
}
if ($_POST['phone']){
	$phone = "<p>Телефон: ".$_POST['phone']."</p>";
}
if ($_POST['prof']){
	$prof = "<p>Профессия: ".$_POST['prof']."</p>";
}
if ($_POST['graj']){
	$graj = "<p>Гражданство: ".$_POST['graj']."</p>";
}
if ($_POST['colvo']){
	$colvo = "<p>Кол-во мастеров: ".$_POST['colvo']."</p>";
}
if ($_POST['che']){
	$che = "Профессии: ";
	foreach ($_POST['che'] as $cheitem){
		$che .= ' '.$cheitem;
	}
	
}

//if($_POST['name'] == 'alllexeiii'){
	$youplatformUrl = "https://youplatform.ru/admin/_integration/site-form/tochno";
	$cookieData = array();
	if(isset($_COOKIE['youplatform_cookie'])){
		if(!get_magic_quotes_gpc()){
			$utmString = stripslashes($_COOKIE['youplatform_cookie']);
			$cookieData = json_decode($utmString, true)?:array();
		} else {
			$cookieData = json_decode($_COOKIE['youplatform_cookie'], true)?:array();
		}
	}
	$setting = array(
		"api_key" => "AdSEK3hf8D3dQ78S4FzkFBsQ4rSQbSrs",
		"code" => "youpltform_forms",
	);
	$data = array_merge($setting, $_POST);
	$params = array_merge($data, $cookieData);
	if(function_exists('curl_init')){
		$curl=curl_init();
		curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
		curl_setopt($curl,CURLOPT_URL, $youplatformUrl);
		curl_setopt($curl,CURLOPT_CUSTOMREQUEST,'POST');
		curl_setopt($curl,CURLOPT_POSTFIELDS,json_encode($params));
		curl_setopt($curl,CURLOPT_HTTPHEADER,array('Content-Type: application/json'));
		curl_setopt($curl,CURLOPT_HEADER,false);
		curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,0);
		curl_setopt($curl,CURLOPT_SSL_VERIFYHOST,0);
		$out=curl_exec($curl);
		$code=curl_getinfo($curl,CURLINFO_HTTP_CODE);
		$response=json_decode($out,true);
	} else {
		if((boolean)ini_get('allow_url_fopen')){
			$opts = array('http' =>
				array(
					'method' => 'POST',
					'header' => 'Content-type: application/json',
					'content' => json_encode($params),
					'timeout' => 2,
				)
			);
		}
		try{
			file_get_contents($youplatformUrl, false, stream_context_create($opts));
		} catch(Exception $e){
			return;
		}
	}
	//exit;
//}



$message = '
                <html>
                    <head><title>'.$subject.'</title></head><body>'.$name.$phone.$prof.$graj.$colvo.$che.'</body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
$headers .= "From: Отправитель <admin@burlet-mikhail.ru>\r\n"; //Наименование и почта отправителя
mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
var_dump($_POST);
?>
