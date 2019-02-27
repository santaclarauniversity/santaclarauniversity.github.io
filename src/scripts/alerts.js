document.addEventListener("DOMContentLoaded", function() {
  const alertElement = document.querySelector('.alert');

  if (alertElement) {
    let alertID = alertElement.id;

    if (!sessionStorage.getItem('dismissAlerts') || sessionStorage.getItem('alertID') !== alertID) {
      alertElement.classList.remove("d-none");

      document.addEventListener('click', function (event) {
        // Event Check
        if (!event.target.matches('.dismiss-alert')) return;
        event.preventDefault();
        // Set cookie (for dismissables)
        sessionStorage.setItem('dismissAlerts', 'true');
        sessionStorage.setItem('alertID', alertID);
      }, false);

    }
  }
});
