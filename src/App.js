import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className='App'>
      <select name='' id='' onChange={(e) => changeLanguage(e.target.value)}>
        <option value='en'>English</option>
        <option value='fr'>Francais</option>
      </select>
      <h1>{t("hello")}</h1>
      <h1>{t("world")}</h1>
    </div>
  );
}

export default App;
