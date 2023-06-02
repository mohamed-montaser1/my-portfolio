function Footer() {
  return (
    <>
      <footer className="flex justify-center items-center text-slate-200 h-[100px] bg-[#19376D] mt-20 max-[792px]:mx-0 max-[792px]:px-3">
        <p className="text-slate-200 text-bold text-[20px] max-[792px]:text-[15px]">
          Made By Mohamed Montaser ©️ 2023 - {new Date().getFullYear()} ❤️
        </p>
      </footer>
    </>
  );
}

export default Footer;
