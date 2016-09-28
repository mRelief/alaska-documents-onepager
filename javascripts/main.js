(function() {
  window.shared || (window.shared = {});
  var Screener = window.shared.Screener;
  var mainElement = document.getElementById("main");
  ReactDOM.render(React.createElement(Screener), mainElement);
})();


