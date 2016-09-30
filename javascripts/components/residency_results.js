(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;
  var createEl = React.createElement.bind(React);

  window.shared.ResidencyResults = React.createClass({

    propTypes: {
      renting: React.PropTypes.bool.isRequired,
      ownsHome: React.PropTypes.bool.isRequired,
      stayingInShelter: React.PropTypes.bool.isRequired,
      stayingWithFamilyOrFriends: React.PropTypes.bool.isRequired,
    },

    render: function () {
      return null;
    },

  });
})();
