(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;
  var createEl = React.createElement.bind(React);

  window.shared.ResidencyResults = React.createClass({

    propTypes: {
      hasStateId: React.PropTypes.bool.isRequired,
      renting: React.PropTypes.bool.isRequired,
      ownsHome: React.PropTypes.bool.isRequired,
      stayingInShelter: React.PropTypes.bool.isRequired,
      stayingWithFamilyOrFriends: React.PropTypes.bool.isRequired,
    },

    render: function () {
      if (this.props.hasStateId) return null;

      return dom.div({},
        dom.br({}),
        dom.p({ className: 'result' }, 'You will need ONE of these documents to prove residency:'),
        dom.br({}),
        dom.ul({}, this.suggestedResidencyDocumentsList())
      );
    },

    suggestedResidencyDocuments: function () {
      var documents = [];

      if (this.props.renting) {
        documents.push('Rent Receipt', 'Rental Agreement', 'Utility Bills');
      };

      if (this.props.ownsHome) {
        documents.push('Homeowners Insurance', 'Property Tax Bill', 'Mortgage Statement', 'Utility Bills');
      };

      documents.push('Mail', 'Medical Records');

      return documents;
    },

    suggestedResidencyDocumentsList: function () {
      return this.suggestedResidencyDocuments().map(function(document) {
        return dom.li({}, document);
      });
    }

  });
})();
