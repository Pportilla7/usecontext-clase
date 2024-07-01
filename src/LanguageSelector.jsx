import { useLanguage } from './LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <label>Select Language:</label>
      <select value={language} onChange={handleChangeLanguage}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
