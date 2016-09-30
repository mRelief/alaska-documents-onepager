(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;
  var createEl = React.createElement.bind(React);

  IdentityAndResidencyResults = window.shared.IdentityAndResidencyResults;

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
      return createEl(IdentityAndResidencyResults, {
        hasStateId: this.props.userSubmittedData.hasStateId,
        hasBirthCertificate: this.props.userSubmittedData.hasBirthCertificate,
        hasSocialSecurityCard: this.props.userSubmittedData.hasSocialSecurityCard,
        renting: this.props.userSubmittedData.renting,
        ownsHome: this.props.userSubmittedData.ownsHome,
        stayingInShelter: this.props.userSubmittedData.stayingInShelter,
        stayingWithFamilyOrFriends: this.props.userSubmittedData.stayingWithFamilyOrFriends,
      });
    },

  });
})();
