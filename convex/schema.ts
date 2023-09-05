import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  todo: defineTable({
    title: v.string(),
    body: v.string(),
    priority: v.boolean(),
    date: v.string(),
  }),
});
