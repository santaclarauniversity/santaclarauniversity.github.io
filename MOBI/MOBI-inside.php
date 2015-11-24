<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>My Own Business, Inc.</title>

	<?php require('includes/head.php'); ?>
	<link rel="stylesheet" href="MOBI.css"/>
	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Waiting+for+the+Sunrise" />
  </head>
  <body>
    <a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
          <header class="site-header site-header-custom-title gray-nav">

      <div class="site-header-text-and-search">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-9 site-header-titles">
              <h1>My Own Business, Inc.</h1>
              <p class="subhead">Free online courses for business entrepreneurs</p>
            </div>
            <div class="col-sm-3 site-logo">
                <img src="MOBI-symbol.png" alt="MOBI-symbol" width="" height="" />
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
            <li><a href="#">Leavey School of Business</a></li>
            <li class="dropdown scu-gateways">
              <a href="#" class="dropdown-toggle text-hide hidden-xs people-gateways" data-toggle="dropdown" role="button" aria-expanded="false">People Gateways</a>
              <div class="dropdown-menu">
                <div class="container">
                  <ul role="menu" class="nav nav-pills navbar-right">
                    <li><a href="#">Students</a></li>
                    <li><a href="#">Faculty & Staff</a></li>
                    <li><a href="#">Families</a></li>
                    <li><a href="#">Alumni</a></li>
                    <li><a href="#">Visitors</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="slide-menu"><a href="offices-services.html" role="button" aria-expanded="false"><span class="gateway-dropdown">Offices & Services <span class="caret"></span></span></a>
              <div class="slide-panel">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-6">
                      <h6>Offices of SCU</h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <ul role="menu">
                            <li><a href="#">Education and Counseling Psychology</a></li>
                            <li><a href="#">School of Engineering</a></li>
                          </ul>
                        </div>
                        <div class="col-sm-6">
                          <ul role="menu">
                            <li><a href="#">Jesuit School of Theology</a></li>
                            <li><a href="#" class="more-link">All Offices of SCU &raquo;</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <h6>Services at SCU</h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <ul>
                            <li><a href="#">An SCU Service Link</a></li>
                            <li><a href="#">Another Service of SCU</a></li>
                          </ul>
                        </div>
                        <div class="col-sm-6">
                          <ul>
                            <li><a href="#">Ignatian Center for Jesuit Education</a></li>
                            <li><a href="#" class="more-link">All Services at SCU &raquo;</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="slide-menu"><a href="centers-schools.html" role="button" aria-expanded="false"><span class="gateway-dropdown">Centers & Schools <span class="caret"></span></span></a>
              <div class="slide-panel">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-6">
                      <h6>Schools &amp; Colleges</h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <ul role="menu">
                            <li><a href="#">College of Arts & Sciences</a></li>
                            <li><a href="#">Education and Counseling Psychology</a></li>
                            <li><a href="#">Leavey School of Business</a></li>
                            <li><a href="#">School of Engineering</a></li>
                          </ul>
                        </div>
                        <div class="col-sm-6">
                          <ul role="menu">
                            <li><a href="#">Jesuit School of Theology</a></li>
                            <li><a href="#">School of Law</a></li>
                            <li><a href="#">Summer School</a></li>
                            <li><a href="#" class="more-link">All Schools & Colleges &raquo;</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <h6>Centers of Distinction</h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <ul>
                            <li><a href="#">Center for Science, Technology, and Society</a></li>
                            <li><a href="#">Ignatian Center for Jesuit Education</a></li>
                            <li><a href="#">Markkula Center for Applied Ethics</a></li>
                          </ul>
                        </div>
                        <div class="col-sm-6">
                          <ul>
                            <li><a href="#">A sample center link</a></li>
                            <li><a href="#">A center link of distinction</a></li>
                            <li><a href="#">Another Center Yonder</a></li>
                            <li><a href="#" class="more-link">All Centers & Institutes &raquo;</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="hidden-xs dropdown dropdown-search">
              <a href="#" class="glyphicon glyphicon-search" data-toggle="dropdown" role="button" aria-expanded="false"></a>
              <div class="dropdown-menu">
                <form class="navbar-form">
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
      <div class="container" id="content">
        
      <div class="row">
        <div class="col-sm-8">
          <h1 class="page-title">Inside Page: 3 Columns</h1>

          <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">Section Title</a></li>
            <li><a href="#">Parent Page</a></li>
            <li class="active">Inside Page: 3 Columns</li>
          </ol>

          <div class="intro">
            <p>Nam libero tempore, soluta the nobis est eligendi optio SCU que nihil impedit quo minus id global quod <a href="#">maxime placeat</a> facere in the possimus, omnis humanity voluptas assumend.</p>
          </div>
          <p>Omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum Santa Clara students necessitatibus saepe eveniet ut et voluptates repudiandae sint et non arts in recusandae.</p>
          <div class="row">
            <div class="col-md-6">
              <h2>Header Two</h2>
              <p>Donec a est tempus, iaculis neque eu, <a href="#">tristique elit</a>. Sed ornare dolor et cursus tincidunt. In global fusce purus tellus, euismod suscipit gravida vitae, commodo nec velit.</p>
              <h3>Header Three</h3>
              <p>Ut quis justo lacinia, mattis nulla at, dictum lectus. Suspendisse at sagittis justo, eu mollis turpis. Vivamus ut dolor sed eros.</p>
            </div>
            <div class="col-md-6">
              <h4>Header Four</h4>
              <p>Santa Clara students necessitatibus saepe eveniet ut et voluptates repudiandae sint et non arts in recusandae.</p>
              <h5>Header Five</h5>
              <p>Sed condimentum SCU elit erat, et odio in commodo non. Sed imperdiet massa at tortor, Silicon Valley ullam er augue volutpat quis. Nunc euismod urna nulla, sit amet bibendum est cursus nec. Nunc eu ligula consequat, rutrum tellus sed, semper massa. Vivamus porta interdum nisl, vel dictum nisl malesuada in.</p>
              <h6>Header Six</h6>
              <p>Just in case.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
                    <nav class="side-navigation match-page-title">
            <a class="side-navigation-header" href="index.php">My Own Business, Inc.</a>
            <ul>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </nav>

          
        </div>
      </div>

      </div>
      
	<?php require('includes/footer.php'); ?>
  </body>
</html>