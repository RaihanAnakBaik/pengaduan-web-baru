import Image from 'next/image';
import '../animations.css';

const Kota = () => {
  return (
    <div className="kota" style={{ userSelect: 'none' }}>
      <Image src="image/city.svg" alt="Kota" layout="responsive" width={800} height={600} />
    </div>
  );
};

const Landmark = () => {
  return (
    <div className="landmark" style={{ userSelect: 'none' }}>
      <div className="monas">
        <Image src="image/monas.svg" alt="Monas" layout="responsive" width={100} height={100} />
      </div>
      <div className="pancoran">
        <Image src="image/pancoran.svg" alt="Pancoran" layout="responsive" width={100} height={1000} />
      </div>
      <div className="hi">
        <Image src="image/hi.svg" alt="Hi" layout="responsive" width={100} height={100} />
      </div>
    </div>
  );
};

const Land = () => {
  return (
    <div className="land" style={{ userSelect: 'none' }}>
      <Image src="image/land.svg" alt="Land" layout="responsive" width={800} height={600} />
    </div>
  );
};

const Train = () => {
  return (
    <div className="train" style={{ userSelect: 'none' }}>
      <Image src="image/train.svg" alt="Train" layout="responsive" width={800} height={300} />
    </div>
  );
};

const Track = () => {
  return (
    <div className="track" style={{ userSelect: 'none' }}>
      <Image src="image/track.svg" alt="Track" layout="responsive" width={800} height={600} />
    </div>
  );
};

const Page = () => {
  return (
    <div className="container-background" style={{ userSelect: 'none' }}>
      <Kota/>
      <Landmark />
      <Land/>
      <Train/>
      <Track/>
    </div>
  );
};

export default Page;
