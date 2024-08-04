import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

// Set the key-value pairs for the different languages you want to support.
const i18n = new I18n({
  en: {
    auth: {
      signin: "Sign in",
      appleSignin: "Sign in with apple",
      enterEmail: "Enter your email address to sign into your tulip account",
      or: "Or",
      digit: "6-digit code",
      enterCode: "A verification code has been sent to ",
      verify: "verify",
    },
    onboarding: {
      step1: {
        title: "What's your name?",
        desc: "What would you like us to call you? You can choose your real name or a name you've always dreamed of having.",
        button: "Next",
      },
      step2: {
        title: "What's your gender?",
        desc: "How do you define yourself ? you can skip this question if you don't feel comfortable to let us know.",
        button: "Next",
        skip: "Skip the question",
        male: "Male",
        female: "Female",
      },
      step3: {
        title: "Link your bank account",
        desc: "We need your banking information to analyze and provide insights into your finances.",
        button: "Connect your account",
      },
      step4: {
        title: "Account succesfully linked",
        desc: "You successfully passed the onboarding process ! we setup your account, it can takes few seconds.",
      },
    },
  },
  fr: {
    auth: {
      signin: "Se connecter",
      appleSignin: "Se connecter avec apple",
      enterEmail:
        "Entrez votre adresse e-mail pour vous connecter à votre compte tulip",
      or: "Ou",
      digit: "Code à 6 chiffres",
      enterCode: "Un code de vérification a été envoyé à ",
      verify: "Vérifier",
    },
    onboarding: {
      step1: {
        title: "Quel est ton nom ?",
        desc: "Comment souhaites-tu que nous t'appelions ? Tu peux choisir ton vrai nom ou un nom dont tu as toujours rêvé.",
        button: "Suivant",
      },
      step2: {
        title: "Quel est ton genre ?",
        desc: "Comment te définis-tu ? Tu peux sauter cette question si tu ne te sens pas à l'aise de nous le faire savoir.",
        button: "Suivant",
        skip: "Passer la question",
        male: "Homme",
        female: "Femme",
      },
      step3: {
        title: "Connecte ton compte bancaire",
        desc: "Nous avons besoin de tes informations bancaires pour analyser et fournir des aperçus de tes finances.",
        button: "Connecter votre compte",
      },
      step4: {
        title: "Compte lié avec succès",
        desc: "Tu as réussi le processus d'onboarding ! Nous configurons ton compte, cela peut prendre quelques secondes.",
      },
    },
  },
});

// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode || "en";

export { i18n };
