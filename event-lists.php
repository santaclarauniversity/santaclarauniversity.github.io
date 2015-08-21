<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SCU | SCU Templates and Modules | One Column Modules</title>

	<?php require('includes/head.php'); ?>
  </head>
  <body>
	<?php require('includes/header.php'); ?>
      
      <div class="container" id="content">
        
      <div class="row">
        <div class="col-sm-8">
          <h1 class="page-title">Event Lists</h1>

          <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">Section Title</a></li>
            <li><a href="#">Parent Page</a></li>
            <li class="active">Event Lists</li>
          </ol>

          <div class="intro">
            <p>Event lists ("widgets") can be placed on pages, and pull events by <strong>tag</strong>, <strong>category</strong>, <strong>group</strong>, or any number of other more granular criterial</p>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h3>Events List</h3>
	            <div class="one-column events module">
	                
	                <div class="lwcw" data-options="id=2&format=html"></div>
	                <script type="text/javascript" id="lw_lwcw" src="http://events.scu.edu/livewhale/theme/core/scripts/lwcw.js"></script>
	                            
              </div>
            </div>
            <div class="col-md-6">
              <h3>Events List</h3>
	            <div class="one-column events module">
	                
	                <div class="lwcw" data-options="id=2&format=html"></div>
	                <script type="text/javascript" id="lw_lwcw" src="http://events.scu.edu/livewhale/theme/core/scripts/lwcw.js"></script>
	                            
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
                    <nav class="side-navigation match-page-title">
            <a class="side-navigation-header" href="index.php">SCU Templates and Modules</a>
            <ul>
              <li><a href="homepage.php">Homepage</a></li>
              <li><a href="inside-two-columns.php">Inside Page: 2 Columns</a></li>
              <li><a href="inside-three-columns.php">Inside Page: 3 Columns</a></li>
              <li><a href="inside-full-width.php">Inside Page: Full Width</a></li>
              <li><a href="inside-grid.php">Inside Page: Grid</a></li>
              <li><a href="inside-jumbotron-three-columns.php">Inside Page: Jumbotron Three Columns</a></li>
              <li><a href="inside-jumbotron-two-columns.php">Inside Page: Jumbotron Two Columns</a></li>
              <li>
                <a href="one-column-modules.php">One Column Modules</a>
                <ul class="multilevel-linkul-0">
                  <li><a href="building-one-column-modules.php">Building One Column Modules</a></li>
                  <li><a href="#">A test link</a></li>
                </ul>
              </li>
              <li>
                <a href="two-column-modules.php">Two Column Modules</a>
              </li>
              <li>
                <a href="full-width-modules.php">Full Width Modules</a>
                <ul class="multilevel-linkul-0">
                  <li><a href="can-we.php">Hero Features</a></li>
                  <li><a href="hero-features.php">Hero Features</a></li>
                  <li><a href="landing-hero-features.php">Landing Hero Features</a></li>
                  <li><a href="subheaders.php">Subheaders</a></li>
                </ul>
              </li>
              <li class="active">
                <a href="headers.php">Headers</a>
                <ul class="multilevel-linkul-0">
                  <li><a href="header-core-nav-core-gateways.php">Core Nav, Core Gateways</a></li>
                  <li class="active"><a href="header-site-nav-site-gateways.php">Site Nav, Site Gateways</a>
                    <ul class="multilevel-linkul-1">
                      <li><a href="header-stone-site-nav.php">Example: Stone Nav</a></li>
                      <li class="active"><a href="header-gray-site-nav.php">Example: Gray Nav</a></li>
                      <li><a href="header-black-site-nav.php">Example: Black Nav</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          
        </div>
      </div>

      </div>
      
	<?php require('includes/footer.php'); ?>
  </body>
</html>