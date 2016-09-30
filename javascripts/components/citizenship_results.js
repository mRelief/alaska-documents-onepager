(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;
  var createEl = React.createElement.bind(React);

  window.shared.CitizenshipResults = React.createClass({

    propTypes: {
      isCitizen: React.PropTypes.bool.isRequired,
    },

    render: function () {
      if (this.props.isCitizen) return null;

      return dom.div({},
        dom.br({}),
        dom.p({}, 'You will need *ONE* of the following documents to verify your citizenship status:'),
        dom.br({}),
        dom.ul({},
          dom.li({}, 'Permanent Resident Card'),
          dom.li({}, 'Work Authorization Card'),
          dom.li({}, 'Affidavit of Support')
        )
      )
    },

  });
})();
