export interface TranslationType {
  home: {
    navbar: {
      location: string,
      home: string,
      demos: string,
      about: string,
      contact: string
    },
    header: {
      content: string,
      projButton: string,
    }
    profiles: {
      heading: string,
      devProfileH: string,
      socialMediaH: string,
      certH: string,
    }
    toolkit: {
      sectionHeading: string,
      devHeading: string,
      creativeHeading: string,
      frontendSectionH: string,
      backendSectionH: string,
      systemSectionH: string,
      graphicSectionH: string,
      officeSectionH: string
    }
    contact: {
      heading: string,
      nameValue: string,
      emailValue: string,
      messageValue: string,
      submitButton: string
    }
  },
  demos: {
    heading: string,
    dev: {
      chatspace: {
        desc: string,
        techStackHeading: string,
        techStackContent?: string[],
        featuresHeading: string,
        featuresContent: string[],
      },
      perfectColor: {
        desc: string,
        techStackHeading: string,
        techStackContent?: string[],
        featuresHeading: string,
        featuresContent: string[],

      },
      portfolio: {
        desc: string,
        techStackHeading: string,
        techStackContent?: string[],
        featuresHeading: string,
        featuresContent: string[],
      },
      uxpToolkit: {
        desc: string,
        techStackHeading: string,
        techStackContent?: string[],
        featuresHeading: string,
        featuresContent: string[],
      },
      wooCart: {
        desc: string,
        techStackHeading: string,
        techStackContent?: string[],
        featuresHeading: string,
        featuresContent: string[],
      }

    },
    graphic: {
      hoodies: {
        heading: string,
        desc: string,
      },
      logoEffect: {
        heading: string,
        desc: string,
      },
      automotiveVis: {
        heading: string,
        desc: string,
      },
      watermark: {
        heading: string,
        desc: string,
      }
      stamp: {
        heading: string,
        desc: string,
      },


    },
    creative: {
      fragmovie: {
        heading: string,
        desc: string,
      },

    },
  },


}
