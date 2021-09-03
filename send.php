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






$message = '
                <html>
                    <head><title>'.$subject.'</title></head><body>'.$name.$phone.$prof.$graj.$colvo.$che.'</body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
$headers .= "From: Отправитель <admin@burlet-mikhail.ru>\r\n"; //Наименование и почта отправителя
mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
var_dump($_POST);
?>
