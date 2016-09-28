(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;

  window.shared.Questions = React.createClass({

    render: function () {
      return dom.div({ className: 'column' },
        dom.h2({}, 'Questions')
      );
    },

  });
})();
