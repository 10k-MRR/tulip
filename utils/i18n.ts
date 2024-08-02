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
        title: "What's yout name?",
        desc: "What would you like us to call you? You can choose your real name or a name you've always dreamed of having.",
        button: "Next",
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
    },
  },
});

// Set the locale once at the beginning of your app.
i18n.locale = getLocales()[0].languageCode || "en";

export { i18n };
