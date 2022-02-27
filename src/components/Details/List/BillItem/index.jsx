import './index.css'
import { typeMap } from '@/utils/constant'

const BillItem = props => {
    const { date, bills } = props.item
    return (
        <div>
            <h1>{date}</h1>
            <ul>
                {bills.map((bill, index) => {
                    const { id, amount, type_id, pay_type } = bill[0];
                    return <li key={id}>
                        <span className={`type_${type_id}`}></span>
                        <h3>{typeMap[type_id].type}</h3>
                        <em>{pay_type === 1 ? '-' + amount : amount}</em>
                    </li>
                })}
            </ul>
        </div>

    )
}

export default BillItem