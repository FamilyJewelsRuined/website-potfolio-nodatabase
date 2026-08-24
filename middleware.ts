import { withMiniSIEM } from "microgaze";

export default withMiniSIEM({
  apiKey: process.env.MINISIEM_API_KEY!,
  siemUrl: process.env.MINISIEM_URL!,
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};