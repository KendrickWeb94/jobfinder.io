/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const People = (props) => {
  return (
    <div className=" max-w-[800px] mx-auto smooth">
      <figure className="md:flex  plus smooth bg-slate-100 rounded-xl p-8 md:p-0 bg-gradient-to-r hover: from-blue-800 to-blue-950">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-l-sm  rounded-full  mx-auto object-cover"
          src={props.profileimg}
          alt=""
          width="684"
          height="512"
        />
        <div className="pt-6 my-auto plus md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-base my-auto plus font-light">{props.review}</p>
          </blockquote>
          <figcaption className="font-medium space-y-4">
            <div className="text-sky-500 plus dark:text-sky-400">{props.name}</div>
            <div className="text-slate-700 plus dark:text-slate-500">
              {props.date}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default People;
