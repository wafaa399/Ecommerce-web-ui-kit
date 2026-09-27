import { Link } from 'react-router-dom';
import './Breadcrumb.css';

/**
 * Breadcrumb
 * Page breadcrumb navigation — shown on inner pages.
 * Logic Team: Pass `items` array with { label, href } objects.
 * The last item is the current page (no href needed).
 */
function Breadcrumb({ pageTitle, items = [] }) {
  return (
    <div className="breadcrumb-container">
      <div className="container--wide">
        <div className="breadcrumb-content">
          {pageTitle && (
            <h1 className="breadcrumb__page-title">{pageTitle}</h1>
          )}
          {items.length > 0 && (
            <nav className="breadcrumb__nav" aria-label="Breadcrumb">
              <ol className="breadcrumb__list">
                {items.map((item, index) => {
                  const isLast = index === items.length - 1;
                  return (
                    <li key={index} className="breadcrumb__item">
                      {!isLast && item.href ? (
                        <>
                          <Link to={item.href} className="breadcrumb__link">
                            {item.label}
                          </Link>
                          <span className="breadcrumb__separator" aria-hidden="true">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M5.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </>
                      ) : (
                        <span className="breadcrumb__current" aria-current="page">
                          {item.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
