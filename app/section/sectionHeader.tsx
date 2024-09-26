import Image from "next/image";

const SectionHeader = () => {
  return (
    <div className="w-full mt-[60px]">
      <Image
        src="/img/Header.png"
        alt="header"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }} // optional
      />
    </div>
  );
};

export default SectionHeader;
