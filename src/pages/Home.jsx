import Blogs from "../components/Home/BlogsSec";
import Featured from "../components/Home/FeaturedSec";
import Category from "../components/Home/CategorySec";
import Main from "../components/Home/Main";
import MrqueeSec from "../components/Home/MrqueeSec";
import SpecialSec from "../components/Home/SpecialSec";
import Popular from "../components/Home/PopularSec";

const Home = () => {
  return (
    <div>
      <Main />
      <div className="w-full h-full bg-[#f5f5f7] my-16">
        <Category />
        <Featured />
        <SpecialSec />
        <Popular />
        <MrqueeSec />
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
