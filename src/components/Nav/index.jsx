import { Route, Routes } from 'react-router-dom'
import MyNavLink from '../MyNavLink'

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
                <MyNavLink to='/details'>details</MyNavLink>
                <MyNavLink to='/chart'>chart</MyNavLink>
                <MyNavLink className='aa' to='/add'>add</MyNavLink>
                <MyNavLink to='/community'>community</MyNavLink>
                <MyNavLink to='/my'>my</MyNavLink>
            </div>
            <Routes>
                <Route path='details' element={<Details />} />
                <Route path='chart' element={<Chart />} />
                <Route path='add' element={<Add />} />
                <Route path='community' element={<Community />} />
                <Route path='my' element={<My />} />
            </Routes>
        </div>
    )
}

export default Nav