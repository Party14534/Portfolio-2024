import Image from "next/image";

import bg from './../../../public/bgDim.jpg';

const BackgroundImageStyle = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

export { BackgroundImageStyle }
