import React, { useState, useEffect } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [currentArticles, setCurrentArticles] = useState(0);
    const [prevArticles, setPrevArticles] = useState(0);


    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const updated_news = async () => {
        props.set_progress(45)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}`;
        let data = await fetch(url);
        let parseData = await data.json();
        props.set_progress(70)
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
        setLoading(false)
        props.set_progress(100)
    }

    useEffect(() => {
        updated_news()
    }, [])

    const fetchMoreData = () => {
        updated_news()
    };


    return <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<Spinner />}
    >
        <div className='container my-3' >
            <h1 className='my-3 text-center'>Top Headlines - {capitalize(props.category)} Category</h1>
            <div className="row">
                {articles.map((element) => {
                    {
                        if (element.urlToImage != null)
                            return <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4 my-3' key={element.urlToImage}>
                                <NewsItems title={element.title ? element.title.slice(0, 18) : ""} desc={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                    }
                })}
            </div>

        </div>
    </InfiniteScroll>

}

News.defaultProps = {
    country: "us",
    category: "health"
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
}

export default News;
