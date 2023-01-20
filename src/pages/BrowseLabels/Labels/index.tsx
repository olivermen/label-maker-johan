import ImageGallery from "react-image-gallery";

// import stylesheets
import "./labels.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import myStore from "../../../useStore";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import { Helmet } from "react-helmet";


const Labels = () => {
  const { T, update }: any = myStore();
  const G: any = myStore();
  const navigate = useNavigate();
  const handleImgClick = (index: any) => {
    update({ curLabel: index });
    if (G.lang === "en-US") 
    { 
      navigate("/en/edit");
    }
    if (G.lang === "sw-SW") {
      navigate("/sv/edit");
    }
    if (G.lang === "es-ES") {
      navigate("/es/edit");
    }
  };
  return (
    <>
      <Helmet>
        <title>
          {T("title.browse")}
        </title>
        <meta name="title" content={T("title.browse")} />
        <meta
          name="description"
          content={T("description.browse")}
        />
        <meta
          name="keywords"
          content={T("keyword.common")}
        />
      </Helmet>
    <div className="labels">
      <h1> {T("browselabels.header")}</h1>
      {/* <div className="label-swiper">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 5,
            depth: 10,
            modifier: 3,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/labels/Label-1.svg"
              width={150}
              height={150}
              alt="label"
              onClick={() => handleImgClick(1)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/labels/Label-1.svg"
              width={150}
              height={150}
              alt="label"
              onClick={() => handleImgClick(1)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/labels/Label-1.svg"
              width={150}
              height={150}
              alt="label"
              onClick={() => handleImgClick(1)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/labels/Label-1.svg"
              width={150}
              height={150}
              alt="label"
              onClick={() => handleImgClick(1)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/labels/Label-1.svg"
              width={150}
              height={150}
              alt="label"
              onClick={() => handleImgClick(1)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/labels/Label-1.svg"
              width={150}
              height={150}
              alt="label"
              onClick={() => handleImgClick(1)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/labels/Label-1.svg"
              width={150}
              height={150}
              alt="label"
              onClick={() => handleImgClick(1)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/labels/Label-1.svg"
              width={150}
              height={150}
              alt="label"
              onClick={() => handleImgClick(1)}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/labels/Label-1.svg"
              width={150}
              height={150}
              alt="label"
              onClick={() => handleImgClick(1)}
            />
          </SwiperSlide>
        </Swiper>
        </div> */}
      <Row>
        <Col className="browse-col">
          <img
            src="/labels/Label-1.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(1)}
          />
          <h2 className="label-number">1</h2>
        </Col>
        <Col className="browse-col">
          <img
            src="/labels/Label-2.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(2)}
          />
          <h2 className="label-number">2</h2>
        </Col>
        <Col className="browse-col">
          <img
            src="/labels/Label-3.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(3)}
          />
          <h2 className="label-number">3</h2>
        </Col>
        <Col className="browse-col">
          <img
            src="/labels/Label-4.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(4)}
          />
          <h2 className="label-number">4</h2>
        </Col>

        <Col className="browse-col">
          <img
            src="/labels/Label-5.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(5)}
          />
          <h2 className="label-number">5</h2>
        </Col>

        <Col className="browse-col">
          <img
            src="/labels/Label-6.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(6)}
          />
          <h2 className="label-number">6</h2>
        </Col>
      </Row>
      <Row className="row-mt-10">
        <Col className="browse-col">
          <img
            src="/labels/Label-7.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(7)}
          />
          <h2 className="label-number">7</h2>
        </Col>
        <Col className="browse-col">
          <img
            src="/labels/Label-8.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(8)}
          />
          <h2 className="label-number">8</h2>
        </Col>
        <Col className="browse-col">
          <img
            src="/labels/Label-9.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(9)}
          />
          <h2 className="label-number">9</h2>
        </Col>
        <Col className="browse-col">
          <img
            src="/labels/Label-10.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(10)}
          />
          <h2 className="label-number">10</h2>
        </Col>

        <Col className="browse-col">
          <img
            src="/labels/Label-11.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(11)}
          />
          <h2 className="label-number">11</h2>
        </Col>

        <Col className="browse-col">
          <img
            src="/labels/Label-12.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(12)}
          />
          <h2 className="label-number">12</h2>
        </Col>
      </Row>
      <Row className="row-mt-10">
        <Col className="browse-col">
          <img
            src="/labels/Label-13.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(13)}
          />
          <h2 className="label-number">13</h2>
        </Col>
        <Col className="browse-col">
          <img
            src="/labels/Label-15.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(15)}
          />
          <h2 className="label-number">15</h2>
        </Col>
        <Col className="browse-col">
          <img
            src="/labels/Label-16.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(16)}
          />
          <h2 className="label-number">16</h2>
        </Col>

        <Col className="browse-col">
          <img
            src="/labels/Label-17.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(17)}
          />
          <h2 className="label-number">17</h2>
        </Col>

        <Col className="browse-col">
          <img
            src="/labels/Label-18.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(18)}
          />
          <h2 className="label-number">18</h2>
        </Col>
      </Row>
      <Row className="row-mt-10">
        <Col className="browse-col">
          <img
            src="/labels/Label-19.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(19)}
          />
          <h2 className="label-number">19</h2>
        </Col>
        {/* <Col className="browse-col">
          <img
            src="/labels/Label-20.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(20)}
          />
          <h2 className="label-number">20</h2>
        </Col> */}
        <Col className="browse-col">
          <img
            src="/labels/Label-21.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(21)}
          />
          <h2 className="label-number">21</h2>
        </Col>
        <Col className="browse-col">
          <img
            src="/labels/Label-22.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(22)}
          />
          <h2 className="label-number">22</h2>
        </Col>

        {/* <Col className="browse-col">
          <img
            src="/labels/Label-23.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(23)}
          />
          <h2 className="label-number">23</h2>
        </Col> */}

        <Col className="browse-col">
          <img
            src="/labels/Label-24.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(24)}
          />
          <h2 className="label-number">24</h2>
        </Col>
      </Row>
      <Row className="row-mt-10">
        <Col className="browse-col">
          <img
            src="/labels/Label-25.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(25)}
          />
          <h2 className="label-number">25</h2>
        </Col>
        <Col className="browse-col">
          <img
            src="/labels/Label-26.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(26)}
          />
          <h2 className="label-number">26</h2>
        </Col>
        <Col className="browse-col">
          <img
            src="/labels/Label-27.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(27)}
          />
          <h2 className="label-number">27</h2>
        </Col>
        <Col className="browse-col">
          <img
            src="/labels/Label-28.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(28)}
          />
          <h2 className="label-number">28</h2>
        </Col>

        <Col className="browse-col">
          <img
            src="/labels/Label-29.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(29)}
          />
          <h2 className="label-number">29</h2>
        </Col>

        <Col className="browse-col">
          <img
            src="/labels/Label-30.svg"
            width={150}
            height={150}
            alt="label"
            onClick={() => handleImgClick(30)}
          />
          <h2 className="label-number">30</h2>
        </Col>
      </Row>
    </div>
    </>
  );
};

export default Labels;
