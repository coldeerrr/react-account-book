const BillItem = props => {
    const [bill] = props.item.bills
    return (
        <li>
            <span></span>
            <h1>{bill.type_name}</h1>
            <em>{bill.amount}</em>
        </li>
    )
}

export default BillItem