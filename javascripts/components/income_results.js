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
        'employed': dom.span({},
          dom.span({}, 'Either pay stubs for the past 30 Days (2-3 pay stubs), '),
          dom.span({ style: { fontWeight: 'bold' } }, 'OR '),
          dom.a({
            href: 'http://dpaweb.hss.state.ak.us/e-forms/pdf/gen155.pdf',
            target: '_blank',
            rel: 'noopener'
          }, 'Form GEN155'),
          dom.span({}, ' if you don\'t have pay stubs, '),
          dom.span({ style: { fontWeight: 'bold'} } , 'OR '),
          dom.span({},
            'a written statement from your employer that includes hours worked and hourly rate of wages'
          )
        ),
        'selfEmployed': dom.span({},
          dom.span({},
            'Spreadsheets, ledgers, or notebooks of your expenses, income, and/or tips ' +
            '(you can use this '
          ),
          dom.a({
            href: 'http://dpaweb.hss.state.ak.us/e-forms/pdf/gen156.pdf',
            target: '_blank',
            rel: 'noopener'
          }, 'Self-Employment Business and/or Tip Ledger'),
          dom.span({}, ')')
        ),
        'rentalIncome': 'Bank Statements',
        'childSupport': 'Written Letter from Partner or State Agency',
        'unemploymentBenefits': 'Award Letter for Unemployment Benefits',
        'disabilityBenefits': 'Award letter for Disability',
        'retirementBenefits': 'Award Letter for Social Security (SSI)',
      };
    },

  });
})();
