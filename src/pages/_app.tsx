import '../styles/globals.scss';
import { AppProps } from 'next/app';
import { IconPack, library, config } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Tell FontAwesome to skip adding the CSS automatically since it's already imported above
config.autoAddCss = false;

library.add(fab as IconPack);
library.add(far as IconPack);
library.add(fas as IconPack);

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
