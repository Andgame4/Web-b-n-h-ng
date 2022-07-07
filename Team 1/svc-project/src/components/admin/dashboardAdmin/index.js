import React, { Fragment, createContext, useReducer } from "react";
import AdminLayout from "../layout";
import DashboardCard from "./DashboardCard";
import Customize from "./Customize";
import { dashboardState, dashboardReducer } from "./DashboardContext";
import TodaySell from "./TodaySell";
import { ChartDemo } from "./ChartDemo";
import HomeChart from "./HomeChart";
export const DashboardContext = createContext();

const DashboardComponent = () => {
  return (
    <Fragment  >
      <DashboardCard />
     
      <HomeChart />

    </Fragment>
  );
};

const DashboardAdmin = (props) => {
  const [data, dispatch] = useReducer(dashboardReducer, dashboardState);
  return (
    <Fragment>
      <DashboardContext.Provider value={{ data, dispatch }}>
        <AdminLayout children={<DashboardComponent />} />
      </DashboardContext.Provider>
    </Fragment>
  );
};

export default DashboardAdmin;
