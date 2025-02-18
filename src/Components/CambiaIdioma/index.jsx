import React, { useEffect } from 'react';
import './styles.css';

function LanguageSelector() {

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    };

    if (!window.google || !window.google.translate) {
      addGoogleTranslateScript();
    }
  }, []);

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    const googleTranslateElement = document.querySelector('.goog-te-combo');
    if (googleTranslateElement) {
      googleTranslateElement.value = language;
      googleTranslateElement.dispatchEvent(new Event('change'));
    }
  };

  return (
    <select onChange={handleLanguageChange} defaultValue="es" className="select-language">
      <option value="es" className='opc-select-language'>ES</option>
      <option value="en" className='opc-select-language'>EN</option>
      <option value="pt" className='opc-select-language'>PT</option>
    </select>
  );
}

export default LanguageSelector;
