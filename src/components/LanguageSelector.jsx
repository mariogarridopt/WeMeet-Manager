import React, { useEffect, useState } from "react";
import i18n from "../i18n";

export default function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, []);


  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    setCurrentLanguage(selectedLanguage);
  };

  return (
    <div className="language-selector">
      <select className="form-select" onChange={changeLanguage} value={currentLanguage}>
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </div>
  );
}
