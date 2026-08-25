import { NextResponse } from "next/server";
import { reportFailedLogin } from "microgaze";

const siemConfig = {
  apiKey: process.env.MINI_SIEM_API_KEY || "",
  siemUrl: process.env.MINI_SIEM_URL || "https://microgaze.vercel.app",
};

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { username, password } = body;

    // Authentication Check:
    // Valid credentials demo: admin / SuperSecret123!
    if (username === "admin" && password === "SuperSecret123!") {
      return NextResponse.json({ success: true, message: "Login successful!" });
    }

    // Report Failed Authentication to Mini-SIEM Tracker
    const result = await reportFailedLogin(req, siemConfig, {
      username: username || "unknown",
      reason: "Invalid username or password",
    });

    if (result.isBlocked) {
      return NextResponse.json(
        {
          error: "Forbidden",
          message: "Your IP has been blocked by Mini-SIEM due to excessive failed login attempts.",
          accumulatedScore: result.currentScore,
        },
        { status: 403 }
      );
    }

    return NextResponse.json(
      {
        error: "Unauthorized",
        message: "Invalid username or password.",
        attemptsInWindow: result.eventCount,
        accumulatedScore: result.currentScore,
        status: result.action,
      },
      { status: 401 }
    );
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
