import FormSupport from "@/components/FormSupport";
import GoogleMap from "@/components/GoogleMap";
import React from "react";

const CustomerCare = () => {
  return (
    <div className="flex container justify-center gap-4 py-10 max-lg:flex-col text-black">
      <div className="flex-1 text-inherit">
        <FormSupport />
      </div>
      <div className="flex-1">
        <GoogleMap />
      </div>
    </div>
  );
};

export default CustomerCare;
