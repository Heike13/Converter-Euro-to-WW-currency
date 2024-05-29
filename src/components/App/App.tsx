import { useEffect, useState } from 'react';

import Currencies from './Currencies/Currencies';
import Header from './Header/Header';
import Result from './Result/Result';
import Likes from './Likes/Likes';

import { Currency } from '../../@types';

import './App.scss';

function App() {
  const [baseAmount, setBaseAmount] = useState<number | undefined>(1);
  const [isOpen, setIsOpen] = useState(true);

  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [currency, setCurrency] = useState<Currency | null>(null);

  // Fetch API
  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const symbolsResponse = await fetch(
          'https://api.frankfurter.app/currencies'
        );
        const symbols = await symbolsResponse.json();

        const ratesResponse = await fetch(
          'https://api.frankfurter.app/latest?from=EUR'
        );
        const { rates } = await ratesResponse.json();

        // Build an array with datas from API
        const data: Currency[] = Object.keys(symbols).map((code) => ({
          code,
          name: symbols[code],
          rate: rates[code],
        }));
        setCurrencies(data);
        setCurrency(data[0]);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
    fetchCurrencies();
  }, []);

  //  Change document title when currency is selected
  useEffect(() => {
    if (currency) {
      document.title = `Convert to ${currency.name}`;
    } else {
      document.title = `Converter`;
    }
  }, [currency]);

  const toggleList = () => {
    setIsOpen((current) => !current);
  };

  return (
    <>
      <div className={isOpen ? 'app is-open' : 'app'}>
        <Header
          isOpen={isOpen}
          toggleList={toggleList}
          base={baseAmount}
          setBaseAmount={setBaseAmount}
        />

        <div className="main-wrapper">
          {isOpen && (
            <Currencies currencies={currencies} setCurrency={setCurrency} />
          )}
        </div>

        <Result base={baseAmount} currency={currency} />
      </div>

      <Likes />
    </>
  );
}

export default App;
