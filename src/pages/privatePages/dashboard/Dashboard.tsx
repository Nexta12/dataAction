import Table, { Column } from "@components/table/Table";
import SimpleChart from "./components/BarChart";
import Cards from "./components/Cards";
import SubHeading from "@components/subHeading/SubHeading";


const Dashboard = () => {

   const data = [
      {
        date: "2024-12-01",
        paymentId: "PID12345",
        nameEmail: "Alice - alice@example.com",
        dashboardId: "DID001",
        category: "Software",
        amount: "$100",
        pricingTier: "Pro",
        fileAccess: "Enabled",
        actions: "View Details",
      },
      {
        date: "2024-12-02",
        paymentId: "PID12346",
        nameEmail: "Bob - bob@example.com",
        dashboardId: "DID002",
        category: "Hardware",
        amount: "$200",
        pricingTier: "Enterprise",
        fileAccess: "Disabled",
        actions: "Edit Details",
      },
    ];

    const columns: Column<typeof data[0]>[] = [
      { key: "date", header: "Date" },
      { key: "paymentId", header: "Payment ID" },
      { key: "nameEmail", header: "Name/Email" },
      { key: "dashboardId", header: "Dashboard ID" },
      { key: "category", header: "Category" },
      { key: "amount", header: "Amount" },
      { key: "pricingTier", header: "Pricing Tier" },
      { key: "fileAccess", header: "File Access" },
      {
        key: "actions",
        header: "Actions",
        render: (value, row) => (
          <button
            onClick={() => alert(`Action clicked for ${row.nameEmail}`)}
            className="action-button"
          >
            {value}
          </button>
        ),
      },
    ];

    const keyExtractor = (row: typeof data[0]) => row.paymentId;
    
 
  return (
     <div className="">
         <div className="top flex flex-col lg:flex-row  gap-4">
            <div className="flex-1 w-full grid grid-cols-2 gap-4">
               <Cards title="Total Sales" text="+3 new" count="124"/>
               <Cards title="Total Download" text="+3 new" count="48"/>
               <Cards title="Total Upload" text="+3 new" count="48" link="/"/>
               <Cards title="Total Requests" text="+3 new" count="48" link="/"/>
            </div>
            <div className=" flex-1 w-full my-10 lg:my-0">
               <SimpleChart/>
            </div>
         </div>
         <div className="bottom py-4">
            <SubHeading>Payment Table</SubHeading>
        
         <Table data={data} columns={columns} keyExtractor={keyExtractor} />
         </div>
     </div>
   
  );
};

export default Dashboard;
