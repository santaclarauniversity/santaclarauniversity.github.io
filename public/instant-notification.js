try {
	$(document).ready(function() {
		$.ajax({
			type: 'GET',
			url: 'https://www.scu.edu/media/scuedu/current/announcements.json?c='+Math.random(),
			jsonp: "callback",
			jsonpCallback: 'jsonCallback',
			contentType: "application/json",
			dataType: 'jsonp',                
			error: function(e) {
				console.log(e.message);
			}
		});
		
	});


} catch(err) {
  console.log( err.message );
}


function notifications(data) {
	console.log( 'new not'); 
	if ( data.length > 0 ) {
	   for(var i=0; i < data.length; i ++ ) {
		   ann = data[i];                      
		   if (  ! hasAnnBeenDismissed( ann['id'] ) ) {
			   console.log('displaying notification: '+ann['id']  ); 

			   out = '\n<div class="alert alert-site-wide alert-primary alert-dismissable mb-0" style="background-color:#033b4c;border:0;" role="alert" id="'+ann['id']+'">';
			   out += '\n\t<div class="container d-flex align-items-center">';
			   out += '\n\t\t<div class="alert-body text-white mr-auto">';
			   out += '\n\t\t<button type="button" class="float-right mt-1 btn text-white ml-1 dismiss-alert" data-dismiss="alert" aria-label="Close"><span class="fal fa-times-square" style="font-size: 22px;"></span></button>';
			   out += '<strong>'+ann['title']+':</strong> '+ann['summary']+' '+ (ann['description']!=''? '<a href="https://www.scu.edu/news-and-events/notifications/?a='+ann['id']+'">Read more.</span></a>' :'') + '\n\t\t</div>';
			   out += '\n\t</div>';
			   out += '\n</div>';

			   $('#navbarUsers').after(out ); 
		   } else {
			   console.log('notification '+ann['id']+ ' was dismissed.' ); 
		   }
	   }
   }

   $('.dismiss-alert').click(function() {			
	   alertID = $(this).closest('.alert-site-wide').prop('id');
	   arr = getLocalStorageArr('dismissedAlerts');
	   arr.push(alertID);
	   setLocalStorageArr('dismissedAlerts',arr);
	   $(this).hide();
	  //localStorage.setItem('alertID', alertID);
   });


}

function hasAnnBeenDismissed(id){
	dismissed = getLocalStorageArr('dismissedAlerts');
	if ( dismissed.indexOf(id) == -1 ) {
		return false;
	}
	return true;
}

function setLocalStorageArr(name,value) {
	localStorage.setItem(name, JSON.stringify(value));
}

function getLocalStorageArr(name) {
	try {
		storedVal = localStorage.getItem(name);
		if ( !storedVal ) 
			return [];
		parsedArr =  JSON.parse(storedVal);
		if ( !parsedArr || typeof parsedArr == 'string')
			return [];
		return parsedArr;
	} catch(err) {
	  console.log( err.message );
	}
	return [];
}
