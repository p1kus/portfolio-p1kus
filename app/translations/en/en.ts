import type { TranslationType } from "../types";



export const en: TranslationType = {
  home: {
    navbar: {
      location: "Lublin, Poland",
      home: 'Home',
      demos: 'Demos',
      about: 'About',
      contact: 'Contact',
    },
    header: {

      content: "Tech enthusiast exploring different fields of IT, from Web Development and Networking to Cloud Computing. Experienced in building and configuring computers, as well as maintaining hardware. Proficient in Adobe software, specializing in marketing graphics creation and editing.",
      projButton: "Take a look at my work",

    },
    profiles: {
      heading: "Profiles",
      devProfileH: "Dev",
      socialMediaH: "Social Media",
      certH: "Certificates"

    },
    toolkit: {
      sectionHeading: "Toolkit",
      devHeading: "Development & IT Skills",
      creativeHeading: "Graphic Tools & Other",
      frontendSectionH: "Frontend Development",
      backendSectionH: "Backend & Scripting",
      systemSectionH: "System & Tooling",
      graphicSectionH: "Graphic Design",
      officeSectionH: "Office tools"
    },
    contact: {
      heading: "Let's talk",
      nameValue: "Your name",
      emailValue: "Your email",
      messageValue: "Your message",
      submitButton: "Get in touch!"
    }
  },
  demos: {
    heading: "My work",
    dev: {
      chatspace: {
        desc: "Real-time chat application created with Socket.IO to learn about Web Sockets.",
        techStackHeading: "Tech Stack",
        featuresHeading: "Key features",
        featuresContent: ["Web Sockets", "User identification by socket", "Username validation, with a check for duplicates", "Usernames support with colors (twitch like)", "Online user list (refreshed on Socket connection/disconnect)", "Typing indicators (User is typing...)", "Connect/Disconnect alerts"]
      },
      perfectColor: {
        desc: "Simple tool for checking WCAG Contrast accessibility between foreground and background elements",
        techStackHeading: "Tech Stack",
        featuresHeading: "Key features",
        featuresContent: ["Randomly generates text/background color that complies with the WCAG requirements", "Supports system color palette picker"]
      },
      portfolio: {
        desc: "My current portfolio.",
        techStackHeading: "Tech Stack",
        featuresHeading: "Key features",
        featuresContent: ["Dark/Light theming via React Context and LocalStorage", "Bilingual support via React Context", "React Router v7 routing", "Web3Forms for Contact Form"]
      },
      uxpToolkit: {
        desc: "Automation Plugins created for Adobe Photoshop in order to make my life easier with a few projects. This project taught me a lot about Adobe UXP Scripting and Adobe Documentation.",
        techStackHeading: "Tech Stack",
        featuresHeading: "Key features",
        featuresContent: ["Actions Template for implementing Actions from Photoshop into the plugin", "GS-Watermark-RMTool for automating removing a watermark from a large number of images in just a few clicks", "UXP-SavingTool for quicksaving into different extensions"]

      },
      wooCart: {
        desc: "My first commercial project to build a JavaScript form for a WooCommerce based store, with a PHP plugin to handle the form data.",
        techStackHeading: "Tech Stack",
        featuresHeading: "Key features",
        featuresContent: ["Error Handling", "WooCommerce API integration", "Custom Form implementation"]
      }




    },
    graphic: {
      hoodies: {
        heading: "Hoodie mockups",
        desc: "Hoodie mockups created in Adobe Photoshop. Logos and Text required correct resizing in Adobe Illustrator and high quality export."
      },
      logoEffect: {
        heading: "Logo Animation",
        desc: "Stroke logo animation created in Adobe After Effects."
      },
      automotiveVis: {
        heading: "Automotive visualizations",
        desc: "Few visualizations made for a car detailer, showcasing different tiers of sercice. Created in Adobe Photoshop."
      },
      watermark: {
        heading: "Watermark removal",
        desc: "Images on website needed to be updated with a new company logo, which required me to remove the old watermarked logo from the jpgs."
      },
      stamp: {
        heading: "Stamp design",
        desc: "Stamp design made from scratch, preparted and exported for printing."
      }

    },
    creative: {
      fragmovie: {
        heading: "CS2 Fragmovie",
        desc: "CS2 Oldschool fragmovie "
      },
    },

  }

}
