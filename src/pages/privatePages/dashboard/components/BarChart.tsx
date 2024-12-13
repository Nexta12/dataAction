import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SimpleChart = () => {
  const data = [
    {
      name: "Mon",
      Downloads: 4000,
      Sales: 2400,
    },
    {
      name: "Tue",
      Downloads: 3000,
      Sales: 1398,
    },
    {
      name: "Wed",
      Downloads: 2000,
      Sales: 9800,
    },
    {
      name: "Thurs",
      Downloads: 2780,
      Sales: 3908,
    },
    {
      name: "Sat",
      Downloads: 1890,
      Sales: 4800,
    },
    {
      name: "Sun",
      Downloads: 2390,
      Sales: 3800,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%" className="h-full">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="Sales"
          fill="#F9A205"
          activeBar={<Rectangle fill="pink" />}
          barSize={10}
          stroke="none"
        />
        <Bar
          dataKey="Downloads"
          fill="#1349A5"
          activeBar={<Rectangle fill="gold" />}
          barSize={10}
          stroke="none"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleChart;
