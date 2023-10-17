import { LicenseInfo } from "@mui/x-license-pro";

import App from "App";
import { createRoot } from "react-dom/client";
import "./index.css";

LicenseInfo.setLicenseKey(process.env.REACT_APP_MUIX_LICENSE_KEY ?? "REACT_APP_MUIX_LICENSE_KEY");

const container = document.getElementById("root") as HTMLAnchorElement;
const root = createRoot(container);
if (document.getElementById("root")) {
    root.render(<App />);
}
