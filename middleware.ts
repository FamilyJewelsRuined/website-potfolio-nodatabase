import { withMiniSIEM } from "microgaze";

export default withMiniSIEM({
  apiKey: process.env.MINI_SIEM_API_KEY!,
  siemUrl: process.env.MINI_SIEM_URL!,
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};