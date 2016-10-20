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

          // Citizenship data
          allCitizens: true,              // All family members are citizens
          someButNotAllCitizens: false,   // Some but not all family members are citizens
          undocumented: false,
          legalPermanentResident: false,
          refugee: false,
          asylee: false,
          parolee: false,
          traffickingVictim: false,
          americanIndianBornInCanada: false,
          conditionalEntrant: false,
          cubanOrHaitianEntrant: false,
          deportationWithheld: false,
          military: false,
          batterSpouseOrChild: false,
        }
      };
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
        onClickYesAllCitizens: this.onClickYesAllCitizens,
        onClickNoAllCitizens: this.onClickNoAllCitizens,
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
      return this.questionsAnswered('identityQuestion') &&
             this.questionsAnswered('incomeQuestion') &&
             this.questionsAnswered('citizenshipQuestion') &&
             this.residencyQuestionAnswered() &&
             this.additionalCitizenshipQuestionAnswered()
    },

   questionsAnswered: function (inputName) {
      var inputSelector = 'input[name=' + '"' + inputName + '"]';

      return $(inputSelector).get().map(function(checkbox) {
        return checkbox.checked;
      }).reduce(function(a, b) { return (a || b); }, false);
    },

    residencyQuestionAnswered: function () {
      if (this.renderResidencySection() === false) return true;   // Skip validation if we don't
                                                                  // render this section.
      return this.questionsAnswered('residencyQuestion');
    },

    additionalCitizenshipQuestionAnswered: function () {
      if (this.state.userSubmittedData.allCitizens === true) return true;   // Skip validation if we don't
                                                                          // render this section.
      return this.questionsAnswered('additionalCitizenshipQuestion');
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

    onClickYesAllCitizens: function () {
      var userSubmittedData = this.state.userSubmittedData;
      userSubmittedData['allCitizens'] = true;
      this.setState({ userSubmittedData: userSubmittedData });
    },

    onClickNoAllCitizens: function () {
      var userSubmittedData = this.state.userSubmittedData;
      userSubmittedData['allCitizens'] = false;
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

    onClickNoneOfTheAboveIdentityDocs: function (event) {
      var userSubmittedData = this.state.userSubmittedData;
      var noneOfTheAboveChecked = event.target.checked;

      userSubmittedData['hasStateId'] = false;
      userSubmittedData['hasBirthCertificate'] = false;
      userSubmittedData['hasSocialSecurityCard'] = false;
      userSubmittedData['noneOfTheAboveIdentity'] = noneOfTheAboveChecked;

      this.setState({ userSubmittedData: userSubmittedData });
    },

    renderResidencySection: function () {
      var userSubmittedData = this.state.userSubmittedData;
      var identityQuestionAnswered = this.questionsAnswered('identityQuestion');

      return (identityQuestionAnswered && !userSubmittedData.hasStateId);
    },

  });
})();
