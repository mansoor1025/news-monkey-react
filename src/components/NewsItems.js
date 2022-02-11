import React from 'react';
import moment from 'moment';
const NewsItems = (props)=> {
        let { title, desc, imageUrl, newsUrl, author, date } = props;
        return <div>
            <div className="card">
                <img alt="" className="card-img-top" src={imageUrl} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <p className="card-text"><small className="text-muted">By {author} on {moment(date).format("DD-MM-YYYY")}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>;
}

export default NewsItems;
