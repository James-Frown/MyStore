"use client";

import { useRouter } from "next/router";

export default function ErrorPage() {
  const router = useRouter();
  function handleReload() {
    router.reload();
  }
  return (
    <>
      <div>
        <div>Something Went Wrong, Please Reload The Page!</div>
        <button className={"btn btn-error p-4"} onClick={handleReload}> Reload </button>
      </div>
    </>
  );
}
