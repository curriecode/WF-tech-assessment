function appendStickBanner() {
  jQuery("#landing-page").append(
    '<div id="stick-banner hide" type="text/x-custom-template">\
    <button class="close-stick-banner">X</button>\
    <p class="banner-text">Get $10 credit towards your plan and try HP Instant ink for <strong>FREE </strong> today. No commitments or fees - change or cancel your plan anytime.</p>\
    <button class="get-free-ink">Get my free ink</button>\
  </div>'
  );
  jQuery("#stick-banner").css({ position: "sticky", bottom: "2em" });

  jQuery(".close-stick-banner").css({
    position: "relative",
    borderRadius: "100%",
    left: "40%",
    top: "0.8em",
    border: "solid 1px lightgray",
    background: "white",
    outline: "none",
    fontSize: "12px",
    color: "rgb(166, 166, 166)",
    boxShadow: "0px 0px 2px",
    padding: "1px 6px 0px 6px"
  });

  jQuery(".banner-text").css({
    width: "67%",
    margin: "auto",
    background: "#fcfcfc"
  });

  jQuery(".get-free-ink").css({
    border: "solid 1px deepskyblue",
    outline: "none",
    background: "white",
    color: "deepskyblue",
    borderRadius: "4px",
    marginTop: "12px",
    padding: "5px 20px 5px 20px"
  });
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
