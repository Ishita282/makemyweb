import { NextRequest, NextResponse } from "next/server";

import { askAI } from "@/src/lib/ai/provider";
import { ChatRequest } from "@/src/lib/ai/types";

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();

    if (!body.message?.trim()) {
      return NextResponse.json(
        {
          success: false,
          reply: "Message is required.",
        },
        {
          status: 400,
        }
      );
    }

    console.log("Incoming Request:", {
      message: body.message,
      currentPage: body.currentPage,
      historyLength: body.history?.length ?? 0,
    });

    const reply = await askAI(
      body.message,
      body.history ?? [],
      body.currentPage
    );

    console.log("AI Reply:", reply);

    return NextResponse.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error("========== API ERROR ==========");

    if (error instanceof Error) {
      console.error("Message:", error.message);
      console.error("Stack:", error.stack);
    } else {
      console.error(error);
    }

    return NextResponse.json(
      {
        success: false,
        reply: "Sorry, something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}
