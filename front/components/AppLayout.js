import {memo} from "react";
import {createGlobalStyle} from "styled-components";
import {Menu} from "antd";
import Link from "next/link";
import PropTypes from 'prop-types';


const AppLayout = memo(({ children }) => {
   console.log('레이아웃');
   return (
       <div>

           <Menu mode="horizontal">
               <Menu.Item>
                   <Link href="/"><a>Hello</a></Link>
               </Menu.Item>
               <Menu.Item>
                   <Link href="/"><a>Blog</a></Link>
               </Menu.Item>
               <Menu.Item>
                    <Link href="/"><a>World!</a>
                </Link>
           </Menu.Item>

           </Menu>

       </div>

   )

});

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;