import Card from "../components/card";
import {data} from "../data/servicies.data";
const LSCConsultantWebPageDesign = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-20 mt-5">
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default LSCConsultantWebPageDesign;



const Card = ({ title, description, image }) => {
    return (
      <div className={`w-[80%] mx-auto shadow-[9px_18px_26px_rgba(0,0,0,0.07)] bg-[white] flex items-center flex-col box-border pb-[25.5px] rounded-[20px]`}>
           <img
          className={`w-full  md:h-[321px] grow-0 shrink-0 basis-auto box-border object-cover block rounded-[20px_20px_0px_0px] border-[none]`}  src={image}
        />
        <div
          className={`mt-9 p-2 md:p-10`}
        >
          <p
            className={`box-border [font-family:Inter] text-base md:text-[25px] font-semibold text-[#505050]`}
          >
            {title}
          </p>
          <p
            className={`box-border [font-family:Inter] text-sm md:text-[17px] font-medium leading-6 text-[#505050] mt-3.5`}
          >
            {description}`
          </p>
        </div>
      </div>
    );
  };
  export default Card;
  