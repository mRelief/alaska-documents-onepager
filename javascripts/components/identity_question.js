(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;

  window.shared.IdentityQuestion = React.createClass({

    propTypes: {
      onClickIdentityCheckbox: React.PropTypes.func.isRequired,
      onClickNoneOfTheAboveIdentityDocs: React.PropTypes.func.isRequired,
      userSubmittedData: React.PropTypes.object.isRequired,
    },

    render: function () {
      return dom.section({
          name: 'identityQuestion',
          className: this.sectionClassName()
        },
        dom.p({ className: 'question' }, 'Which identity documents do you have easy access to?'),
        dom.input({
          type: 'checkbox',
          name: 'identityQuestion',
          onClick: this.props.onClickIdentityCheckbox,
          data: 'hasStateId',
          checked: this.props.userSubmittedData.hasStateId
        }),
        dom.label({}, 'State I.D.'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'identityQuestion',
          onClick: this.props.onClickIdentityCheckbox,
          data: 'hasBirthCertificate',
          checked: this.props.userSubmittedData.hasBirthCertificate
        }),
        dom.label({}, 'Birth Certificate'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'identityQuestion',
          onClick: this.props.onClickIdentityCheckbox,
          data: 'hasSocialSecurityCard',
          checked: this.props.userSubmittedData.hasSocialSecurityCard
        }),
        dom.label({}, 'Social Security Card'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'identityQuestion',
          onClick: this.props.onClickNoneOfTheAboveIdentityDocs,
          checked: this.props.userSubmittedData.noneOfTheAboveIdentity
        }),
        dom.label({}, 'None of the Above'),
        dom.br({})
      );
    },

    sectionClassName() {
      if (this.answered()) {
        return 'answered';
      } else {
        return 'unanswered'
      };
    },

    answered: function () {
      var data = this.props.userSubmittedData;

      return (
        data.hasStateId ||
        data.hasBirthCertificate ||
        data.hasSocialSecurityCard ||
        data.noneOfTheAboveIdentity
      );
    },

  });

})();
