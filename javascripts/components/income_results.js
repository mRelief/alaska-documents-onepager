(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;
  var createEl = React.createElement.bind(React);

  window.shared.IncomeResults = React.createClass({

    propTypes: {
      employed: React.PropTypes.bool.isRequired,
      unemploymentBenefits: React.PropTypes.bool.isRequired,
      retirementBenefits: React.PropTypes.bool.isRequired,
      selfEmployed: React.PropTypes.bool.isRequired,
      disabilityBenefits: React.PropTypes.bool.isRequired,
      childSupport: React.PropTypes.bool.isRequired,
      rentalIncome: React.PropTypes.bool.isRequired,
    },

    render: function () {
      return dom.div({},
        this.renderAbsolutelyRequiredDocuments(),
        this.renderDocumentsThatMayBeEVerified()
      );
    },

    renderAbsolutelyRequiredDocuments: function () {
      if (this.hasNoIncomeWithRequiredDocuments()) return null;

      var documents = [];

      if (this.props.employed) { documents.push(this.incomeTypesToDocuments()['employed']) };
      if (this.props.selfEmployed) { documents.push(this.incomeTypesToDocuments()['selfEmployed']) };
      if (this.props.rentalIncome) { documents.push(this.incomeTypesToDocuments()['rentalIncome']) };

      return dom.div({},
        dom.br({}),
        dom.p({ className: 'result' }, 'You will need these documents to verify your income:'),
        dom.br({}),
        dom.ul({},
          documents.map(function (doc) { return dom.li({}, doc); })
        )
      );
    },

    renderDocumentsThatMayBeEVerified: function () {
      if (this.hasNoAdditionalIncome()) return null;

      var documents = [];

      if (this.props.unemploymentBenefits) {
        documents.push(this.incomeTypesToDocuments()['unemploymentBenefits'])
      };

      if (this.props.retirementBenefits) {
        documents.push(this.incomeTypesToDocuments()['retirementBenefits'])
      };

      if (this.props.disabilityBenefits) {
        documents.push(this.incomeTypesToDocuments()['disabilityBenefits'])
      };

      if (this.props.childSupport) {
        documents.push(this.incomeTypesToDocuments()['childSupport'])
      };

      return dom.div({},
        dom.br({}),
        dom.p({ className: 'result' },
          'The state may be able to electronically verify this information, ' +
          'but you should bring in these documents just in case if you have them:'),
        dom.br({}),
        dom.ul({},
          documents.map(function (doc) { return dom.li({}, doc); })
        )
      );
    },

    incomeTypesToDocuments: function () {
      return {
        'employed': 'Pay Stubs for the Past 30 Days, or a Statement from Your Employer as to Wages',
        'selfEmployed': 'Self-Employment Bookkeeping Records',
        'rentalIncome': 'Bank Statements',
        'childSupport': 'Child Support Order',
        'unemploymentBenefits': 'Unemployment Benefits',
        'disabilityBenefits': 'Disability Benefits',
        'retirementBenefits': 'Retirement Benefits',
      };
    },

    hasNoIncomeWithRequiredDocuments: function () {
      return (!this.props.employed && !this.props.selfEmployed && !this.props.rentalIncome);
    },

    hasNoAdditionalIncome: function () {
      return (!this.props.childSupport &&
              !this.props.unemploymentBenefits &&
              !this.props.disabilityBenefits &&
              !this.props.retirementBenefits)
    },

  });
})();
