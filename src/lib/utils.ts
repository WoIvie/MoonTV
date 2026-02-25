// utils.ts

const DEFAULT_IMAGE_PROXY = 'https://images.weserv.nl';

export const getImageProxy = (imageUrl) => {
    const imageProxy = process.env.IMAGE_PROXY || DEFAULT_IMAGE_PROXY;
    return `${imageProxy}?url=${encodeURIComponent(imageUrl)}`;
};
