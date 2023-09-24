import React from "react";
import { GrAchievement } from "react-icons/gr";
import {RiAdminLine} from "react-icons/ri";
import {HiOutlineDocumentAdd} from "react-icons/hi";
import {BsPersonPlus} from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdOutlineLeaderboard } from "react-icons/md";

const AdminQuickLinkdiv = () => {
  return (
    <>
      <div className="min-w-screen flex items-center justify-center">
        <div className="max-w-7xl w-full mx-auto py-6 sm:px-6 ">
          <div className="flex flex-col w-full space-y-4 mb-2 ">
            <DashboardWidget
              color="purple"
              icon={<BsPersonPlus/>}
              title="Sales"
              value="Add Executive"
              subtitle="Add A New Executive"
              link="/admin/executives/create"
            />
            <DashboardWidget
              color="blue"
              icon={<MdOutlineLeaderboard/>}
              title="Customers"
              value="Competitions"
              link="/admin/competitions/create"
              subtitle="Add A Competition"
            />
            <DashboardWidget
              color="yellow"
              icon={<HiOutlineDocumentAdd/>}
              title="Products"
              value="Create Blog"
              link="/admin/blogs/create"
              subtitle="Post A New Blog"
            />
            <DashboardWidget
              color="red"
              icon={<RiAdminLine/>}
              title="Orders"
              value="Add Admin"
              link="/admin/add"
              subtitle="Add A New Admin"
            />
            <DashboardWidget
              color="green"
              icon={<GrAchievement />}
              link="/admin/achievements/create"
              title="Revenue"
              value="Add Achievement"
              subtitle="Add A New Achievement"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const DashboardWidget = ({ color, icon, title, value, subtitle, link }) => {
  return (
    <Link className="w-full" to={link}>
      <div
        className={`widget w-full p-4 rounded-lg bg-white border-l-4 border-${color}-400`}
      >
        <div className="flex items-center">
          <div
            className={`icon text-xl p-3.5 bg-${color}-400 text-black  rounded-full mr-3`}
          >
            {icon}
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-lg">{value}</div>
            <div className="text-sm text-gray-400">{subtitle}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AdminQuickLinkdiv;
