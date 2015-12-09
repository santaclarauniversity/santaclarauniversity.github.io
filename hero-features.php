<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SCU | SCU Templates and Modules | Hero Features</title>

	<?php require('includes/head.php'); ?>
  </head>
  <body>
	<?php require('includes/header.php'); ?>
    <div class="hero  module" style="background-image:url(_examples/landing-hero-assembly.jpg);">
      <div class="container">
        <div class="hero-body">
          <div class="row">
            <div class="col-xs-6 col-xs-push-6 col-sm-4 col-sm-push-8">
              <div class="caption">
                <p>About this photo: Est eligendi optio SCU nihil quo qui eum fugiat quo volup.</p>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
      
      <div class="hero feature module" style="background-image:url(_examples/hero-plant.jpg);">
      <div class="container hero-body white-text">
        <div class="row">
          <div class="col-xs-8">
            <p>Santa Clara is California's <a href="#">oldest-operating institution</a> of higher education, with more than 150 years of history.</p>
            <p><a href="#" class="maroon inline link-button">Santa Clara's History</a> <a href="#" class="maroon inline link-button">University Archives</a></p>
          </div>
        </div>
      </div>      
    </div>
    <div class="hero feature module" style="background-image:url(_examples/hero-plant-flipped.jpg);">
      <div class="container hero-body white-text">
        <div class="row">
          <div class="col-xs-8 col-xs-push-4 text-right">
            <p>Generous donations from <a href="#">alumni and friends</a> have helped Santa Clara maintain its excellence for more than 150 years.</p>
            <p><a href="#" class="maroon inline link-button">Online Giving to Santa Clara</a> <a href="#" class="maroon inline link-button">Bronco Bench Foundation</a></p>
          </div>
        </div>
      </div>      
    </div>
    <div class="hero feature module" style="background-image:url(_examples/hero-sky.jpg);">
      <div class="container hero-body">
        <div class="row">
          <div class="col-xs-8">
            <p>Generous donations from <a href="#">alumni and friends</a> have helped Santa Clara maintain its excellence for more than 150 years.</p>
            <p><a href="#" class="maroon inline link-button">Online Giving to Santa Clara</a> <a href="#" class="maroon inline link-button">Bronco Bench Foundation</a></p>
          </div>
        </div>
      </div>      
    </div>

      <div class="container" id="content">
        

      <div class="row">
        <div class="col-sm-8">
          <h1 class="page-title">Hero Features</h1>

          <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">Section Title</a></li>
            <li><a href="#">Parent Page</a></li>
            <li class="active">Hero Features</li>
          </ol>

          <div class="intro">
            <p>Hero feature modules go all across the page.</p>
          </div>
          
          <p>The hero feature module is more of a canvas for creating large intro areas, rather than a fixed-layout module. Here's an example block of markup from the first hero feature above:</p>
          <blockquote>
            <code>
&lt;div class="hero feature module" style="background-image:url(_examples/hero-plant.jpg);"&gt;<br>
&nbsp;&nbsp;&lt;div class="container hero-body white-text"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="row"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="col-xs-8"&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Santa Clara is California's &lt;a href="#"&gt;oldest-operating institution&lt;/a&gt; of higher education, with more than 150 years of history.&lt;/p&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&lt;a href="#" class="maroon inline link-button"&gt;Santa Clara's History&lt;/a&gt; &lt;a href="#" class="maroon inline link-button"&gt;University Archives&lt;/a&gt;&lt;/p&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
&nbsp;&nbsp;&lt;/div&gt;<br>
&lt;/div&gt;
            </code>
          </blockquote>
          <ul>
            <li>We're using <code>div.hero.feature.module</code> as the full-width container with a CSS background-image with an inline <code>style</code> attribute. Currently, the background image is centered as the image stretches as the browser resizes, but that point of focus can be adjusted if needed for individual images using CSS.</li>
            <li><code>div.container</code> (from Bootstrap) constrains the "stage" of copy. The <code>.white-text</code> class is optional, for when the background image is dark and needs lighter text to be legible.</li>
            <li>Within that, Bootstrap's grid system of <code>.row</code>s and columns let you lay out text to fit the background image.</li>
          </ul>
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