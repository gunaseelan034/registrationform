import React, { Fragment } from "react";
import { IntlProvider } from "react-intl";

import { LOCALES } from "./locales";

const Provider = ({ children, locale = LOCALES.ENGLISH }) => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
);

export default Provider;
