let selected = [];
function setupDom() {
  //html template for filter cards
  jQuery("#pricing-tabs-wrapper").before(
    '<div class="main-filter-container">\
    <div class="filter-inner"> \
    <div data-card="badge" class="filter-card"><i class="far fa-address-card"></i><span class="filter-text center-text">Badge Printing</span></div>\
    <div data-card="document" class="filter-card"><i class="far fa-file-alt"></i><span class="filter-text">Legal Document Signing</span></div>\
    <div data-card="visitor" class="filter-card"><i class="fas fa-portrait"></i><span class="filter-text center-text">Visitor Photos</span></div>\
    <div data-card="signin" class="filter-card"><i class="fas fa-users"></i><span class="filter-text">Multiple sign-in flows</span></div>\
    <div data-card="visitor-screen" class="filter-card"><i class="fas fa-shield-alt"></i><span class="filter-text center-text">Visitor Screening</span></div>\
    <div data-card="noti" class="filter-card"><i class="fas fa-box"></i><span class="filter-text">Delivery Notifications</span></div>\
    </div>\
    </div> '
  );

  //styling for filter cards
  jQuery(".main-filter-container").css({
    width: "100%",
    margin: "-50px auto 70px auto"
  });

  jQuery(".filter-inner").css({
    display: "flex",
    height: "150px"
  });

  jQuery(".filter-card").css({
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "0px 10px 0px 10px",
    background: "white",
    borderRadius: "3px",
    padding: "4px",
    width: "200px",
    fontSize: "15px",
    boxShadow: "1px 1px 3px 3px #eeeeee"
  });

  jQuery(".filter-text").css({
    background: "rgb(253, 253, 253)",
    borderRadius: "3px"
  });

  jQuery(".center-text").css({
    marginBottom: "19px"
  });

  jQuery(".far").css({
    position: "relative",
    bottom: "20px",
    fontSize: "30px"
  });
  jQuery(".fas").css({
    position: "relative",
    bottom: "20px",
    fontSize: "30px"
  });

  //click handler to toggle filter card color from black to red on click
  jQuery(".filter-card").click(event => {
    let parentCard = jQuery(event.target).closest(".filter-card");
    let cardData = parentCard.data().card;
    if (selected.includes(cardData)) {
      selected = selected.filter(ele => ele !== cardData);
    } else {
      selected.push(parentCard.data().card);
    }
    parentCard.toggleClass("red");
    assignRecommend();
  });

  //html for 'we recommend' banner
  // jQuery(".pricing-card").before(
  //   '<div class="recommend"><span class="rec-text">We recommend</span></div>'
  // );

  setupPricingCards();
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

function isStandard(text) {
  return text.includes("Standard");
}

function isPremium(text) {
  return text.includes("Premium");
}

function isEnterprise(text) {
  return text.includes("Enterprise");
}

function setupPricingCards() {
  jQuery(".pricing-card").each(function() {
    let card = $(this);
    let text = card.text();
    if (isStandard(text)) {
      card.addClass("standard");
    } else if (isPremium(text)) {
      card.addClass("premium");
    } else if (isEnterprise(text)) {
      card.addClass("enterprise");
    }
  });
}

function recommendEnterprise() {
  return selected.length === 6 && !jQuery(".enterprise-recommend").length;
}

function recommendPremium() {
  return (
    selected.includes("noti") &&
    selected.includes("visitor-screen") &&
    selected.length === 2 &&
    !jQuery(".premium-recommend").length
  );
}

function recommendStandard() {
  return (
    selected.includes("badge") &&
    selected.length === 1 &&
    !jQuery(".standard-recommend").length
  );
}

function assignRecommend() {
  if (recommendEnterprise()) {
    jQuery(".enterprise").each(function() {
      $(this).before(
        '<div class="recommend enterprise-recommend"><span class="rec-text">We recommend</span></div>'
      );
    });
    jQuery(".standard-recommend").remove();
    jQuery(".premium-recommend").remove();
  } else if (recommendPremium()) {
    jQuery(".premium").each(function() {
      $(this).before(
        '<div class="recommend premium-recommend"><span class="rec-text">We recommend</span></div>'
      );
    });
    jQuery(".standard-recommend").remove();
    jQuery(".enterprise-recommend").remove();
  } else if (recommendStandard()) {
    jQuery(".standard").each(function() {
      $(this).before(
        '<div class="recommend standard-recommend"><span class="rec-text">We recommend</span></div>'
      );
    });
    jQuery(".premium-recommend").remove();
    jQuery(".enterprise-recommend").remove();
  } else {
    jQuery(".standard-recommend").remove();
    jQuery(".premium-recommend").remove();
    jQuery(".enterprise-recommend").remove();
  }
  //styling for 'we recommend' banner
  jQuery(".recommend").css({
    width: "100%",
    height: "35px",
    background: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: "3px 3px 0px 0px"
  });
}
