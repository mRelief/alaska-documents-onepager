(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;
  var createEl = React.createElement.bind(React);
  var IdentityQuestion = window.shared.IdentityQuestion;
  var ResidencyQuestion = window.shared.ResidencyQuestion;
  var IncomeQuestion = window.shared.IncomeQuestion;
  var CitizenshipQuestion = window.shared.CitizenshipQuestion;
  var NonCitizenOptions = window.shared.NonCitizenOptions;

  window.shared.Questions = React.createClass({

    propTypes: {
      allQuestionsAnswered: React.PropTypes.func.isRequired,
      renderResidencySection: React.PropTypes.func.isRequired,
      onClickIdentityCheckbox: React.PropTypes.func.isRequired,
      onClickCheckbox: React.PropTypes.func.isRequired,
      onClickIncomeCheckbox: React.PropTypes.func.isRequired,
      onClickYesAllCitizens: React.PropTypes.func.isRequired,
      onClickNoAllCitizens: React.PropTypes.func.isRequired,
      answeredCitizenship: React.PropTypes.bool.isRequired,
      onClickLivingSituation: React.PropTypes.func.isRequired,
      onClickNoIncome: React.PropTypes.func.isRequired,
      onClickNoneOfTheAboveIdentityDocs: React.PropTypes.func.isRequired,
      userSubmittedData: React.PropTypes.object.isRequired,
    },

    render: function () {
      return dom.div({ className: this.divClassName(), id: 'questions-column' },
        createEl(IdentityQuestion, {
          onClickIdentityCheckbox: this.props.onClickIdentityCheckbox,
          userSubmittedData: this.props.userSubmittedData,
          onClickNoneOfTheAboveIdentityDocs: this.props.onClickNoneOfTheAboveIdentityDocs,
        }),
        createEl(ResidencyQuestion, {
          userSubmittedData: this.props.userSubmittedData,
          onClickLivingSituation: this.props.onClickLivingSituation,
        }),
        createEl(IncomeQuestion, {
          userSubmittedData: this.props.userSubmittedData,
          onClickIncomeCheckbox: this.props.onClickIncomeCheckbox,
          onClickNoIncome: this.props.onClickNoIncome,
        }),
        createEl(CitizenshipQuestion, {
          answered: this.props.answeredCitizenship,
          onClickYesAllCitizens: this.props.onClickYesAllCitizens,
          onClickNoAllCitizens: this.props.onClickNoAllCitizens,
        }),
        createEl(NonCitizenOptions, {
          onClickCheckbox: this.props.onClickCheckbox,
          userSubmittedData: this.props.userSubmittedData,
        })
      );
    },

    divClassName: function () {
      if (this.props.allQuestionsAnswered()) {
        return 'column answered';
      } else {
        return 'column';
      };
    },

  });
})();
