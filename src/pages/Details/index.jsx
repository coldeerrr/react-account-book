import './index.css'
import Header from '@/components/Details/Header'
import List from '@/components/Details/List'
import MyLink from '@/components/Details/MyLink'
import Add from './Add'
import { Routes, Route } from 'react-router-dom'

const Details = props => {
  return (
    <div>
      <Header />
      <List />
      <MyLink to='add'>{['add']}</MyLink>
      <Routes>
        <Route path='add' element={<Add />} />
      </Routes>
    </div>
  )
}
export default Details