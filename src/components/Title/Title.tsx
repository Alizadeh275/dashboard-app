import { TypeAnimation } from 'react-type-animation';

export const Title = () => {
  return (
    <h1 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: "IRANSans", minHeight: '48px' }}>
      <TypeAnimation
        sequence={['داشبورد تحلیل دستورکارها', 1000]}
        wrapper="span"
        speed={25}
        style={{ display: 'inline-block' }}
        repeat={0}
        cursor={false}
      />
    </h1>
  );
};