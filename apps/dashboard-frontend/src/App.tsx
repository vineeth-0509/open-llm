import type { App } from "app";
import "./index.css";
import { treaty } from "@elysiajs/eden";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { Credits } from "./pages/Credits";
import { ApiKeys } from "./pages/ApiKeys";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ElysiaClientContextProvider } from "./providers/Eden";
import { createContext, useContext } from "react";
import { Landing } from "./pages/LandingPage";

export const client = treaty<App>('localhost:3000',{
  fetch:{
    credentials: "include"
  }
});
const queryClient = new QueryClient();

export function App() {
  // const client = treaty<App>("localhost:3000");

  // function signin() {
  //   client.auth["sign-in"]
  //     .post({ email: "newemail@gmail.com", password: "newpassword" })
  //     .then((result) => {
  //       if (result.status == 200) {
  //         const data = result.data;
  //       }
  //     });
  // }

  return (
  <div>
    <QueryClientProvider client={queryClient}>
    <ElysiaClientContextProvider value={client}>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Landing/>}/>
      <Route path={"/signup"} element={<Signup/>}/>
      <Route path={"/signin"} element={<Signin/>}/>
      <Route path={"/dashboard"} element={<Dashboard/>}/>
      <Route path={"/credits"} element={<Credits/>}/>
      <Route path={"/apikeys"} element={<ApiKeys/>}/>
    </Routes>
    </BrowserRouter>
    </ElysiaClientContextProvider>
    </QueryClientProvider>
  </div>
  )
  ;
}

export default App;
