import React,{useRef} from 'react'
import './Ecommerce1.css'
import Logo from './assets/logo_placeholder.jpg'
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { SlBag } from "react-icons/sl";
import model from './assets/model.png'
import useIntersection from '../../../custom hooks/UseIntersection';
import { FaShippingFast } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import Footer from './Footer';
import Product from './product';
import hoodieCategorie from './assets/Hoodies.jpg'
import CategorySection from './CategorySection';
export default function Ecommerce1() {
    const [text1 , istext1inview] = useIntersection(true)
    const [text2 , istext2inview] = useIntersection(true)
    const [button1 , isbutton1inview] = useIntersection(true)
    const [img1 , isimg1inview] = useIntersection(true)

    // Add categories before the best sellers section          ---------- Important


  return (
    <div className='Ecommerce1-container'>

        <header>
            <img src={Logo} alt='Logo-PlaceHolder'/>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Collection</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='Ecommerce1-Account'>
                <CiSearch className='Ecommerce1-Icon'/>
                <VscAccount className='Ecommerce1-Icon'/>
                <CiHeart className='Ecommerce1-Icon'/>
                <div className='Ecommerce1-Cart'>
                    <SlBag className='Ecommerce1-Icon'/>
                </div>
            </div>
        </header>

        <div className='Ecommerce1-MainSection'>
            <div className='Ecommerce1-MainSectionText'>
                <h3 ref={text1} className={`${istext1inview ? 'Ecommerce1-text1inview' : 'Ecommerce1-text1'}`}>Smart Products</h3>
                <h1 ref={text2} className={`${istext2inview ? 'Ecommerce1-text2inview' : 'Ecommerce1-text2'}`}>Summer offer <br/> 2025 Collection</h1>
                <button ref={button1} className={`${isbutton1inview ? 'Ecommerce1-button1inview' : 'Ecommerce1-button1'}`}>Shop Now</button>
            </div>
<img src={model} ref={img1} className={`${isimg1inview ? 'Ecommerce1-img1inview' : 'Ecommerce1-img1'}`}/>
        </div>
        <div className='Ecommerce1-Nonmainsections'>
        <div className='Ecommerce1-Features'>
 
                <div className='Ecommerce1-Feature'>
                <FaShippingFast className='Ecommerce1-FeatureIcon'/>
<div className='Ecommerce1-Featuretext'>
    <h4>Free Shipping</h4>
    <h6>Free shipping on all order</h6>
</div>
                </div>

                <div className='Ecommerce1-Feature'>
                <Ri24HoursFill className='Ecommerce1-FeatureIcon'/>
<div className='Ecommerce1-Featuretext'>
    <h4>Support 24/7</h4>
    <h6>Free shipping on all order</h6>
</div>
                </div>

                <div className='Ecommerce1-Feature'>
                <GiTakeMyMoney className='Ecommerce1-FeatureIcon'/>
<div className='Ecommerce1-Featuretext'>
    <h4>Money Return</h4>
    <h6>Free shipping on all order</h6>
</div>
                </div>

                <div className='Ecommerce1-Feature'>
                <BiSolidOffer className='Ecommerce1-FeatureIcon'/>
<div className='Ecommerce1-Featuretext'>
    <h4>Order Discount</h4>
    <h6>Free shipping on all order

</h6>
</div>
                </div>
            </div>
            <div className='Ecommerce1-Bestsellers'>
                Categories
            </div>
            
<CategorySection categories={7}/>

            <div className='Ecommerce1-Bestsellers'>
                Best Sellers
            </div>

            <div className='Ecommerce1-BestSellersProducts'>
<Product />
<Product />
<Product />
<Product />

<Product />
<Product />
            </div>
        </div>
        <Footer />
    </div>
  )
}
