<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>My Own Business Institute</title>

	<?php require('includes/head.php'); ?>
	<link rel="stylesheet" href="MOBI.css"/>
	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Waiting+for+the+Sunrise" />
  </head>
  <body>
    <a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
    <header class="site-header site-header-with-seal gray-nav">

      <div class="site-header-text-and-search">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 site-header-titles">
              <a href="index.php" class="text-hide pull-left seal">Santa Clara University</a>
              <div class="wordmarks">
			   		<a href="index.html" class="title-large">My Own Business Institute</a>
			   		<a href="index.html" class="title-small">Leavey School of Business</a>
	            </div>
            </div>
            
            
          </div>
          <div class="row">
            <div class="col-xs-12 visible-xs-block clearfix site-header-search-and-toggles">
              <button type="button" class="visible-xs-block menu-toggle menu-toggle-main" data-toggle="offcanvas" data-target="#scu-main-navigation">
                <span class="caret left-caret"></span> <span class="menu-label"><span class="sr-only">Toggle navigation</span> Menu</span>
              </button>
              <button type="button" class="visible-xs-block menu-toggle menu-toggle-gateways" data-toggle="offcanvas" data-target="#scu-gateway-navigation">
                <span class="menu-label text-hide"><span class="sr-only">Toggle navigation</span> Gateways</span> <span class="caret right-caret"></span>
              </button>
              <form class="pull-right site-header-search">
                <div class="input-group">
                  <input type="search" class="form-control" placeholder="SEARCH">
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button" aria-label="Submit"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <nav class="main-navigation offcanvas-left" id="scu-main-navigation">
        <div class="container sidebar-offcanvas">
          <ul class="nav nav-pills">
            <li><a href="#">Business Courses</a></li>
            <li><a href="#">Resources & Tools</a></li>
            <li><a href="#">Success Stories</a></li>
            <li><a href="#">About MOBI</a></li>
            <li><a href="#">Faculty & Advisors</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      </nav>

      <nav class="gateway-navigation offcanvas-right" id="scu-gateway-navigation">
        <div class="container sidebar-offcanvas">
          <ul class="nav navbar-left">
            <li class="dropdown scu-nav">
              <a href="http://www.scu.edu/" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                <span class="text-hide mission">Main Navigation for</span>
                <span class="hidden-sm">Santa Clara University</span>
                <span class="hidden-xs hidden-md hidden-lg">SCU</span>
                <span class="caret hidden-xs"></span>
              </a>
              <div class="dropdown-menu">
                <div class="container">
                  <ul role="menu" class="nav nav-pills">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About SCU</a></li>
                    <li><a href="#">Academics</a></li>
                    <li><a href="#">Admission</a></li>
                    <li><a href="#">Campus Life</a></li>
                    <li><a href="#">Athletics</a></li>
                    <li><a href="#">Global</a></li>
                    <li><a href="#">Giving</a></li>
                    <li><a href="#">News & Events</a></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <ul class="nav nav-pills navbar-right">
            <li class="">
				<a href="#">Log in for courses:</a>
            </li>
            <li class="">
	            <form action="http://www.myownbusiness.org/course/login/index.php" method="post" id="MOBI-login">
					<input type="text" name="username" id="username" placeholder="USERNAME">
					<input type="password" name="password" id="password" placeholder="PASSWORD">
					<button class="btn btn-default" type="submit" id="loginbtn" >Go</button>
	            </form>
            </li>            
            <li class="hidden-xs dropdown dropdown-search">
              <a href="#" class="glyphicon glyphicon-search" data-toggle="dropdown" role="button" aria-expanded="false"></a>
              <div class="dropdown-menu">
                <form class="navbar-form site-header-search">
                  <div class="input-group">
                    <input type="search" class="form-control" placeholder="SEARCH">
                    <span class="input-group-btn">
                      <button class="btn btn-default" type="button" aria-label="Submit"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                    </span>
                  </div>
                </form>
              </div>
            </li>
          </ul>
        </div>
        <div class="slide-menu-backdrop"></div>
      </nav>
    
    </header>
    <div class="hero feature module" style="background-image:url(MOBI.jpg);">
      <div class="container hero-body">
        <div class="row">
          <div class="col-sm-8">
	          <h2><strong>Small businesses account for the majority of new jobs in the US economy.</strong></h2>

			  <p class="emphasis">Is it time to start yours?</p>

			  <p class="opening">The My Own Business Institute has provided free business courses to thousands of entrepreneurs around the world since 2000.</p>
          </div>
          <div class="col-sm-4">
              <a class="maroon link-button" href="#" role="button">Free Business Courses</a>
              <a class="maroon link-button" href="#" role="button">Sample Business Plans</a>
              <a class="maroon link-button" href="#" role="button">Licenses & Permits</a>
              <a class="maroon link-button" href="#" role="button">How to Get Started</a>
          </div>
        </div>
      </div>      
    </div>
      <div class="container" id="content">
        
      <div class="row">
        <div class="col-sm-8">
          <div class="two-column feature-gallery module">

            <div id="feature-gallery-example" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner" role="listbox"><!-- Wrapper for slides -->
                <div class="item active">
                  <img src="MOBI-grape.jpg" alt="" width="750" height="365">
                    <div class="MOBI-testimonial">
                        <img src="/_examples/MOBI-Matt-Reid.jpg"/>
                        <blockquote><strong>“Early on, we had so many questions.  <br/>MOBI had all the answers.”</strong>
                        </blockquote>
                    </div>
                  <div class="carousel-caption">
                    <p>Winemaker <a href="#">Matt Reid</a> and his wife Marcy Webb conceived <a href="#">The People’s Wine Revolution</a> to bring great wines to all at reasonable prices.</p>
                  </div>
                </div>
              </div>
            
              <!-- Controls -->
              <a class="left carousel-control" href="#feature-gallery-example" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-triangle-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control" href="#feature-gallery-example" role="button" data-slide="next">
                <span class="glyphicon glyphicon-triangle-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            
            </div>
          <div class="intro">
            <p>MyOwnBusiness.org is the world’s leading provider of <a href="#">online education for entrepreneurs.</a></p>
          </div>
          <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingOne">
                  <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <span class="caret"></span> Course 1: Starting a Business
                    </a>
                  </h4>
                </div>
                <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                  <div class="panel-body panel-with-caret">
                   The popular original course is designed for the entrepreneur who wants to start a business. Our 15 sessions cover the most important topics that are clearly explained with emphasis on learning how to write a business plan.
                  </div>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="headingTwo">
                  <h4 class="panel-title">
                    <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <span class="caret"></span> Course 2: Business Expansion
                    </a>
                  </h4>
                </div>
                <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div class="panel-body panel-with-caret">
                    This new course is for established business owners to help take your business to the next level. Strengthen your operations, seize opportunities and plan for the future.
                  </div>
                </div>
              </div>
</div>
        </div>
        <div class="col-sm-4">
              <div class="one-column news module">
                  <h3>News and Updates</h3>
                <ul class="media-list">
                  <li class="media">
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">Apply Now for Santa Clara University's California Program for Entrepreneurship (CAPE)!</a></h4>
                      <p>This free program, now in our sixth year, provides educational tools and mentoring for entrepreneurs interested in starting or growing a California-based business »</p>
                    </div>
                  </li>
                  <li class="media">
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">Now Available: Spanish Language Start a Business Course</a></h4>
                      <p>You can learn how to write a business plan, how to start a business, and how to avoid the most common mistakes and pitfalls made by new business owners starting a business. »</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="one-column video module">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" width="560" height="315" src="http://www.youtube.com/v/Ej_G-N6djdY" frameborder="0" allowfullscreen></iframe>
                </div>
                <p class="video-caption">Video: <a href="https://www.youtube.com/watch?v=23wgwaLEEgo">A Transformational Gift for Entrepreneurial Education at SCU</a></p>
              </div>
        </div>
      </div>

      </div>
      
	<?php require('includes/footer.php'); ?>
  </body>
</html>