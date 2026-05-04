import Featured from "@/components/featured/Featured";
import Banner from "@/components/homepage/Banner";
import QurbaniTips from "@/components/homepage/QurbaniTips";


export default function Home() {
  return (
    <div className="">
      <Banner/>
      <Featured/>
      <QurbaniTips/>
    </div>
  );
}
