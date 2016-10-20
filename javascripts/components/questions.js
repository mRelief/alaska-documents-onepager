(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;

  window.shared.Questions = React.createClass({

    propTypes: {
      allQuestionsAnswered: React.PropTypes.func.isRequired,
      renderResidencySection: React.PropTypes.func.isRequired,
      onClickIdentityCheckbox: React.PropTypes.func.isRequired,
      onClickCheckbox: React.PropTypes.func.isRequired,
      onClickIncomeCheckbox: React.PropTypes.func.isRequired,
      onClickYesAllCitizens: React.PropTypes.func.isRequired,
      onClickNoAllCitizens: React.PropTypes.func.isRequired,
      onClickLivingSituation: React.PropTypes.func.isRequired,
      onClickNoIncome: React.PropTypes.func.isRequired,
      onClickNoneOfTheAboveIdentityDocs: React.PropTypes.func.isRequired,
      userSubmittedData: React.PropTypes.object.isRequired,
    },

    getInitialState: function () {
      return {
        showMoreResidencyOptions: false,
        showMoreCitizenshipOptions: false,
      };
    },

    render: function () {
      return dom.div({ className: this.divClassName(), id: 'questions-column' },
        this.renderIdentitySection(),
        this.renderResidencySection(),
        this.renderIncomeSection(),
        this.renderCitizenshipSection(),
        this.renderNonCitizenOptions()
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
          onClick: this.props.onClickIdentityCheckbox,
          data: 'hasStateId',
          checked: this.props.userSubmittedData.hasStateId
        }),
        dom.label({}, 'State I.D.'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'identityQuestion',
          onClick: this.props.onClickIdentityCheckbox,
          data: 'hasBirthCertificate',
          checked: this.props.userSubmittedData.hasBirthCertificate
        }),
        dom.label({}, 'Birth Certificate'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'identityQuestion',
          onClick: this.props.onClickIdentityCheckbox,
          data: 'hasSocialSecurityCard',
          checked: this.props.userSubmittedData.hasSocialSecurityCard
        }),
        dom.label({}, 'Social Security Card'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'identityQuestion',
          onClick: this.props.onClickNoneOfTheAboveIdentityDocs,
          checked: this.props.userSubmittedData.noneOfTheAboveIdentity
        }),
        dom.label({}, 'None of the Above'),
        dom.br({})
      );
    },

    renderResidencySection: function () {
      if (this.props.renderResidencySection() === false) return null;

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
        dom.br({})
      );
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

    renderCitizenshipSection: function () {
      return dom.section({},
        dom.p({ className: 'question' }, 'Is everyone in your household a U.S. citizen?'),
        dom.input({
          type: 'radio',
          name: 'citizenshipQuestion',
          onClick: this.props.onClickYesAllCitizens,
        }),
        dom.label({}, 'Yes'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'citizenshipQuestion',
          onClick: this.props.onClickNoAllCitizens,
        }),
        dom.label({}, 'No'),
        dom.br({})
      );
    },

    renderNonCitizenOptions: function () {
      if (this.props.userSubmittedData.allCitizens === true) return null;

      return dom.section({},
        dom.p({ className: 'question' },
          dom.span({},
            'Which of the following citizenship categories describe the members of your household?'
          ),
          dom.br({}),
          dom.br({}),
          dom.span({}, '(You can select more than one.)'),
          dom.br({})
        ),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'legalPermanentResident'
        }),
        dom.label({}, 'Legal Permanent Resident'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'undocumented'
        }),
        dom.label({}, 'Undocumented'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'isCitizen'
        }),
        dom.label({}, 'U.S. Citizen'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'refugee'
        }),
        dom.label({}, 'Refugee'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'asylee'
        }),
        dom.label({}, 'Asylee'),
        dom.br({}),
        this.renderAdditionalCitizenshipStatuses(),
        this.renderShowMoreCitizenshipStatusesButton()
      )
    },

    renderShowMoreCitizenshipStatusesButton: function () {
      if (this.state.showMoreCitizenshipOptions) return true;

      return dom.a({
        style: {
          fontStyle: 'italic'
        },
        onClick: this.toggleAdditionalCitizenshipStatuses
      }, 'Show More Options');
    },

    toggleAdditionalCitizenshipStatuses: function () {
      this.setState({ showMoreCitizenshipOptions: true });
    },

    renderAdditionalCitizenshipStatuses: function () {
      if (this.state.showMoreCitizenshipOptions === false) return null;

      return dom.span({},
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'parolee',
          checked: (this.props.userSubmittedData.parolee)
        }),
        dom.label({}, 'Parolee'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'traffickingVictim',
          checked: (this.props.userSubmittedData.traffickingVictim)
        }),
        dom.label({}, 'Victims Of Trafficking'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'americanIndianBornInCanada',
          checked: (this.props.userSubmittedData.americanIndianBornInCanada)
        }),
        dom.label({}, 'American Indian Born In Canada'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'conditionalEntrant',
          checked: (this.props.userSubmittedData.conditionalEntrant)
        }),
        dom.label({}, 'Conditional Entrant'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'deportationWithheld',
          checked: (this.props.userSubmittedData.deportationWithheld)
        }),
        dom.label({}, 'Deportation Withheld'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'cubanOrHaitianEntrant',
          checked: (this.props.userSubmittedData.cubanOrHaitianEntrant)
        }),
        dom.label({}, 'Cuban Or Haitian Entrant'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'military',
          checked: (this.props.userSubmittedData.military)
        }),
        dom.label({}, 'U.S. Military Veteran, Active Duty Military'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'batteredSpouseOrChild',
          checked: (this.props.userSubmittedData.batteredSpouseOrChild)
        }),
        dom.label({}, 'Battered Spouse or Child of U.S. Citizen or Permanent Legal Resident'),
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
