import { useI18next } from "gatsby-plugin-react-i18next";
import i18next from 'i18next';
import { clients } from "./clients";
import { contactUsListData } from "./contactUsListData";
import { ourContributorsData } from "./ourContributorsData";
import { ourTeamListData } from "./ourTeamListData";
import { portfolio } from "./portfolio";
import { ourServices } from "./services";
import { acordeonServices } from "./services_and_workflow/services";
import { pricesAndServicesTableData } from "./pricesAndServicesTableData";
import { calculationOptionsData } from "./pricesCalculatorData";
import { socialMediaListData } from "./socialMediaListData";

const getOrDefault = (obj, i18n) => {
    const { language, defaultLanguage } = i18n;
    return obj[language] || obj[defaultLanguage];
}

export const useActiveLanguage = () => {
  const obj = useI18next();
  return obj.language;
}

export const useClients = () => {
    const i18n = useI18next();
    return getOrDefault(clients, i18n);
}

export const useContactInformation = () => {
    const i18n = useI18next();
    return getOrDefault(contactUsListData, i18n);
}

export const useContributorsData = () => {
    const i18n = useI18next();
    return getOrDefault(ourContributorsData, i18n);
}

export const useOurTeamListData = () => {
    const i18n = useI18next();
    return getOrDefault(ourTeamListData, i18n);
}

export const usePricesAndServicesTableData = () => {
    const i18n = useI18next();
    return getOrDefault(pricesAndServicesTableData, i18n);
}

export const useCalculationOptionsData = () => {
    const i18n = useI18next();
    return getOrDefault(calculationOptionsData, i18n);
}

export const useSocialMediaListData = () => {
    const i18n = useI18next();
    return getOrDefault(socialMediaListData, i18n);
}

export const usePortfolio = () => {
    const i18n = useI18next();
    return getOrDefault(portfolio, i18n);
}

export const useServices = () => {
  const i18n = useI18next();
  return getOrDefault(ourServices, i18n);
}

export const UseAccordionServices = () => {
  const i18n = useI18next();
  return getOrDefault(acordeonServices, i18n);
}