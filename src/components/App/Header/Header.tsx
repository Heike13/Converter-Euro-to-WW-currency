import Toggler from './Toggler/Toggler';
import './style.scss';

type HeaderProps = {
  isOpen: boolean;
  toggleList: () => void;
  base: number | undefined;
  setBaseAmount: React.Dispatch<React.SetStateAction<number | undefined>>;
};

function Header({ isOpen, toggleList, base, setBaseAmount }: HeaderProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBaseAmount(Number(event.target.value));
  };

  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>
      <div className="header-base">
        <input type="number" value={base} onChange={handleChange} />
        euro
      </div>

      <Toggler isOpen={isOpen} toggleList={toggleList} />
    </header>
  );
}

export default Header;
