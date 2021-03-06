import React from 'react';
import Slider from "react-slick";
import * as Icon from 'react-feather';

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="next-arrow slick-arrow"
            onClick={onClick}
        >
            <Icon.ArrowRight />
        </button>
    );
}
  
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button 
            className="prev-arrow slick-arrow"
            onClick={onClick}
        >
            <Icon.ArrowLeft />
        </button>
    );
}

class Feedback extends React.Component {
    state = {
        imagesSlider: null,
        thumbnailsSlider: null,
        oldSlide: 0,
        activeSlide: 0,
        activeSlide2: 0
    };
    
    componentDidMount() {
        this.setState({
            imagesSlider: this.slider1,
            thumbnailsSlider: this.slider2
        });
    }

    renderSliderFullContent = () => {
        return DEFAULT_PROPS.map(({name,profession,image,content}) => {
            return (
                <div key={name}>
                    <div className="item">
                        <div className="single-feedback">
                            <div className="client-img">
                                <img src={image} alt="image" />
                            </div>

                            <h3>{name}</h3>
                            <span>{profession}</span>
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    renderSliderImages = () => {
        return DEFAULT_PROPS.map(({name, image}) => {
            return (
                <div key={name}>
                    <div className="item">
                        <div className="img-fill">
                            <img src={image} alt="client" />
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        const sliderSettings1 = {
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: 'linear',
            fade: true,
            autoplay: true,
            draggable: true,
            asNavFor: this.state.thumbnailsSlider,
            draggable: false,
            arrows: false,
            nextArrow: false,
            prevArrow: false
        }
        
        const sliderSettings2 = {
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            cssEase: 'linear',
            autoplay: true,
            centerMode: true,
            draggable: false,
            focusOnSelect: true,
            asNavFor: this.state.imagesSlider,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            beforeChange: (current, next) => this.setState({ oldSlide: current, activeSlide: next }),
            afterChange: current => this.setState({ activeSlide2: current })
        }

        return (
            <section className="feedback-area ptb-80 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>Sizlerin G??z??nden   <img src="/images/logo.png" alt="logo" /></h2>
                        <div className="bar"></div>
                    </div>

                    <div className="feedback-slides">
                        <div className="client-feedback">
                            <div>
                                <Slider
                                    ref={slider => (this.slider1 = slider)}
                                    {...sliderSettings1}
                                >
                                    {
                                        this.renderSliderFullContent()
                                    }
                                </Slider>
                            </div>
                        </div>

                        <div className="client-thumbnails">
                            <div>
                                <Slider
                                    ref={slider => (this.slider2 = slider)}
                                    {...sliderSettings2}
                                >
                                    {
                                        this.renderSliderImages()
                                    }
                                </Slider>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="shape1">
                    <img src="/images/shape1.png" alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape5">
                    <img src="/images/shape5.png" alt="shape" />
                </div>
                <div className="shape6 rotateme">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
            </section>
        );
    }
}

const DEFAULT_PROPS = [
    {
        name: 'Sadettin Tosun', 
        profession: '20.01.2021',
        image: '/images/client-image/client2.jpg', 
        content: ' Kolay kolay hi?? bir siteye yorum yapmam ama site i??in yorum yap??yorum tavsiye ediyorum ????nk?? kazan?? oranlar?? ??ok y??ksek ve kaybetmek imkans??z :D'
    },
    {
        name: 'Mehmet Y??lmaz', 
        profession: '20.02.2021',
        image: '/images/client-image/client4.jpg', 
        content: 'Sadece 1??? ye i??lem sa??layabilmek ve ??ekim i??leminin ??????k h??z??yla sonu??land??r??lmas??'
    },
    {
        name: 'Semih Arslan', 
        profession: '04.10.2020',
        image: '/images/client-image/client5.jpg', 
        content: ' Her??ey o kadar ayr??cal??kl?? d??????n??lm???? ki hangi i??lem ne ??ekilde yap??l??yor hepsinin videosu var ger??ekten ??ok iyi'
    },
    {
        name: 'Nazl?? Karadeniz', 
        profession: '08.03.2021',
        image: '/images/client-image/client1.jpg', 
        content: 'Bu bonuslarla kay??p imkans??z gibi'
    },
    {
        name: 'Murat Karalar', 
        profession: '19.11.2020',
        image: '/images/client-image/client2.jpg', 
        content: '2019 dan beri bu sitede vakit ge??iriyorum herhangi bir sorun ya??amad??m t??m arkada??lar??ma ??nerdim hem ??ekimi hemde i??lemleri ??ok h??zl?? te??ekk??r ederim'
    },
    {
        name: 'Sema Solmaz', 
        profession: '11.12.2020',
        image: '/images/client-image/client3.jpg', 
        content: 'Ba??ka sitelerde bo??una param?? bitirmi??im daha kaybetti??im olmad?? te??ekk??r ederim binary trade'
    },
    {
        name: 'Metin Y??ld??z', 
        profession: '14.04.2021',
        image: '/images/client-image/client4.jpg', 
        content: ' Her??ey ??ok g??zel 3 ayd??r ??ok i??lem yap??yorum ve ??ok memnunum'
    },
    {
        name: 'Ay??e Ko??', 
        profession: '04.01.2021',
        image: '/images/client-image/client1.jpg', 
        content: 'Yat??r??m ve ??ekim; h??zl?? ve g??venilir bu ??irketle ??al????makdan memnunum'
    },
    {
        name: 'Ahmet Ziyagillerden', 
        profession: '20.01.2021',
        image: '/images/client-image/client4.jpg', 
        content: 'Dakikalar i??inde kazan?? dakikalar i??inde ??ekim Piyasalardan kazanc??n yerini buldum san??r??m'
    },
    {
        name: 'Arda Keser', 
        profession: '17.03.2021',
        image: '/images/client-image/client4.jpg', 
        content: ' Bildi??in rulet oynamak gibi ara??t??rma yapmaya gerek yoktur. sonu para kazanmak'
    },

];

export default Feedback;
