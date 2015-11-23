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
        li {margin-bottom: .75em;}
        .switcher {top: 0; position:relative;}
     </style>
     <base target="_blank"/>
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
						<div class="col-sm-12"> 
             <h2>Priority 1 Headers: Schools and Academic Departments</h2>
             
             <h3>Rules</h3>
             <ul>
	             <li>All SCU's <strong>schools and colleges</strong> have the SCU seal in their header, along with a small SANTA CLARA UNIVERSITY and the school/college name set in the official Trajan font.  Their <em>navigation bars</em> differ in color as desired; of the available colors, only red (reserved for the institutional site nav) can't be used.</li>
	             <li>The schools and colleges that have departments— <strong><a href="/headers/cas/index.php">CAS</a>, <a href="/headers/engineering/index.php">Engineering</a>, <a href="/headers/business/index.php">Business</a></strong>— use the white background in their headers, matching the institutional site.  The self-standing schools with primarily graduate programs (ECP, JST, Law) have their choice of background colors from the official palette.</li>
	              <li>Schools and colleges have the mission logo dropdown for main institutional navigation at top left, labeled SCU.EDU. In most cases they should have both the ADMISSION and GIVING additional top navigation links.</li>
	             <li>All academic department sites have the header of their parent school/college (CAS, Business, Engineering) and the main SCU institutional navigation.  Each academic department has an image header that draws from the subject matter studied in that department.  </li>
	             <li>Correspondences between image and departmental subjects should not be read too literally, and should not be too obvious in their interpretation; the intent of these header images is to give a general suggestion or flavor for the work these departments do.  </li>
	             <li>Prospective students typically visit a wide range of departmental sites to get a sense of the school, so the intent is that they should work together as a set.  The "Departments & Programs" switcher is designed to facilitate the process of visiting lots of departmental sites.</li>
	             <li>For departments whose work is highly photogenic, or who desire a bolder visual first impression, there is a "tall header" version that allows more space for the opening image.  These opening images should have captions, and may vary or rotate with each visit to the page.  This treatment is only available to departmental homepages; other pages follow the standard template, using the same image as seen on the homepage or a more general, generic image.  (Example: <a href="/headers/art-and-art-history/">Art and Art History</a>.)</li>
             </ul>
             
             <h3>Examples</h3>
             <em>The following code is also used for the department switcher on these pages; you can navigate from department to department using the switcher, or open all these links in tabs.</em>
						 	<?php require('includes/department-switcher.php'); ?>
             <h2>Priority 2 Headers: Branded Sites</h2>
             
             <h3>Rules</h3>
             <p>Branded sites are subject to fewer restrictions on color and typeface.  Organizations that have invested in an independent brand have the right to use those brands, as long as the general look and feel works with the overall site aesthetic and conforms to the rules below.</p>
             <ul>
	             <li>If site brands are designed to work well with the core SCU identity, they can be used in place of the site name at up to 2/3 of the width of the site header. (Example: <a href="/headers/alumni/">Alumni Association</a>.) If not, they can be used at 1/3 of the header width on the right side of the header, with the site name set in approved SCU site color/typeface in the standard logo/header position. (Example: Campus Recreation</a>.)</li>
	             <li>If branded sites have a reasonable claim to a graphic standard outside the approved SCU brand package— such as a unique color or typeface— those can be incorporated, as long as they're judged to work in reasonable harmony with other SCU standard graphic elements.</li>
	             <li>Navigation bars for branded sites should be in neutral colors only— black, gray, or white.  For white navigation bars, nav links can be in an alternate color if desired and approved by OMC.</li>
	             <li>Branded sites have the mission logo and dropdown nav, labeled SANTA CLARA UNIVERSITY unless those words are used in the header/title of the branded site. They do not need ADMISSION and GIVING links unless these sites cater in particular to an external audience of prospective students and donors.
             </ul>
             
             <h3>Examples</h3>
             <ul>
								<li><a href="/headers/alumni/">Alumni Association</a></li>
								<li><a href="/headers/desaisset/">De Saisset Museum</a></li>
								<li><a href="/headers/ignatian-center/">Ignatian Center</a></li>
								<li>Miller Center</a></li>
								<li>SCU Presents</a></li>
								<li>Bronco bench foundation</a></li>
								<li>Campus Recreation</a></li>
             </ul>
             <h2>Priority 3 Headers: Additional sites</h2>
             <ul>
								<li>Provost main header, 4 area subheads</a></li>
								<li>President's Office</a></li>
								<li>Markkula Center</a></li>	             
             </ul>
						</div>
					</div>     
              <div class="intro" style="margin-top:50px;">
                <p><em>The links below are outdated; archived copies are preserved if needed.</em></p>
              </div>
          <div class="row" style="opacity:.5;">
            <div class="col-sm-8">
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