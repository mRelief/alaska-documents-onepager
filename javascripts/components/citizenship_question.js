(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;

  window.shared.CitizenshipQuestion = React.createClass({

    propTypes: {
      onClickYesAllCitizens: React.PropTypes.func.isRequired,
      onClickNoAllCitizens: React.PropTypes.func.isRequired,
      answered: React.PropTypes.bool.isRequired,
    },

    render: function () {
      return dom.section({
          name: 'citizenshipQuestion',
          className: this.sectionClassName()
        },
        dom.p({ className: 'question' }, 'Is everyone in your household a U.S. citizen?'),
        dom.input({
          type: 'radio',
          name: 'citizenshipQuestion',
          onClick: this.props.onClickYesAllCitizens,
        }),
        dom.label({}, 'Yes'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'citizenshipQuestion',
          onClick: this.props.onClickNoAllCitizens,
        }),
        dom.label({}, 'No'),
        dom.br({})
      );
    },

    sectionClassName() {
      if (this.props.answered) return 'answered';
    },

  });

})();