import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, orderBy, limit, query } from 'firebase/firestore';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { db } from '../firebase.config';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Spinner from './Spinner';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Slider = () => {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, 'listings');
      const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5));

      const querySnap = await getDocs(q);
      const listings = [];

      querySnap.forEach((doc) => {
        listings.push({
          id: doc.id,
          data: doc.data,
        });
      });
      setListings(listings);
      setLoading(false);
    };

    fetchListings();
  }, []);
  console.log(listings);

  if (loading) {
    return <Spinner />;
  }
  return (
    <h1>slider</h1>
    // listings && (
    //   <>
    //     <p className='exploreHeading'>Recommended</p>
    //     <Swiper
    //       modules={[Navigation, Pagination, Scrollbar, A11y]}
    //       slidesPerView={1}
    //       pagination={{ clickable: true }}
    //       navigation
    //       style={{ height: '400px' }}
    //     >
    //       {listings.map(({ data, id }) => (
    //         <SwiperSlide
    //           key={id}
    //           onClick={() => navigate(`/category/${data.type}/${id}`)}
    //         >
    //           <div
    //             style={{
    //               background: `url(${data.imgUrls[0]}) center no-repeat`,
    //               backgroundSize: 'cover',
    //             }}
    //             className='swiperSlideDiv'
    //           >
    //             <p className='swiperSlideText'>{data.name}</p>
    //             <p className='swiperSlidePrice'>
    //               ${data.discountedPrice ?? data.regularPrice}{' '}
    //               {data.type === 'rent' && '/ month'}
    //             </p>
    //           </div>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   </>
    // )
  );
};

export default Slider;