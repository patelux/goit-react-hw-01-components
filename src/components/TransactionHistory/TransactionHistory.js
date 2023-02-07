import PropTypes from 'prop-types';
import css from './Transaction.module.css'

export function TransactionHistory({ items }) {
    return (
      <table className={css.transactionHistory}>
        <thead className={css.tableHead}>
          <tr tableHeadclassName={css.tableLine}>
            <th className={css.tableColumn}>Type</th>
            <th className={css.tableColumn}>Amount</th>
            <th className={css.tableColumn}>Currency</th>
          </tr>
        </thead>
  
        <tbody className={css.tableBody}>
          {items.map(item => (
            <tr className={css.tableLine} key={item.id}>
              <td className={css.tableColumnType}>{item.type}</td>
              <td className={css.tableColumn}>{item.amount}</td>
              <td className={css.tableColumn}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

TransactionHistory.propTypes = { 
    items: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
    )
};