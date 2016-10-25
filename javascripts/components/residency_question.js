(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;

  window.shared.ResidencyQuestion = React.createClass({

    propTypes: {
      userSubmittedData: React.PropTypes.object.isRequired,
      onClickLivingSituation: React.PropTypes.func.isRequired,
    },

    render: function () {
      if (!this.props.userSubmittedData.noneOfTheAboveIdentity) return null;

      return dom.section({
          name: 'residencyQuestion',
          className: this.sectionClassName()
        },
        dom.p({ className: 'question' }, 'Which best describes your living situation?'),
        dom.input({
          type: 'radio',
          name: 'residencyQuestion',
          onClick: this.props.onClickLivingSituation,
          checked: this.props.userSubmittedData.renting,
          data: 'renting',
          id: 'renting'
        }),
        dom.label({ htmlFor: 'renting' }, 'Renting'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'residencyQuestion',
          onClick: this.props.onClickLivingSituation,
          checked: this.props.userSubmittedData.ownsHome,
          data: 'ownsHome',
          id: 'ownsHome'
        }),
        dom.label({ htmlFor: 'ownsHome' }, 'Own Home'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'residencyQuestion',
          onClick: this.props.onClickLivingSituation,
          checked: this.props.userSubmittedData.stayingInShelter,
          data: 'stayingInShelter',
          id: 'stayingInShelter'
        }),
        dom.label({ htmlFor: 'stayingInShelter' }, 'Staying in Shelter'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'residencyQuestion',
          onClick: this.props.onClickLivingSituation,
          checked: this.props.userSubmittedData.stayingWithFamilyOrFriends,
          data: 'stayingWithFamilyOrFriends',
          id: 'stayingWithFamilyOrFriends'
        }),
        dom.label({ htmlFor: 'stayingWithFamilyOrFriends' }, 'Staying With Family or Friends'),
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
        data.renting ||
        data.ownsHome ||
        data.stayingInShelter ||
        data.stayingWithFamilyOrFriends
      );
    },

  });

})();
