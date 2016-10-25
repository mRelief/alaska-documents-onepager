(function() {
  window.shared || (window.shared = {});
  var dom = React.DOM;

  window.shared.NonCitizenOptions = React.createClass({

    propTypes: {
      onClickCheckbox: React.PropTypes.func.isRequired,
      userSubmittedData: React.PropTypes.func.isRequired,
    },

    render: function () {
      if (this.props.userSubmittedData.allCitizens) return null;

      return dom.section({ name: 'additionalCitizenshipQuestion' },
        dom.p({ className: 'question' },
          dom.span({},
            'Which of the following citizenship categories describe the members of your household?'
          ),
          dom.br({}),
          dom.br({}),
          dom.span({}, '(You can select more than one.)'),
          dom.br({}),
          dom.br({})
        ),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'parolee',
          checked: (this.props.userSubmittedData.parolee)
        }),
        dom.label({}, 'Parolee'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'traffickingVictim',
          checked: (this.props.userSubmittedData.traffickingVictim)
        }),
        dom.label({}, 'Victims Of Trafficking'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'americanIndianBornInCanada',
          checked: (this.props.userSubmittedData.americanIndianBornInCanada)
        }),
        dom.label({}, 'American Indian Born In Canada'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'conditionalEntrant',
          checked: (this.props.userSubmittedData.conditionalEntrant)
        }),
        dom.label({}, 'Conditional Entrant'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'deportationWithheld',
          checked: (this.props.userSubmittedData.deportationWithheld)
        }),
        dom.label({}, 'Deportation Withheld'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'cubanOrHaitianEntrant',
          checked: (this.props.userSubmittedData.cubanOrHaitianEntrant)
        }),
        dom.label({}, 'Cuban Or Haitian Entrant'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'military',
          checked: (this.props.userSubmittedData.military)
        }),
        dom.label({}, 'U.S. Military Veteran, Active Duty Military'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'specialImmigrant',
          checked: (this.props.userSubmittedData.specialImmigrant)
        }),
        dom.label({}, 'Special Immigrant from Iraq or Afghanistan'),
        dom.br({}),
        dom.input({
          type: 'checkbox',
          name: 'additionalCitizenshipQuestion',
          onClick: this.props.onClickCheckbox,
          data: 'batteredSpouseOrChild',
          checked: (this.props.userSubmittedData.batteredSpouseOrChild)
        }),
        dom.label({}, 'Battered Spouse or Child of U.S. Citizen or Permanent Legal Resident'),
        dom.br({})
      );
    },

  });

})();
