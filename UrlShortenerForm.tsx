import React, { useState } from 'react';

const UrlShortenerForm: React.FC = () => {
    const [url, setUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('https://api.example.com/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });
            const data = await response.json();
            setShortenedUrl(data.shortenedUrl);
        } catch (error) {
            console.error('Error shortening the URL:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter URL to shorten"
                    required
                />
                <button type="submit">Shorten URL</button>
            </form>
            {shortenedUrl && (
                <div>
                    <p>Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a></p>
                </div>
            )}
        </div>
    );
};

export default UrlShortenerForm;