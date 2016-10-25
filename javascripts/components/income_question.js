(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;

  window.shared.IncomeQuestion = React.createClass({

    propTypes: {
      onClickIncomeCheckbox: React.PropTypes.func.isRequired,
      userSubmittedData: React.PropTypes.func.isRequired,
      onClickNoIncome: React.PropTypes.func.isRequired,
    },

    render: function () {
      return dom.section({
          name: 'incomeQuestion',
          className: this.sectionClassName()
        },
        dom.p({ className: 'question' }, 'Which of the following sources of income do you receive?'),
        dom.input({
          type: 'checkbox',
          name: 'incomeQuestion',
          onClick: this.props.onClickIncomeCheckbox,
          data: 'employed',
          checked: this.props.userSubmittedData.employed
         }),
        dom.label({}, 'Employment (in the past 60 days)'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'incomeQuestion',
          onClick: this.props.onClickIncomeCheckbox,
          data: 'unemploymentBenefits',
          checked: this.props.userSubmittedData.unemploymentBenefits
        }),
        dom.label({}, 'Unemployment Benefits'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'incomeQuestion',
          onClick: this.props.onClickIncomeCheckbox,
          data: 'retirementBenefits',
          checked: this.props.userSubmittedData.retirementBenefits
        }),
        dom.label({}, 'Retirement (SSI)'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'incomeQuestion',
          onClick: this.props.onClickIncomeCheckbox,
          data: 'selfEmployed',
          checked: this.props.userSubmittedData.selfEmployed
        }),
        dom.label({}, 'Self-Employment'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'incomeQuestion',
          onClick: this.props.onClickIncomeCheckbox,
          data: 'disabilityBenefits',
          checked: this.props.userSubmittedData.disabilityBenefits
        }),
        dom.label({}, 'Disability Benefits'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'incomeQuestion',
          onClick: this.props.onClickIncomeCheckbox,
          data: 'childSupport',
          checked: this.props.userSubmittedData.childSupport
        }),
        dom.label({}, 'Child Support'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'incomeQuestion',
          onClick: this.props.onClickIncomeCheckbox,
          data: 'rentalIncome',
          checked: this.props.userSubmittedData.rentalIncome
        }),
        dom.label({}, 'Rental Income'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'incomeQuestion',
          onClick: this.props.onClickNoIncome,
          checked: this.props.userSubmittedData.noneOfTheAboveIncome,
        }),
        dom.label({}, 'None of the Above'),
        dom.br({})
      );
    },

    sectionClassName() {
      if (this.answered()) {
        return 'answered';
      } else {
        return 'unanswered'
      };
    },

    answered: function () {
      var data = this.props.userSubmittedData;

      return (
        data.employed ||
        data.unemploymentBenefits ||
        data.retirementBenefits ||
        data.selfEmployed ||
        data.disabilityBenefits ||
        data.childSupport ||
        data.rentalIncome ||
        data.noneOfTheAboveIncome
      );
    },

  });

})();
