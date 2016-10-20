(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;
  var createEl = React.createElement.bind(React);

  window.shared.CitizenshipResults = React.createClass({

    propTypes: {
      isCitizen: React.PropTypes.bool.isRequired,
    },

    render: function () {
      if (this.props.isCitizen) {
        return this.renderForCitizen();
      } else {
        return this.renderForNonCitizen();
      };
    },

    renderForCitizen: function () {
      return dom.div({},
        dom.br({}),
        dom.p({ className: 'result' },
          'You will need ONE of the following documents to verify your citizenship status:'
        ),
        dom.br({}),
        dom.ul({},
          dom.li({}, 'Birth Certificate'),
          dom.li({}, 'Certificate of Citizenship or Naturalization'),
          dom.li({}, 'U.S. Passport')
        )
      )
    },

    renderForNonCitizen: function () {
      return null;
    },

  });
})();
