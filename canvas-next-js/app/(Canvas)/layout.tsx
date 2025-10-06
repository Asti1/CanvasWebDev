import { ReactNode } from "react";
import CanvasNavigation from "./Navigation";
import "./styles.css";
export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz">
      <div className="d-flex">
        <div>
          <CanvasNavigation />
        </div>

        <div className="wd-main-content-offset p3 flex-fill">{children}</div>
      </div>
    </div>
  );
}
