/* eslint-disable react/prop-types */


const NavItems = (props) => {
  return (
    <div>
      <li className=" p-1 plus text-sm font-normal  plus relative after:w-0 after:h-5 after:absolute after:bottom-0 after smooth hover:gradient-t bg-clip-text hover:text-transparent after:hover:w-[80%] after:left-1 after:border-b after:border-blue-400 after:smooth text-zinc-400 ">
        <a href="#">{props.link}</a>
      </li>
    </div>
  );
}

export default NavItems;
