import { Route, Routes, Navigate } from 'react-router-dom'
import MyNavLink from './MyNavLink'

// 引入各个路由
import Add from '../../pages/Add'
import Chart from '../../pages/Chart'
import Community from '../../pages/Community'
import Details from '../../pages/Details'
import My from '../../pages/My'

import './index.css'

const Nav = props => {
    return (
        <div>
            <div className='nav'>
                <MyNavLink to='/details'>{['details', '明细']}</MyNavLink>
                <MyNavLink to='/chart'>{['chart', '图表']}</MyNavLink>
                <MyNavLink to='/add'>{['add', '记账']}</MyNavLink>
                <MyNavLink to='/community'>{['community', '社区']}</MyNavLink>
                <MyNavLink to='/my'>{['my', '我的']}</MyNavLink>
            </div>
            <Routes>
                <Route path='details/*' element={<Details />} />
                <Route path='chart' element={<Chart />} />
                <Route path='add' element={<Add />} />
                <Route path='community' element={<Community />} />
                <Route path='my' element={<My />} />
                <Route path='*' element={<Navigate to='details' />} />
            </Routes>
        </div>
    )
}

export default Nav