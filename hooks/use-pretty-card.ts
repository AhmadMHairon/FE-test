import { useEffect } from 'react';

export const usePrettyCards = (ref: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
        const cards = ref?.current;

        const mousemove = (e: MouseEvent) => {
            const cardsElms = cards?.getElementsByClassName(
                'card'
            ) as HTMLCollectionOf<HTMLDivElement>;

            for (let i = 0; i < cardsElms.length; i++) {
                const card = cardsElms[i];
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        };

        if (cards) {
            cards.addEventListener('mousemove', mousemove);
        }
        return () => {
            if (cards) {
                cards.removeEventListener('mousemove', mousemove);
            }
        };
    }, [ref]);
};
