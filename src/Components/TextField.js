import "../styles/Home.module.css";

function TextField() {
  return (
    <div>
      <div>
        <textarea
          placeholder="Write the thread that makes fires"
          className="w-[50vw] h-[50vh] text-white bg-black placeholder:text-white m-5"
        ></textarea>
      </div>
    </div>
  );
}

export default TextField;
