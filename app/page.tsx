"use client"

import { useEffect } from "react";
import 'remixicon/fonts/remixicon.css'
import api from "./services/api";

export default function Home() {

  useEffect(() => {
    async function loadRole() {
    try {
      const response = await api.get("/v1/role/list", {
        // params: {
        //   page: 1,
        //   search: "KEYWORD",
        //   size: 1000,
        // },
      });
      console.log(response, 'response')
    } catch (error) {
        console.log("Error load data", error);
      }
    }
    loadRole();
  });


  return (
    <main className="flex min-h-screen flex-col">
      <p className="mb-2 font-bold">DASHBOARD</p>
    </main>
  );
}
