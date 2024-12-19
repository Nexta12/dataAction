
import SimpleChart from "./components/BarChart";
import Cards from "./components/Cards";
import PaymentTable from "../paymentsList/PaymentTable";

const Dashboard = () => {

  return (
    <div className="">
      <div className="top flex flex-col lg:flex-row  gap-4">
        <div className="flex-1 w-full grid grid-cols-2 gap-4">
          <Cards title="Total Sales" text="+3 new" count="124" />
          <Cards title="Total Download" text="+3 new" count="48" />
          <Cards title="Total Upload" text="+3 new" count="48" link="/" />
          <Cards title="Total Requests" text="+3 new" count="48" link="/" />
        </div>
        <div className=" flex-1 w-full my-10 lg:my-0">
          <SimpleChart />
        </div>
      </div>
      <div className="bottom py-4">
        <PaymentTable/>
      </div>
    </div>
  );
};

export default Dashboard;
