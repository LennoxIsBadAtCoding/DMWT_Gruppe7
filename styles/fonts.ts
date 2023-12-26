import { Viga, Gothic_A1 } from 'next/font/google'
import styles from 'Layout.module.css'

export const viga = Viga({
    weight: "400",
    preload: true,
    subsets: ['latin'],
    variable: '--font-viga'
});

export const gothica1 = Gothic_A1({
    weight: "400",
    preload: true,
    subsets: ['latin'],
    variable: '--font-gothic'
});
