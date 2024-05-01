import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/react";


const Expense = [
  {
    id: "/images/user/user-01.png",
    type: "Restock",
    desc: "Restock",
    amount: 1200,
    date: "12-10-2002",
  },
  {
    id: "/images/user/user-01.png",
    type: "Business Expenses",
    desc: "Restock",
    amount: 1200,
    date: "12-10-2002",
  },
  {
    id: "/images/user/user-01.png",
    type: "Other",
    desc: "Restock",
    amount: 1200,
    date: "12-10-2002",
  },
  {
    id: "/images/user/user-01.png",
    type: "Restock",
    desc: "Restock",
    amount: 1200,
    date: "12-10-2002",
  },
];

const Revenue = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="flex justify-between items-center px-2">
        <h4 className=" px-7.5 text-xl font-semibold text-black dark:text-white">
        Revenue
      </h4>
      <Link href="/">
        <Button variant="light" color="primary" className="font-semibold ">view all</Button>
      </Link>
      </div>

      <div className="mx-3">
        {Expense.map((exp) => (
          <Link
            href="/"
            className="flex items-center gap-5 px-7.5 py-3 hover:bg-gray-3 dark:hover:bg-meta-4"
            key={exp.id}
          >

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-semibold  text-black dark:text-white">
                  {exp.type}
                </h5>
                <p>
                  <span className="text-sm text-black dark:text-white">
                    {exp.date}
                  </span>
                  
                </p>
              </div>
              <h2 className="font-bold">$
                {
                  exp.amount
                }
              </h2>
                </div>
          
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Revenue;
