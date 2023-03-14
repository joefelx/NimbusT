import { HiTemplate, HiCalendar, HiAnnotation } from "react-icons/hi";

function Features() {
  const FeatureBox = ({ text, subtext, iconName }) => {
    return (
      <div className="flex-1 m-3 p-5 bg-white text-black border-4 border-gray-300 rounded-3xl cursor-pointer">
        <section className="flex items-center text-2xl">
          {iconName}
          <h2 className="ml-4">{text}</h2>
        </section>
        <p>{subtext}</p>
      </div>
    );
  };
  return (
    <div className=" bg-black text-white p-10 z-[100]">
      <div className="flex">
        <FeatureBox
          text="Make Threads"
          subtext="Threads are made easy with nice editor."
          iconName={<HiAnnotation />}
        />
        <FeatureBox
          text="Professional Templates"
          subtext="New and Professional Templates for Creators."
          iconName={<HiTemplate />}
        />
        <FeatureBox
          text="Schedule it"
          subtext="Write once and Schedule it."
          iconName={<HiCalendar />}
        />
      </div>
    </div>
  );
}

export default Features;
