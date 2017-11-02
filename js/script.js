var totalCharts = 0;

var INVALID_TICKER = "";

function setMainHeight() {
    $("#main").css("height", window.innerHeight - 60 + "px");
}

$(function() {
  setMainHeight();
});

$( window ).resize(function() {
  setMainHeight();
});

function getTicker() {
  var ticker = prompt("What ticker are you interested in?", INVALID_TICKER);
  while (ticker === INVALID_TICKER || !ticker) {
    ticker = prompt("Try again, what ticker are you interested in?", INVALID_TICKER);
  }
  return ticker;
}

$(".add-chart").on('click', function(){
  if (totalCharts < 8) {
    var ticker = getTicker();

    totalCharts++;
    var chartId = "chart_" + totalCharts;
    $("#main").append("<div class='chart' id='" + chartId + "'></div>");
    new TradingView.widget({
      "container_id": chartId,
      "autosize": true,
      "symbol": ticker,
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "Dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "hideideas": true
    });

    setChartDimensions();

    $("#info-section").hide();
  } else {
    window.alert("You cannot add any more charts.");
  }
});

function reset(){
    totalCharts = 0;
    $(".chart").remove();
    $("#info-section").show();
};

function setIC(chartNumber, width, height) {
  if (chartNumber) {
    $("#chart_" + chartNumber).css("width", width + "%");
    $("#chart_" + chartNumber).css("height", height + "%");
  } else {
    for (var i = 1; i <= 8; i++) {
        $("#chart_" + i).css("width", width + "%");
        $("#chart_" + i).css("height", height + "%");
    }
  }
}

function setChartDimensions() {
  switch(totalCharts) {
    case 1:
        setIC(null, 100, 100);
        break;
    case 2:
        setIC(1, 100, 50);
        setIC(2, 100, 50);
        break;
    case 3:
        setIC(1, 50, 50);
        setIC(2, 50, 50);
        setIC(3, 100, 50)
        break;
    case 4:
        setIC(null, 50, 50);
        break;
    case 5:
        setIC(1, 100/2, 100/3);
        setIC(2, 100/2, 100/3);
        setIC(3, 100/2, 100/3);
        setIC(4, 100/2, 100/3);
        setIC(5, 100, 100/3);
        break;
    case 6:
        setIC(null, 100/2, 100/3);
        break;
    case 7:
        setIC(1, 100/3, 100/3);
        setIC(2, 100/3, 100/3);
        setIC(3, 100/3, 100/3);
        setIC(4, 100/3, 100/3);
        setIC(5, 100/3, 100/3);
        setIC(6, 100/3, 100/3);
        setIC(7, 100, 100/3);
        break;
    case 8:
        setIC(null, 100/4, 100/2);
        break;
    default:
        setIC(null, 100, 100);
  }
}
