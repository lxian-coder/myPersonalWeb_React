import React from 'react';
import './BLog.scss';
import Side1 from '../../../Side1/Side1';
import PageActive from '../PageActive/PageActive';
import BlogSide2 from './components/BlogSide2';

const Blog = (props:{active:string}) => {
    let className = 'defaultBg';
    if(props.active === 'active'){
         className += ' BlogBg'
    }
    
return      <PageActive className= {className} >
                <Side1 />
                <BlogSide2 />
            </PageActive>
}
export default Blog;