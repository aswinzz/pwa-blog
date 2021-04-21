import React, { Component, ReactNode } from 'react';
import PostCard from './card';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import AppShell from './appshell';
import { Skeleton, Popover, Layout } from 'antd';
import { InfoCircleFilled } from '@ant-design/icons';
const { Footer } = Layout;
export const StyledContainer = styled.div`
  margin: 80px 0;
  .post-feed {
    display: grid;
    justify-content: space-between;
    grid-gap: 30px;
    /* grid-template-columns: 1fr 1fr 1fr; */
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 980px) {
    .post-feed {
      grid-template-columns: 1fr 1fr !important;
    }
  }
  @media (max-width: 680px) {
    .post-feed {
      grid-template-columns: 1fr !important;
    }
  }

  .container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 4vw;
    padding-bottom: 100px;
  }
`;

const StyledHeader = styled.div`

.site-head {
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    background: var(--color-base);
    background-position: center;
    background-size: cover;
}

.container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 4vw;
}

.site-banner {
    max-width: 80%;
    margin: 0 auto;
    padding: 10vw 0;
    text-align: center;
}

.site-banner-title {
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: 4rem;
    line-height: 1.3em;
}

.site-banner-desc {
    margin: 5px 0 0 0;
    padding: 0;
    font-size: 2.4rem;
    line-height: 1.3em;
    opacity: 0.7;
}
`;

export default class Post extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: [],
      metadata: {
        title: 'Blog',
        subtitle: 'A Simple React Application for blogs'
      },
      pagination: {
        current: 0,
        pageSize: 9,
        total: 0
      },
      loading: false,
      appShell: false
    };
  }

  async componentDidMount() {
    await this.fetchData(1);
  }

  fetchData = async (pageNumber = 1) => {
    this.setState({
      loading: true,
      appShell: pageNumber === 1
    });
    try {
      const res = await fetch(`https://demo.ghost.io/ghost/api/v3/content/posts/?key=22444f78447824223cefc48062&limit=${this.state.pagination.pageSize}&page=${pageNumber}`);
      const response = await res.json();
      console.log(response);
      if (response && response.posts) {
          this.setState({
              posts: [...this.state.posts, ...response.posts],
              pagination: {
                ...this.state.pagination,
                total: response.meta.pagination.pages,
                current: pageNumber
              },
              loading: false,
              appShell: false,
        });
      }
    } catch (e) {
      this.setState({loading: false, appShell: false})
    }
  };

  render() {
    return (
      <div style={{backgroundColor: 'white'}}>
        {/* <Header /> */}
        <StyledHeader>
        <header className="site-head" 
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/cover.jpg)` }}
        >
            <div className="container">
                <div className="site-banner">
                    <h1 className="site-banner-title">{this.state.metadata.title}</h1>
                    <p className="site-banner-desc">{this.state.metadata.subtitle} 
                    <sup>
                    <Popover placement='top' trigger="hover" content={<ul style={{marginTop: 10}}>
                        <li>This is an application bootstrapped using CRA, so SSR has not been implemented</li>
                        <li>The data is fetched from a public api from Ghost, so there might be some delay in the response</li>
                        <li>This application was built only for learning purpose</li>
                    </ul>}>
                        <InfoCircleFilled style={{fontSize:20, marginLeft:5}}/>
                    </Popover>
                    </sup>
                    </p>
                </div>
            </div>
        </header>
        </StyledHeader>
        <StyledContainer>
          {this.state.appShell ? 
          <AppShell/>
          :
          <InfiniteScroll
            // className="infiniteScroll"
            initialLoad={true}
            pageStart={0}
            loadMore={() => {
              if (
                !this.state.loading &&
                this.state.pagination.current < this.state.pagination.total
              ) {
                this.fetchData(this.state.pagination.current + 1);
              }
            }}
            hasMore={true}
            useWindow={true}
          >
            <div className="container">
              <section className="post-feed">
                {this.state.posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
                  {this.state.loading ? [1,2,3].map(item => {
                        return <>
                        <StyledContainer>
                            <div className="post-card">
                                <header className="post-card-header">
                                        {/* <div className="post-card-image" style={{
                                            height: 335,
                                            backgroundSize: 'cover',
                                            backgroundImage: `url(/appshell.png)` ,
                                        }}></div> */}
                                    <Skeleton active loading={true}/>
                                </header>
                                <section className="post-card-excerpt"><Skeleton active loading={true}/></section>
                                <footer className="post-card-footer">
                                </footer>
                                </div>
                        </StyledContainer>
                        </>
                    })
                  : ''}
              </section>
            </div>
          </InfiniteScroll>}
        </StyledContainer>
        <Footer style={{ textAlign: 'center' }}>Created with ♡ by <a href='https://github.com/aswinzz'>@aswinzz</a></Footer>
        {/* <Footer /> */}
      </div>
    );
  }
}
