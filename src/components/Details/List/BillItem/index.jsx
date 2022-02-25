import './index.css'
import { typeMap } from '@/utils/constant'

const BillItem = props => {
    const [bill] = props.item.bills
    const { type_id: id, amount } = bill
    return (
        <li>
            <span className={`type_${id}`}></span>
            <h1>{typeMap[id].type}</h1>
            <em>{amount}</em>
        </li>
    )
}

export default BillItem