"use client";
import React from "react";
import ChartOne from "../Charts/SaleMonth";
import ChartThree from "../Charts/ExpensePie";
import ChartTwo from "../Charts/SaleDaily";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/ProductTable";
import CardDataStats from "../CardDataStats";
import { Avatar } from "primereact/avatar";
import AttachMoneySharpIcon from "@mui/icons-material/AttachMoneySharp";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PaymentsSharpIcon from "@mui/icons-material/PaymentsSharp";
import ReceiptLongSharpIcon from "@mui/icons-material/ReceiptLongSharp";
import MoneyOffSharpIcon from "@mui/icons-material/MoneyOffSharp";
import TrendingUpSharpIcon from "@mui/icons-material/TrendingUpSharp";
import { Card } from "primereact/card";
import dynamic from "next/dynamic";
import { Button } from "primereact/button";
import Link from "next/link";
import Image from "next/image";
import MonthExpenses from "../Charts/MonthExpenses";
import IncomeCard from "../Chat/IncomeCard";
import Revenue from "../Chat/Revenue";
// const MapOne = dynamic(() => import("../Maps/MapOne"), {
//   ssr: false,
// });

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="flex gap-5">
        <div className="w-full max-w-[300px] ">
          <Card className="h-full !pb-1 !pt-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-lg font-semibold">Welcome John! 🥳</h1>
                <p className="">Best seller of the month</p>

                <h2 className="my-3 text-2xl font-bold">$42.1k</h2>
                <Link
                  href="/sales"
                  className="p-button block w-fit rounded-md bg-slate-900 px-7 text-center text-white shadow-default"
                >
                  view sales
                </Link>
              </div>

              <Image
                src="/images/trophy.png"
                width={70}
                height={70}
                alt="welcome exteemed client"
              />
            </div>
          </Card>
        </div>
        <div className="w-full flex-grow">
          <Card>
            <h1 className="text-2xl font-semibold">Today Statistic Card</h1>
            <p className=" mb-5 mt-3">
              <span className="font-semibold text-black/50">
                Total 48.5% growth{" "}
              </span>{" "}
              😎 this month
            </p>
            <div className="grid grid-cols-3 gap-3">
              <CardDataStats title="Sales" total="3.45K" rate="0.43%" levelUp>
                <Avatar icon="pi pi-dollar"></Avatar>
              </CardDataStats>
              <CardDataStats title="Profit" total="45.2K" rate="4.35%" levelUp>
                <Avatar icon="pi pi-wallet"></Avatar>
              </CardDataStats>

              <CardDataStats
                title="Expenses"
                total="2.450"
                rate="2.59%"
                levelUp
              >
                <Avatar icon="pi pi-cart-arrow-down"></Avatar>
              </CardDataStats>

              {/* <CardDataStats title="worth" total="3.456" rate="0.95%" levelDown>
                <Avatar icon="pi pi-receipt"></Avatar>
              </CardDataStats>
              */}
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MonthExpenses />
        <div className="col-span-12">
          <TableOne />
        </div>
        <ChatCard />
        <IncomeCard />
        <Revenue />
      </div>
    </>
  );
};

export default ECommerce;
