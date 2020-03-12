function setupDom() {
  jQuery(".hide").css({ visibility: "hidden" });

  //renders html template for banner
  jQuery("#landing-page").append(
    '<div id="stick-banner" class="hide" type="text/x-custom-template">\
    <button class="close-stick-banner">X</button>\
    <p class="banner-text">Get $10 credit towards your plan and try HP Instant ink for <strong>FREE </strong> today. No commitments or fees - change or cancel your plan anytime.</p>\
    <button class="get-free-ink">Get my free ink</button>\
  </div>'
  );

  //styling for banner elements

  jQuery("#stick-banner").css({
    position: "sticky",
    bottom: "4em"
  });

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

  //event handler for the X button to close the banner
  let closeButton = document.querySelector(".close-stick-banner");

  closeButton.addEventListener("click", () => {
    closeBanner();
  });
}

//logic to toggle banner on and off when scrolling past plans-section
function toggleBanner() {
  let el = jQuery("#plans-section").offset();
  if (jQuery(window).scrollTop() > el.top) {
    jQuery("#stick-banner").removeClass("hide");
  } else {
    jQuery("#stick-banner").addClass("hide");
  }
}

//scroll listener to trigger banner toggle
window.addEventListener("scroll", () => {
  toggleBanner();
});

//logic to close banner
function closeBanner() {
  document.querySelector("#stick-banner").remove();
}

//inject jQuery into the console
javascript: (function(e, s, callback) {
  e.src = s;
  e.onload = function() {
    jQuery.noConflict();
    console.log("jQuery injected");
    //callback calls setupDom after jQuery injection
    callback();
  };
  document.head.appendChild(e);
})(
  document.createElement("script"),
  "//code.jquery.com/jquery-latest.min.js",
  setupDom
);
