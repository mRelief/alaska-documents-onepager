(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;

  window.shared.Results = React.createClass({

    propTypes: {
      allQuestionsAnswered: React.PropTypes.func.isRequired,
    },

    render: function () {
      return dom.div({ className: 'column' },
        dom.h2({}, 'Results'),
        dom.br({}),
        dom.p({}, this.renderSectionContent())
      );
    },

    renderSectionContent: function () {
      if (this.props.allQuestionsAnswered()) {
        return 'Here are your results!';
      } else {
        return 'Please answer all of the questions to get your results.';
      }
    }

  });
})();
