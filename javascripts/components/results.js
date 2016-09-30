(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;
  var createEl = React.createElement.bind(React);

  window.shared.Results = React.createClass({

    propTypes: {
      allQuestionsAnswered: React.PropTypes.func.isRequired,
      userSubmittedData: React.PropTypes.object.isRequired,
    },

    render: function () {
      return dom.div({ className: 'column' },
        dom.h2({}, 'Results'),
        dom.br({}),
        this.renderSectionContent()
      );
    },

    renderSectionContent: function () {
      if (this.props.allQuestionsAnswered()) {
        return this.resultsMessage();
      } else {
        return 'Please answer all of the questions to get your results.';
      };
    },

    resultsMessage: function () {
      return this.renderIdentityDocuments();
    },

    renderIdentityDocuments: function () {
      if (this.props.userSubmittedData.hasStateId) {
        return dom.div({},
          dom.span({}, 'You will need to bring your State ID.'),
          createEl(ReactTooltip, { id: 'state-id-explanation' }),
          this.renderStateIdTooltip()
        );
      };
    },

    renderStateIdTooltip: function () {
      return dom.span({
        'data-for': 'state-id-explanation',
        'data-tip': 'This verifies your residency and identity.',
        'style': {
          color: '#0645AD',
          fontSize: '12px',
          cursor: 'pointer'
        },
       }, '\u00a0 (?)');
    },

  });
})();
