import React from 'react';
import { Skeleton } from 'antd';

export default () => {
  return (
    <div className="container">
    <article className="content">
        
        <section className="post-full-content">
          <figure style={{marginTop: 50}} className="post-feature-image">
            {/* <img src={`/appshell.png`} /> */}
          </figure>
            {/* <h1 className="content-title">......</h1> */}
            <Skeleton active loading={true}/>
            <Skeleton active loading={true}/>
            <Skeleton active loading={true}/>
            <Skeleton active loading={true}/>
            <Skeleton active loading={true}/>
            <Skeleton active loading={true}/>
            <Skeleton active loading={true}/>
            <Skeleton active loading={true}/>

            {/* The main post content */ }
            {/* <root.div> */}
            <section
                className="content-body load-external-scripts"
            >
              
            </section>
            {/* </root.div> */}
        </section>
    </article>
</div>
  );
};