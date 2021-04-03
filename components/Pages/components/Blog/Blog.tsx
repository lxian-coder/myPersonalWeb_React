import React from 'react';
import './BLog.scss';
import Side1 from '../../../Side1/Side1';
import PageActive from '../PageActive/PageActive';
import BlogSide2 from './components/BlogSide2';

const Blog = (props:{active:boolean}) => {
    let className = 'defaultBg';
    if(props.active){
         className += ' BlogBg'
    }
    
return      <PageActive className= {className} >
                <Side1 />
                <BlogSide2 />
                <div className="snowEffect"></div>
            </PageActive>
}
export default Blog;