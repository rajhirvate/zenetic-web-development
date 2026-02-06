import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
    const location = useLocation();

    useEffect(() => {
        // Update Title
        document.title = title;

        // Update Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        // Update Canonical
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.setAttribute('rel', 'canonical');
            document.head.appendChild(linkCanonical);
        }
        // Remove trailing slash if present for consistency, unless it's root
        let path = location.pathname;
        if (path !== '/' && path.endsWith('/')) {
            path = path.slice(0, -1);
        }

        const defaultCanonical = `https://zenetic.in${path === '/' ? '' : path}`;
        linkCanonical.setAttribute('href', canonical || defaultCanonical);

    }, [title, description, canonical, location.pathname]);

    return null;
};

export default SEO;
