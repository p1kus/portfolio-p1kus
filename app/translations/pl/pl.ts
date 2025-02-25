import type { TranslationType } from "../types";



export const pl: TranslationType = {
  home: {

    navbar: {
      location: "Lublin, Polska",
      home: 'Strona główna',
      demos: 'Projekty',
      about: 'O mnie',
      contact: 'Kontakt',
    },
    header: {
      content: "Cześć! Jestem fanem technologii odkrywającym różne dziedziny IT, od tworzenia aplikacji internetowych, przez sieci, do rozwiązań w chmurze. Posiadam doświadczenie ze sprzętem, w konfigurowaniu komputerów jak i w utrzymaniu. Dobrze posługuje się programami Adobe, specjalizuję się w tworzeniu oraz edycji grafik marketingowych w Adobe Photoshop.",
      projButton: "Zobacz moje projekty",
    },
    profiles: {
      heading: "Profile",
      devProfileH: "Dev",
      socialMediaH: "Media społecznościowe",
      certH: "Certyfikaty"

    },
    toolkit: {

      sectionHeading: "Toolkit",
      devHeading: "Programowanie & IT",
      creativeHeading: "Programy graficzne i inne",
      frontendSectionH: "Frontend Development",
      backendSectionH: "Backend i skrypty",
      systemSectionH: "Systemy i narzędzia",
      graphicSectionH: "Projektowanie graficzne",
      officeSectionH: "Narzędzia biurowe"
    },
    contact: {
      heading: "Porozmawiajmy",
      nameValue: "Twoje imię",
      emailValue: "Twój email",
      messageValue: "Twoja wiadomość",
      submitButton: "Skontaktuj się ze mną!"

    }
  },
  demos: {
    heading: "Moje projekty",
    dev: {
      chatspace: {
        desc: "Chat czasu rzeczywistego stworzony za pomocą Socket.IO, aby nauczyć się pracy z Web Socketami.",
        techStackHeading: "Technologie",
        featuresHeading: "Kluczowe funkcje",
        featuresContent: ["Web Sockets", "Identyfikacja użytkownika przez Socket", "Walidacja nazw użytkowników, z obsługą duplikatów", "Wsparcie kolorów nazw użytkownika (Ala. Twitch)", "Lista użytkowników online (Odświeżana na połączeniu/rozłączeniu użytkownika)", "Wskaźnik pisania (User is typing...)", "Powiadomienia o dołączeniu, rozłączeniu użytkownika"]
      },
      perfectColor: {
        desc: "Proste narzędzie do określenia kontrastu według wytycznych dostępności WCAG pomiędzy elementami tła a pierwszoplanowymi.",
        techStackHeading: "Technologie",
        featuresHeading: "Kluczowe funkcje",
        featuresContent: ["Losowa generacja kolorów zgodnych z wytycznymi dostępności WCAG", "Wspiera systemową paletę kolorów"]
      },
      portfolio: {
        desc: "Moje obecne portfolio.",
        techStackHeading: "Technologie",
        featuresHeading: "Kluczowe funkcje",
        featuresContent: ["Tryb nocny obsługiwany poprzez React Context i LocalStorage", "Dwujęzykowość poprzez React Context", "React Router v7 routing", "Obsługa formularza kontaktowego przez Web3Forms"]
      },
      uxpToolkit: {
        desc: "Plugin do automatyzacji powtarzalnych operacji w Adobe Photoshop w celu ułatwienia swojej pracy. Ten projekt nauczył mnie sporo o pisaniu skryptów w Adobe UXP i dokumentacji Adobe.",
        techStackHeading: "Technologie",
        featuresHeading: "Kluczowe funkcje",
        featuresContent: ["Szablon Akcji do prostej implementacji powtarzalnych czynności w pluginach.", "GS-Watermark-RMTool pozwalające na automatyzacje operacji usuwania znaku wodnego z dużej ilości obrazów", "UXP-SavingTool pozwalające na szybkie zapisywanie do różnych formatów"]

      },
      wooCart: {
        desc: "Mój pierwszy projekt komercyjny, polegający na zbudowaniu formularza za pomocą JavaScript dla sklepu opartego na WooCommerce, razem z pluginem PHP obsługującym dane z formularza.",
        techStackHeading: "Technologie",
        featuresHeading: "Kluczowe funkcje",
        featuresContent: ["Obsługa błędów", "Integracja z WooCommerce API", "Implementacja własnego formularza"]
      }




    },
    graphic: {
      hoodies: {
        heading: "Projekt bluzy",
        desc: "Wizualizacje bluz stworzone w Adobe Photoshop. Logotypy i napisy wymagały odpowiedniego zwymiarowania w Adobe Illustrator oraz eksportu w jak najwyższej jakości."
      },
      logoEffect: {
        heading: "Animacja logotypu",
        desc: "Animacja logotypu stworzona w Adobe After Effects."
      },
      automotiveVis: {
        heading: "Wizualizacja samochodowa",
        desc: "Kilka wizualizacji stworzonych dla detailera samochodowego, które przedstawiają różne poziomy oferowanych usług. Stworzone w Adobe Photoshop."
      },
      watermark: {
        heading: "Usuwanie znaku wodnego",
        desc: "Zdjęcia na stronie internetowej wymagały podmiany logo, zadanie polegało na jak najdokładniejszym usunięciu starego znaku wodnego wraz z logo na ~30 zdjęciach."
      },
      stamp: {
        heading: "Projekt pieczątki",
        desc: "Projekt pieczątki stworzony od podstaw jako podglądowy oraz do druku, w negatywie i odwrócony, przygotowany i wyeksportowany do druku."
      }

    },
    creative: {
      fragmovie: {
        heading: "CS2 Fragmovie",
        desc: "CS2 Oldschool fragmovie "
      },
    },

  },
}

