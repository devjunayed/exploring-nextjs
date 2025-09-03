import React, { Suspense } from "react";
import CardOne from "./_components/CardOne";
import CardTwo from "./_components/CardTwo";
import CardLoading from "@/components/Loading/CardLoading";
import ErrorBoundary from "../../../utils/ErrorBoundary";
import CardError from "@/components/CardError/CardError";

const SuspensePage = () => {
  return (
    <div className="flex gap-4">
      <Suspense fallback={<CardLoading text="Loading Card one ..." />}>
        <CardOne />
      </Suspense>
      <ErrorBoundary fallback={<CardError text="Error From Card Two" />}>
        <CardTwo />
      </ErrorBoundary>
    </div>
  );
};

export default SuspensePage;
