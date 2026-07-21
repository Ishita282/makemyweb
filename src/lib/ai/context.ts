import { webbyKnowledge } from "@/src/data/webbyKnowledge";

export function buildContext(question: string) {
  const q = question.toLowerCase();

  if (q.includes("project")) {
    return JSON.stringify(webbyKnowledge.projects);
  }

  if (q.includes("service")) {
    return JSON.stringify(webbyKnowledge.services);
  }

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("phone") ||
    q.includes("whatsapp")
  ) {
    return JSON.stringify(webbyKnowledge.company);
  }

  if (
    q.includes("price") ||
    q.includes("cost")
  ) {
    return JSON.stringify(webbyKnowledge.pricing);
  }

  if (
    q.includes("technology") ||
    q.includes("stack")
  ) {
    return JSON.stringify(webbyKnowledge.technologies);
  }

  if (
    q.includes("faq") ||
    q.includes("question")
  ) {
    return JSON.stringify(webbyKnowledge.faq);
  }

  return JSON.stringify(webbyKnowledge);
}
