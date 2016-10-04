(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;

  window.shared.Questions = React.createClass({

    propTypes: {
      allQuestionsAnswered: React.PropTypes.func.isRequired,
      onClickCheckbox: React.PropTypes.func.isRequired,
      onClickIncomeCheckbox: React.PropTypes.func.isRequired,
      onClickYesCitizen: React.PropTypes.func.isRequired,
      onClickNoCitizen: React.PropTypes.func.isRequired,
      onClickLivingSituation: React.PropTypes.func.isRequired,
      onClickNoIncome: React.PropTypes.func.isRequired,
      userSubmittedData: React.PropTypes.object.isRequired,
    },

    getInitialState: function () {
      return {
        showMoreIdentityOptions: false,
        showMoreResidencyOptions: false
      };
    },

    render: function () {
      return dom.div({ className: this.divClassName(), id: 'questions-column' },
        this.renderIdentitySection(),
        this.renderResidencySection(),
        this.renderIncomeSection(),
        this.renderCitizenshipSection()
      );
    },

    divClassName: function () {
      if (this.props.allQuestionsAnswered()) {
        return 'column answered';
      } else {
        return 'column';
      };
    },

    renderIdentitySection: function () {
      return dom.section({},
        dom.p({ className: 'question' }, 'Which identity documents do you have easy access to?'),
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
        this.renderMoreIdentityOptions(),
        dom.br({})
      );
    },

    renderMoreIdentityOptions: function () {
      if (this.state.showMoreIdentityOptions) {
        return dom.div({},
          dom.input({
            type: 'checkbox',
            name: 'identityQuestion',
          }),
          dom.label({}, 'Health Benefits Identification Card'),
          dom.br({}),
          dom.input({
            type: 'checkbox',
            name: 'identityQuestion',
          }),
          dom.label({}, 'School Photo I.D.'),
          dom.br({}),
          dom.input({
            type: 'checkbox',
            name: 'identityQuestion',
          }),
          dom.label({}, 'Voter Registration Card'),
          dom.br({}),
          dom.input({
            type: 'checkbox',
            name: 'identityQuestion',
          }),
          dom.label({}, 'U.S. Military Card'),
          dom.br({}),
          dom.input({
            type: 'checkbox',
            name: 'identityQuestion',
          }),
          dom.label({}, 'None of The Above'),
          dom.br({}),
          dom.a({
            className: 'show-more-options',
            onClick: this.showMoreIdentityOptions
          }, 'Show fewer options')
        );
      } else {
        return dom.a({
          className: 'show-more-options',
          onClick: this.showMoreIdentityOptions
        }, 'Show more options');
      };
    },

    renderResidencySection: function () {
      if (this.props.userSubmittedData.hasStateId === true) return null;

      return dom.section({},
        dom.p({ className: 'question' }, 'Which best describes your living situation?'),
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
        dom.label({}, 'Staying With Family or Friends'),
        dom.br({}),
        this.renderMoreResidencyOptions(),
        dom.br({})
      );
    },

    renderMoreResidencyOptions: function () {
      if (this.state.showMoreResidencyOptions) {
        return dom.div({},
          dom.input({
            type: 'radio',
            name: 'residencyQuestion',
          }),
          dom.label({}, 'Staying in Car'),
          dom.br({}),
          dom.input({
            type: 'radio',
            name: 'residencyQuestion',
          }),
          dom.label({}, 'Staying in Motel'),
          dom.br({}),
          dom.input({
            type: 'radio',
            name: 'residencyQuestion',
          }),
          dom.label({}, 'Paying Rent In-Kind (work in exchange for rent)'),
          dom.br({}),
          dom.a({
            className: 'show-more-options',
            onClick: this.showMoreResidencyOptions
          }, 'Show fewer options')
        );
      } else {
        return dom.a({
          className: 'show-more-options',
          onClick: this.showMoreResidencyOptions
        }, 'Show more options');
      }
    },
    renderIncomeSection: function () {
      return dom.section({},
        dom.p({ className: 'question' }, 'Which of the following sources of income do you receive?'),
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
        dom.p({ className: 'question' }, 'Is everyone in your household a U.S. citizen?'),
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

    showMoreIdentityOptions: function () {
      this.setState({ showMoreIdentityOptions: !this.state.showMoreIdentityOptions });
    },

    showMoreResidencyOptions: function () {
      this.setState({ showMoreResidencyOptions: !this.state.showMoreResidencyOptions });
    }

  });
})();
