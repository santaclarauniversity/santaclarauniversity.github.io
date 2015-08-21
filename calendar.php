<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>SCU Calendar</title>

	<?php require('includes/head.php'); ?>
  </head>
  <body>
	<?php require('includes/header.php'); ?>
      
      <div class="container" id="content">
        
      <div class="row">
        <div class="col-sm-10">
	        
                  <div id="lw_cal_view_selector"></div>
                  <div id="lw_cal">
                      <div class="lw_spinner" style="height: 300px;"></div>
                      <div id="lw_cal_header"></div>
                      <div id="lw_cal_body" class="lw_clearfix">
                          <div id="lw_cal_events"></div>
                      </div>
                  </div>
          
        </div>
        <div class="col-sm-2" >
			<div id="lw_mini_cal"></div>
			<div class="lw_cal_search_wrapper">
               <form id="lw_cal_search_form">
                      <h5>Search calendar:</h5>
                      <input type="text" id="lw_cal_search" />
                  </form>
                <span class="fa fa-search lw_search_icon"></span>
              </div>
              <div id="lw_cal_category_selector"></div>          
              <div id="lw_cal_subscribe">
                  <a href="#">Subscribe to calendars</a>
              </div>  
        </div>
      </div>

      </div>
      
	<?php require('includes/footer.php'); ?>
	  <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
  <script type="text/javascript" src="http://lwcal.scu.edu/livewhale/scripts/cors-calendar.js"></script>
  <script>
      lwCalendar({
          host: 'http://lwcal.scu.edu',
          theme: 'calendar-bootstrap',
          thumb_width: 200,
          thumb_height: 200,
          mini_cal_heat_map: true,
          widget_args: {
              hide_repeats: true,
              mini_cal_heat_map: true,
              thumb_width: 200,
              thumb_height: 200
          }
      });
  </script>
  </body>
</html>
