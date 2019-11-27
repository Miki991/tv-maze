import React from 'react';

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'


class HeaderSlider extends React.Component {
    _isMounted = false;

    state = {
        images: [
            {alt: "set", src:"./images/set.jpg"}, 
            {alt: "show", src: "./images/show.jpg"}, 
            {alt: "camera", src: "./images/camera.jpg"}, 
            {alt: "tv", src: "./images/tv.jpg"}
        ]
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <AliceCarousel buttonsDisabled={true}
                           dotsDisabled={true}
                           autoPlay={true}
                           autoPlayInterval={6000}
                           duration={1000} >
                    {this.state.images.map(image => {
                        return (
                            <div key={image.alt}
                                style={{height: '100%', backgroundColor: 'white', margin: '0'}}>
                                <img src={image.src}
                                     alt={image.alt} 
                                     style={{width: '100%'}} />
                            </div>
                        )
                    })}
            </AliceCarousel>
        );
    }
};


export {HeaderSlider}