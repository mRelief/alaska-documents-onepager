(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;
  var createEl = React.createElement.bind(React);
  var Questions = window.shared.Questions;
  var Results = window.shared.Results;

  window.shared.Screener = React.createClass({

    getInitialState: function () {
      return {
        allQuestionsAnswered: false,
        hasStateId: false,
        hasBirthCertificate: false,
        hasSocialSecurity: false,
      }
    },

    render: function () {
      return dom.div({},
        this.renderQuestions(),
        this.renderResults()
      );
    },

    renderQuestions: function () {
      return createEl(Questions, {
        onClickStateId: this.onClickStateId,
        onClickBirthCertificate: this.onClickBirthCertificate,
        onClickSocialSecurity: this.onClickSocialSecurity,
      });
    },

    renderResults: function () {
      return createEl(Results, {
        allQuestionsAnswered: this.state.allQuestionsAnswered
      });
    },

    onClickStateId: function (event) {
      this.setState({ hasStateId: event.target.checked });
    },

    onClickBirthCertificate: function (event) {
      this.setState({ hasBirthCertificate: event.target.checked });
    },

    onClickSocialSecurity: function (event) {
      this.setState({ hasSocialSecurity: event.target.checked });
    },

  });
})();
