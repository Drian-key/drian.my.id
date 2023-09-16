import Image from "next/image";

const MeSection = () => {
  return (
    <section
      data-aos="fade-up"
      className="bg-bg-partial border border-border-me rounded-md p-3 flex flex-col justify-center md:p-8 lg:mx-5 lg:border-none">
      <div className="border-b w-full border-border-me pb-3 my-3 md:pb-5 lg:flex lg:items-center lg:justify-between ">
        <div className="flex flex-col items-center md:items-start md:flex-row md:gap-4">
          <Image
            className="rounded-full lg:hidden"
            src="/images/me.jpg"
            width="100"
            height="100"
            alt="me"
          />
          <div className="text-center md:text-start">
            <h4 className="text-xl text-text-color font-medium mt-4 xl:text-2xl">
              Front-end Developer
            </h4>
            <h1 className="text-2xl font-bold xl:text-4xl">
              Hi i`am Riski Drian Pratama
            </h1>
          </div>
        </div>
        <div className="flex justify-evenly mt-4 md:justify-start md:gap-6">
          <a
            className="rounded-md border border-border-me hover:opacity-80"
            href="https://www.instagram.com/driannaird/"
            target="_blank">
            <Image src="/icons/instagram.svg" width="40" height="40" alt="ig" />
          </a>
          <a
            className="rounded-md border border-border-me hover:opacity-80"
            href="https://www.youtube.com/@driannaird"
            target="_blank">
            <Image
              src="/icons/youtube.svg"
              width="40"
              height="40"
              alt="youtube"
            />
          </a>
          <a
            className="rounded-md border border-border-me hover:opacity-80"
            href="https://www.tiktok.com/@driannaird"
            target="_blank">
            <Image
              src="/icons/tiktok.svg"
              width="40"
              height="40"
              alt="tiktok"
            />
          </a>
          <a
            className="rounded-md border border-border-me hover:opacity-80"
            href="https://github.com/Drian-key"
            target="_blank">
            <Image
              src="/icons/github.svg"
              width="40"
              height="40"
              alt="github"
            />
          </a>
        </div>
      </div>
      <div className="text-center text-base border-b w-full border-border-me pb-3 mb-3 md:text-lg md:text-start">
        <div className="mb-3">
          <span className="bg-gradient-to-r from-purple-500 to-pink-is text-transparent bg-clip-text font-bold lg:text-xl">
            #front-end #18years-old
          </span>
        </div>
        <h3 className="text-gray-300 md:text-lg">
          Hai saya Riski Drian Pratama, seorang Web Programmer full time di
          rumah sakit. Saya memiliki minat yang tinggi terhadap front end
          developer. Saat ini saya sedang mendalami React JS dan Tailwind CSS.
        </h3>
      </div>
      <div>
        <button className="bg-gradient-to-r from-unggu-is to-pink-is w-full py-2 rounded-md border border-border-me flex justify-center items-center gap-1 text-base transition-all duration-300 ease-in-out hover:opacity-80 md:w-auto md:px-4 md:text-lg">
          <Image src="/icons/unduh.svg" width={25} height={25} alt="unduh" />
          Unduh CV
        </button>
      </div>
    </section>
  );
};

export default MeSection;
