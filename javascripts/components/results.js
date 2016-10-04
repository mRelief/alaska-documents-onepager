(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;
  var createEl = React.createElement.bind(React);

  IdentityAndResidencyResults = window.shared.IdentityAndResidencyResults;
  CitizenshipResults = window.shared.CitizenshipResults;
  IncomeResults = window.shared.IncomeResults;

  window.shared.Results = React.createClass({

    propTypes: {
      allQuestionsAnswered: React.PropTypes.func.isRequired,
      userSubmittedData: React.PropTypes.object.isRequired,
    },

    render: function () {
      return dom.div({ className: this.divClassName(), id: 'results-column' },
        this.renderSectionContent()
      );
    },

    divClassName: function () {
      if (this.props.allQuestionsAnswered()) {
        return 'column answered';
      } else {
        return 'column';
      };
    },

    renderSectionContent: function () {
      if (this.props.allQuestionsAnswered()) {
        return this.renderResults();
      } else {
        return 'Please answer all questions to get your results.';
      };
    },

    renderResults: function () {
      return dom.div({},
        createEl(IdentityAndResidencyResults, {
          hasStateId: this.props.userSubmittedData.hasStateId,
          hasBirthCertificate: this.props.userSubmittedData.hasBirthCertificate,
          hasSocialSecurityCard: this.props.userSubmittedData.hasSocialSecurityCard,
          renting: this.props.userSubmittedData.renting,
          ownsHome: this.props.userSubmittedData.ownsHome,
          stayingInShelter: this.props.userSubmittedData.stayingInShelter,
          stayingWithFamilyOrFriends: this.props.userSubmittedData.stayingWithFamilyOrFriends,
        }),
        createEl(IncomeResults, {
          employed: this.props.userSubmittedData.employed,
          unemploymentBenefits: this.props.userSubmittedData.unemploymentBenefits,
          retirementBenefits: this.props.userSubmittedData.retirementBenefits,
          selfEmployed: this.props.userSubmittedData.selfEmployed,
          disabilityBenefits: this.props.userSubmittedData.disabilityBenefits,
          childSupport: this.props.userSubmittedData.childSupport,
          rentalIncome: this.props.userSubmittedData.rentalIncome,
        }),
        createEl(CitizenshipResults, {
          isCitizen: this.props.userSubmittedData.isCitizen
        })
      );
    },

  });
})();
