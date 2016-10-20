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
          'You will need ONE of the following documents for each U.S. citizen household member:'
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

    citizenshipStatusesToDocuments: function () {
      return {
        isCitizen: {
          description: 'U.S. Citizen',
          list: [
            'Birth Certificate',
            'Certificate of Citizenship or Naturalization',
            'U.S. Passport',
          ]
        },
        legalPermanentResident: {
          description: 'Legal Permanent Resident',
          list: [
            'Green Card',
            'I-94 annotated with a temporary I-551 stamp (for recent arrivals or non-citizens who have applied for a replacement Green Card)'
          ]
        },
        refugee: {
          description: 'refugee',
          list: [
            'I-94 stamped showing admission under section 207 of the INA and date of entry to the U.S.',
            'I-688B annotated 274a.12(a)(3)',
            'I-766 annotated A3',
            'I-571'
          ]
        },
        specialImmigrant: {
          description: 'Special Immigrant',
          list: [
            'I-94 or passport stamped with an "S" category',
          ]
        },
        asylee: {
          description: '',
          list: [
            'I-94 stamped showing grant of asylum under section 208 and date of entry',
            'A grant letter from the Asylum Office of the USCIS',
            'I-688B annotated 274a.12(a)(5)',
            'I-766 annotated A5',
            'Court order of an immigration judge showing asylum granted under section 208',
          ]
        },
        parolee: {
          description: '',
          list: [
            'I-94 annotated with stamp showing grant of parole under 212(d)(5) and a date showing granting of parole for at least 1 year'
          ]
        },
        traffickingVictim: {
          description: '',
          list: [
            'Letter of certification from the Office of Refugee Resettlement (ORR)  The caseworker must verify the validity of this letter and notify ORR  of the benefits for which the individual has applied by calling the toll-free trafficking verification line at 1-866-401-5510',
            'Form I-797a indicating Class T-1 Visa',
            'Form I-797a indicating T-2 (spouse), T-3 (child), T-4 (parent) or T-5 (unmarried sibling under age18 years on the date such non-citizen’s T visa application was filed), known as a Derivative Visa',
          ]
        },
        americanIndianBornInCanada: {
          description: '',
          list: [
            'Birth or baptismal certificate issued on a reservation',
            'Tribal records',
            'Letter from the Canadian Department of Indian Affairs',
            'School records',
          ]
        },
        conditionalEntrant: {
          description: '',
          list: [
            'I-94 with stamp showing admission under 203(a)(7), refugee-conditional entry',
            'I-688B annotated 274a.12(a)(3)',
            'I-766 annotated A3',
          ]
        },
        cubanOrHaitianEntrant: {
          description: '',
          list: [
            'I-94 with stamp showing parole as Cuban/Haitian Entrant under section 212(d)(5) of the INA',
            'Form I-551 with code CU6, CU7, CH6',
            'Foreign passport containing an unexpired temporary I-551 stamp with the code CU6 or CU7',
          ]
        },
        deportationWithheld: {
          description: '',
          list: [
            'Order of an immigration judge showing deportation withheld under section 243(h) and date of grant',
            'I-688B annotated 274a.12(a)(10)',
            'I-766 annotated A10',
          ]
        },
        military: {
          description: '',
          list: [
            'Green Form DD-2 marked ACTIVE',
            'A current order showing the individual is on full-time duty in the U.S. Army, Navy, Air Force, Marine Corps, or Coast Guard (Reserves are not considered active duty)',
            'DD-214 indicating honorable discharge',
            'Discharge papers indicating honorable discharge',
          ]
        },
        batterSpouseOrChild: {
          description: '',
          list: [
            'Approved or pending I-130 or I-360 petition showing a prima facie case that he or she is protected under the Violence Against Women Act, and verification that the individual responsible for the battery or cruelty is no longer living in the household of the victim.'
          ]
        },
      };
    },

  });
})();
