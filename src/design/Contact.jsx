import {
  FacebookFilled,
  GithubFilled,
  SendOutlined,
  TwitterCircleFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";


const Contact = () => {
  return (
    <>
      <div className="w-full smooth flex-center plus">
        <div className=" flex lg:flex-row flex-col items-center ds:-space-y-6 lg:-space-y-0 lg:-space-x-6 justify-center">
          <div className="info h-[350px] w-full relative pl-14 z-50  rounded-l-md p-8  bg-zinc-800  ">
          
            <h1 className="plus text-2xl  font-bold">Contact</h1>
            <div className=" pt-12  space-y-4">
              <span className="w-14 h-1 rounded-lg bg-blue-500 block"></span>
              <p className="plus text-xs text-zinc-400 leading-6">
                Any Questions Or Complaints , You can message Us Directly , Our
                Reply ranges from a span of 30 minutes or less
              </p>
            </div>
            <div className="absolute cursor-pointer ds:text-xs md:text-xl py-7 bottom-0 flex gap-6 items-center justify-center">
              <GithubFilled />
              <FacebookFilled />
              <WhatsAppOutlined />
              <TwitterCircleFilled />
          
            </div>
          </div>
          <div className="info h-[350px] rounded-md p-5 plus from-blue-700 bg-gradient-to-r   to-blue-950 smooth w-full">
            <form action="#" className="px-8 p-5 space-y-10 pl-10">
              <div className="box__container plus flex flex-col   space-y-3">
                <label htmlFor="name" className=" plus text-sm text-zinc-400">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Tory George"
                  className=" text-sm  focus:bg-black/25 smooth placeholder:text-xs placeholder:plus placeholder:text-zinc-600 w-full p-2 rounded-md backdrop-blur-sm bg-black/15 outline-none"
                />
              </div>
              <div className="box__container plus flex flex-col   space-y-2">
                <label
                  htmlFor="message"
                  className=" plus text-sm text-zinc-400"
                >
                  Your Message
                </label>
                <textarea
                  type="text"
                  placeholder="Hey i want to ask a question"
                  className=" text-sm placeholder:text-xs placeholder:plus placeholder:text-zinc-600 w-full p-2 rounded-md backdrop-blur-sm focus:bg-black/25 smooth bg-black/15 outline-none"
                />
              </div>
              <div className="text-right">
                <button className="p-2 smooth hover:opacity-100 opacity-75 bg-white px-4 text-blue-950 text-xs plus flex  justify-center gap-3 font-semibold rounded-3xl">
                  <SendOutlined className=" -rotate-45" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
