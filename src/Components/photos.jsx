import React from 'react';
import PhotoItem from '../Components/photoDetails';

import martyrImage1 from '../assets/images/martyrImage/img1.jpg';
import martyrImage2 from '../assets/images/martyrImage/img2.jpg';
import martyrImage3 from '../assets/images/martyrImage/img3.jpg';
import martyrImage4 from '../assets/images/martyrImage/img4.jpeg';
import martyrImage5 from '../assets/images/martyrImage/img5.jpg';
import martyrImage6 from '../assets/images/martyrImage/img6.jpg';
import martyrImage7 from '../assets/images/martyrImage/img7.jpeg';
import martyrImage8 from '../assets/images/martyrImage/img8.jpeg';
import martyrImage9 from '../assets/images/martyrImage/img9.jpeg';
import martyrImage10 from '../assets/images/martyrImage/img10.jpg';
import martyrImage11 from '../assets/images/martyrImage/img11.jpeg';
import martyrImage12 from '../assets/images/martyrImage/img12.jpg';
import martyrImage13 from '../assets/images/martyrImage/img13.jpeg';
import martyrImage14 from '../assets/images/martyrImage/img14.jpeg';
import martyrImage15 from '../assets/images/martyrImage/img15.jpg';
import martyrImage16 from '../assets/images/martyrImage/img16.jpg';
import martyrImage17 from '../assets/images/martyrImage/img17.jpeg';
import martyrImage18 from '../assets/images/martyrImage/img18.jpg';
import martyrImage19 from '../assets/images/martyrImage/img19.jpg';
import martyrImage20 from '../assets/images/martyrImage/img20.jpeg';
import martyrImage21 from '../assets/images/martyrImage/img21.jpeg';
import martyrImage22 from '../assets/images/martyrImage/img22.jpg';
import martyrImage23 from '../assets/images/martyrImage/img23.jpeg';
import martyrImage24 from '../assets/images/martyrImage/img24.jpeg';
import martyrImage25 from '../assets/images/martyrImage/img25.jpeg';
import martyrImage26 from '../assets/images/martyrImage/img26.jpeg';
import martyrImage27 from '../assets/images/martyrImage/img27.jpg';
import martyrImage28 from '../assets/images/martyrImage/img28.jpg';
import martyrImage29 from '../assets/images/martyrImage/img29.jpg';
import martyrImage30 from '../assets/images/martyrImage/img30.jpg';
import martyrImage31 from '../assets/images/martyrImage/img31.jpg';
import martyrImage32 from '../assets/images/martyrImage/img32.jpg';
import martyrImage33 from '../assets/images/martyrImage/img33.jpg';
import martyrImage34 from '../assets/images/martyrImage/img34.jpg';
import martyrImage35 from '../assets/images/martyrImage/img35.jpg';
import martyrImage36 from '../assets/images/martyrImage/img36.jpg';
import martyrImage37 from '../assets/images/martyrImage/img37.jpg';
import martyrImage38 from '../assets/images/martyrImage/img38.jpg';
import martyrImage39 from '../assets/images/martyrImage/img39.jpg';
import martyrImage40 from '../assets/images/martyrImage/img40.jpg';
import martyrImage41 from '../assets/images/martyrImage/img41.jpg';
import martyrImage42 from '../assets/images/martyrImage/img42.jpg';
import martyrImage43 from '../assets/images/martyrImage/img43.jpg';
import martyrImage44 from '../assets/images/martyrImage/img44.jpg';
import martyrImage45 from '../assets/images/martyrImage/img45.jpg';
import martyrImage46 from '../assets/images/martyrImage/img46.jpg';
import martyrImage47 from '../assets/images/martyrImage/img47.jpg';
import martyrImage48 from '../assets/images/martyrImage/img48.jpg';


const images = [
  { src: martyrImage1, description: '(زين العابدين) احمد حسن عبود' },
  { src: martyrImage2, description: ' (ملاك حولا) احمد حسن مصطفى' },
  { src: martyrImage3, description: ' (ابو عباس) احمد حسين علي احمد' },
  { src: martyrImage4, description: ' (نجاد) احمد محمد سنديان' },
  { src: martyrImage5, description: ' (عباس) ابراهيم بديع حمزة' },
  { src: martyrImage6, description: ' (علي) اسماعيل حسن المولى' },
  { src: martyrImage7, description: ' (راغب) اسماعيل علي الزين' },
  { src: martyrImage8, description: ' (عبد الجليل) ابراهيم انيس الزين' },
  { src: martyrImage9, description: ' (كميل) ابراهيم حسين مستراح ' },
  { src: martyrImage10, description: ' (حسين) ابراهيم عبد الرضا رسلان' },
  { src: martyrImage11, description: ' (السيد ايمن) ابراهيم عفيف فحص' },
  { src: martyrImage12, description: ' (حيدر) ابراهيم محمد قشمر' },
  { src: martyrImage13, description: ' (عبدالله) احمد امين شمس الدين' },
  { src: martyrImage14, description: ' (ابو حسين) احمد جواد شحيمي' },
  { src: martyrImage15, description: ' (امير علي) احمد حسن الديراني' },
  { src: martyrImage16, description: ' (كاظم) احمد حسن مكحل' },
  { src: martyrImage17, description: ' (هلال) احمد حسين ترمس' },
  { src: martyrImage18, description: ' (يوسف منتصر) احمد حسين الحاج علي ' },
  { src: martyrImage19, description: ' (نور علي) احمد علي الحلاني' },
  { src: martyrImage20, description: ' (يعقوب) احمد علي حمد' },
  { src: martyrImage21, description: ' (محمود) احمد محمد العفي' },
  { src: martyrImage22, description: ' (ماهر حمزة) احمد محمد سليم' },
  { src: martyrImage23, description: ' (ابو صالح) اسلام محمد زلزلي' },
  { src: martyrImage24, description: ' (رسول) اسماعيل علي مطلق' },
  { src: martyrImage25, description: ' (ابو جعفر) اسماعيل يوسف باز' },
  { src: martyrImage26, description: ' (حمزة) الكشفي حسن عبدالله كوراني ' },
  { src: martyrImage27, description: ' (روح الله) ابراهيم علي الدبق' },
  { src: martyrImage28, description: ' (السيد محسن) القائد الكبير السيد فؤاد شكر' },
  { src: martyrImage29, description: ' (ابو جواد) احمد حسن معتوق' },
  { src: martyrImage30, description: ' (ذوالفقار) احمد حكمت موسى' },
  { src: martyrImage31, description: ' (زين) احمد علي مهدي' },
  { src: martyrImage32, description: ' (كرار) احمد علي موسى' },
  { src: martyrImage33, description: ' (صادق ) احمد علي يوسف' },
  { src: martyrImage34, description: ' (بلال صادق) احمد محمد طبوش' },
  { src: martyrImage35, description: ' (مهدي) ادهم خنجر حسين ناصر' },
  { src: martyrImage36, description: ' (ذوالفقار) امين حسن بدرالدين' },
  { src: martyrImage37, description: ' (حيدر علي) اسماعيل احمد الزين' },
  { src: martyrImage38, description: ' (جون) ابراهيم حبيب الدبق' },
  { src: martyrImage39, description: ' (ابو تراب) ابراهيم حسن عطوي' },
  { src: martyrImage40, description: ' (هادي) بهيج محمد حجازي ' },
  { src: martyrImage41, description: ' (غريب) حسن عاطف السيد' },
  { src: martyrImage42, description: ' (طارق) حسن علي كريم' },
  { src: martyrImage43, description: ' (جهاد) حسن غضبان مصطفى' },
  { src: martyrImage44, description: ' (الحاج ابو طالب) القائد طالب سامي عبدالله' },
  { src: martyrImage45, description: ' (الحاج ابو نعمة) القائد محمد نعمة ناصر' },
  { src: martyrImage46, description: ' (علي حيدر) بلال عبدالله ايوب' },
  { src: martyrImage47, description: ' (ابو علي نور) بلال نمر رميتي' },
  { src: martyrImage48, description: ' (باسل) بلال وجيه علاء الدين' },
    ];

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
    {images.map((image, index) => (
      <PhotoItem key={index} src={image.src} description={image.description} />
    ))}
  </div>
  );
};

export default Gallery;
