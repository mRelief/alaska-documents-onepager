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
      var documents = this.documents();
      if (documents.length === 0) return null;

      return dom.div({},
        dom.br({}),
        dom.p({ className: 'result' }, 'You will need these documents to verify your income:'),
        dom.br({}),
        dom.ul({},
          documents.map(function (document) { return dom.li({}, document); })
        )
      );
    },

    documents: function () {
      var documents = [];
      var lookup = this.incomeTypesToDocuments();

      if (this.props.employed) { documents.push(lookup['employed']) };
      if (this.props.selfEmployed) { documents.push(lookup['selfEmployed']) };
      if (this.props.rentalIncome) { documents.push(lookup['rentalIncome']) };
      if (this.props.unemploymentBenefits) { documents.push(lookup['unemploymentBenefits']) };
      if (this.props.retirementBenefits) { documents.push(lookup['retirementBenefits']) };
      if (this.props.disabilityBenefits) { documents.push(lookup['disabilityBenefits']) };
      if (this.props.childSupport) { documents.push(lookup['childSupport']) };

      return documents;
    },

    incomeTypesToDocuments: function () {
      return {
        'employed': 'Pay Stubs for the Past 30 Days (2-3 Pay Stubs) or Form GEN155',
        'selfEmployed': 'Self-Employment Form: Spreadsheet, Handwritten ledgers, and/or notebooks',
        'rentalIncome': 'Bank Statements',
        'childSupport': 'Child Support Order or Copies of Checks from Former Partner',
        'unemploymentBenefits': 'Award Letter for Unemployment Benefits',
        'disabilityBenefits': 'Award letter for Disability',
        'retirementBenefits': 'Award Letter for Social Security (SSI)',
      };
    },

  });
})();
