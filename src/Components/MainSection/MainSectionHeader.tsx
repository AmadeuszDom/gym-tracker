interface Props {
  username?: string;
}

function MainSectionHeader({ username }: Props) {
  return (
    <div id="header" className=" p-4 rounded-lg bg-[#2a2a3a]">
      <h1 className="font-bold text-2xl mb-2.5">Welcome back, {username}!</h1>
      <p>Here's how you training week is looking</p>
    </div>
  );
}

export default MainSectionHeader;
