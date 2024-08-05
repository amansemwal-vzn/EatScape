import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">Choose from a wide range of dishes crafted with top-quality ingredients. Whether you're in the mood for a quick bite, a hearty meal, or something gourmet, our menu has something to satisfy every craving. Explore and enjoy our seasonal specials and classic favorites.</p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-item" key={index}>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt='' />
                <p>{item.menu_name}</p>
        </div>
        )
        })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
