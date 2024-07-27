import '../styles/global.css';
import { Children } from 'react';

export const metadata = {
    title: 'The Blessed Prompts',
    description: 'Created by Astro Nova Labs for AI prompts'
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient' />
                </div>

                <main className='app'>
                    {children}
                </main>
            </body>
        </html>
    );
}

export default RootLayout;