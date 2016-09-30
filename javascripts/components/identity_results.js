(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;
  var createEl = React.createElement.bind(React);

  window.shared.IdentityResults = React.createClass({

    propTypes: {
      hasStateId: React.PropTypes.bool.isRequired,
      hasBirthCertificate: React.PropTypes.bool.isRequired,
      hasSocialSecurityCard: React.PropTypes.bool.isRequired,
    },

    render: function () {
      if (this.props.hasStateId) {
        return this.renderWithStateId();
      } else {
        return this.renderWithNoStateId();
      };
    },

    renderWithStateId: function () {
      return dom.div({},
        dom.span({}, 'You will need to bring your State ID.'),
        createEl(ReactTooltip, { id: 'state-id-explanation' }),
        this.renderStateIdTooltip()
      );
    },

    renderWithNoStateId: function () {
      if (this.props.hasBirthCertificate && this.props.hasSocialSecurityCard) {
        return dom.p({}, 'You will need to bring your Birth Certificate and/or Social Security Card.');
      } else if (this.props.hasBirthCertificate) {
        return dom.p({}, 'You will need to bring your Birth Certificate.');
      } else if (this.props.hasSocialSecurityCard) {
        return dom.p({}, 'You will need to bring your Social Security Card');
      } else {
        return dom.div({},
          dom.p({}, 'You will need to bring one of the documents from this list:'),
          dom.ul({},
            dom.li({}, 'State ID'),
            dom.li({}, 'Health Benefits Identification Card'),
            dom.li({}, 'School Photo ID'),
            dom.li({}, 'U.S. Military Card'),
            dom.li({}, 'Voter Registration Card'),
            dom.li({}, 'Birth Certificate'),
            dom.li({}, 'Social Security Card ')
          )
        );
      };
    },

    renderStateIdTooltip: function () {
      return dom.span({
        'data-for': 'state-id-explanation',
        'data-tip': 'This verifies your residency and identity.',
        'style': {
          color: '#0645AD',
          fontSize: '12px',
          cursor: 'pointer'
        },
      }, '\u00a0 (?)');
    },

  });
})();
