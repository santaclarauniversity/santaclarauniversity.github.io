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
          <h1 class="page-title">One Column Modules</h1>

          <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">Section Title</a></li>
            <li><a href="#">Parent Page</a></li>
            <li class="active">One Column Modules</li>
          </ol>

          <div class="intro">
            <p>If the page can be split up into three columns, one-column modules always take up the space of one of those columns.</p>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h3>Person Spotlight</h3>
                            <div class="one-column person-spotlight module">
                <ul class="media-list">
                  <li class="media">
                    <div class="media-left">
                      <a href="#">
                        <img class="media-object img-circle img-thumbnail" src="_examples/Mourad2p.jpg" width="141" height="141" alt="">
                      </a>
                    </div>
                    <div class="media-body">
                      <h3 class="person-spotlight-department">Electrical Engineering</h3>
                      <h4 class="media-heading"><a href="#">Dr. Samiha Mourad</a></h4>
                      <p>encourages regular meetings among the students she advises.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <hr>
              <h3>Events List</h3>
                            <div class="one-column events module">
                <ul class="media-list">
                  <li class="media">
                    <div class="media-left">
                      <div class="events-date-page">
                        <div class="events-month">Nov</div>
                        <div class="events-day">11</div>
                      </div>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">Cuba: Dispelling the Myths</a></h4>
                      <p class="events-time-and-location">5:00pm, Benson Center, Williman Room</p>
                      <p>Students from SCU’s Food and Agribusiness Institute will discuss their immersion trip, and reflect on how their coursework prepared them for the island.</p>
                    </div>
                  </li>
                  <li class="media">
                    <div class="media-left">
                      <div class="events-date-page">
                        <div class="events-month">Nov</div>
                        <div class="events-day">13</div>
                      </div>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">Fall Break</a></h4>
                      <p class="events-time-and-location">All Day</p>
                    </div>
                  </li>
                  <li class="media">
                    <div class="media-left">
                      <div class="events-date-page">
                        <div class="events-month">Nov</div>
                        <div class="events-day">18</div>
                      </div>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">Event with an Image</a></h4>
                      <a href="#" class="thumbnail"><img src="_examples/event.jpg" width="248" height="114" alt=""></a>
                      <p class="events-time-and-location">12:30pm, Benson Center</p>
                      <p>Summary field can also be optional.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <hr>
              <h3>News List with Images</h3>
              <p>The news module uses Bootstrap's <a href="http://getbootstrap.com/components/#media-list">media list</a> formatting as a base. Also refer to Bootstrap's <a href="http://getbootstrap.com/components/#media">media object</a> component.</p>
                            <div class="one-column news module">
                <ul class="media-list">
                  <li class="media">
                    <div class="media-left">
                      <a href="#" class="thumbnail">
                        <img class="media-object" src="_examples/thegame.jpg" alt="">
                      </a>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">The Game</a></h4>
                      <p>The annual Gonzaga game on Feb. 5 promises to electrify the campus. Here's what you need to know before tip-off.</p>
                    </div>
                  </li>
                  <li class="media">
                    <div class="media-left">
                      <a href="#" class="thumbnail">
                        <img class="media-object" src="_examples/fbenton.jpg" alt="">
                      </a>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">The Music of Geometry</a></h4>
                      <p>A new exhibit at the de Saisset Museum explores the workspace and methods of renowned sculptor Fletcher Benton.</p>
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
              <h3>Featured Story</h3>
                <div class="one-column featured-story module">
                <a href="#" class="thumbnail"><img src="_examples/lg-1503-nash.jpg" alt=""></a>
                <h4 class="featured-story-heading"><a href="#">A Wild Generosity</a></h4>
                <p>On the retirement of Steve Nash '96 from pro basketball, writer Brian Doyle recalls the riveting display of graceful mastery, athleticism, and sheer creativity of his game.</p>
                <p><a href="#">More in Alumni Stories &raquo;</a></p>
              </div>
              <hr>
              <h3>Infographics</h3>
              <div class="one-column large infographic module">
  <div class="infographic-wrapper">
    <div class="infographic-statistic">78</div>
    <div class="infographic-label">percentage of students who prefer <a href="#">green beans</a></div>
  </div>
</div>

<div class="one-column prix infographic module">
  <div class="infographic-wrapper">
    <div class="infographic-statistic">
      38
    </div>
  </div>
  <div class="infographic-label">
    <p>percentage of staff who prefer <strong>carrots over <a href="#">cucumbers</a></strong></p>
  </div>
</div>

<div class="one-column window infographic module">
  <div class="infographic-statistic">
    <p>3<sup>rd</sup></p>
  </div>
  <div class="infographic-label">
    <p><strong>National ranking</strong> of the SCU salad bar</p>
  </div>
</div>
              <hr>
              <h3>Map</h3>
              <div class="map module">
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3171.698669022712!2d-121.93898800000002!3d37.349641999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcbaf36303ec3%3A0x561ca114f6d4e347!2sSanta+Clara+University!5e0!3m2!1sen!2sus!4v1427848297119" width="100%" height="300" frameborder="0" style="border:0"></iframe>
</div>
            </div>
            <div class="col-md-6">
              <h3>Buttons</h3>
              <p>We took a different tack here. The more we tried to use <a href="http://getbootstrap.com/css/#buttons">Bootstrap's button format</a>, the more we realized it wasn't an exact fit: these styles didn't line up with different Bootstrap button styles (default, primary, success, info, warning, danger, link), and using the <code>.btn</code> class would mess with form submit button styling.</p>
                            <h4>Maroon, Left Aligned</h4>
              <p><code>&lt;a class="maroon link-button" role="button"&gt;&lt;/a&gt;</code>
              <a class="maroon link-button" href="#" role="button">Undergraduate Programs</a>
              <a class="maroon link-button" href="#" role="button">Graduate Programs</a>
              <a class="maroon link-button" href="#" role="button">If text wraps on these buttons, this is what happens</a>
              <h4>Stroked White, Center Aligned</h4>
              <p><code>&lt;a class="stroked white link-button" role="button"&gt;&lt;/a&gt;</code>
              <a class="stroked white link-button" href="#" role="button">Support <span>SCU</span></a>
              <h4>Stroked Red, Center Aligned</h4>
              <p><code>&lt;a class="stroked red link-button" role="button"&gt;&lt;/a&gt;</code>
              <a class="stroked red link-button" href="#" role="button">Apply Now for Housing</a>
              <hr>
              <h3>Simple Forms</h3>
              <p>Form modules are a bit simpler as a module: simply use <code>&lt;form class="module"&gt;</code> to get started. Our forms are built off of <a href="http://getbootstrap.com/css/#forms">Bootstrap's methods</a>. For form fields where you want to use the placeholder attribute with no visible label, <a href="http://getbootstrap.com/css/#forms-inline">make sure to use the .sr-only class</a> on descriptive labels that will remain hidden for all but screen readers.</p>
              <p>Form headers can be any <code>&lt;h2&gt;-&lt;h6&gt;</code> header element, or a <code>&lt;legend&gt;</code> of a <code>&lt;fieldset&gt;</code>.</p>
                            <form class="module">
                <fieldset>
                  <legend>Form Intro Text</legend>
                  <div class="form-group">
                    <label for="example1">Text Input</label>
                    <input type="text" name="example1" id="example1" class="form-control" placeholder="Text Input">
                  </div>
                  <div class="form-group">
                    <label for="example2">Select</label>
                    <select name="example2" id="example2" class="form-control">
                      <option value="Or a dropdown">Or a dropdown</option>
                      <option value="if you prefer">if you prefer</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="example3">Text Area</label>
                    <textarea name="example3" id="example3" class="form-control"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="example4" class="sr-only">Screen-reader readable label</label>
                    <input type="text" name="example4" id="example4" class="form-control" placeholder="If you use the Placeholder sans label,">
                  </div>
                  <div class="form-group">
                    <label for="example5" class="sr-only">Screen-reader readable label</label>
                    <input type="text" name="exampl5" id="example5" class="form-control" placeholder="make sure to still use a label with">
                  </div>
                  <div class="form-group">
                    <label for="example6" class="sr-only">Screen-reader readable label</label>
                    <input type="text" name="example6" id="example6" class="form-control" placeholder="the class .sr-only for accessibility.">
                  </div>
                  <div class="form-group">
                    <label for="example7">File Input</label>
                    <input type="file" name="example7" id="example7">
                    <p class="help-block">Use <code>.help-block</code> for help texts like this.</p>
                  </div>
                </fieldset>
                <fieldset>
                  <legend>Checkboxes and Radio Buttons</legend>
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" name="financial_aid_info" value="yes"> Please include information about financial aid and scholarships.
                    </label>
                  </div>
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" name="visiting_info" value="yes"> Please include information about visiting campus.
                    </label>
                  </div>
                  <div class="radio">
                    <label>
                      <input type="radio" name="financial_advisor" id="financial-advisor-already" value="no" checked>
                      I have already spoken to a financial advisor.
                    </label>
                  </div>
                  <div class="radio">
                    <label>
                      <input type="radio" name="financial_advisor" id="financial-advisor-need" value="yes">
                      I need to speak to a financial advisor.
                    </label>
                  </div>
                </fieldset>
                <button type="submit" class="btn btn-default">Submit</button>
              </form>
              <hr>
              <h3>Pagination</h3>
                            <nav>
                <ul class="pagination">
                  <li><a href="#" aria-label="Previous"><span aria-hidden="true">Prev</span></a></li>
                  <li><a href="#">1</a></li>
                  <li class="active"><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#" aria-label="Next"><span aria-hidden="true">Next</span></a></li>
                </ul>
              </nav>
              <p>Check <a href="http://getbootstrap.com/components/#pagination">Bootstrap's pagination component information</a> regarding classes for disabling left/right links and for sizing. Some examples:</p>
              <nav>
                <ul class="pagination">
                  <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">Prev</span></a></li>
                  <li class="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#" aria-label="Next"><span aria-hidden="true">Next</span></a></li>
                </ul>
              </nav>
              <nav>
                <ul class="pagination pagination-lg">
                  <li><a href="#" aria-label="Previous"><span aria-hidden="true">Prev</span></a></li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li class="active"><a href="#">4</a></li>
                  <li class="disabled"><a href="#" aria-label="Next"><span aria-hidden="true">Next</span></a></li>
                </ul>
              </nav>
              <nav>
                <ul class="pagination pagination-sm">
                  <li><a href="#" aria-label="Previous"><span aria-hidden="true">Prev</span></a></li>
                  <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li class="active"><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#" aria-label="Next"><span aria-hidden="true">Next</span></a></li>
                </ul>
              </nav>
              <hr>
              <h3>Video Embeds</h3>
              <p>We're using Bootstrap's <a href="http://getbootstrap.com/components/#responsive-embed">responsive embed</a> classes to wrap video in a container that will resize video appropriately to whatever layout it falls into.</p>
                            <div class="one-column video module">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/23wgwaLEEgo" frameborder="0" allowfullscreen></iframe>
                </div>
                <p class="video-caption">Video: <a href="https://www.youtube.com/watch?v=23wgwaLEEgo">The SCU Experience - Housing</a></p>
              </div>
              <div class="one-column video module">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/99649944?color=f36788" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
                <p class="video-caption">Video: <a href="https://vimeo.com/99649944">A Bird&#039;s-Eye View of Santa Clara University</a></p>
              </div>
              <hr>
              <h3>Single Image with Caption</h3>
                            <div class="one-column image module thumbnail">
                <img src="_examples/commencement2014.jpg" alt="">
                <div class="caption">
                  <p><a href="http://www.scu.edu/commencement/">Commencement 2014</a>: congratulations to all graduates!</p>
                </div>
              </div>
              <h5>Or, the HTML5 &lt;figure&gt;-using version:</h5>
              <figure class="one-column image module thumbnail">
                <img src="_examples/sprinksgiving.jpg" alt="">
                <figcaption>
                  <p>At SCU, we have much to be thankful for. On April 15, 2015 we welcome our third annual <a href="http://www.scu.edu/give/direct-your-gift/santa-clara-fund/sprinksgiving/">Sprinksgiving</a> event, to reflect upon our growing culture of gratitude and donor appreciation.</p>
                </figcaption>
              </figure>
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

          
          <div class="one-column related-links module">
            <h3>Related Links</h3>
                        <div class="one-column related-links module">
              <h4 class="related-links-header">Related</h4>
              <ul>
                <li><a href="#">Related Link Title</a></li>
                <li><a href="#">A Second Related Link, This One Can Even Be Much Longer</a></li>
              </ul>
            </div>
          </div>
          <hr>
          <h3>Announcements</h3>
          <p>The announcement module is one that doesn't have a one- nor two-column version and the associated classes. It expands to fit wherever it is placed.</p>
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
          <h3>Site Pointer</h3>
                    <a href="#" class="one-column single-image-with-link module">
            <img src="_examples/site-pointer-1.jpg" alt="">
            <span class="single-image-with-link-body">Buildings & Grounds</span>
          </a>
          <a href="#" class="one-column single-image-with-link module">
            <img src="_examples/site-pointer-2.jpg" alt="">
            <span class="single-image-with-link-body">University Library</span>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <h2>Two-column container tests</h2>
                        <div class="one-column person-spotlight module">
                <ul class="media-list">
                  <li class="media">
                    <div class="media-left">
                      <a href="#">
                        <img class="media-object img-circle img-thumbnail" src="_examples/Mourad2p.jpg" width="141" height="141" alt="">
                      </a>
                    </div>
                    <div class="media-body">
                      <h3 class="person-spotlight-department">Electrical Engineering</h3>
                      <h4 class="media-heading"><a href="#">Dr. Samiha Mourad</a></h4>
                      <p>encourages regular meetings among the students she advises.</p>
                    </div>
                  </li>
                </ul>
              </div>
          <hr>
                        <div class="one-column events module">
                <ul class="media-list">
                  <li class="media">
                    <div class="media-left">
                      <div class="events-date-page">
                        <div class="events-month">Nov</div>
                        <div class="events-day">11</div>
                      </div>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">Cuba: Dispelling the Myths</a></h4>
                      <p class="events-time-and-location">5:00pm, Benson Center, Williman Room</p>
                      <p>Students from SCU’s Food and Agribusiness Institute will discuss their immersion trip, and reflect on how their coursework prepared them for the island.</p>
                    </div>
                  </li>
                  <li class="media">
                    <div class="media-left">
                      <div class="events-date-page">
                        <div class="events-month">Nov</div>
                        <div class="events-day">13</div>
                      </div>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">Fall Break</a></h4>
                      <p class="events-time-and-location">All Day</p>
                    </div>
                  </li>
                  <li class="media">
                    <div class="media-left">
                      <div class="events-date-page">
                        <div class="events-month">Nov</div>
                        <div class="events-day">18</div>
                      </div>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">Event with an Image</a></h4>
                      <a href="#" class="thumbnail"><img src="_examples/event.jpg" width="248" height="114" alt=""></a>
                      <p class="events-time-and-location">12:30pm, Benson Center</p>
                      <p>Summary field can also be optional.</p>
                    </div>
                  </li>
                </ul>
              </div>
          <hr>
                        <div class="one-column news module">
                <ul class="media-list">
                  <li class="media">
                    <div class="media-left">
                      <a href="#" class="thumbnail">
                        <img class="media-object" src="_examples/thegame.jpg" alt="">
                      </a>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">The Game</a></h4>
                      <p>The annual Gonzaga game on Feb. 5 promises to electrify the campus. Here's what you need to know before tip-off.</p>
                    </div>
                  </li>
                  <li class="media">
                    <div class="media-left">
                      <a href="#" class="thumbnail">
                        <img class="media-object" src="_examples/fbenton.jpg" alt="">
                      </a>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading"><a href="#">The Music of Geometry</a></h4>
                      <p>A new exhibit at the de Saisset Museum explores the workspace and methods of renowned sculptor Fletcher Benton.</p>
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
                        <div class="one-column featured-story module">
                <a href="#" class="thumbnail"><img src="_examples/lg-1503-nash.jpg" alt=""></a>
                <h4 class="featured-story-heading"><a href="#">A Wild Generosity</a></h4>
                <p>On the retirement of Steve Nash '96 from pro basketball, writer Brian Doyle recalls the riveting display of graceful mastery, athleticism, and sheer creativity of his game.</p>
                <p><a href="#">More in Alumni Stories &raquo;</a></p>
              </div>
          <hr>
                        <div class="one-column video module">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/23wgwaLEEgo" frameborder="0" allowfullscreen></iframe>
                </div>
                <p class="video-caption">Video: <a href="https://www.youtube.com/watch?v=23wgwaLEEgo">The SCU Experience - Housing</a></p>
              </div>
              <div class="one-column video module">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/99649944?color=f36788" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
                <p class="video-caption">Video: <a href="https://vimeo.com/99649944">A Bird&#039;s-Eye View of Santa Clara University</a></p>
              </div>
          <hr>
                        <div class="one-column image module thumbnail">
                <img src="_examples/commencement2014.jpg" alt="">
                <div class="caption">
                  <p><a href="http://www.scu.edu/commencement/">Commencement 2014</a>: congratulations to all graduates!</p>
                </div>
              </div>
              <h5>Or, the HTML5 &lt;figure&gt;-using version:</h5>
              <figure class="one-column image module thumbnail">
                <img src="_examples/sprinksgiving.jpg" alt="">
                <figcaption>
                  <p>At SCU, we have much to be thankful for. On April 15, 2015 we welcome our third annual <a href="http://www.scu.edu/give/direct-your-gift/santa-clara-fund/sprinksgiving/">Sprinksgiving</a> event, to reflect upon our growing culture of gratitude and donor appreciation.</p>
                </figcaption>
              </figure>
          <hr>
                    <a href="#" class="one-column single-image-with-link module">
            <img src="_examples/site-pointer-1.jpg" alt="">
            <span class="single-image-with-link-body">Buildings & Grounds</span>
          </a>
          <a href="#" class="one-column single-image-with-link module">
            <img src="_examples/site-pointer-2.jpg" alt="">
            <span class="single-image-with-link-body">University Library</span>
          </a>
          <hr>
          <div class="one-column large infographic module">
  <div class="infographic-wrapper">
    <div class="infographic-statistic">78</div>
    <div class="infographic-label">percentage of students who prefer <a href="#">green beans</a></div>
  </div>
</div>

<div class="one-column prix infographic module">
  <div class="infographic-wrapper">
    <div class="infographic-statistic">
      38
    </div>
  </div>
  <div class="infographic-label">
    <p>percentage of staff who prefer <strong>carrots over <a href="#">cucumbers</a></strong></p>
  </div>
</div>

<div class="one-column window infographic module">
  <div class="infographic-statistic">
    <p>3<sup>rd</sup></p>
  </div>
  <div class="infographic-label">
    <p><strong>National ranking</strong> of the SCU salad bar</p>
  </div>
</div>
          <hr>
          <div class="map module">
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3171.698669022712!2d-121.93898800000002!3d37.349641999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcbaf36303ec3%3A0x561ca114f6d4e347!2sSanta+Clara+University!5e0!3m2!1sen!2sus!4v1427848297119" width="100%" height="300" frameborder="0" style="border:0"></iframe>
</div>
          <p>Maps expand to 100% if you omit the <code>.one-column</code> class.</p>
        </div>
        <div class="col-sm-4">
          <div class="well">
            <p>Testing to make sure that one-column modules don't expand past a certain point if put inside a larger container.</p>
          </div>
        </div>
      </div>

      </div>
      
	<?php require('includes/footer.php'); ?>
  </body>
</html>