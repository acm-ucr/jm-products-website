"use client";
import formbricks from "@formbricks/js/website";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const FormbricksProvider = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      formbricks.init({
        environmentId: process.env.NEXT_PUBLIC_ENVIRONMENT_ID,
        apiHost: process.env.NEXT_PUBLIC_API_HOST,
      });
    }
  }, []);

  useEffect(() => {
    formbricks?.registerRouteChange();
  }, [pathname, searchParams]);

  return null;
};
export default FormbricksProvider;
