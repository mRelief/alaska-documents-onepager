(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;
  var createEl = React.createElement.bind(React);
  var Questions = window.shared.Questions;
  var Results = window.shared.Results;

  window.shared.Screener = React.createClass({

    getInitialState: function () {
      return {
        hasStateId: false,
        hasBirthCertificate: false,
        hasSocialSecurity: false,
        renting: false,
        ownsHome: false,
        stayingInShelter: false,
        stayingWithFamilyOrFriends: false,
        employed: false,
        unemploymentBenefits: false,
        retirementBenefits: false,
        selfEmployed: false,
        disabilityBenefits: false,
        childSupport: false,
        rentalIncome: false,
        yesCitizen: false,
        notCitizen: false,
      }
    },

    render: function () {
      return dom.div({},
        this.renderQuestions(),
        this.renderResults()
      );
    },

    renderQuestions: function () {
      return createEl(Questions, {
        onClickStateId: this.onClickStateId,
        onClickBirthCertificate: this.onClickBirthCertificate,
        onClickSocialSecurity: this.onClickSocialSecurity,
      });
    },

    renderResults: function () {
      return createEl(Results, {
        allQuestionsAnswered: this.allQuestionsAnswered
      });
    },

    allQuestionsAnswered: function () {
      return false;
      // return this.identityQuestionAnswered() &&
      //        this.residencyQuestionAnswered() &&
      //        this.incomeQuestionAnswered() &&
      //        this.citizenshipQuestionAnswered()
    },

    onClickStateId: function (event) {
      this.setState({ hasStateId: event.target.checked });
    },

    onClickBirthCertificate: function (event) {
      this.setState({ hasBirthCertificate: event.target.checked });
    },

    onClickSocialSecurity: function (event) {
      this.setState({ hasSocialSecurity: event.target.checked });
    },

  });
})();
