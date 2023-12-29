import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import { ELangs, languages } from '../Locales/LanguagesConstants';

export const TranslateContext = createContext<{
  t: (key: string) => string;
  setLang: Dispatch<SetStateAction<ELangs>>;
  lang: ELangs;
}>(null!);

export const tKeys = {
  to_graphiql: 'to_graphiql',
  home: 'home',
  signIn: 'signIn',
  signUp: 'signUp',
  ask_for: 'ask_for',
  get_results: 'get_results',
  get_started: 'get_started',
  a_query_lng: 'a_query_lng',
  a_query_lang_text: 'a_query_lang_text',
  a_query_lang_text_2: 'a_query_lang_text_2',
  about_team: 'about_team',
  tania_text: 'tania_text',
  anna_text: 'anna_text',
  julia_text: 'julia_text',
  linkedIn: 'linkedIn',
  gitHub: 'gitHub',
  about_course: 'about_course',
  about_course_text: 'about_course_text',
  about_course_text_2: 'about_course_text_2',
  joinIn: 'joinIn',
  email: 'email',
  password: 'password',
  have_an_account: 'have_an_account',
  name: 'name',
  password_again: 'password_again',
  registered: 'registered',
  request: 'request',
  response: 'response',
  schemaInfo: 'schemaInfo',
  docs: 'docs',
  nameRequired: 'nameRequired',
  nameMatches: 'nameMatches',
  emailRequired: 'emailRequired',
  emailInvalid: 'emailInvalid',
  passwordRequired: 'passwordRequired',
  passwordMinCharacters: 'passwordMinCharacters',
  passwordOneLowerCase: 'passwordOneLowerCase',
  passwordOneCapital: 'passwordOneCapital',
  passwordOneDigit: 'passwordOneDigit',
  passwordOneSpecial: 'passwordOneSpecial',
  oops: 'oops',
  notFound: 'notFound',
  goBackPrevious: 'goBackPrevious',
  goBack: 'goBack',
  contacts: 'contacts',
  tania: 'tania',
  anna: 'anna',
  julia: 'julia',
  to_graphiql_docs: 'to_graphiql_docs',
  copyright_2023: 'copyright_2023',
} as const;

export const isValidTKey = (
  candidate: string
): candidate is keyof typeof tKeys => {
  return candidate in tKeys;
};

export const TranslateContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [lang, setLang] = useState(ELangs.en);

  const t = useCallback(
    (key: string) => {
      if (isValidTKey(key)) {
        return languages[lang][key];
      }
      throw new Error('Attempt to use invalid tKey');
    },
    [lang]
  );

  return (
    <TranslateContext.Provider value={{ t, setLang, lang }}>
      {children}
    </TranslateContext.Provider>
  );
};
TranslateContextProvider.displayName = 'TranslateContextProvider';
