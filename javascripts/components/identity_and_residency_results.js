(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;
  var createEl = React.createElement.bind(React);

  var IdentityResults = window.shared.IdentityResults;
  var ResidencyResults = window.shared.ResidencyResults;

  window.shared.IdentityAndResidencyResults = React.createClass({

    propTypes: {
      hasStateId: React.PropTypes.bool.isRequired,
      hasBirthCertificate: React.PropTypes.bool.isRequired,
      hasSocialSecurityCard: React.PropTypes.bool.isRequired,
      renting: React.PropTypes.bool.isRequired,
      ownsHome: React.PropTypes.bool.isRequired,
      stayingInShelter: React.PropTypes.bool.isRequired,
      stayingWithFamilyOrFriends: React.PropTypes.bool.isRequired,
    },

    render: function () {
      return dom.div({},
        createEl(IdentityResults, {
          hasStateId: this.props.hasStateId,
          hasBirthCertificate: this.props.hasBirthCertificate,
          hasSocialSecurityCard: this.props.hasSocialSecurityCard,
        }),
        createEl(ResidencyResults, {
          hasStateId: this.props.hasStateId,
          renting: this.props.renting,
          ownsHome: this.props.ownsHome,
          stayingInShelter: this.props.stayingInShelter,
          stayingWithFamilyOrFriends: this.props.stayingWithFamilyOrFriends,
        })
      );
    }

  });
})();
