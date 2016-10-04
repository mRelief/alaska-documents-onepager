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
          noneOfTheAboveIdentity: false,
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
          noneOfTheAboveIncome: false,
          isCitizen: false,
        }
      }
    },

    render: function () {
      return dom.div({ id: 'parent-container' },
        this.renderQuestions(),
        this.renderResults()
      );
    },

    renderQuestions: function () {
      return createEl(Questions, {
        allQuestionsAnswered: this.allQuestionsAnswered,
        renderResidencySection: this.renderResidencySection,
        onClickCheckbox: this.onClickCheckbox,
        onClickIdentityCheckbox: this.onClickIdentityCheckbox,
        onClickIncomeCheckbox: this.onClickIncomeCheckbox,
        onClickYesCitizen: this.onClickYesCitizen,
        onClickNoCitizen: this.onClickNoCitizen,
        onClickLivingSituation: this.onClickLivingSituation,
        onClickNoIncome: this.onClickNoIncome,
        onClickNoneOfTheAboveIdentityDocs: this.onClickNoneOfTheAboveIdentityDocs,
        userSubmittedData: this.state.userSubmittedData,
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
      if (this.renderResidencySection() === false) return true;   // Skip validation if we don't
                                                                  // render this section.

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

    onClickIdentityCheckbox: function (event) {
      var dataField = event.target.getAttribute('data');
      var userSubmittedData = this.state.userSubmittedData;

      userSubmittedData[dataField] = event.target.checked;
      userSubmittedData['noneOfTheAboveIdentity'] = false;
      this.setState({ userSubmittedData: userSubmittedData });
    },

    onClickIncomeCheckbox: function (event) {
      var dataField = event.target.getAttribute('data');
      var userSubmittedData = this.state.userSubmittedData;

      userSubmittedData[dataField] = event.target.checked;
      userSubmittedData['noneOfTheAboveIncome'] = false;
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
    },

    onClickNoIncome: function () {
      var userSubmittedData = this.state.userSubmittedData;

      userSubmittedData['employed'] = false;
      userSubmittedData['unemploymentBenefits'] = false;
      userSubmittedData['retirementBenefits'] = false;
      userSubmittedData['selfEmployed'] = false;
      userSubmittedData['disabilityBenefits'] = false;
      userSubmittedData['childSupport'] = false;
      userSubmittedData['rentalIncome'] = false;
      userSubmittedData['noneOfTheAboveIncome'] = true;

      this.setState({ userSubmittedData: userSubmittedData });
    },

    onClickNoneOfTheAboveIdentityDocs: function () {
      var userSubmittedData = this.state.userSubmittedData;

      userSubmittedData['hasStateId'] = false;
      userSubmittedData['hasBirthCertificate'] = false;
      userSubmittedData['hasSocialSecurityCard'] = false;
      userSubmittedData['noneOfTheAboveIdentity'] = true;

      this.setState({ userSubmittedData: userSubmittedData });
    },

    renderResidencySection: function () {
      var userSubmittedData = this.state.userSubmittedData;
      var identityQuestionAnswered = this.identityQuestionAnswered();

      return (identityQuestionAnswered && !userSubmittedData.hasStateId);
    },

  });
})();
