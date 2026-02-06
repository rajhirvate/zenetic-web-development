import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
    const location = useLocation();

    // Remove trailing slash if present for consistency, unless it's root
    let path = location.pathname;
    if (path !== '/' && path.endsWith('/')) {
        path = path.slice(0, -1);
    }

    const defaultCanonical = `https://zenetic.in${path === '/' ? '' : path}`;
    const finalCanonical = canonical || defaultCanonical;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={finalCanonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={finalCanonical} />
        </Helmet>
    );
};

export default SEO;
