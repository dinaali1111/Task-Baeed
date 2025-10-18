import React from 'react';
import Button from './Button';
import Icon from './Icon';
import { ICONS } from '../assets/iconConstants';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-custom-bg flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Badge */}
        <div className="-mb-2">
          <span className="inline-block px-4 py-2 brand-badge">
            سابقون – التقنية برؤية عربية
          </span>
        </div>
        {/* Main Heading */}
        <h1 className="main-heading mb-6">
          مستقبل علامتك التجارية يبدأ من هنا
          <br />
          بدعم تقني،
          <span className="relative inline-flex items-center justify-center mx-2 min-w-fit">
            {/* Group SVG as selection box background */}
            <Icon
              name={ICONS.GROUP}
              alt="Selection background"
              className="absolute inset-0 text-blue-400 opacity-80"
              size="5xl"
            />

            {/* Text with sky blue color - centered and properly padded */}
            <span className="relative z-10 text-sky-500 font-bold px-4 py-2 whitespace-nowrap">
              تفكير إبداعي
            </span>

            {/* Cursor SVG icon at bottom-right corner - moved down a bit more */}
            <Icon
              name={ICONS.CURSOR}
              alt="Cursor pointing"
              className="absolute -bottom-12 -right-6 text-green-500"
              size="md"
            />
          </span>
          ، وتنفيذ لا يرضى
          <br />
          بأقل من التميز.
        </h1>
        {/* Description */}
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          سابقون، شركة تقنية ناشئة بأيدي عربية قوية تنافس الشركات العالمية في
          تحويل أفكارك لحلول رقمية متكاملة، لدينا فريق يعرف كيف يدمج بين الخبرة
          العالية والرؤية الاستراتيجية مع استخدام أدوات الذكاء الاصطناعي بذكاء
          دون الاعتماد الكلي عليه لنضمن إنك دايماً سابق بخطوة.
        </p>
        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center items-center mb-6">
          <Button
            variant="primary"
            className="!bg-[#33c5ff] hover:!bg-[#2bb5f0] !shadow-none hover:!shadow-none"
            style={{
              width: "238px",
              height: "62px",
              opacity: 1,
              borderRadius: "6px",
            }}
          >
            اطلب استشارة مجانية
          </Button>
          <Button
            variant="secondary"
            className="!bg-[#9757d7] hover:!bg-[#8645c6] !shadow-none hover:!shadow-none"
            style={{
              width: "238px",
              height: "62px",
              opacity: 1,
              borderRadius: "6px",
            }}
          >
            ابدأ مشروعك الآن
          </Button>
        </div>
        {/* Trust Indicators */}
        <div className="mt-20">
          <p className="text-gray-500 text-sm mb-8 max-w-2xl mx-auto">
            النجاح لا يحتاج تقنيات وأدوات بقدر ما يحتاج فريق يفهمك، يفكر معك
            ويأسس طموحك ويبني مشروعك على المدى البعيد
          </p>

          {/* Partner Logos */}
          <div className="flex justify-center items-center gap-8 -mt-1">
            <Icon
              name={ICONS.HALAQH_LOGO}
              alt="Halaqh Logo"
              className="w-32 h-32 opacity-100"
            />
            <Icon
              name={ICONS.LANDING_LOGO}
              alt="Landing Logo"
              className="w-32 h-32 opacity-100"
            />
            <Icon
              name={ICONS.GROUP_1410089371}
              alt="Group Logo 2"
              className="w-32 h-32 opacity-100"
            />
            <Icon
              name={ICONS.GROUP_1410089200}
              alt="Group Logo"
              className="w-32 h-32 opacity-100"
            />
          </div>
        </div>

        {/* الجامع - Mosque Icon - Far left positioned opposite to "يرضى" */}
        <div
          className="fixed z-50 hidden md:block"
          style={{
            top: "22vh",
            left: "0vw",
            width: "clamp(60px, 6vw, 80px)",
            height: "clamp(60px, 6vw, 80px)",
          }}
        >
          <Icon
            name={ICONS.ABU_DHABI_LOGO}
            alt="الجامع - Mosque"
            className="w-full h-full object-contain"
          />
        </div>

        {/* الإبريق - Arabic Coffee Icon - Far right top positioned */}
        <div
          className="fixed z-50 hidden md:block"
          style={{
            top: "20vh",
            right: "0vw",
            width: "clamp(60px, 6vw, 80px)",
            height: "clamp(60px, 6vw, 80px)",
          }}
        >
          <Icon
            name={ICONS.ARABIC_COFFEE}
            alt="الإبريق - Arabic Coffee"
            className="w-full h-full object-contain"
          />
        </div>

        {/* المستطيل - Rectangle 80 Icon - Bottom center positioned */}
        <div
          className="fixed z-40"
          style={{
            bottom: "32px",
            left: "50%",
            width: "880px",
            height: "165px",
            transform: "translateX(-50%)",
          }}
        >
          <Icon
            name={ICONS.RECTANGLE_80}
            alt="المستطيل - Rectangle 80"
            className="w-full h-full object-contain"
          />
        </div>

        {/* المستطيل الثاني - Rectangle 81 Icon - Bottom center positioned */}
        <div
          className="fixed z-50"
          style={{
            bottom: "32.5px",
            left: "50%",
            width: "880px",
            height: "165px",
            opacity: 0.9,
            transform: "translateX(-50%)",
          }}
        >
          <Icon
            name={ICONS.RECTANGLE_81}
            alt="المستطيل الثاني - Rectangle 81"
            className="w-full h-full object-contain"
          />
        </div>

        {/* الضاد - Arabic Language Icon - Custom positioned */}
        <div
          className="fixed z-50"
          style={{
            top: "560px",
            right: "200px",
            width: "100px",
            height: "100px",
            transform: "rotate(-2deg)",
            opacity: 1,
          }}
        >
          <Icon
            name={ICONS.ARABIC_LANGUAGE}
            alt="الضاد - Arabic Language"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;