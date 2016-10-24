(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;
  var createEl = React.createElement.bind(React);

  IdentityAndResidencyResults = window.shared.IdentityAndResidencyResults;
  CitizenshipResults = window.shared.CitizenshipResults;
  IncomeResults = window.shared.IncomeResults;

  window.shared.Results = React.createClass({

    propTypes: {
      allQuestionsAnswered: React.PropTypes.func.isRequired,
      userSubmittedData: React.PropTypes.object.isRequired,
    },

    render: function () {
      return dom.div({ className: this.divClassName(), id: 'results-column' },
        this.renderSectionContent()
      );
    },

    divClassName: function () {
      if (this.props.allQuestionsAnswered()) {
        return 'column answered';
      } else {
        return 'column';
      };
    },

    renderSectionContent: function () {
      if (this.props.allQuestionsAnswered()) {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return this.renderResults();
      } else {
        return 'Please answer all questions to get your results.';
      };
    },

    renderResults: function () {
      return dom.div({},
        dom.h1({}, 'Results:'),
        dom.br({}),
        createEl(IdentityAndResidencyResults, {
          hasStateId: this.props.userSubmittedData.hasStateId,
          hasBirthCertificate: this.props.userSubmittedData.hasBirthCertificate,
          hasSocialSecurityCard: this.props.userSubmittedData.hasSocialSecurityCard,
          renting: this.props.userSubmittedData.renting,
          ownsHome: this.props.userSubmittedData.ownsHome,
          stayingInShelter: this.props.userSubmittedData.stayingInShelter,
          stayingWithFamilyOrFriends: this.props.userSubmittedData.stayingWithFamilyOrFriends,
        }),
        createEl(IncomeResults, {
          employed: this.props.userSubmittedData.employed,
          unemploymentBenefits: this.props.userSubmittedData.unemploymentBenefits,
          retirementBenefits: this.props.userSubmittedData.retirementBenefits,
          selfEmployed: this.props.userSubmittedData.selfEmployed,
          disabilityBenefits: this.props.userSubmittedData.disabilityBenefits,
          childSupport: this.props.userSubmittedData.childSupport,
          rentalIncome: this.props.userSubmittedData.rentalIncome,
        }),
        createEl(CitizenshipResults, {
          userSubmittedData: this.props.userSubmittedData,
        }),
        dom.br({}),
        this.renderReminders()
      );
    },

    renderReminders: function () {
      return dom.div({},
        dom.div({
          style: {
            fontStyle: 'italic',
            fontWeight: 'bold',
            textDecoration: 'underline',
          }
        }, 'Important reminders: '),
        dom.br({}),
        dom.ul({}, this.renderReminderList())
      );
    },

    renderReminderList: function () {
      return this.reminders().map(function (reminder) {
        return dom.div({},
          dom.li({}, reminder),
          dom.br({})
        );
      });
    },

    reminders: function () {
      var reminders = [
        'Documents must be submitted within 10 days of application submission, ' +
        'otherwise they are automatically denied.',
        'If you are unable to verify your identity or residency with documents, ' +
        'you may be able to verfiy these with a phone call to a friend.'
      ];

      if (this.props.userSubmittedData.undocumented === true) {
        reminders.push(
          'Undocumented status is not necessarily a barrier to getting assistance.'
        );
      };

      return reminders;
    },

  });
})();
