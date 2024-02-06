import React, { useState } from "react"; // Import useState from react
import './BackgroundSwitch.css';

const BackgroundSwitch = () => {
    const bgImg1 = 'https://e0.pxfuel.com/wallpapers/619/728/desktop-wallpaper-ui-ui-ux.jpg';
    const bgImg2 = 'https://s1.picswalls.com/wallpapers/2014/06/22/robot-background_105339461_45.jpg';

    
    const [currentImage, setCurrentImage] = useState(bgImg1);  // Set the default image to be img1

    
    const toggleImage = () => {
        setCurrentImage(currentImage === bgImg1 ? bgImg2 : bgImg1);   // If current image is img1 then set it to img2 else set it to img1
    };

    
    return (
        <div className="background-switch-container" style={{ backgroundImage: `url(${currentImage})` }}>
            <button onClick={toggleImage}>Toggle Background</button>
        </div>
    );
};

export default BackgroundSwitch;
