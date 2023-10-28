import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });
const lusitana = Lusitana({
    subsets: ['latin'],
    weight: '400'
});

const fonts = {
    inter,
    lusitana
};

export default fonts;