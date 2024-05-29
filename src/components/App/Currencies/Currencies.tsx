import { useState } from 'react';
import { Currency } from '../../../@types';

import './style.scss';

type CurrenciesProps = {
  currencies: Currency[];
  setCurrency: React.Dispatch<React.SetStateAction<Currency | null>>;
};

function Currencies({ currencies, setCurrency }: CurrenciesProps) {
  const [search, setSearch] = useState('');

  const filteredCurrencies = currencies.filter((currency) => {
    return currency.name.toLowerCase().includes(search.trim().toLowerCase());
  });

  const handleClick = (currency: Currency) => () => {
    setCurrency(currency);
  };

  const listItems = filteredCurrencies.map((currency) => (
    <li key={currency.name} className="currencies-item">
      <div
        onClick={handleClick(currency)}
        onKeyDown={handleClick(currency)}
        role="button"
        tabIndex={0}
      >
        {currency.name}
      </div>
    </li>
  ));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <main className="currencies">
      <input
        type="search"
        className="currencies-search"
        placeholder="Search a currency…"
        aria-label="Search a currency"
        value={search}
        onChange={handleChange}
      />

      <ul className="currencies-list">{listItems}</ul>
    </main>
  );
}

export default Currencies;
