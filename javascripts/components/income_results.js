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
      var documents = [];

      if (this.props.employed) { documents.push(this.incomeTypesToDocuments()['employed']) };
      if (this.props.selfEmployed) { documents.push(this.incomeTypesToDocuments()['selfEmployed']) };
      if (this.props.rentalIncome) { documents.push(this.incomeTypesToDocuments()['rentalIncome']) };

      return dom.div({},
        dom.br({}),
        dom.p({}, 'You will need these documents to verify your income:'),
        dom.br({}),
        dom.ul({},
          documents.map(function (doc) { return dom.li({}, doc); })
        )
      );
    },

    renderDocumentsThatMayBeEVerified: function () {
      return null;
    },

    incomeTypesToDocuments: function () {
      return {
        'employed': 'Pay Stubs for the Past 30 Days, *OR* a Statement from Your Employer as to Wages',
        'selfEmployed': 'Self-Employment Bookkeeping Records',
        'rentalIncome': 'Bank Statements',
      };
    }

  });
})();
