
import PropTypes from 'prop-types';

// import './style.css';

const Amount = ({ change, amount, description }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (x{change})</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>

  );
};

Amount.propTypes = {
  change: PropTypes.number.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


export default Amount;