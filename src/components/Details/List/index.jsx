import { useState } from 'react'
import './index.css'
import BillItem from './BillItem'

const List = props => {
    const [list, setList] = useState([
        {
            bills: [
                {
                    amount: "25.00",
                    date: "1623390740000",
                    id: 911,
                    pay_type: 1,
                    remark: "",
                    type_id: 1,
                    type_name: "餐饮"
                }
            ],
            date: '2021-06-11'
        },
        {
            bills: [
                {
                    amount: "25.00",
                    date: "1623390740000",
                    id: 2,
                    pay_type: 1,
                    remark: "",
                    type_id: 1,
                    type_name: "餐饮"
                }
            ],
            date: '2021-06-12'
        }
    ]);
    return (
        <div>
            <ul className="billlist">
                {
                    list.map((item, index) => {
                        const [ bill ] = item.bills
                        return <BillItem key={bill.id} item={item}/>
                    })
                }
            </ul>
        </div>
    )
}

export default List