import React from 'react'
import { Link } from 'react-router-dom'
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
        height: 181px;
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

const PostCard = ({ post }) => {
    const url = `/blog/${post.id}`

    return (
        <StyledContainer>
        <Link to={url} className="post-card">
            <header className="post-card-header">
                {post.feature_image &&
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${post.feature_image})` ,
                        backgroundSize: 'cover'
                    }}></div>}
                {/* {post.tags && <div className="post-card-tags"> <Tags post={post} visibility="public" autolink={false} /></div>}
                {post.featured && <span>Featured</span>} */}
                <h2 className="post-card-title">{post.title}</h2>
            </header>
            <section className="post-card-excerpt">{post.excerpt}</section>
            <footer className="post-card-footer">
                <div className="post-card-footer-left">
                    <div className="post-card-avatar">
                            <img className="author-profile-image" src={'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'} alt={'Aswin'}/>
                    </div>
                    <span>Aswin</span>
                </div>
                {post.reading_time &&
                <div className="post-card-footer-right">
                    <div>{post.reading_time} min read</div>
                </div>}
            </footer>
        </Link>
        </StyledContainer>
    )
}

export default PostCard
