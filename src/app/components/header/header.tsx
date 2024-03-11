import Image from "next/image";
import vector45 from "../../assets/Vector 45.svg";
import vector46 from "../../assets/Vector 46.svg";
import vector47 from "../../assets/Vector 47.svg";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className="header">
        <Image
          className={style.vector45}
          src={vector45}
          alt="vector"
          layout="intrinsic"
        />
        <Image
          className={style.vector47}
          src={vector47}
          alt="vector"
          layout="intrinsic"
        />
        <Image
          className={style.vector46}
          src={vector46}
          alt="vector"
          layout="intrinsic"
        />
      
    </header>

    // <div className={style.div1}>
    //   <Image src={vector45} alt="vector" layout="intrinsic" />
    // </div>
    // <Image src={vector46} alt="vector" layout="intrinsic" />
    // <div className={style.div2}>
    //   <Image
    //     className={style.vector47}
    //     src={vector47}
    //     alt="vector"
    //     layout="intrinsic"
    //   />
    // </div>
  );
};

export default Header;
