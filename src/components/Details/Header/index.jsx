import { Routes, Route } from 'react-router-dom'
import MyLink from './MyLink'
import Bill from '../../../pages/Details/Bill'
import Budget from '../../../pages/Details/Budget'
import Butler from '../../../pages/Details/Butler'
import Knowledge from '../../../pages/Details/Knowledge'
import Cashback from '../../../pages/Details/Cashback'
import './index.css'

const Header = props => {
    return (
        <div className='container'>
            <div className='slogan'></div>
            <div className='data in'>
                <span>收入</span>
                <p>0.00</p>
            </div>
            <div className='data out'>
                <span>支出</span>
                <p>0.00</p>
            </div>
            <div className='blank'>
                <MyLink to='bill'>{['bill', '账单']}</MyLink>
                <MyLink to='budget'>{['budget', '预算']}</MyLink>
                <MyLink to='butler'>{['butler', '资产管家']}</MyLink>
                <MyLink to='knowledge'>{['knowledge', '理财知识']}</MyLink>
                <MyLink to='cashback'>{['cashback', '购物返现']}</MyLink>
            </div>
            <Routes>
                <Route path='bill' element={<Bill />} />
                <Route path='budget' element={<Budget />} />
                <Route path='butler' element={<Butler />} />
                <Route path='knowledge' element={<Knowledge />} />
                <Route path='cashback' element={<Cashback />} />
            </Routes>
        </div>
    )
}

export default Header