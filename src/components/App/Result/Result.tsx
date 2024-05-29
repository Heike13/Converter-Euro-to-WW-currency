import { Currency } from '../../../@types';

import './style.scss';

type ResultProps = {
  base: number | undefined;
  currency: Currency | null;
};

function Result({ base, currency }: ResultProps) {
  const result = base && currency ? (base * currency.rate).toFixed(2) : '–';

  return (
    <footer className="result">
      <span className="result-value">{result}</span>
      <span className="result-currency">{currency?.name || '–'}</span>
    </footer>
  );
}

export default Result;
