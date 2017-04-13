<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Agnieszka Kochman - front-end developer</title>
		<meta name="description" content="Agnieszka Kochman - front-end developer">
		<meta name="keywords" content="Agnieszka, Aga, Kochman, front-end, www, portfolio, praca, strony, webdesign">
		<meta name="author" content="Agnieszka Kochman">

		<link rel="stylesheet" type="text/css" href="reset.css">
		<link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css">
		<link rel="stylesheet" href="style.css" />
	</head>

	<body>
		<div id="menu-button" class="menu-button">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<nav>
			<article>
				<ul>
					<li><a data-href="#portfolio" data-color="violet"><i class="lnr lnr-laptop-phone"></i><span class="violet">Works</span></a></li>
					<li><a data-href="#skills" data-color="yellow"><i class="lnr lnr-magic-wand"></i><span class="yellow">Skills</span></a></li>
					<li><a data-href="#home" data-color="turquoise"><i class="lnr lnr-star-half turquoise"></i></a></li>
					<li><a data-href="#about" data-color="green"><i class="lnr lnr-user"></i><span class="green">About</span></a></li>
					<li><a data-href="#contact" data-color="blue"><i class="lnr lnr-bubble"></i><span class="blue">Contact</span></a></li>
				</ul>
			</article>
		</nav>
		<section id="home" class="page-section first-section">
			<div class="first-block turquoise left-block"></div>
			<div class="second-block turquoise left-block"></div>
			<article class="content home show-content-animation show-content">
				<header>
					<h1>Agnieszka Kochman</h1>
					<h2>front-end developer</h2>
				</header>			
				<a data-href="#portfolio" id="arrow"><i class="lnr lnr-chevron-down"></i></a>	
			</article>
			<div class="first-block-small right-block"></div>
			<div class="second-block-small right-block"></div>
		</section>
		<section id="portfolio" class="page-section">
			<div class="first-block violet left-block"></div>
			<div class="second-block violet left-block"></div>
			<article class="content portfolio">
				<h2 class="violet">Portfolio</h2>
				<div id="stage" class="stage">
					<i class="lnr lnr-chevron-left"></i>
					<div id="carousel" class="carousel">
						<a href="" class="img-1" data-id="1">
							<img src="works/01.png" class="works-img first">
							<div class="hover-block">
								<div>
									<h3>Time Management - Engineering project</h3>
									<p>Application supporting time management.</p>
									<p>HTML5, CSS3, AngularJS, PHP, MySQL</p>
									<i class="lnr lnr-eye"></i>
								</div>								
							</div>
						</a>
						<a href="https://agnieszkakochman.github.io/hexal-psd/" class="img-2" data-id="2">
							<img src="works/02.png" class="works-img">
							<div class="hover-block">
								<div>
									<h3>Hexal</h3>
									<p>Website from free PSD project</p>
									<p>HTML5, CSS3, JS (jQuery), RWD</p>
									<i class="lnr lnr-eye"></i>
								</div>								
							</div>
						</a>
						<a href="https://agnieszkakochman.github.io/tic-tac-toe/" class="img-3" data-id="3">
							<img src="works/03.png" class="works-img">
							<div class="hover-block">
								<div>
									<h3>Tic Tac Toe</h3>
									<p>Simple game for two players</p>
									<p>HTML5, CSS3, JavaScript, RWD</p>
									<i class="lnr lnr-eye"></i>
								</div>								
							</div>
						</a>
						<a href="https://agnieszkakochman.github.io/memory/" class="img-4" data-id="4">
							<img src="works/04.png" class="works-img">
							<div class="hover-block">
								<div>
									<h3>Memory</h3>
									<p>Simple game</p>
									<p>HTML5, CSS3, JavaScript, RWD</p>
									<i class="lnr lnr-eye"></i>
								</div>								
							</div>
						</a>
						<a href="https://agnieszkakochman.github.io/slider/" class="img-5" data-id="5">
							<img src="works/05.png" class="works-img">
							<div class="hover-block">
								<div>
									<h3>JS Slider</h3>
									<p>Simple JavaScript slider</p>
									<p>HTML5, CSS3, jQuery, RWD</p>
									<i class="lnr lnr-eye"></i>
								</div>								
							</div>
						</a>
					</div>
					<i class="lnr lnr-chevron-right"></i>
				</div>
			</article>
			<div class="first-block-small right-block"></div>
			<div class="second-block-small right-block"></div>
		</section>
		<section id="skills" class="page-section">
			<div class="first-block yellow left-block"></div>
			<div class="second-block yellow left-block"></div>
			<article class="content skills">
				<h2 class="yellow">Skills</h2>
				<h3>Good</h3>
				<ul class="skills-list">
					<li>HTML(5)</li>
					<li>CSS(3)</li>
					<li>RWD</li>
					<li>jQuery</li>
					<li>SCSS</li>
				</ul>
				<h3>Basics</h3>
				<ul class="skills-list">
					<li>JavaScript</li>
					<li>AngularJS</li>
					<li>AJAX</li>
					<li>JSON</li>
					<li>MySQL</li>
					<li>PHP</li>
					<li>Wordpress</li>
					<li>PrestaShop</li>
				</ul>
				<h3>Other</h3>
				<ul class="skills-list">
					<li>Photoshop</li>
					<li>GIMP</li>
					<li>Git</li>
				</ul>
			</article>
			<div class="first-block-small right-block"></div>
			<div class="second-block-small right-block"></div>
		</section>
		<section id="about" class="page-section">
			<div class="first-block green left-block"></div>
			<div class="second-block green left-block"></div>
			<article class="content about">
				<h2 class="green">About</h2>
				<div class="description">
					<p>Hello!</p>
					<p>I'm Agnes and I'm 24 years old.</p> 
					<p>This year I graduated Computer Science with engineer's degree at the Silesian University of Technology in Gliwice.</p>
					<p>I have 6 months experience as junior web developer.</p>
					<p>I'm looking for a job or apprenticeship as junior front-end developer.</p>
				</div>
			</article>
			<div class="first-block-small right-block"></div>
			<div class="second-block-small right-block"></div>
		</section>
		<section id="contact" class="page-section">
			<div class="first-block blue left-block"></div>
			<div class="second-block blue left-block"></div>
			<article class="content contact">
				<h2 class="blue">Contact</h2>

				

				<form action="" method="POST" name="contactForm" onsubmit="return validateForm()">
					<input type="text" name="formName" placeholder="Your name" class="text-field field" requiviolet>
					<p id="name-error" class="error"></p>
					<input type="email" name="formEmail" placeholder="Your email" class="text-field field" requiviolet>
					<p id="email-error" class="error"></p>
					<textarea placeholder="Message" name="formText" class="field" requiviolet></textarea>
					<div class="field submit">
						<input type="submit" name="submit" value="send">
					</div>
				</form>

				<?php
					 if(!empty($_POST['submit'])) {
    					$email = 'kochman.aga@gmail.com';
    					$formName = $_POST['formName'];
    					$formEmail = $_POST['formEmail'];
    					$formText = $_POST['formText'];
    
    					//dodatkowe informacje: ip i host użytkownika
          				$ip = $_SERVER['REMOTE_ADDR'];
          				$host = gethostbyaddr($_SERVER['REMOTE_ADDR']);
          				$protocol = strpos(strtolower($_SERVER['SERVER_PROTOCOL']),'https') === FALSE ? 'http' : 'https';
            			$host     = $_SERVER['HTTP_HOST'];
            			$script   = $_SERVER['SCRIPT_NAME'];
            			$params   = $_SERVER['QUERY_STRING'];
            
            			$currentUrl = $protocol . '://' . $host . $script . '?' . $params;
        
          				$mailText = "Treść wiadomości: <br /> $formText <br /> <br /> <br /> Od: $formName, $formEmail ($ip, $host) <br /> <br /> Link: $currentUrl";
        				$mailHeader = "From: $formName <$formEmail>".PHP_EOL."Content-type: text/html; charset=utf-8";
       					@mail($email, '[PORTFOLIO]', $mailText, $mailHeader) or die('<p>Error: The message was not sent</p>');
        
          				//komunikat o poprawnym wysłaniu wiadomości
          				echo '<p> Message was sent </p>';	
					}
					?>
				<div class="socials">
					<a href="https://www.facebook.com/agnieszka.kochman"><i class="fa fa-facebook"></i></a>
					<a href="https://www.linkedin.com/in/agnieszkakochman/"><i class="fa fa-linkedin"></i></a>
					<a href="https://github.com/AgnieszkaKochman/AgnieszkaKochman.github.io"><i class="fa fa-github"></i></a>
				</div>
			</article>
			<div class="first-block-small right-block"></div>
			<div class="second-block-small right-block"></div>
		</section>

		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
		<script type="text/javascript" src="skrypty.js"></script>
	</body>
</html>
<!--  -->