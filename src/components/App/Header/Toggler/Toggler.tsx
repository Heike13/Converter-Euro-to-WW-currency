import './style.scss';

type TogglerProps = {
  isOpen: boolean;
  toggleList: () => void;
};

function Toggler({ isOpen, toggleList }: TogglerProps) {
  return (
    <div className="toggler">
      <button
        type="button"
        className={isOpen ? 'toggler-btn toggler-btn--open' : 'toggler-btn'}
        aria-label="masquer la liste des devises"
        onClick={toggleList}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  );
}

export default Toggler;
