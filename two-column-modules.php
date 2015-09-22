<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SCU | SCU Templates and Modules | Two Column Modules</title>

	<?php require('includes/head.php'); ?>

  </head>
  <body>
	<?php require('includes/header.php'); ?>
      
      <div class="container" id="content">
        
      <div class="row">
        <div class="col-sm-8">
          <h1 class="page-title">Two Column Modules</h1>

          <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">Section Title</a></li>
            <li><a href="#">Parent Page</a></li>
            <li class="active">Two Column Modules</li>
          </ol>

          <div class="intro">
            <p>Here are examples of two-column modules.</p>
          </div>
           

          <h3>Person Spotlight</h3>
           <div class="two-column person-spotlight module">
                <div class="person-spotlight-portrait">
                  <img src="_examples/elspeth-rossetti.jpg" alt="Elspeth Rossetti" width="670" height="242">
                </div>
                <div class="person-spotlight-body">
                  <div class="person-spotlight-titles">
                    <h3 class="person-spotlight-department"><a href="#">Career Center</a></h3>
                    <h4 class="person-spotlight-name"><a href="#">Elspeth Rossetti</a></h4>
                  </div>
                  <p>As director of the Career Center, it's Elspeth's job to make sure SCU graduates get the help they need to find not just an occupation, but a <em>vocation.</em></p>
                </div>
                <div class="person-spotlight-overlay sr-hide"></div>
              </div>
              <div class="two-column left-aligned person-spotlight module">
                <div class="person-spotlight-portrait">
                  <img src="_examples/gordon-young-2.jpg" alt="Gordon Young" width="603" height="217">
                </div>
                <div class="person-spotlight-body">
                  <div class="person-spotlight-titles">
                    <h3 class="person-spotlight-department">Faculty Spotlight</h3>
                    <h4 class="person-spotlight-name"><a href="#">Gordon Young</a></h4>
                  </div>
                  <p>One abandoned house can destabilize an entire neighborhood. Residents in Flint, Michigan worked with Gordon Young (Senior Lecturer in Communications, and a Flint native), raising funds to tear down a blighted property on Parkbelt Drive.</p>
                </div>
                <div class="person-spotlight-overlay sr-hide"></div>
              </div>
          <hr>
          <h3>Featured Story</h3>
          <div class="two-column featured-story module">
                <a href="#" class="thumbnail"><img src="_examples/lg-1503-nash.jpg" alt=""></a>
                <h4 class="featured-story-heading"><a href="#">A Wild Generosity</a></h4>
                <p>On the retirement of Steve Nash '96 from pro basketball, writer Brian Doyle recalls the riveting display of graceful mastery, athleticism, and sheer creativity of his game.</p>
                <p><a href="#">More in Alumni Stories &raquo;</a></p>
           </div>
           <hr>
          <h3>Feature Gallery</h3>
          <p>Based on <a href="http://getbootstrap.com/javascript/#carousel">Bootstrap's carousel module</a>, with some extra CSS additions to have a fade transition instead of a slide effect. Still working on: a show/hide of captions for mobile screens, and IE11 vertical caption centering flexbox issues.</p>
<div class="two-column feature-gallery module">

<div id="feature-gallery-example" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner" role="listbox"><!-- Wrapper for slides -->
    <div class="item active">
      <a href="#" class="thumbnail"><img src="_examples/feature-gallery-sprinksgiving.jpg" alt="Sprinksgiving" width="750" height="365"></a>
      <div class="carousel-caption">
        <p>EVENT: On April 15, 2015 we welcome our third annual <a href="http://www.scu.edu/give/direct-your-gift/santa-clara-fund/sprinksgiving/">Sprinksgiving</a> event, to reflect upon our growing culture of gratitude and donor appreciation.</p>
      </div>
    </div>
    <div class="item">
      <a href="#" class="thumbnail"><img src="_examples/feature-gallery-nash.jpg" alt="" width="750" height="365"></a>
      <div class="carousel-caption">
        <p>PHOTO: And <a href="#">a link to a story</a> about this alumnus. <a href="#" class="feature-gallery-source">Source</a></p>
      </div>
    </div>
    <div class="item">
      <a href="#" class="thumbnail"><img src="_examples/feature-gallery-commencement.jpg" alt="Commencement 2014" width="750" height="365"></a>
      <div class="carousel-caption">
        <p>PHOTO: Graduating classmembers celebrate at 2014 Commencement. We'll use this as an example of a very long caption to demonstrate what happens when text wraps and runs longer than two lines. The Feature Gallery caption space can expand upwards.</p>
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
          <hr>
          
          
<h3>Gallery</h3>
<div class="two-column gallery module">

	<div class="row">
		<div class="col-sm-9 full-image">
			<div class="gallery-image">
				<a href="#" class="thumbnail"><img src="_examples/feature-gallery-sprinksgiving.jpg" alt="Sprinksgiving"></a>
				<div class="gallery-caption">
					<p><strong>Caption for the selected photo.</strong>  Libero tempore, career nobis est eligendi optio lorem ipsum in quo with qui dolorem eum. Quisque sit amet pretium  ultrices, faucibus elit eu, rhoncus justo, non et risus.</p>
				</div>
			</div>
		</div>
		<div class="col-sm-3">
			<div class="slides">
				<div class="gallery-image">
					<a href="#" class="thumbnail"><img src="_examples/cuba.jpg" alt="cuba"></a>
					<div class="gallery-caption">
						<p>Caption for Cuba photo.</p>
					</div>
				</div>
				<div class="gallery-image">
					<a href="#" class="thumbnail"><img src="_examples/feature-gallery-nash.jpg" alt="Steve Nash"></a>
					<div class="gallery-caption">
						<p>Caption for Steve Nash photo.</p>
					</div>
				</div>
				<div class="gallery-image">
					<a href="#" class="thumbnail"><img src="_examples/thegame.jpg" alt="thegame"></a>
					<div class="gallery-caption">
						<p>Caption for Game photo.</p>
					</div>
				</div>
				<div class="gallery-image">
					<a href="#" class="thumbnail"><img src="_examples/feature-gallery-commencement.jpg" alt="Commencement 2014"></a>
					<div class="gallery-caption">
						<p>Caption for Commencement 2014 photo.</p>
					</div>
				</div>
				<div class="gallery-image">
					<a href="#" class="thumbnail"><img src="_examples/feature-gallery-nash.jpg" alt="Steve Nash"></a>
					<div class="gallery-caption">
						<p>Caption for Steve Nash photo.</p>
					</div>
				</div>
				<div class="gallery-image">
					<a href="#" class="thumbnail"><img src="_examples/feature-gallery-sprinksgiving.jpg" alt="Sprinksgiving"></a>
					<div class="gallery-caption">
						<p>Caption for Sprinksgiving photo.</p>
					</div>
				</div>
			</div>
		</div>
	
	</div>
</div>




          <hr>
                    
          <h3>News List</h3>
                        <div class="two-column news module">
                <ul class="media-list">
                  <li class="media">
                    <div class="media-left">
                      <a href="#" class="thumbnail">
                        <img class="media-object" src="_examples/2596637758_cb0d5f8e43_z.jpg" alt="">
                      </a>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">Research Story Title</a></h4>
                      <p>Nam libero tempore, soluta nobis est eligendi optio SCU nihil impedit quo minus id?</p>
                    </div>
                  </li>
                  <li class="media">
                    <div class="media-left">
                      <a href="#" class="thumbnail">
                        <img class="media-object" src="_examples/lg-553-evola.jpg" alt="">
                      </a>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">Transforming Fear Into Hope</a></h4>
                      <p>Artist Lin Evola ’75 uses decommissioned weapons&emdash;including nuclear missiles&emdash;to shape images of peace.</p>
                    </div>
                  </li>
                  <li class="media">
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">A Story Without a Thumbnail</a></h4>
                      <p>If the story has no thumbnail, it appears in the list like so.</p>
                    </div>
                  </li>
                </ul>
              </div>
          <hr>
          <h3>Intro Paragraph</h3>
          <div class="intro">
            <p>This is an example of an Intro Paragraph within a two-column layout. You can place multiple paragraphs here, but as it's the introduction, be brief, no more than around 40 words at maximum.</p>
          </div>
          <hr>
          <h3>Announcements</h3>
          <p> The announcement module is one that doesn't have a one- nor two-column version. It expands to fit wherever it is placed.</p>
          <div class="announcement module">
  <h3>It's Engineering Week 2015!</h3>
  <div class="announcement-body">
    <p><a href="#">Grab the schedule here</a> or follow along with us <a href="#">on Twitter</a>.</p>
  </div>
</div>
<div class="emergency announcement module">
  <h3>Campus Closure</h3>
  <div class="announcement-body">
    <p>Ruptured water mains have flooded campus. <strong>All on-campus classes are suspended for today,</strong> and campus is closed until further notice.</p>
  </div>
</div>
          <p>Emergency announcements can add the class <code>.emergency</code> for a brighter red color that stands out more.</p>
          <hr>
          <h3>Accordion</h3>
          <p>The accordion module is only slightly different from <a href="http://getbootstrap.com/javascript/#collapse-example-accordion">the example Bootstrap provides</a>. </p>
          <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingOne">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <span class="caret"></span> Panel Header Title #1
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="panel-body panel-with-caret">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingTwo">
      <h4 class="panel-title">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <span class="caret"></span> Panel Header Title #2
        </a>
      </h4>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="panel-body panel-with-caret">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingThree">
      <h4 class="panel-title">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <span class="caret"></span> Panel Header Title #3
        </a>
      </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="panel-body panel-with-caret">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" role="tab" id="headingFour">
      <h4 class="panel-title">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          <span class="caret"></span> Panel Header Title #4
        </a>
      </h4>
    </div>
    <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
      <div class="panel-body panel-with-caret">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
          <hr>
          <h3>Video Embed</h3>
                        <div class="two-column video module">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/23wgwaLEEgo" frameborder="0" allowfullscreen></iframe>
                </div>
                <p class="video-caption">Video: <a href="https://www.youtube.com/watch?v=23wgwaLEEgo">The SCU Experience - Housing</a></p>
              </div>
              <div class="two-column video module">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/99649944?color=f36788" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
                <p class="video-caption">Video: <a href="https://vimeo.com/99649944">A Bird&#039;s-Eye View of Santa Clara University</a></p>
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