<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SCU | SCU Templates and Modules | SCU Templates and Modules</title>
    
	<?php require('includes/head.php'); ?>

    <style>
        /* this starter page only */
        body {padding:50px;}
        .col-sm-8 ul {font-size:2rem;}
        .col-sm-4 li {margin-bottom:1em;}
        .btn-success {margin-bottom:50px;}
     </style>
  </head>
  <body>
    <a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
      
      <div class="container" id="content">
          <h3>White Whale Web Services</h3>
          <h1 class="page-title">Santa Clara University Website Redesign<br/> 
          </h1>
          <h4>Site Buildout
          </h4>
          <div class="row">
            <div class="col-sm-8">
              <div class="intro">
                <p>This staging site contains all the buildout files for the new <strong>scu.edu</strong>, for implementation into the TerminalFour CMS.</p>
              </div>
             <h2>Templates / Page Types</h2>
             <p>These are the basic page layouts used across all site pages.</p>
                <ul>
                  <li><a href="homepage.php">Homepage</a></li>
                  <li><a href="inside-two-columns.php">Inside Page: 2 Columns</a></li>
                  <li><a href="inside-three-columns.php">Inside Page: 3 Columns</a></li>
                  <li><a href="inside-full-width.php">Inside Page: Full Width</a></li>
                  <li><a href="inside-grid.php">Inside Page: Grid</a></li>
                  <li><a href="inside-jumbotron-three-columns.php">Inside Page: Jumbotron Three Columns</a></li>
                  <li><a href="inside-jumbotron-two-columns.php">Inside Page: Jumbotron Two Columns</a></li>
                </ul>
             <h2>Content Modules</h2>
             <p>These are examples of styling for dynamic content modules like news, events, etc. that are available to all sites.</p>
                  <ul>
                  <li>
                    <a href="one-column-modules.php">One Column Modules</a>
                  </li>
                  <li>
                    <a href="two-column-modules.php">Two Column Modules</a>
                  </li>
                  <li>
                    <a href="full-width-modules.php">Full Width Modules</a>
                    <ul class="multilevel-linkul-0">
                      <li><a href="can-we.php">"Can We" Feature</a></li>
                      <li><a href="hero-features.php">Hero Features</a></li>
                      <li><a href="landing-hero-features.php">Landing Hero Features</a></li>
                      <li><a href="subheaders.php">Subheaders</a></li>
                    </ul>
                  </li>
                </ul>
             <h2>Headers</h2>
             <p>These site headers are matched with individual sites based on where they live in the overall hierarchy.  All the primary institutional site pages and some academic pages include the institutional main navigation; other sites (centers, schools, etc.) have their own site-specific main navigation.</p>
                  <ul>
                  <li>
                    <a href="headers.php">Headers</a>
                    <ul class="multilevel-linkul-0">
                      <li><a href="header-core-nav-core-gateways.php">Institutional site main nav</a></li>
                      <li><a href="header-site-nav-site-gateways.php">Site-specific main nav</a>
                        <ul class="multilevel-linkul-1">
                          <li><a href="header-stone-site-nav.php">Example: Stone Nav</a></li>
                          <li><a href="header-gray-site-nav.php">Example: Gray Nav</a></li>
                          <li><a href="header-black-site-nav.php">Example: Black Nav</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
            </div>
            <div class="col-sm-4">
                <h3>Download Files</h3>
                  <a href="scu.edu-build.zip" class="btn btn-success btn-lg btn-block">scu.edu-build.zip</a>

                <h3>More Information</h3>
                <ul>
                <li>Links to JPEG files of all these deliverables can be found on our <a href="http://www.whitewhale.net/status/scu">SCU project status site</a> (username: <strong>scu</strong>, password <strong>broncos</strong>.)
                </li>
                <li>This buildout uses the Bootstrap framework.<br/><br/><a href="http://getbootstrap.com">Bootstrap documentation</a><br/><br/>The entire Bootstrap package is included in the package, along with a custom compilation for SCU's use.  That customized version can be modified using Bootstrap's Customize feature and the included <code>config.json</code> file.</li>
                <li>It was built using the <a href="http://lesscss.org">LESS</a> preprocessor. All LESS files are saved on the server in /css/scu-less/. They compile (via a single <code>scu.less</code> trigger file) to <code>scu.css</code>, which is the sitewide CSS file.</li>
                <li>Various navigation and content elements are illustrated in various ways via examples in these demo files. (For example, the highlighted main navigation item illustrates <code>class="active"</code>, which is typically used for active navigation states; a variety of placeholder links are used in navigation generally; etc.)  <br/><br/>We look forward to talking through any questions that may come up during the buildout; please <a href="jason@whitewhale.net">email us</a> if anything here needs clarification.</li>
                </ul>
            </div>
          </div>

      </div>
      
    
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="bootstrap-scu/js/bootstrap.min.js"></script>
    <script src="js/mediaCheck-min.js"></script>
    <script src="js/jquery.event.swipe.js"></script>
    <script src="js/header.js"></script>
    
  </body>
</html>