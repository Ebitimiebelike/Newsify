import React from 'react';

function NewsCard({ article }) {
  const {
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    source,
    author
  } = article;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const defaultImage = 'https://via.placeholder.com/400x250?text=No+Image';

  return (
    <article className="news-card">
      <div className="card-image">
        <img 
          src={urlToImage || defaultImage} 
          alt={title}
          onError={(e) => { e.target.src = defaultImage; }}
        />
        <span className="card-source">{source?.name}</span>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        
        {description && (
          <p className="card-description">
            {description.length > 150 
              ? description.substring(0, 150) + '...' 
              : description}
          </p>
        )}
        
        <div className="card-footer">
          <div className="card-meta">
            {author && <span className="card-author">By {author}</span>}
            <span className="card-date">{formatDate(publishedAt)}</span>
          </div>
          
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="read-more"
          >
            Read More →
          </a>
        </div>
      </div>
    </article>
  );
}

export default NewsCard;
