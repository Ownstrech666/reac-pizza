import React from 'react';
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="120" cy="140" r="120" />
            <rect x="0" y="286" rx="3" ry="3" width="240" height="20" />
            <rect x="0" y="315" rx="6" ry="6" width="240" height="90" />
            <rect x="0" y="415" rx="3" ry="3" width="91" height="31" />
            <rect x="136" y="416" rx="20" ry="20" width="100" height="40" />
        </ContentLoader>
    );
}

export default LoadingBlock;