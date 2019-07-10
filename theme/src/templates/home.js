import React from "react";
import Sidebar from "../components/sidebar";
import PostsFeed from "../components/postFeed";

export default function Home() {
  return (
    <div>
      <PostsFeed />
      <Sidebar />
    </div>
  );
}
