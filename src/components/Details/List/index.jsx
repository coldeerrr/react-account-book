import { useState } from 'react'
import './index.css'
import BillItem from './BillItem'
import { transDate } from '@/utils/functions'

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

    // 处理原数组, 把时间戳转为时间
    list.map(listObj => listObj.bills[0].date = transDate(listObj.bills[0].date * 1));

    // 按时间分类, 构建新数组
    const mapDate = function (list) {
        let newList = [];
        list.forEach((item, i) => {
            let index = -1;
            let alreadyExist = newList.some((newItem, j) => {
                if (item.bills[0].date == newItem.date) {
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

    // 生成新数组
    const newList = mapDate(list);

    return (
        <div className='billlist'>
            {
                newList.map((item, index) => {
                    return <BillItem key={item.date} item={item}/>
                })
            }
        </div>
    )
}

export default List