import { ReactNode } from "react";
import CanvasNavigation from "./Navigation";
export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <table>
      <tbody>
        <tr>
          <td valign="top" width="200">
            {" "}
            <CanvasNavigation />{" "}
          </td>
          <td valign="top" width="100%">
            {" "}
            {children}{" "}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
