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
        dom.span({ className: 'result' }, 'You will need to bring your State ID.'),
        createEl(ReactTooltip, { id: 'state-id-explanation' }),
        this.renderStateIdTooltip()
      );
    },

    renderWithNoStateId: function () {
      if (this.props.hasBirthCertificate && this.props.hasSocialSecurityCard) {
        return dom.p({ className: 'result' }, 'You will need to bring your Birth Certificate or Social Security Card.');
      } else if (this.props.hasBirthCertificate) {
        return dom.p({ className: 'result' }, 'You will need to bring your Birth Certificate.');
      } else if (this.props.hasSocialSecurityCard) {
        return dom.p({ className: 'result' }, 'You will need to bring your Social Security Card.');
      } else {
        return dom.div({},
          dom.p({ className: 'result' }, 'You will need to bring ONE of the documents from this list:'),
          dom.br({}),
          dom.ul({},
            dom.li({}, 'Health Benefits Identification Card'),
            dom.li({}, 'School Photo ID'),
            dom.li({}, 'U.S. Military Card'),
            dom.li({}, 'Voter Registration Card')
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
