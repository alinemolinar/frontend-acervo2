import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { DivCarousel } from './Styles';


function Home(){

    return(
        <div>
             <DivCarousel>
            <Carousel
            infiniteLoop = {true}
            showThumbs = {false}
            showStatus = {false}
            >
                <div>
                    <img src="https://wallpapersok.com/images/hd/red-tulip-in-yellow-flower-garden-bqstch8ds50d2s5a.jpg" 
                    height= "300px" />
                </div>
                <div>
                    <img src="https://images6.alphacoders.com/835/835213.jpg"
                    height= "300px"  />
                </div>
                <div>
                    <img src= "https://www.hdwallpapers.in/download/yellow_flowers_field_green_grass_during_daytime_4k_hd_flowers-HD.jpg" 
                    height= "300px" />
                </div>


            </Carousel>
             </DivCarousel>


        </div>
    )
}

export default Home