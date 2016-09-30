(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;
  var createEl = React.createElement.bind(React);
  var Questions = window.shared.Questions;
  var Results = window.shared.Results;

  window.shared.Screener = React.createClass({

    getInitialState: function () {
      return {
        userSubmittedData: {
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
          isCitizen: false,
        }
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
        onClickYesCitizen: this.onClickYesCitizen,
        onClickNoCitizen: this.onClickNoCitizen,
        onClickLivingSituation: this.onClickLivingSituation,
      });
    },

    renderResults: function () {
      return createEl(Results, {
        allQuestionsAnswered: this.allQuestionsAnswered,
        userSubmittedData: this.state.userSubmittedData,
      });
    },

    allQuestionsAnswered: function () {
      return this.identityQuestionAnswered() &&
             this.residencyQuestionAnswered() &&
             this.incomeQuestionAnswered() &&
             this.citizenshipQuestionAnswered()
    },

    identityQuestionAnswered: function () {
      return $('input[name="identityQuestion"]').get().map(function(checkbox) {
        return checkbox.checked;
      }).reduce(function(a, b) { return (a || b); }, false);
    },

    residencyQuestionAnswered: function () {
      return $('input[name="residencyQuestion"]').get().map(function(checkbox) {
        return checkbox.checked;
      }).reduce(function(a, b) { return (a || b); }, false);
    },

    incomeQuestionAnswered: function () {
      return $('input[name="incomeQuestion"]').get().map(function(checkbox) {
        return checkbox.checked;
      }).reduce(function(a, b) { return (a || b); }, false);
    },

    citizenshipQuestionAnswered: function () {
      return $('input[name="citizenshipQuestion"]').get().map(function(checkbox) {
        return checkbox.checked;
      }).reduce(function(a, b) { return (a || b); }, false);
    },

    onClickCheckbox: function (event) {
      var dataField = event.target.getAttribute('data');
      var userSubmittedData = this.state.userSubmittedData;

      userSubmittedData[dataField] = event.target.checked;
      this.setState({ userSubmittedData: userSubmittedData });
    },

    onClickYesCitizen: function () {
      var userSubmittedData = this.state.userSubmittedData;
      userSubmittedData['isCitizen'] = true;
      this.setState({ userSubmittedData: userSubmittedData });
    },

    onClickNoCitizen: function () {
      var userSubmittedData = this.state.userSubmittedData;
      userSubmittedData['isCitizen'] = false;
      this.setState({ userSubmittedData: userSubmittedData });
    },

    onClickLivingSituation: function (event) {
      var dataField = event.target.getAttribute('data');
      var userSubmittedData = this.state.userSubmittedData;

      userSubmittedData['renting'] = false;
      userSubmittedData['ownsHome'] = false;
      userSubmittedData['stayingInShelter'] = false;
      userSubmittedData['stayingWithFamilyOrFriends'] = false;
      userSubmittedData[dataField] = event.target.checked;
      this.setState({ userSubmittedData: userSubmittedData });
    }

  });
})();
