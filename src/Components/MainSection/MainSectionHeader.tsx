interface Props {
  username?: string;
}

function MainSectionHeader({ username }: Props) {
  return (
    <div id="header" className="p-4 px-20 rounded-lg ">
      <h1 className="font-bold text-2xl mb-2.5">
        Welcome back,{" "}
        <span className="bg-linear-to-r from-[#E8793B] to-[#F4A261] text-transparent bg-clip-text">
          {username}
        </span>
        !
      </h1>
      <p>Here's how you training week is looking</p>
    </div>
  );
}

export default MainSectionHeader;
