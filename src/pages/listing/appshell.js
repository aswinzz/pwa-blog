import React from 'react';
import { Skeleton } from 'antd';
import styled from 'styled-components';

export const StyledContainer = styled.div`
    .post-card {
        color: inherit;
        text-decoration: none;
    }

    .post-card:hover {
        text-decoration: none;
    }

    .post-card-tags {
        margin: 0 0 5px 0;
        font-size: 1.4rem;
        line-height: 1.15em;
        color: var(--color-secondary);
    }


    .post-card-title {
        margin: 0 0 10px 0;
        padding: 0;
        color: #585858;
        line-height: 1.15;
        font-weight: 700;
        text-rendering: optimizeLegibility;
    }

    .post-card-excerpt {
        font-size: 16px;
        line-height: 1.55em;
        overflow-wrap: break-word;
    }

    .post-card-image {
        margin: 0 0 10px 0;
        width: auto;
        height: 200px;
        background: var(--color-secondary) no-repeat center center;
        background-size: cover;
    }

    .post-card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0 0 0;
        color: var(--color-secondary);
    }

    .post-card-footer-left {
        display: flex;
        align-items: center;
    }

    .post-card-footer-right {
        display: flex;
        flex-direction: column;
    }

    .post-card-avatar {
        width: 30px;
        height: 30px;
        margin: 0 7px 0 0;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .post-card-avatar .author-profile-image {
        display: block;
        width: 100%;
        background: var(--color-secondary);
        border-radius: 100%;
        object-fit: cover;
    }

    .post-card-avatar .default-avatar {
        width: 26px;
    }
`;
export default () => {
  return (
    <div className="container">
        <section className="post-feed">
            {[1,2,3,4,5,6].map(item => {
                return <>
                <StyledContainer>
                    <div className="post-card">
                        <header className="post-card-header">
                                <div className="post-card-image" style={{
                                    height: 275,
                                    backgroundImage: `url(${process.env.PUBLIC_URL}/appshell.png)` ,
                                }}></div>
                            <Skeleton active loading={true}/>
                        </header>
                        <section className="post-card-excerpt"><Skeleton active loading={true}/></section>
                        <footer className="post-card-footer">
                        </footer>
                        </div>
                </StyledContainer>
                </>
            })}
        </section>
    </div>
  );
};