function appendStickBanner() {
  jQuery("#plans-section").append(
    '<div id="stick-banner" type="text/x-custom-template">\
    <button class="close-stick-banner"> X </button>\
    <p>Get $10 credit towards your plan and try HP Instant ink for FREE today. No commitments or fees - change or cancel your plan anytime.</p>\
    <button class="get-free-ink">Get my free ink</button>\
  </div>'
  );
}

//inject jQuery into the console
javascript: (function(e, s, callback) {
  e.src = s;
  e.onload = function() {
    jQuery.noConflict();
    console.log("jQuery injected");
    callback();
  };
  document.head.appendChild(e);
})(
  document.createElement("script"),
  "//code.jquery.com/jquery-latest.min.js",
  appendStickBanner
);
