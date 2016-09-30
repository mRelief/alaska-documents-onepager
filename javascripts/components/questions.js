(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;

  window.shared.Questions = React.createClass({

    propTypes: {
      onClickCheckbox: React.PropTypes.func.isRequired,
      onClickIncomeCheckbox: React.PropTypes.func.isRequired,
      onClickYesCitizen: React.PropTypes.func.isRequired,
      onClickNoCitizen: React.PropTypes.func.isRequired,
      onClickLivingSituation: React.PropTypes.func.isRequired,
      onClickNoIncome: React.PropTypes.func.isRequired,
      userSubmittedData: React.PropTypes.object.isRequired,
    },

    render: function () {
      return dom.div({ className: 'column' },
        this.renderIdentitySection(),
        this.renderResidencySection(),
        this.renderIncomeSection(),
        this.renderCitizenshipSection()
      );
    },

    renderIdentitySection: function () {
      return dom.section({},
        dom.h3({}, 'Identity'),
        dom.p({}, 'Check the ones you have easy access to:'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'identityQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'hasStateId'
        }),
        dom.label({}, 'State I.D.'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'identityQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'hasBirthCertificate'
        }),
        dom.label({}, 'Birth Certificate'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'identityQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'hasSocialSecurityCard'
        }),
        dom.label({}, 'Social Security Card'),
        dom.br({}),
        dom.a({ className: 'show-more-options' }, 'Show more options'),
        dom.br({})
      );
    },

    renderResidencySection: function () {
      return dom.section({},
        dom.h3({}, 'Residency'),
        dom.input({
          type: 'radio',
          name: 'residencyQuestion',
          onClick: this.props.onClickLivingSituation,
          data: 'renting'
        }),
        dom.label({}, 'Renting'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'residencyQuestion',
          onClick: this.props.onClickLivingSituation,
          data: 'ownsHome'
        }),
        dom.label({}, 'Own Home'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'residencyQuestion',
          onClick: this.props.onClickLivingSituation,
          data: 'stayingInShelter'
        }),
        dom.label({}, 'Staying in Shelter'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'residencyQuestion',
          onClick: this.props.onClickLivingSituation,
          data: 'stayingWithFamilyOrFriends'
        }),
        dom.label({}, 'Staying With Family or Friends')
      );
    },

    renderIncomeSection: function () {
      return dom.section({},
        dom.h3({}, 'Income'),
        dom.p({}, 'Which of the following sources of income do you receive?'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'incomeQuestion',
          onClick: this.props.onClickIncomeCheckbox,
          data: 'employed',
          checked: this.props.userSubmittedData.employed
         }),
        dom.label({}, 'Employment'),
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

    renderCitizenshipSection: function () {
      return dom.section({},
        dom.h3({}, 'Citizenship'),
        dom.p({}, 'Is everyone in your household a U.S. citizen?'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'citizenshipQuestion',
          onClick: this.props.onClickYesCitizen,
        }),
        dom.label({}, 'Yes'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'citizenshipQuestion',
          onClick: this.props.onClickNoCitizen,
        }),
        dom.label({}, 'No'),
        dom.br({})
      );
    },

    noneOfTheAboveChecked: function () {
      return (!this.props.userSubmittedData.employed &&
              !this.props.userSubmittedData.unemploymentBenefits &&
              !this.props.userSubmittedData.retirementBenefits &&
              !this.props.userSubmittedData.selfEmployed &&
              !this.props.userSubmittedData.disabilityBenefits &&
              !this.props.userSubmittedData.childSupport &&
              !this.props.userSubmittedData.rentalIncome)
    },

  });
})();
