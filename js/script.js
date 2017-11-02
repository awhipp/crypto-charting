$(".add-chart").on('click', function(){
    $("#main").append("<div class='chart' id='chart_1'></div>");
    new TradingView.widget({
      "container_id": "chart_1",
      "autosize": true,
      "symbol": "NASDAQ:AAPL",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "Light",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "hideideas": true
    });
    $("#info-section").hide();
});
