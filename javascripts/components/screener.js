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
        hasSocialSecurityCard: false,
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
      console.log(this.state);
      return dom.div({},
        this.renderQuestions(),
        this.renderResults()
      );
    },

    renderQuestions: function () {
      return createEl(Questions, {
        onClickCheckbox: this.onClickCheckbox,
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

    onClickCheckbox: function (event) {
      var dataField = event.target.getAttribute('data');

      var updateObject = {};
      updateObject[dataField] = event.target.checked;

      this.setState(updateObject);
    }

  });
})();
