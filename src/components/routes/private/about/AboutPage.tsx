import React, { useState, useEffect } from "react";
import GeneralLoader from "../../../../shared/Loader/GeneralLoader";

export default function AboutPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="full-height-container">
      {loading ? <GeneralLoader /> : <div>AboutPage</div>}
    </div>
  );
}