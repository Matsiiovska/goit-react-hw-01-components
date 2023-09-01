import PropTypes from 'prop-types';

import { ThTable, TheadTable, TbodyTable, TrTable, TransactionTable } from './TransactionHistory.module';

export const TransactionHistory = ({transactions}) => {
    return (
        <TransactionTable>
            <TheadTable>
                <TrTable>
                    <ThTable>Type</ThTable>
                    <ThTable>Amount</ThTable>
                    <ThTable>Currency</ThTable>
                </TrTable>
            </TheadTable>
            <TbodyTable>
                {transactions.map(({ id, type, amount, currency }) => {
                    return (<TrTable key={id}>
                            <ThTable>{type}</ThTable>
                            <ThTable>{amount}</ThTable>
                            <ThTable>{currency}</ThTable>
                        </TrTable>)  
                    })
                }
            </TbodyTable>
        </TransactionTable>  
    );
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape(
        {
          type: PropTypes.string,
          amount: PropTypes.number,
          currency: PropTypes.string
        }
    )) 
}