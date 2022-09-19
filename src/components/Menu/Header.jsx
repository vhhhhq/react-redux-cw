import React from 'react'
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link to="/home" >Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to="/formList" >Form</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to="/" >Questions</Link>
                <Link to="/questions" >Questions</Link>
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>
  )
}

export default Header