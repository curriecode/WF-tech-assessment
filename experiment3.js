function setupDom() {
  jQuery("#pricing-tabs-wrapper").before(
    '<div class="main-filter-container">\
    <div class="filter-inner"> \
    <div class="badge-printing filter-box"><i class="far fa-address-card"></i><span class="filter-text">Badge Printing</span></div>\
    <div class="document-signing filter-box"><span class="filter-text">Legal Document Signing</span></div>\
    <div class="visitor-photos filter-box"><span class="filter-text">Visitor Photos</span></div>\
    <div class="signin-flow filter-box"><span class="filter-text">Multiple sign in flows</span></div>\
    <div class="visitor-screening filter-box"><span class="filter-text">Visitor Screening</span></div>\
    <div class="del-notification filter-box"><span class="filter-text">Delivery Notifications</span></div>\
    </div>\
    </div> '
  );
  jQuery(".main-filter-container").css({
    width: "100%",
    margin: "-50px auto 70px auto"
  });

  jQuery(".filter-inner").css({
    display: "flex",
    height: "150px"
  });

  jQuery(".filter-box").css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "0px 10px 0px 10px",
    background: "white",
    borderRadius: "3px",
    padding: "4px",
    width: "200px",
    fontSize: "15px",
    boxShadow: "1px 1px 3px lightgray"
  });

  jQuery(".filter-text").css({
    background: "rgb(253, 253, 253)",
    borderRadius: "3px"
  });
}

//inject jQuery into the console
function loadJquery() {
  console.log("-- loading jquery");
  javascript: (function(e, s, callback) {
    e.src = s;
    e.onload = function() {
      jQuery.noConflict();
      console.log("-- jQuery injected");
      //callback calls setupDom after jQuery injection
      callback();
    };
    document.head.appendChild(e);
  })(
    document.createElement("script"),
    "//code.jquery.com/jquery-latest.min.js",
    setupDom
  );
}

function loadFontAwesome() {
  javascript: (function(e, s, callback) {
    e.href = s;
    e.rel = "stylesheet";

    e.onload = function() {
      console.log("-- Font Awesome injected");
      callback();
    };
    document.head.appendChild(e);
  })(
    document.createElement("link"),
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css",
    loadJquery
  );
}
loadFontAwesome();
