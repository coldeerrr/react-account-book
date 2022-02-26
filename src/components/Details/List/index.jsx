import { useState } from 'react'
import './index.css'
import BillItem from './BillItem'
// import { transDate } from '@/utils/functions'

const List = props => {
    const [list, setList] = useState([
        {
            bills: [
                {
                    amount: "25.00",
                    date: "1623390740000",
                    id: 1,
                    pay_type: 1,
                    remark: "",
                    type_id: 1,
                }
            ]
        },
        {
            bills: [
                {
                    amount: "27.00",
                    date: "1623390740000",
                    id: 2,
                    pay_type: 1,
                    remark: "",
                    type_id: 3,
                }
            ]
        },
        {
            bills: [
                {
                    amount: "5.00",
                    date: "1645883114000",
                    id: 3,
                    pay_type: 1,
                    remark: "",
                    type_id: 2,
                }
            ]
        },
    ]);
    function transDate(n) {
        const date = new Date(n);
        const Y = date.getFullYear() + '-';
        const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        return (Y + M + D);
    }
    // 处理原数组, 把时间戳转为时间
    for (let i = 0; i < list.length; i++) {
        const timeitem = transDate(list[i].bills[0].date*1);
        list[i].bills[0].date = timeitem;
    }
    console.log(list);
    const mapDate = function (list) {
        let newList = [];
        list.forEach((item, i) => {
            let index = -1;
            let alreadyExist = newList.some((newItem, j) => {
                console.log(item.bills[0].date == newItem.bills[0].date);
                if (item.bills[0].date == newItem.bills[0].date) {
                    index = j;
                    return true;
                }
            });
            if (!alreadyExist) {
                newList.push({
                    date: item.bills[0].date,
                    bills: [item.bills]
                });
            } else {
                newList[index].bills.push(item.bills)
            }
        });
        return newList;
    }
    console.log(mapDate(list));
    return (
        <div>
            <ul className="billlist">
                {
                    list.map((item, index) => {
                        const [bill] = item.bills
                        return <BillItem key={bill.id} item={item} />
                    })
                }
            </ul>
        </div>
    )
}

export default List