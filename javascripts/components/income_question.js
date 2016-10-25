(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;

  window.shared.IncomeQuestion = React.createClass({

    propTypes: {
      onClickIncomeCheckbox: React.PropTypes.func.isRequired,
      onClickNoIncome: React.PropTypes.func.isRequired,
      userSubmittedData: React.PropTypes.object.isRequired,
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
          checked: this.props.userSubmittedData.employed,
          id: 'employed'
         }),
        dom.label({ htmlFor: 'employed' }, 'Employment (in the past 60 days)'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'incomeQuestion',
          onClick: this.props.onClickIncomeCheckbox,
          data: 'unemploymentBenefits',
          id: 'unemploymentBenefits',
          checked: this.props.userSubmittedData.unemploymentBenefits
        }),
        dom.label({ htmlFor: 'unemploymentBenefits' }, 'Unemployment Benefits'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'incomeQuestion',
          onClick: this.props.onClickIncomeCheckbox,
          data: 'retirementBenefits',
          id: 'retirementBenefits',
          checked: this.props.userSubmittedData.retirementBenefits
        }),
        dom.label({ htmlFor: 'retirementBenefits' }, 'Retirement (SSI)'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'incomeQuestion',
          onClick: this.props.onClickIncomeCheckbox,
          data: 'selfEmployed',
          id: 'selfEmployed',
          checked: this.props.userSubmittedData.selfEmployed
        }),
        dom.label({ htmlFor: 'selfEmployed' }, 'Self-Employment'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'incomeQuestion',
          onClick: this.props.onClickIncomeCheckbox,
          data: 'disabilityBenefits',
          id: 'disabilityBenefits',
          checked: this.props.userSubmittedData.disabilityBenefits
        }),
        dom.label({ htmlFor: 'disabilityBenefits' }, 'Disability Benefits'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'incomeQuestion',
          onClick: this.props.onClickIncomeCheckbox,
          data: 'childSupport',
          id: 'childSupport',
          checked: this.props.userSubmittedData.childSupport
        }),
        dom.label({ htmlFor: 'childSupport' }, 'Child Support'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'incomeQuestion',
          onClick: this.props.onClickIncomeCheckbox,
          data: 'rentalIncome',
          id: 'rentalIncome',
          checked: this.props.userSubmittedData.rentalIncome
        }),
        dom.label({ htmlFor: 'rentalIncome' }, 'Rental Income'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'incomeQuestion',
          onClick: this.props.onClickNoIncome,
          checked: this.props.userSubmittedData.noneOfTheAboveIncome,
          id: 'noneOfTheAboveIncome',
        }),
        dom.label({ htmlFor: 'noneOfTheAboveIncome' }, 'None of the Above'),
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
