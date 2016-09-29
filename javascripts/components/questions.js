(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;

  window.shared.Questions = React.createClass({

    propTypes: {
      allQuestionsAnswered: React.PropTypes.bool.isRequired,
      onClickStateId: React.PropTypes.func.isRequired,
      onClickBirthCertificate: React.PropTypes.func.isRequired,
      onClickSocialSecurity: React.PropTypes.func.isRequired,
    },

    render: function () {
      return dom.div({ className: 'column' },
        this.renderIdentitySection(),
        this.renderResidencySection(),
        this.renderIncomeSection(),
        this.renderCitizenshipSection()
      );
    },

    renderIdentitySection: function () {
      return dom.section({},
        dom.h3({}, 'Identity'),
        dom.p({}, 'Check the ones you have easy access to:'),
        dom.br({}),
        dom.input({ type: 'checkbox' }),
        dom.label({
          onClick: this.props.onClickStateId
        }, 'State I.D.'),
        dom.br({}),
        dom.input({ type: 'checkbox' }),
        dom.label({
          onClick: this.props.onClickBirthCertificate
        }, 'Birth Certificate'),
        dom.br({}),
        dom.input({ type: 'checkbox' }),
        dom.label({
          onClick: this.props.onClickSocialSecurity
        }, 'Social Security Card'),
        dom.br({})
      );
    },

    renderResidencySection: function () {
      return dom.section({},
        dom.h3({}, 'Residency'),
        dom.input({ type: 'radio' }),
        dom.label({}, 'Rent'),
        dom.br({}),
        dom.input({ type: 'radio' }),
        dom.label({}, 'Own Home'),
        dom.br({}),
        dom.input({ type: 'radio' }),
        dom.label({}, 'Shelter'),
        dom.br({}),
        dom.input({ type: 'radio' }),
        dom.label({}, 'Staying With Family or Friends')
      );
    },

    renderIncomeSection: function () {
      return dom.section({},
        dom.h3({}, 'Income'),
        dom.p({}, 'Which of the following sources of income do you receive?'),
        dom.br({}),
        dom.input( { type: 'checkbox' }),
        dom.label({}, 'Employment'),
        dom.br({}),
        dom.input( { type: 'checkbox' }),
        dom.label({}, 'Unemployment Benefits'),
        dom.br({}),
        dom.input( { type: 'checkbox' }),
        dom.label({}, 'Retirement (SSI)'),
        dom.br({}),
        dom.input( { type: 'checkbox' }),
        dom.label({}, 'Self-Employment'),
        dom.br({}),
        dom.input( { type: 'checkbox' }),
        dom.label({}, 'Disability Benefits'),
        dom.br({}),
        dom.input( { type: 'checkbox' }),
        dom.label({}, 'Child Support'),
        dom.br({}),
        dom.input( { type: 'checkbox' }),
        dom.label({}, 'Rental Income'),
        dom.br({}),
        dom.input( { type: 'checkbox' }),
        dom.label({}, 'None of the Above'),
        dom.br({})
      );
    },

    renderCitizenshipSection: function () {
      return dom.section({},
        dom.h3({}, 'Citizenship'),
        dom.p({}, 'Is everyone in your household a U.S. citizen?'),
        dom.br({}),
        dom.input({ type: 'radio' }),
        dom.label({}, 'Yes'),
        dom.br({}),
        dom.input({ type: 'radio' }),
        dom.label({}, 'No'),
        dom.br({})
      );
    },

  });
})();
