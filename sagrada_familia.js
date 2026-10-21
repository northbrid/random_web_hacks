// Automates updating calendar and clicking on the day if available
// I kept is simple, just open devtools and copy this snippet in the JS console

dateClickFn = function(dollar) {
	return function() {
		dollar('[data-date-id="22/10/2026"]>div:not(.no-availability)')?.click();
		dollar('[data-date-id="23/10/2026"]>div:not(.no-availability)')?.click();
		dollar('[data-date-id="24/10/2026"]>div:not(.no-availability)')?.click();
	}
}
pageClickFn = function(dollar) {
	return function() {(
		dollar('.DayPickerNavigation_leftButton__horizontalDefault_5:not(.disabled-next-prev-btn_calendar)') || 
		dollar('.DayPickerNavigation_rightButton__horizontalDefault_5')
	).click()}
}
setInterval(dateClickFn($), 500);
setInterval(pageClickFn($), 5000);
