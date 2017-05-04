<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Максим Ракитин</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="images/BrightSide.css" type="text/css" />
<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />

<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-19567248-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</head>

<body>
<div id="wrap">
<div id="header">
<h1 id="logo">Максим Ракитин<span class="green"></span><span class="gray"></span></h1>
<h2 id="slogan"><br />
</h2>
<form method="post" class="searchform" action="http://physics.susu.ac.ru/~maxim">
<p> <input name="search_query" class="textbox" type="text" /> <input name="search" class="button" value="Search" type="submit" /> </p>
</form>
<ul>
<li id="current"><a href="index"><span>Главная</span></a></li>
<li><a href="news"><span>Новости</span></a></li>
<li><a href="knowledge"><span>База знаний</span></a></li>
<li><a href="articles"><span>Статьи</span></a></li>
<li><a href="links"><span>Ссылки</span></a></li>
<li><a href="plogger/"><span>Фото</span></a></li>
<li><a href="about"><span>Обо мне</span></a></li>
<li><a href="contacts"><span>Контакты</span></a></li>
</ul>
</div>
<div id="content-wrap"> <img src="images/headerphoto.jpg" alt="headerphoto" class="no-border" height="120" width="820" />
<div id="sidebar">
<h1>Меню</h1>
<ul class="sidemenu">
<li><a href="index"><span>Главная</span></a></li>
<li><a href="news"><span>Новости</span></a></li>
<li><a href="knowledge"><span>База знаний</span></a></li>
<li><a href="articles"><span>Статьи</span></a></li>
<li><a href="links"><span>Ссылки</span></a></li>
<li><a href="plogger/"><span>Фото</span></a></li>
<li><a href="about"><span>Обо мне</span></a></li>
<li><a href="contacts"><span>Контакты</span></a></li>
</ul>
</div>
<div id="main"> <a name="Главная"></a>
<h1>Добро пожаловать на мою страницу!</h1>
<p>Здесь вы найдете информацию обо мне, моих научных интересах, публикациях, разработках и пр.</p>
<p>В <a href="knowledge">Базе знаний</a> вы найдете полезную информацию об использовании кластера СКИФ Урал,
очереди задач PBS/Torque, использовании программного пакета моделирования WIEN2k и о многом другом.</p>


<div id="footer">
	<div class="footer-left">
		<p class="align-left"> © 2010 <strong>Кафедра ОТФ, <a href="http://www.susu.ac.ru">ЮУрГУ</a></strong></p>
	</div>
	<div class="footer-right">
		<p class="align-right"> <a href="http://physics.susu.ac.ru/~maxim">Home</a>&nbsp;&nbsp;|&nbsp;&nbsp;
		<a href="http://physics.susu.ac.ru/~maxim">SiteMap</a></p>
	</div>
</div>

</div>
</div>
</div>

<p>
    <a href="http://validator.w3.org/check?uri=referer"><img
       src="http://www.w3.org/Icons/valid-xhtml10"
       alt="Valid XHTML 1.0 Strict" height="31" width="88" /></a>
</p>

<div align="center">
<table width="100%" border="1" cellpadding="0" cellspacing="0">
	<tr>
	 	<td align="center">
<?php
#setlocale(LC_ALL, 'ru_RU.CP1251', 'rus_RUS.CP1251', 'Russian_Russia.1251');
$html = file_get_contents("http://74.ru");
$start_table = '<table class="table" cellspacing="2" cellpadding="0">';
$end_table = '</table>

<div class="info">';

$start = strpos($html, $start_table);
$end = strpos($html, $end_table);
$result = substr($html, $start - 1, $end - $start);
$result_conv = iconv("CP1251", "UTF-8", $result);
echo $result_conv;

?>
		</td>
	</tr>

	<tr>
		<td align="center">
<a href="http://www.mlmv.com/files/informers.html">
<img name="9_1_1_45_5_2-0" src="http://pics.rbc.ru/img/grinf/usd_cb_nal_1.gif" alt="информеры">
</a>

<a href="http://kazfin.info/" title="����� вал��">
<img src="http://kazfin.info/informer/default.png" alt="�жедневн�е к���� вал�� в Ре�п�блике �аза���ан" />
</a>
		</td>
	</tr>
</table>
</div>

</body></html>

