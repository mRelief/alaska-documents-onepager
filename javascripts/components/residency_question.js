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
          data: 'renting'
        }),
        dom.label({}, 'Renting'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'residencyQuestion',
          onClick: this.props.onClickLivingSituation,
          data: 'ownsHome'
        }),
        dom.label({}, 'Own Home'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'residencyQuestion',
          onClick: this.props.onClickLivingSituation,
          data: 'stayingInShelter'
        }),
        dom.label({}, 'Staying in Shelter'),
        dom.br({}),
        dom.input({
          type: 'radio',
          name: 'residencyQuestion',
          onClick: this.props.onClickLivingSituation,
          data: 'stayingWithFamilyOrFriends'
        }),
        dom.label({}, 'Staying With Family or Friends'),
        dom.br({})
      );
    },

    sectionClassName() {
      if (this.answered()) return 'answered';
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