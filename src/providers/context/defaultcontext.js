import { getFromStorage } from "../../utils/sessionstorage";
import { LOCALES } from "../i18n/locales";

export default {
  siteLang: getFromStorage("siteLang") || LOCALES.ENGLISH,
  name: "Maksym",
};
