import { Navigator } from "../../clientComponent";

interface IntroProp {
  location?: string;
}

export const Intro: React.FC<IntroProp> = ({ location }) => {
  const currentLocation = location?.split("-").join(" ");
  return (
    <div className="w-[100%] flex max-mobile:flex-col-reverse justify-center items-center mt-[50px] max-mobile:gap-[30px] max-mobile:p-[20px]">
      <div className="mobile:w-[50%] flex flex-col">
        <div className="w-[100%] flex flex-col  justify-center gap-[10px]">
          <h1 className="  flex flex-wrap text-[25px] mobile:text-[37px] font-bold text-[#B19777] capitalize gap-[10px]">
            <span>Welcome To Sai Furniture Art</span>

            <span>{currentLocation}</span>
          </h1>
          <div className="w-[100px] h-[3px] bg-[#B19777]"></div>
        </div>
        <div className="flex flex-col gap-[7px] mt-[20px]">
          <h2 className="text-[18px] mobile:text-[30px] font-[500]">
            Furniture Manufacturers
          </h2>
          <p className="max-mobile:text-[13px] text-left">
            Welcome to Saai Furniture Art - your premier destination for
            exquisite furniture solutions. As esteemed furniture manufacturers,
            we take pride in being recognized as the best sofa set manufacturers
            and wholesale suppliers. Founded in 2004 , Saai Furniture Art has
            been dedicated to offering an extensive collection of wooden carved
            sofas across <span className="font-bold">{currentLocation}</span>.
            Our mission is to provide a diverse range of furniture designs that
            blend elegance with affordability.
          </p>
          <p className="max-mobile:text-[13px] text-left">
            <span className="mobile:text-[18px]]">
              Best Living Room Sofa Sets Suppliers in{" "}
              <span className="font-bold">{currentLocation}</span>{" "}
            </span>
            As suppliers of carved sofa sets in{" "}
            <span className="font-bold">{currentLocation}</span>, we are
            committed to excellence in every aspect of our service. From
            browsing our collection to the delivery of your chosen sofa set,
            Saai Furniture Art ensures a seamless experience. Our curated
            selection promises both comfort and style, transforming your living
            room into a haven of relaxation and beauty. Experience the ultimate
            indulgence with our meticulously crafted sofa sets, designed to
            elevate your living space to new heights of luxury.
          </p>
          <p className="max-mobile:text-[13px] text-left">
            If you’re trying to find the top Dining Set Suppliers in{" "}
            <span className="font-bold">{currentLocation}</span>, get connected
            with Sai Furniture Art- one of the most reliable and prominent
            companies that offers the best collection of furniture from modern
            to traditional one. Also, it is hard to find our sophisticated and
            finest design of dining sets at competitive pricing. Moreover, our
            team of skilled and well-experienced workers does collaborative work
            to meet the client-focused and satisfaction in the right way. So,
            make the right decision with our premium furniture services.
          </p>
          <Navigator to="/about">
            <button className="w-[100px] h-[40px] rounded-full bg-[#2A1B18] text-[12px] text-white">
              Read More
            </button>
          </Navigator>
        </div>
      </div>
      <div className="mobile:w-[40%] h-[80%] flex mobile:justify-end justify-center">
        <img src="/home/intro.jpeg" alt="img" className="w-[90%] h-[70%]" />
      </div>
    </div>
  );
};
