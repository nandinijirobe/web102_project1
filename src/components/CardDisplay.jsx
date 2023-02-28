import React from "react";
import Event from './Card'

// https://www.kstdc.co/blog/karnataka-top-15-destinations-and-places-to-visit/
const Calendar = () => {
    return (
    <div className="Calendar">
        <tbody>
                <tr>
                    <td><Event title ='Bangalore' color="orange" link = "https://en.wikipedia.org/wiki/Bangalore" imgSRC = "https://lp-cms-production.imgix.net/2019-06/9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg" /></td>
                    <td><Event title ='Bandipur National Park' color="yellow" link = "https://en.wikipedia.org/wiki/Bandipur_National_Park" imgSRC = "https://www.deccanherald.com/sites/dh/files/article_images/2020/04/24/bandipur-1582465732.jpg"/></td>
                    <td><Event title ='COORG' color="green" link = "https://en.wikipedia.org/wiki/Kodagu_district" imgSRC = "https://www.tourmyindia.com/blog//wp-content/uploads/2015/11/best-things-to-do-in-coorg.jpg"/></td>
                    <td><Event title ='Hampi' color="blue" link = "https://en.wikipedia.org/wiki/Hampi" imgSRC = "https://img.etimg.com/thumb/msid-93732971,width-640,resizemode-4,imgsize-157200/hampi-karnataka.jpg"/></td>
                    <td><Event title ='Mysore' color="purple" link = "https://en.wikipedia.org/wiki/Mysore" imgSRC = "https://www.holidify.com/images/cmsuploads/compressed/mysoredasara_20181220181910.jpg"/></td>
                </tr>
                <tr>
                    <td><Event title ='Shivanasamudra Falls' color="purple" link = "https://en.wikipedia.org/wiki/Shivanasamudra_Falls" imgSRC = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/86/89/75/img-20180630-110602218.jpg?w=1200&h=-1&s=1"/></td>
                    <td><Event title ='Gokarna' color="blue" link = "https://en.wikipedia.org/wiki/Gokarna,_Karnataka" imgSRC = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/53/5e/7f/om-beach.jpg?w=700&h=-1&s=1"/></td>
                    <td><Event title ='Belur and Halebidu' color="green" link = "https://en.wikipedia.org/wiki/Halebidu" imgSRC = "https://4.bp.blogspot.com/-8di5JgFx5C4/VPU_Gwcx-2I/AAAAAAAAIWw/tApMqLFSe2Q/s1600/Belur03.jpg"/></td>
                    <td><Event title ='Jog Falls' color="yellow" link = "https://en.wikipedia.org/wiki/Jog_Falls" imgSRC = "https://media.cnn.com/api/v1/images/stellar/prod/190501111839-india-waterfalls-jog-falls-restricted.jpg?q=w_3000,h_2021,x_0,y_0,c_fill/w_1280"/></td>
                    <td><Event title ='Dandeli ' color="orange" link = "https://en.wikipedia.org/wiki/Dandeli" imgSRC = "https://qph.cf2.quoracdn.net/main-qimg-63252450ceeda6aae3b2ea3ad17fb877"/></td>
                </tr>
        </tbody>
    </div>

    );
    
}

export default Calendar;