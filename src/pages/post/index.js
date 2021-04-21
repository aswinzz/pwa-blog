import React, { Component } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import AppShell from './appshell';
import Header from '../../Header';
import {Layout} from 'antd';
const { Footer } = Layout;
export const StyledDiv = styled.div`
article.content {
    padding-bottom: 100px;
}
 article.content ol, article.content ul {
	 list-style: none;
}
 article.content blockquote, article.content q {
	 quotes: none;
}
 article.content blockquote:before, article.content blockquote:after, article.content q:before, article.content q:after {
	 content: "";
	 content: none;
}
 article.content table {
	 border-spacing: 0;
	 border-collapse: collapse;
}
 article.content img {
	 max-width: 100%;
	 height: auto;
}
 article.content *, article.content *:before, article.content *:after {
	 box-sizing: inherit;
}
 article.content b, article.content strong {
	 font-weight: bold;
}
 article.content i, article.content em, article.content dfn {
	 font-style: italic;
}
 article.content sub, article.content sup {
	 position: relative;
	 font-size: 75%;
	 line-height: 0;
	 vertical-align: baseline;
}
 article.content sup {
	 top: -0.5em;
}
 article.content sub {
	 bottom: -0.25em;
}
 article.content img {
	 border: 0;
}
 article.content mark {
	 background-color: #fdffb6;
}
 article.content code, article.content kbd, article.content pre, article.content samp {
	 font-family: monospace, monospace;
	 font-size: 1em;
}
 article.content legend {
	 padding: 0;
	/* 2 */
	 border: 0;
	/* 1 */
}
 article.content table {
	 border-spacing: 0;
	 border-collapse: collapse;
}
 article.content td, article.content th {
	 padding: 0;
}
 article.content hr {
	 position: relative;
	 display: block;
	 width: 100%;
	 margin: 2.5em 0 3.5em;
	 padding: 0;
	 height: 1px;
	 border: 0;
	 border-top: 1px solid #f0f0f0;
}
 article.content audio, article.content canvas, article.content iframe, article.content img, article.content svg, article.content video {
	 vertical-align: middle;
}
 article.content fieldset {
	 margin: 0;
	 padding: 0;
	 border: 0;
}
 article.content textarea {
	 resize: vertical;
}

 article.content ol, article.content ul {
	 padding-left: 1.3em;
	 padding-right: 1.5em;
}
 article.content ol ol, article.content ul ul, article.content ul ol, article.content ol ul {
	 margin: 0.5em 0 1em;
}
 article.content ul {
	 list-style: disc;
}
 article.content ol {
	 list-style: decimal;
}
 article.content ul, article.content ol {
	 max-width: 100%;
}
 article.content li {
	 margin: 0.5em 0;
	 padding-left: 0.3em;
	 line-height: 1.6em;
}
 article.content dt {
	 float: left;
	 margin: 0 20px 0 0;
	 width: 120px;
	 color: #daf2fd;
	 font-weight: 500;
	 text-align: right;
}
 article.content dd {
	 margin: 0 0 5px 0;
	 text-align: left;
}
 article.content blockquote {
	 margin: 1.5em 0;
	 padding: 0 1.6em 0 1.6em;
	 border-left: #daf2fd;
}
 article.content blockquote p {
	 margin: 0.8em 0;
	 font-size: 1.2em;
	 font-weight: 300;
}
 article.content blockquote small {
	 display: inline-block;
	 margin: 0.8em 0 0.8em 1.5em;
	 font-size: 0.9em;
	 opacity: 0.8;
}

 article.content blockquote cite {
	 font-weight: bold;
}
 article.content blockquote cite a {
	 font-weight: normal;
}
 
`;

export const StyledPostContainer = styled.div`
    margin: 30px 0;
    .container {
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 4vw;
    }

    .content {
        margin: 0 auto;
        font-size: 16px;
        line-height: 1.7em;
    }

    .content-body {
        display: flex;
        flex-direction: column;
        font-family: var(--font-serif);
    }

    .post-full-content {
        max-width: 720px;
        margin: 0 auto;
        background: #fff;
    }

    .post-feature-image img {
        margin: 0 0 3vw;
        width: 100%;
        height: 500px;
        object-fit: cover;
    }

    .content-title {
        margin: 0 0 0.8em;
        line-height: 60px;
        font-size: 50px;
        color: #3a3939;
        font-weight: 800;
    }
    @media (max-width: 500px) {
        .content-title {
            margin: 0.8em 0;
            font-size: 30px;
        }
        .content {
            font-size: 14px;
        }
    }

    .content-body h2 {
        margin: 0.8em 0 0.4em 0;
        font-size: 24px;
        font-weight: 700;
        color: #3a3939;
    }
    @media (max-width: 500px) {
        .content-body h2 {
            font-size: 20px;
        }
    }

    .content-body h3 {
        margin: 0.5em 0 0.2em 0;
        font-size: 20px;
        font-weight: 700;
        color: #3a3939;
    }
    @media (max-width: 500px) {
        .content-body h3 {
            font-size: 18px;
        }
    }

    .content-body h4 {
        margin: 0.5em 0 0.2em 0;
        font-size: 18px;
        font-weight: 700;
        color: #3a3939;
    }
    @media (max-width: 500px) {
        .content-body h4 {
            font-size: 16px;
        }
    }

    .content-body h5 {
        display: block;
        margin: 0.5em 0;
        padding: 1em 0 1.5em;
        border: 0;
        font-family: Georgia,serif;
        color: #3a3939;
        font-style: italic;
        font-size: 16px;
        line-height: 1.35em;
        text-align: center;
    }

    .content-body h6 {
        margin: 0.5em 0 0.2em 0;
        font-size: 14px;
        color: #3a3939;
        font-weight: 700;
    }

    .content-body figure {
        margin: 0.4em 0 1.6em;
        font-size: 2.8rem;
        font-weight: 700;
    }

    .content-body figure img {
        max-width: 100%;
        max-height: 100%;
        height: unset;
        width: unset;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    .content-body figure figcaption {
        font-size: 10px;
        text-align: center;
    }

    .content-body pre {
        margin: 0.4em 0 1.8em;
        font-size: 1.6rem;
        line-height: 1.4em;
        white-space: pre-wrap;
        padding: 20px;
        background: var(--color-base);
        /* color: #fff; */
        border-radius: 12px;
    }
`;

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            loading: false
        }
    }

    async componentDidMount() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            try {
                console.log('this.props.match.params.id',this.props.match.params.id)
                this.setState({loading: true});
                const res = await fetch(`https://demo.ghost.io/ghost/api/v3/content/posts/${this.props.match.params.id}?key=22444f78447824223cefc48062`);
                const response = await res.json();
                if (response && response.posts && response.posts.length) {
                    this.setState({
                        loading: false,
                        post: response.posts[0]
                    });
                }
                this.setState({loading: false});
            } catch (e) {
                this.setState({loading: false});
            }
    }

    render() {
        return (
            <>
            <StyledPostContainer>
                
                {this.state.loading ? <AppShell/> : null}
                {!this.state.loading && this.state.post ? 
                    <StyledDiv className="container">
                        <Header/>

                        <article className="content">
                            { this.state.post.feature_image ?
                                <figure className="post-feature-image">
                                    <img src={ this.state.post.feature_image } alt={ this.state.post.title } />
                                </figure> : null }
                            <section className="post-full-content">
                                <h1 className="content-title">{this.state.post.title}</h1>

                                {/* The main post content */ }
                                {/* <root.div> */}
                                <section
                                    className="content-body load-external-scripts"
                                    dangerouslySetInnerHTML={{ __html: this.state.post.html }}
                                />
                                {/* </root.div> */}
                            </section>
                        </article>
                    </StyledDiv>
                : null}
            </StyledPostContainer>

            <Footer style={{ textAlign: 'center' }}>Created with ♡ by <a href='https://github.com/aswinzz'>@aswinzz</a></Footer>
            </>
        )
    }
}